import React from "react";
import styled from "styled-components";
import Basic from "./components/Basic";
import SC1 from "./components/SC1";
import SC2 from "./components/SC2";
import SC3 from "./components/SC3";
import SC4 from "./components/SC4";
import SC5 from "./components/SC5";
import SC6 from "./components/SC6";
import SC7 from "./components/SC7";
import SC8 from "./components/SC8";

/* ThemeProvider를 활용해 props 설정하기 */
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

function App() {
  return (
    <Wrapper>
      <Basic />
      <SC1 />
      <SC2 />
      <SC3 />
      <SC4 />
      <SC5 />
      <SC6 />
      <SC7 />
      <SC8 />
    </Wrapper>
  );
}
export default App;
