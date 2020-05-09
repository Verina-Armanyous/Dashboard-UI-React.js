import React from "react";
// import "react-dropzone-uploader/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropzone from "react-dropzone-uploader";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

export default function Uploader() {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      console.log(xhr.responseText);
    });
    // open the request with the verb and the url
    xhr.open(
      "POST",
      "https://us-central1-amar-250808.cloudfunctions.net/Dummy_form"
    );
    // send the request
    xhr.send();
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      inputContent=<div>
        <FontAwesomeIcon
          className="customIcon"
          style={{
            color: "rgb(243, 243, 243)",
            fontSize: "50px",
            margin: "40px 150px"
          }}
          icon={faCloudUploadAlt}
        />
        <p>Drag and Drop or Browse to Upload</p>
      </div>
      className="dropZone"
      styles={{ dropzone: { minHeight: 300, maxHeight: 400 } }}
    />
  );
}
