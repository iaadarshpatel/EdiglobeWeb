import React from 'react';

const AllprojectLinks = ({ allDownloadURL }) => {
  return (
    <div>
      {/* Render the links as needed */}
      <ul>
        {allDownloadURL.map((url, index) => (
          <li key={index}><a href={url}>Download File {index + 1}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default AllprojectLinks;
