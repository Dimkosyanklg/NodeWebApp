import React from "react";
import { loginUser, registerUser } from "./api/user";
import { UserRegisterModel } from "./api/userTypes";

type Props = {};

export const App: React.FC<Props> = ({}) => {
    const testApi = async () => {
        const model: UserRegisterModel = { login: "qwerty", password: "322" };
        const { data } = await registerUser(model);
        console.log(data);
        const test = await loginUser(data);
    };
    return (
        <div>
            <button onClick={testApi}>TEST API</button>
        </div>
    );
};
