import styled from "styled-components";

export const Wrapper = styled.div``;
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & + & {
        margin-top: 10px;
    }
`;
export const InpuTitle = styled.span``;
