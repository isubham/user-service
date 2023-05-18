import httpStatus from "http-status";

const authMiddleware = (req, res, next) => {
    try {
        const authToken = req.get('Authorization');
        console.log('req header', authToken)
        if (authToken == null) {
            res.status(httpStatus.BAD_REQUEST).send({
                message: "auth header missing",
                authorizationUrl: "http://localhost:8080/token",
                method: "POST"
            })
        }
        else if (!AuthService.isTokenValid(authToken)) {
            res.status(httpStatus.UNAUTHORIZED).send({
                message: "invalid authentication header",
                authorizationUrl: "http://localhost:8080/token",
                method: "POST"
            })
        }
        else {
            next();
        }
    } catch (e) {
        console.log(e);
    }
}

export { authMiddleware };
