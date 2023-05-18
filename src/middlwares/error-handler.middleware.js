
const errorHandler = (error, req, res, next) => {
    console.log(error.stack);
    if (error instanceof NotImplementedException) {
        res.status(httpStatus.NOT_IMPLEMENTED).send()
    }

    else {
        const firstLineError = error.stack.split("\n")[0];
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: firstLineError });
    }
}

export { errorHandler };
