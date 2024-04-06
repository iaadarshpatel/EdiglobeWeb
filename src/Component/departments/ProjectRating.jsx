import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectRating = ({ color = "#FFD700" }) => {
  const [starCount, setStarCount] = useState(0);
  const [load, setLoad] = useState(true);
  const [count, setCount] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://sheetdb.io/api/v1/lvaph4ho3lol6");
        setCount(response.data);
      } catch (error) {
        setLoad(error.message);
      } finally {
        setLoad(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Update star count based on the "Rating1" value from the API data
    if (count && count.length > 0) {
      // Calculate the total sum of Rating1 values
      const totalRating = count.reduce((acc, item) => acc + parseInt(item.Rating1), 0);
      // Calculate the average Rating1 value
      const averageRating = Math.round(totalRating / count.length);
      // Set the star count to the average Rating1 value
      setStarCount(averageRating);
    }
  }, [count]);

  const handleStarClick = (clickedStarCount) => {
    setStarCount(clickedStarCount);
  };

  return (
    <div>
      {Array.from({ length: starCount }, (_, index) => {
        const starClass = index < starCount ? "fa fa-star checked" : "fa fa-star";
        return (
          <span
            key={index}
            className={starClass}
            style={{ color, display: 'inline', fontSize: '16px', padding: '5px' }}
            onClick={() => handleStarClick(index + 1)}>
          </span>
        );
      })}
    </div>
  );
};

export default ProjectRating;
