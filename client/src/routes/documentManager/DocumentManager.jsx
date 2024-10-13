import React, { useState } from "react";
import "./DocumentManager.scss";

function DocumentManager() {
  const [documents, setDocuments] = useState([]);
  const [file, setFile] = useState(null);
  const [heading, setHeading] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (!file || !heading) {
      alert("Please provide both heading and a file.");
      return;
    }

    // Here you would send the file to the backend to store it
    // Simulating adding to local state for now
    const newDocument = {
      heading: heading,
      fileName: file.name,
    };

    setDocuments([...documents, newDocument]);

    // Reset form
    setFile(null);
    setHeading("");
  };

  return (
    <div className="document-manager">
      <h2>Document Manager</h2>
      
      <form className="upload-form" onSubmit={handleUpload}>
        <label htmlFor="heading">Document Heading:</label>
        <input
          type="text"
          id="heading"
          value={heading}
          onChange={handleHeadingChange}
          placeholder="Enter document heading"
        />
        
        <label htmlFor="file">Upload File:</label>
        <input type="file" id="file" onChange={handleFileChange} />

        <button type="submit">Upload Document</button>
      </form>

      <h3>Uploaded Documents</h3>
      {documents.length === 0 ? (
        <p>No documents uploaded yet.</p>
      ) : (
        <ul className="document-list">
          {documents.map((doc, index) => (
            <li key={index}>
              <strong>{doc.heading}</strong> - {doc.fileName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DocumentManager;
