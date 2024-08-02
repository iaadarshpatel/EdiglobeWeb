import React from 'react';
import { Link } from 'react-router-dom';

const AllprojectLinks = ({ allDownloadURL }) => {
  return (
    <div>
      {/* Render the links as needed */}
      <ul>
        {allDownloadURL.map((url, index) => (
          <li key={index}><Link to={url}>Download File {index + 1}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default AllprojectLinks;
