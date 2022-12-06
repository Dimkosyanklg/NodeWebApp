import { Input } from "@src/components/core/Input.styled";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserAuthModel } from "@src/api/userTypes";
import { loginUser } from "@src/api/user";
import * as s from "./Login.styled";
import { redirect } from "react-router";

type Props = {};

export const Login: React.FC<Props> = ({}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<UserAuthModel>();

    const onSubmit: SubmitHandler<UserAuthModel> = async (data) => {
        const test = await loginUser(data);
    };
    console.log(errors)

    return (
        <s.Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <s.InputWrapper>
                    <s.InpuTitle>Логин</s.InpuTitle>
                    <Input {...register("login", { required: true })} type="text" />
                    {errors.login && "login required"}
                </s.InputWrapper>
                <s.InputWrapper>
                    <s.InpuTitle>Пароль</s.InpuTitle>
                    <Input {...register("password", { required: true })} type="password" />
                    {errors.password && "password required"}
                </s.InputWrapper>
                <button type="submit">Войти</button>
            </form>
        </s.Wrapper>
    );
};
