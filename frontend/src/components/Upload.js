
import './Upload.css';
import React, { useState } from 'react';

const Upload = () => {
    const [file, setFile] = useState(null);
  
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
  
    const handleCancel = () => {
        setFile(null);
    };
  
    return (
        <div className="upload-container">
            <h2 className='text'>Upload File</h2>
            <div className="mb-3">
                <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                />
            </div>
      
            {file && (
                <div className="file-info mb-3">
                    <p>Selected file: {file.name}</p>
                    <button
                        className="btn btn-danger"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
};

export default Upload;
