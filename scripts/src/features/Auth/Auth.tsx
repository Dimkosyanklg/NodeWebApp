import React from "react";
import { RoundBlock } from "@src/components/core";
import * as s from "./Auth.styled";
import { Login } from "./Login";

type Props = {};

export const Auth: React.FC<Props> = ({}) => {
    return (
        <s.Wrapper>
            <RoundBlock><Login /></RoundBlock>
        </s.Wrapper>
    );
};
