import { client } from "./clients";
import { UserAuthModel, UserModel } from "./userTypes";

export const registerUser = async (request: UserAuthModel) => {
    const { data } = await client.post<UserModel>(`/auth/register`, request);

    return data;
};

export const loginUser = async (request: UserAuthModel) => {
    const { data } = await client.post<UserModel>(`/auth/login`, request);

    return data;
};
