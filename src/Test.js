import { style } from "@mui/system";
import styled from "styled-components";

const Container = styled.div`
  width: 30px;
  height: 10px;
  background-color: red;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  margin: 20px;
  width: 20px;
  height: 20px;
  background-color: blue;
  &:hover > ${Container} {
    background-color: black;
  }
  &:hover {
    background-color: black;
  }
`;

const Test = () => {
  return (
    <div>
      <Container></Container>
      <Wrapper></Wrapper>
    </div>
  );
};

export default Test;
