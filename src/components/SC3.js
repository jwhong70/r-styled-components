import styled from "styled-components";

// 확장(extend)

const Father = styled.div`
  display: flex;
  padding-top: 30px;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

function SC3() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}
export default SC3;
