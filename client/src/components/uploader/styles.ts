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

  & > p {
    font-size: 10px;
    color: rgba(79, 79, 79, 0.8);
  }
`;

const CardBody = styled.div`
  width: 100%;
  height: 219px;
  background-color: #f6f8fb;
  border-radius: 12px;
`;

const ImagePreview = styled.div`
  height: 100%;
  border: 1px dashed #97bef4;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 12px;

  & > p {
    font-size: 12px;
    color: rgba(79, 79, 79, 0.6);
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

  & > button {
    color: var(--white);
    background-color: var(--blue);
    padding: 8px 16px;
    border-radius: 8px;
  }
`;

export {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ChooseFile,
  Container,
  ImagePreview,
};
