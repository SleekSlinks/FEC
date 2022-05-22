// Dependency imports
import React, { useState, useEffect, useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import styled from 'styled-components';
import axios from 'axios';
import { serverURL } from '../../config.js';

// STAR RATING
export default function StarRating({ product }) {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const getReviewMetaData = async id => {
      await axios
        .get(`${serverURL}/reviews/meta`, {
          params: {
            product_id: id,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(res => res.data.ratings)
        .then(ratings => getAverageRating(ratings))
        .then(avgRating => setAverageRating(avgRating))
        .catch(err => console.log(err));
    };

    if (product !== undefined) {
      getReviewMetaData(product.id);
    }
  }, []);

  const getAverageRating = ratings => {
    const ratingsArr = [...Object.values(ratings)];
    const totalRatings = ratingsArr.reduce(addNumRatings);
    const averageRating = totalRatings / 5;
    return averageRating;
  };

  const addNumRatings = (acc, next) => {
    return Number(acc) + Number(next);
  };

  // JSX
  return (
    <Stars className='star-rating'>
      <Rating
        name='read-only'
        value={averageRating}
        precision={0.25}
        max={5}
        size='small'
        readOnly
      />
    </Stars>
  );
}

const Stars = styled.span`
  position: absolute;
  bottom: 0;
`;
