import React, { useState } from "react";
import Loading from "../loading";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ChooseFile,
  Container,
  ImagePreview,
} from "./styles";

const Uploader = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Container>
      {loading && <Loading />}
      <Card>
        <CardHeader>
          <h1>Upload your image</h1>
          <p>File should be Jpeg, Png...</p>
        </CardHeader>
        <CardBody>
          <ImagePreview>
            <img src="/assets/preview.svg" alt="preview" />
            <p>Drag &amp; Drop your image here</p>
          </ImagePreview>
        </CardBody>
        <CardFooter>
          <ChooseFile>
            <p>Or</p>
            <input type="file" name="my-image" id="imageToUpload" hidden />
            <button>Choose a file</button>
          </ChooseFile>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Uploader;
