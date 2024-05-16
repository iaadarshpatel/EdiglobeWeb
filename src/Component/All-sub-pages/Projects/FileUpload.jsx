import React, { useRef, useEffect, useState } from 'react';
import { MdCancel } from "react-icons/md";

const FileUpload = ({ selectedFile, handleFileChange, removeUpload, uploading, submitProject, progressPercent, uploadMessage }) => {
  const fileInputRef = useRef(null);
  const [showCancelIcon, setShowCancelIcon] = useState(true);
  const [disableProgressBar, setDisableProgressBar] = useState(false);

  useEffect(() => {
    // Reset showCancelIcon state when selectedFile changes
    setShowCancelIcon(true);
    // Enable progress bar initially
    setDisableProgressBar(false);
  }, [selectedFile]);

  const handleUploadClick = () => {
    // Hide cancel icon when Upload button is clicked
    setShowCancelIcon(false);
    // Call submitProject function to start uploading
    submitProject();
  };

  useEffect(() => {
    if (uploadMessage) {
      // Disable progress bar after 5 seconds
      const timer = setTimeout(() => {
        setDisableProgressBar(true);
      }, 5000);
      // Clear the timer when component unmounts or when uploadMessage changes
      return () => clearTimeout(timer);
    }
  }, [uploadMessage]);

  return (
    <div className="project-upload">
      <div className="project-wrap d-inline-flex align-items-center p-2">
        <img src="https://files.codingninjas.in/upload-zip-31827.svg" alt="" />
        {selectedFile ? (
          <div>
            <span className="float-end">
              {selectedFile.name}
              {showCancelIcon && <MdCancel style={{ color: '#1e2a5a', cursor: 'pointer' }} onClick={removeUpload} />}
            </span>
          </div>
        ) : (
          <input 
            type="file" 
            name="thumbnail" 
            className="custom-file-input"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        )} 
      </div>
      <div className="submit-form ms-2">
        <button 
          className="primary-btn cards-btn" 
          type='button' 
          onClick={handleUploadClick}
          disabled={uploading || disableProgressBar}>
          {uploading ? "Uploading..." : "Upload"}
        </button> 
      </div>
      {!uploadMessage && !disableProgressBar ? (
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progressPercent}%` }}>
          <b>{Math.round(progressPercent)}%</b>
          </div>
        </div>
      ) : (
        <p className='upload-message'>{uploadMessage}</p>
      )}
    </div>
  );
};

export default FileUpload;