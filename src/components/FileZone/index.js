import React, { useMemo } from "react";
import { parse } from "papaparse";
import Dropzone from "react-dropzone";

const style = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

function FileZone(props) {
  return (
    <Dropzone
      padding="20px"
      style="border:1px solid black;"
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
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <p>Click here to add files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default FileZone;
