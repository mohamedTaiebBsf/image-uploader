import React, { ChangeEvent, useRef, useState } from "react";
import apiService from "../../services/apiService";
import CheckMark from "../checkMark";
import Loading from "../loading";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ChooseFile,
  Clipboard,
  Container,
  Dropzone,
  ImageUploaded,
} from "./styles";

const Uploader = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [imageLink, setImageLink] = useState<string>("");
  const imageRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setLoading(true);
      const file = event.currentTarget.files[0];
      let formData = new FormData();
      formData.append("file", file);
      try {
        const response = await apiService.uploadImage(formData);
        console.log(response.data);
        setImageLink(`${apiService.API_URL}/${response.data.filename}`);
        setIsUploaded(true);
        setTimeout(() => setLoading(false), 2000);
      } catch (err: any) {
        console.log(err.response.data);
        setTimeout(() => setLoading(false), 2000);
      }
    }
  };

  const onCopyLink = () => {
    navigator.clipboard.writeText(imageLink);
  };

  return (
    <Container>
      {loading && <Loading />}
      {!loading && (
        <Card>
          <CardHeader>
            {isUploaded && <CheckMark />}
            <h1 className={isUploaded ? "uploaded" : ""}>
              {!isUploaded ? "Upload your image" : "Uploaded Successfully!"}
            </h1>
            {!isUploaded && <p>File should be Jpeg, Png...</p>}
          </CardHeader>
          <CardBody>
            {!isUploaded ? (
              <Dropzone>
                <img src="/assets/preview.svg" alt="preview" />
                <p>Drag &amp; Drop your image here</p>
              </Dropzone>
            ) : (
              <ImageUploaded>
                <img src={imageLink} alt="uploaded" />
              </ImageUploaded>
            )}
          </CardBody>
          <CardFooter>
            {!isUploaded ? (
              <ChooseFile>
                <p>Or</p>
                <input
                  type="file"
                  ref={imageRef}
                  onChange={handleUpload}
                  name="file"
                  id="imageToUpload"
                  hidden
                />
                <button onClick={() => imageRef.current?.click()}>
                  Choose a file
                </button>
              </ChooseFile>
            ) : (
              <Clipboard>
                <span>{imageLink}</span>
                <button onClick={onCopyLink}>Copy Link</button>
              </Clipboard>
            )}
          </CardFooter>
        </Card>
      )}
    </Container>
  );
};

export default Uploader;
