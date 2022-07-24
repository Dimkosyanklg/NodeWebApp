import jwt from "jsonwebtoken";
import { errorResponse } from "../utils/responses";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json(errorResponse());
    try {
        const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        req.user = decoded;
        next();
    } catch (er) {
        res.clearCookie("token");
        return res.status(400).send(er.message);
    }
};
