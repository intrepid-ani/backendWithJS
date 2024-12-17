class ApiHandelers extends Error {
  constructor(message = "Some error occured", statusCode, errors, statck) {
    super(message);

    this.statusCode = statusCode < 400;
    this.errors = errors;
    this.statck = statck;
    success = false;

    if(statck){
        this.statck = statck;
    }else{
        Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiHandelers };