import express from "express";

const userRouter = express.Router();

import { authMiddleware } from "../middlwares/auth.middleware.js";
import { UserService } from "../services/user.service.js";

userRouter.use(authMiddleware);

userRouter.get('/:userId', (req, res, next) => {
    try {
        const userId = req.params;
        const userInfo = UserService.get(userId);
        // const userAssets = getUserAssets();
        res.json({ user: userInfo });
    } catch (e) {
        // custom error handlers
        next(e);
    }
})

userRouter.post('/', (req, res, next) => {
    try {
        const userId = req.params;
        const userInfo = UserService.save();
        // const userAssets = getUserAssets();
        res.json({ user: userInfo });
    } catch (e) {
        // custom error handlers
        next(e);
    }
})

userRouter.put('/:userId', (req, res, next) => {
    try {
        const userId = req.params;
        const userInfo = UserService.put();
        // const userAssets = getUserAssets();
        res.json({ user: userInfo });
    } catch (e) {
        // custom error handlers
        next(e);
    }
})

userRouter.delete('/:userId', (req, res, next) => {
    try {
        const userId = req.params;
        const userInfo = UserService.delete(userId)
        // const userAssets = getUserAssets();
        res.json({ user: userInfo });
    } catch (e) {
        // custom error handlers
        next(e);
    }
});

export { userRouter };
