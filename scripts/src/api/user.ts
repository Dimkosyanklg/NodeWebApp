import { client } from "./clients";
import { UserRegisterModel } from "./userTypes";

export const registerUser = async (request: UserRegisterModel) => {
    const { data } = await client.post<any>(`/auth/register`, request);

    return data;
};

export const loginUser = async (request: UserRegisterModel) => {
    const { data } = await client.post<any>(`/auth/login`, request);

    return data;
};
