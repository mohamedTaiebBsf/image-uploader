import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Card = styled.div`
  width: 400px;
  padding: 36px 32px;
  background-color: var(--white);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  letter-spacing: -0.56px;
`;

const CardHeader = styled.div`
  margin-bottom: 30px;

  text-align: center;

  & > h1 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  & > h1.uploaded {
    margin-top: 12px;
    margin-bottom: 26px;
  }

  & > p {
    font-size: 10px;
    color: rgba(79, 79, 79, 0.8);
  }
`;

const Dropzone = styled.div`
  height: 100%;
  border: 1px dashed #97bef4;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & > p {
    font-size: 12px;
    color: rgba(79, 79, 79, 0.6);
  }
`;

const CardBody = styled.div`
  width: 100%;
  height: 219px;
  background-color: #f6f8fb;
  border-radius: 12px;
  overflow: hidden;

  &.drop-zone--over {
    background-color: #e0e4e9;

    & ${Dropzone} {
      cursor: not-allowed;
      border: 2px solid var(--blue);
    }
  }
`;

const ImageUploaded = styled.div`
  width: 100%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const CardFooter = styled.div`
  margin-top: 19px;
`;

const ChooseFile = styled.div`
  text-align: center;
  font-size: 12px;

  & > p {
    color: rgba(79, 79, 79, 0.6);
    margin-bottom: 22px;
  }
`;

const Clipboard = styled.div`
  font-size: 8px;
  background-color: #f6f8fb;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 2px;
  display: flex;
  align-items: center;

  & span {
    flex: 1;
    margin-left: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & button {
    margin-left: 5px;
  }
`;

export {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ChooseFile,
  Clipboard,
  Container,
  Dropzone,
  ImageUploaded,
};
