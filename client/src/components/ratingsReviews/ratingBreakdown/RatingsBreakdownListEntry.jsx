import React from 'react';
import styled from 'styled-components';

const starBar = {
  height: '8px',
  marginLeft: '8px',
  marginRight: '10px',
  marginTop: '5px',
  width: '130px',
  border: 'none',
  backgroundColor: 'rgba(232, 232, 232, .8)',
};

const starBarFlex = {
  display: 'flex',
  marginBottom: '10px',
  paddingLeft: '7px',
  cursor: 'pointer',
};

const starFont = {
  fontSize: '12px',
  color: '#fdf0d5',
};

const starPercentage = (obj, key) => {
  if (obj) {
    let total = 0;
    for (const star in obj) {
      total += Number(obj[star]);
    }
    if (isNaN((Number(obj[key]) / total).toFixed(2))) {
      return 0;
    }
    return (Number(obj[key]) / total).toFixed(2) * 100;
  }
};

const RatingsBreakdownListEntry = ({
  rating,
  ratings,
  totalRating,
  sortByStar,
}) => (
  <div
    id={rating}
    aria-hidden='true'
    className='starBar'
    style={starBarFlex}
    onClick={sortByStar}
  >
    <u id={rating} style={starFont}>
      {`${rating} stars`}
    </u>

    <div id={rating} style={starBar}>
      <div
        style={{
          background: '#333baacc',
          height: '100%',
          borderRadius: 'inherit',
          width: `${
            starPercentage(ratings, rating)
              ? starPercentage(ratings, rating)
              : 0
          }%`,
        }}
      />
    </div>
    <div id={rating} style={starFont}>
      {totalRating}
    </div>
  </div>
);

export default RatingsBreakdownListEntry;
