import React, { ChangeEvent, DragEvent, useRef, useState } from "react";
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
  Error,
  ImageUploaded,
} from "./styles";

type UploadEvent = ChangeEvent<HTMLInputElement> & DragEvent<HTMLDivElement>;

const Uploader = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [imageLink, setImageLink] = useState<string>("");
  const [error, setError] = useState<string>("");
  const imageRef = useRef<HTMLInputElement | null>(null);

  const uploadHandler = async (event: UploadEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.currentTarget.files || event.dataTransfer.files;

    if (files) {
      setLoading(true);

      try {
        const response = await apiService.uploadImage(
          apiService.createData(files[0])
        );
        setImageLink(`${apiService.API_URL}/${response.data.filename}`);
        setIsUploaded(true);
        setTimeout(() => setLoading(false), 2000);
      } catch (err: any) {
        setError(err.response.data.msg);
        setIsDragOver(false);
        setTimeout(() => setLoading(false), 2000);
      }
    }
  };

  const onCopyLink = () => {
    navigator.clipboard.writeText(imageLink);
  };

  const dragOverHandler = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragOver(true);
  };

  const dragEnterHandler = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragOver(true);
  };

  const dragLeaveHandler = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragOver(false);
  };

  return (
    <Container>
      {loading && <Loading />}
      {!loading && (
        <Card>
          {error && !isUploaded && <Error>{error}</Error>}
          <CardHeader>
            {isUploaded && <CheckMark />}
            <h1 className={isUploaded ? "uploaded" : ""}>
              {!isUploaded ? "Upload your image" : "Uploaded Successfully!"}
            </h1>
            {!isUploaded && <p>File should be Jpeg, Png...</p>}
          </CardHeader>
          <CardBody className={isDragOver ? "drop-zone--over" : ""}>
            {!isUploaded ? (
              <Dropzone
                onDrop={uploadHandler}
                onDragEnter={dragEnterHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
              >
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
                  onChange={uploadHandler}
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
