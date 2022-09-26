import styled from "styled-components";

// Attrs

const Father = styled.div`
  display: flex;
  padding-top: 30px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function SC5() {
  return (
    <Father>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}
export default SC5;
