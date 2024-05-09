import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectRating = ({ projectName, color = "#FFD700" }) => {
  const [starCount, setStarCount] = useState(0);
  const [load, setLoad] = useState(true);
  const [ratingData, setRatingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://script.google.com/macros/s/AKfycbxdDyMSUlLPRPtoBNSri1US3Vko2LXxDJOOlMNTf2BACyGcggPYm_CfFuDcOCtn5XQiag/exec?action=getUsers");
        setRatingData(response.data);
      } catch (error) {
        setLoad(error.message);
      } finally {
        setLoad(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Find the rating data for the specific project
    const projectRating = ratingData.find(item => item.project_name1 === projectName);

    if (projectRating) {
      // Update star count based on the "Rating1" value for the specific project
      const ratingValue = parseInt(projectRating.Rating1) || 0;
      setStarCount(ratingValue);
    }
  }, [ratingData, projectName]);

  const handleStarClick = (clickedStarCount) => {
    setStarCount(clickedStarCount);

  };

  const data = 1;

  return (
    <div>
      {Array.from({ length: data }, (_, index) => {
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
