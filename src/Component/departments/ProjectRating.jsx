import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectRating = ({ rating, color = "#FFD700" }) => {
  const [starCount, setStarCount] = useState(5);
  const [count, setCount] = useState('5'); 
  console.log(count);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const apiData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_PROJECT_DATA);
        setCount(response.data);
      } catch (error) {
        setLoad(error.message);
      } finally {
        setLoad(false);
      }
    };
    apiData();
  }, []);

  useEffect(() => {
    // Update the star count when the rating prop changes
    setStarCount(rating);
  }, [rating]);

  const starStyle = {
    color: color,
    display: 'inline',
    fontSize: '16px',
    padding: '5px',
  };

  // Updated renderStars to use count state
  const renderStars = () => {
    return Array.from({ length: count }, (_, index) => {
      const starClass = index < starCount ? "fa fa-star checked" : "fa fa-star";
      return (
        <span
          key={index}
          className={starClass}
          style={starStyle}
          onClick={() => handleStarClick(index + 1)}>
        
        </span>
      );
    });
  };

  // Function to handle star click
  const handleStarClick = (clickedStarCount) => {
    setStarCount(clickedStarCount); // Update star count
  };

  return (
    <div>
      {renderStars()}
    </div>
  );
};

export default ProjectRating;
