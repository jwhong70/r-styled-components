import styled, { keyframes } from "styled-components";

// Pseudo Selector 1

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
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${anim} 5s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 80px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function SC7() {
  return (
    <Wrapper>
      <Box>
        <span>😍</span>
      </Box>
    </Wrapper>
  );
}
export default SC7;
