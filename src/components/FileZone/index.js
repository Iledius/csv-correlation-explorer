import React from "react";
import { parse } from "papaparse";
import Dropzone from "react-dropzone";

function FileZone(props) {
  return (
    <Dropzone
      onDrop={async (file) => {
        const text = await file[0].text();
        const result = parse(text, { header: true });
        const headers = result.meta.fields;
        console.log(headers);
        props.handleCsvData((existing) => [...result.data]);
        props.setHeaders((e) => [...headers]);
        props.setUploadState("Uploaded");
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>AAAAAAAAAAAAAAAAAAAA</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default FileZone;
