import express from "express";

import { AuthService } from "../services/auth.service.js";

const authRouter = express.Router();

authRouter.post('/sigin', (req, res, next) => {
    try {
        console.log('token added');
        const newToken = AuthService.getNewToken();
        res.json(
            {
                token: newToken,
                message: "set this token in Authoziation header in subsequent requests",
                user: {
                    href: "http://localhost:8080/user"
                },
                href: "http://localhost:8080/token"
            });
    } catch (e) {
        console.log(e)
        res.status(httpStatus.SERVICE_UNAVAILABLE).send({})
    }
})

authRouter.post('/sigup', (req, res, next) => {
    try {
        console.log('token added');
        const newToken = AuthService.getNewToken();
        res.json(
            {
                token: newToken,
                message: "set this token in Authoziation header in subsequent requests",
                user: {
                    href: "http://localhost:8080/user"
                },
                href: "http://localhost:8080/token"
            });
    } catch (e) {
        console.log(e)
        res.status(httpStatus.SERVICE_UNAVAILABLE).send({})
    }
})

export { authRouter };