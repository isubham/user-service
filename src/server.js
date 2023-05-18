import express from "express";

import { authRouter } from "./routes/auth.route.js";
import { userRouter } from "./routes/user.router.js";
import { errorHandler } from "./middlwares/error-handler.middleware.js";

const app = express();

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.use(errorHandler)

app.listen(8080, () => {
    console.log('server started on 8080');
});
