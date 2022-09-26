import styled, { keyframes } from "styled-components";

// Pseudo Selector 2

const Wrapper = styled.div`
  display: flex;
  padding-top: 50px;
`;

const anim = keyframes`
  0% { transform: rotate(0deg); border-radius: 0px; }
  50% { border-radius: 100px; }
  100% { transform: rotate(360deg); border-radius: 0px; }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${anim} 5s linear infinite;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function SC8() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😍</Emoji>
      </Box>
    </Wrapper>
  );
}
export default SC8;
