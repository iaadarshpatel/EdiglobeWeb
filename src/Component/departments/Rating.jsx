import React from 'react';

const Rating = ( {color = "#FFD700"}) => {
  const starStyle = {
    color: color,
    display: 'inline', 
    fontSize: '16px', 
    padding: '5px',
  };
  const halfStyle = {
    color: 'white',
    display: 'inline', 
    fontSize: '16px', 
    padding: '5px'
  }

  return (
    <>
    <span class="fa fa-star checked" style={starStyle}></span>
    <span class="fa fa-star checked" style={starStyle}></span>
    <span class="fa fa-star checked" style={starStyle}></span>
    <span class="fa fa-star checked" style={starStyle}></span>
    <span class="fa fa-star checked" style={starStyle}></span>
    </>
  );
}

export default Rating;
