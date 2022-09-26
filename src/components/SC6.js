import styled, { keyframes } from "styled-components";

// animation

const Wrapper = styled.div`
  display: flex;
  padding-top: 50px;
`;

const anim = keyframes`
  0% { transform: rotate(0deg); border-radius: 0px; }
  50% { border-radius: 100px; }
  100% { transform: rotate(360deg); border-radius: 0px; }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${anim} 5s linear infinite;
`;

function SC6() {
  return (
    <Wrapper>
      <Box></Box>
    </Wrapper>
  );
}
export default SC6;
