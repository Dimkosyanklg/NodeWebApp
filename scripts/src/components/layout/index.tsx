import React from "react";
import { createGlobalStyle } from "styled-components";
import * as s from "./Layout.styled";

type Props = {
    header: React.ReactNode;
    children?: React.ReactNode;
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;

    & #root {
      height: 100%;
    }
  }

  html {
    height: 100%;
  }
` as any;

export const Layout: React.FC<Props> = ({ header, children }) => {
    return (
        <>
            {header}
            <s.Wrapper>
                <s.Content>{children}</s.Content>
            </s.Wrapper>
            <GlobalStyle />
        </>
    );
};
