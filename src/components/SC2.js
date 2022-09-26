import styled from "styled-components";

// props 설정하기

const Father = styled.div`
  display: flex;
  padding-top: 30px;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

function SC2() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
    </Father>
  );
}
export default SC2;
