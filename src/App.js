import React from "react";
import Container from "@mui/material/Container";
import Login from "./Components/Login";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import "./Styles/main.scss";

const App = () => {
  return (
    <RecoilRoot>
      <Container>
        <Login />
      </Container>
    </RecoilRoot>
  );
};

export default App;
