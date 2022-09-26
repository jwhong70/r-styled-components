import styled from "styled-components";

// As 속성

const Father = styled.div`
  display: flex;
  padding-top: 30px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

function SC4() {
  return (
    <Father as="header">
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
    </Father>
  );
}
export default SC4;
