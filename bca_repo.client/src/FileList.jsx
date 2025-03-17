import React, { useEffect, useState } from "react";
import axios from "axios";

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7166/api/Upload/files")
      .then((response) => {

        setFiles(response.data)
        console.log("API Response:", response.data);

      })


      .catch((error) => console.error("Error fetching files:", error));
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.length > 0 ? (
          files.map((file, index) => (
            <li key={index}>
              <a href={`https://localhost:7166${file.fileUrl}`} download>
                {file.fileName}
              </a>
            </li>
          ))
        ) : (
          <p>No files uploaded yet.</p>
        )}
      </ul>

    </div>
  );
};

export default FileList;
