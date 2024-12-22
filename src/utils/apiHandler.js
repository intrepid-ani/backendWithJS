class ApiHandelers extends Error {
  constructor(message = "Some error occured", statusCode, errors, statck) {
    super(message);

    this.statusCode = statusCode < 400;
    this.errors = errors;
    this.stack = stack;
    success = false;

    if(stack){
        this.stack = stack;
    }else{
        Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiHandelers };