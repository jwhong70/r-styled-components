import styled from "styled-components";

// 생성과 활용

const Father = styled.div`
  display: flex;
  padding-top: 30px;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

function SC1() {
  return (
    <Father>
      <BoxOne />
      <BoxTwo />
    </Father>
  );
}
export default SC1;
