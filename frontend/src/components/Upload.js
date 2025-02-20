import './Upload.css';
import React, { useState, useRef } from 'react';

const Upload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            if (selectedFile.size > 10 * 1024 * 1024) {
                setError('File size must be less than 10MB');
                setFile(null);
                fileInputRef.current.value = '';
            } else {
                setError('');
                setFile(selectedFile);
            }
        }
    };

    const handleCancel = () => {
        setFile(null);
        setError('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleUpload = () => {
        alert(`Uploading: ${file.name}`);
    };

    return (
        <div className="upload-container">
            <h2 className="text">Upload File</h2>

            <div className="mb-3">
                <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />
            </div>

            {error && <p className="text-danger">{error}</p>}

            {file && (
                <div className="file-info mb-3">
                    <p>Selected file: {file.name}</p>
                    <button className="btn btn-danger me-2" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button className="btn btn-primary" onClick={handleUpload}>
                        Upload
                    </button>
                </div>
            )}
        </div>
    );
};

export default Upload;
