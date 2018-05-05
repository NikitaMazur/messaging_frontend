import { Input } from 'antd';
import styled from 'styled-components';

export const FormTitle = styled.h3`
    font-size: 25px;
`;

export const FormWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 0 15px;
`;

export const StyledForm = styled.form`
    background-color: white;
    padding: 30px 20px;
    border: 1px solid grey;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    button {
        margin-top: 30px;
        height: 40px;
    }
`;

export const StyledInput = styled(Input)`
    &.ant-input {
        height: 40px;
    }
`;

export const StyledInputBlock = styled.div`
    position: relative;

    &:not(:first-child) {
        margin-top: 30px;
    }

    & > div {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
    }
`;
