import { useState, useRef } from "react";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const Upload = () => {
  const [uploadMessage, setUploadMessage] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const fileInputRef = useRef(null); // Ref for file input element

  const submitProject = async () => {
    const file = fileInputRef.current?.files[0];
    if (!file) return;

    // Check if the file size is greater than 10 MB (in bytes)
    const maxSizeMB = 10;
    const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to bytes
    if (file.size > maxSizeBytes) {
      alert(`File size exceeds the maximum limit of ${maxSizeMB} MB.`);
      return;
    }

    // Check if the file name ends with .zip extension
    if (!file.name.toLowerCase().endsWith(".zip")) {
      alert("Please select a file with .zip extension.");
      return;
    }

    const storage = getStorage();
    const storageReference = storageRef(storage, `Projects/${file.name}`);
    const uploadTask = uploadBytesResumable(storageReference, file);

    let intervalId; // Interval id for updating progress

    uploadTask.on("state_changed",
      (snapshot) => {
        // Clear previous interval if exists
        clearInterval(intervalId);

        // Start a new interval to update progress incrementally
        intervalId = setInterval(() => {
          setProgresspercent((prevProgress) => {
            // Calculate progress percentage based on bytes transferred and total bytes
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            return progress < 100 ? progress : prevProgress; // Only update if progress is less than 100%
          });
        }, 50); // Update progress every 50 milliseconds
      },
      (error) => {
        clearInterval(intervalId); // Clear interval on error
        alert(error);
      },
      async () => {
        clearInterval(intervalId); // Clear interval on completion

        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUploadMessage("File Uploaded");

          // Clear the message after 5 seconds
          setTimeout(() => {
            setUploadMessage(null);
          }, 5000);

          // Clear the file input field
          fileInputRef.current.value = "";
        } catch (error) {
          console.error("Error getting download URL:", error);
        }
      }
    );
  }

  return (
    <div className="App">
      <form >
        <input ref={fileInputRef} type='file' />
        </form>
        {!uploadMessage ? (
          <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{Math.round(progresspercent)}%</div>
          <button className="primary-btn cards-btn" type='button' onClick={submitProject}>Upload</button>
          </div>
      ) : (
        <p>{uploadMessage}</p>
      )}
    </div>
  );
}

export default Upload;
