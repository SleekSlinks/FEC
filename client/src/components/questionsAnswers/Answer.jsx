import React, { useState, useEffect, useContext, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Moment from 'react-moment';
import QuestionsContext from './QuestionsContext.js';
import { serverURL } from '../../config.js';

export default function Answer({ questionObj }) {
  // CONTEXT
  const { questionsData, setQuestionsData } = useContext(QuestionsContext);

  // STATE
  const [answerHelpfulTracker, setAnswerHelpfulTracker] = useState({});

  const [answerReportedTracker, setAnswerReportedTracker] = useState({});
  const [answers, setAnswers] = useState([]);

  const [showRemainderAnswers, setShowRemainderAnswers] = useState(false);

  // METHODS
  useEffect(() => {
    const abortCont = new AbortController();

    const getAnswers = async () => {
      try {
        const res = await axios.get(`${serverURL}/qa/question/answers`, {
          signal: abortCont.signal,
          params: {
            question_id: questionObj.question_id,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setAnswers(res.data);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          console.error(err);
        }
      }
    };
    getAnswers();

    return () => abortCont.abort();
  }, []);

  const increaseAnswerHelpfulCount = async (e, answerObj) => {
    e.preventDefault();
    try {
      const body = {};
      const res = await axios.put(`${serverURL}/qa/answer/helpful`, body, {
        params: {
          answer_id: answerObj.answer_id,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('ANS HELPFUL PUT RES: ', res);

      const keyId = answerObj.answer_id;
      const trackerCopy = Object.assign({}, answerHelpfulTracker);
      const questionsDataCopy = [...questionsData.results];
      let incrementedCount = answerObj.helpfulness + 1;
      for (let i = 0; i < questionsDataCopy.length; i++) {
        let question = questionsDataCopy[i];
        for (let key in question) {
          if (
            question[key] === questionObj.question_id &&
            !trackerCopy.hasOwnProperty([keyId])
          ) {
            answerObj.helpfulness = incrementedCount;
            trackerCopy[keyId] = 'Incremented';
          }
        }
      }
      setQuestionsData({
        product_id: questionsData.product_id,
        results: questionsDataCopy,
      });
      setAnswerHelpfulTracker(trackerCopy);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAnswerReported = async (e, answerObj) => {
    e.preventDefault();
    try {
      const body = {};
      const res = await axios.put(`${serverURL}/qa/answer/report`, body, {
        params: {
          answer_id: answerObj.answer_id,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('ANS REPORTED PUT RES: ', res);

      const keyId = answerObj.answer_id;
      const trackerCopy = Object.assign({}, answerReportedTracker);
      const questionsDataCopy = [...questionsData.results];
      for (let i = 0; i < questionsDataCopy.length; i++) {
        let question = questionsDataCopy[i];
        for (let key in question) {
          if (
            question[key] === questionObj.question_id &&
            !trackerCopy.hasOwnProperty([keyId])
          ) {
            trackerCopy[keyId] = 'Reported';
          }
        }
      }
      setQuestionsData({
        product_id: questionsData.product_id,
        results: questionsDataCopy,
      });
      setAnswerReportedTracker(trackerCopy);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSeeMoreAnswers = e => {
    e.preventDefault();
    if (showRemainderAnswers) {
      setShowRemainderAnswers(false);
    } else {
      setShowRemainderAnswers(true);
    }
  };

  // VARIABLES
  const sellerAnswers = answers?.results?.filter(
    answer => answer.answerer_name === 'Seller'
  );

  const orderedAnswers = answers?.results
    ?.sort((a, b) => b.helpfulness - a.helpfulness)
    ?.filter(answer => answer.answerer_name !== 'Seller');

  const finalAnswers = sellerAnswers?.concat(orderedAnswers);

  const initialFinalAnswers = finalAnswers?.slice(0, 2);

  const remainingFinalAnswers = finalAnswers?.slice(2);

  const initialMappedAnswers = initialFinalAnswers?.map(answer => (
    <AnswerPortion key={answer?.answer_id}>
      <AnswerHeader>
        <strong>A:</strong>
        <AnswerBodyContainer>
          <AnswerBody>{answer?.body}</AnswerBody>
          <AnswerDetails>
            <br />
            <span>
              by:{' '}
              {answer?.answerer_name === 'Seller' ? (
                <strong>{answer?.answerer_name}</strong>
              ) : (
                answer?.answerer_name
              )}
              ,{' '}
              <StyledMoment format='MMMM Do YYYY'>{answer?.date}</StyledMoment>{' '}
              | Helpful?{' '}
              <a href=''>
                <YesSec onClick={e => increaseAnswerHelpfulCount(e, answer)}>
                  Yes
                </YesSec>
              </a>{' '}
              ({answer?.helpfulness}) |{' '}
              <a href='' onClick={e => handleAnswerReported(e, answer)}>
                <ReportSec>
                  {answerReportedTracker[answer?.answer_id]
                    ? 'Reported'
                    : 'Report'}
                </ReportSec>
              </a>
            </span>

            {answer?.photos.length > 0 && (
              <PhotoContainer>
                <Photos>
                  {answer?.photos?.map(photo => {
                    const imageElem = photo.url.startsWith('https') ? (
                      <img
                        key={photo.id}
                        src={photo.url}
                        width='200'
                        height='200'
                        loading='lazy'
                      />
                    ) : (
                      <Fragment key={photo.url}>
                        <i>Image failed to load. </i>
                        <br />
                      </Fragment>
                    );
                    return imageElem;
                  })}
                </Photos>
              </PhotoContainer>
            )}
          </AnswerDetails>
        </AnswerBodyContainer>
      </AnswerHeader>
    </AnswerPortion>
  ));

  const remainingMappedAnswers = remainingFinalAnswers?.map(answer => (
    <AnswerPortion key={answer?.answer_id}>
      <AnswerHeader>
        <strong>A:</strong>
        <AnswerBodyContainer>
          <AnswerBody>{answer?.body}</AnswerBody>{' '}
          <AnswerDetails>
            <br />
            <span>
              by:{' '}
              {answer?.answerer_name === 'Seller' ? (
                <strong>{answer?.answerer_name}</strong>
              ) : (
                answer?.answerer_name
              )}
              ,{' '}
              <StyledMoment format='MMMM Do YYYY'>{answer?.date}</StyledMoment>{' '}
              | Helpful?{' '}
              <a href=''>
                <YesSec onClick={e => increaseAnswerHelpfulCount(e, answer)}>
                  Yes
                </YesSec>
              </a>{' '}
              ({answer?.helpfulness}) |{' '}
              <a href='' onClick={e => handleAnswerReported(e, answer)}>
                <ReportSec>
                  {answerReportedTracker[answer?.answer_id]
                    ? 'Reported'
                    : 'Report'}
                </ReportSec>
              </a>
            </span>

            {answer?.photos.length > 0 && (
              <PhotoContainer>
                <Photos>
                  {answer?.photos?.map(photo => {
                    const imageElem = photo.url.startsWith('https') ? (
                      <img
                        key={photo.id}
                        src={photo.url}
                        width='200'
                        height='200'
                        loading='lazy'
                      />
                    ) : (
                      <Fragment key={photo.url}>
                        <i>Image failed to load. </i>
                        <br />
                      </Fragment>
                    );
                    return imageElem;
                  })}
                </Photos>
              </PhotoContainer>
            )}
          </AnswerDetails>
        </AnswerBodyContainer>
      </AnswerHeader>
    </AnswerPortion>
  ));

  return (
    <Container>
      {initialMappedAnswers?.length === 0 ? (
        <i>No answers have been submitted.</i>
      ) : (
        initialMappedAnswers
      )}
      {showRemainderAnswers && remainingMappedAnswers}
      <Line />
      {remainingFinalAnswers?.length > 0 && (
        <CollapseBtn onClick={handleSeeMoreAnswers}>
          {showRemainderAnswers ? 'Collapse answers' : 'See more answers'}
        </CollapseBtn>
      )}
    </Container>
  );
}

const Container = styled.div`
  max-height: 20rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 10px;
  }
`;

const AnswerBodyContainer = styled.div`
  margin-left: 1rem;
`;

const AnswerPortion = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
`;

const AnswerHeader = styled.div`
  display: flex;
`;

const AnswerBody = styled.p`
  margin: 0;
`;

const AnswerDetails = styled.div`
  font-size: 1rem;
`;

const YesSec = styled.span`
  color: green;
`;

const ReportSec = styled.span`
  color: red;
`;

const PhotoContainer = styled.div``;

const Photos = styled.div`
  margin-top: .5rem;

  img {
    border-radius 10px;
    margin-right: 1rem;
  }
`;

const CollapseBtn = styled.button`
	padding: .5rem .75rem;
	border-radius 6px;
	border: none;
  background: #38062B;
	color: #fdf0d5;
	cursor: pointer;
`;

const StyledMoment = styled(Moment)`
  margin-left: 0.2rem;
`;

const Line = styled.hr`
  border: 1px solid #000;
  border-color: black;
`;
