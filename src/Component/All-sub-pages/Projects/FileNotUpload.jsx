import React, { useState } from 'react'
import { MdFileUploadOff } from "react-icons/md";

const FileNotUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <div className="project-upload" style={{ cursor: "not-allowed" }}>
            <div className="project-wrap d-inline-flex align-items-center p-2" >
                <MdFileUploadOff style={{ fontSize: "30px" }} />
                {selectedFile ? (
                    <div>
                    </div>
                ) : (
                    <input
                        type="file"
                        name="thumbnail"
                        className="custom-file-input"
                        disabled="true"
                        style={{ cursor: "not-allowed" }}
                    />
                )}
            </div>
        </div>
    )
}

export default FileNotUpload