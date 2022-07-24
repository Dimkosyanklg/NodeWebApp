export type ResponseModel = {
    success: boolean;
    data?: any;
};
export const successResponse = (data?: any): ResponseModel => {
    return { success: true, data: data ?? {} };
};
export const errorResponse = (data?: any): ResponseModel => {
    return { success: false, data: data ?? {} };
};
