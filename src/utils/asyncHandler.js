const asyncHandler = (func) => (req, res, next) => {
    Promise
    .resolve(func(req, res, next))
    .catch((err) => next(err)); 
    
    // next() passes control to the next middleware. If an error is passed, it goes to error-handling middleware.
};

export { asyncHandler };













// This is the Simplest way to handle async functions in express routes

// async function asyncHandler(func) {
//  return (req, res, next) => {
//         try{
//             await func(req, res, next);
//         }catch(error){
//             res.status(error.status || 500)
//             .json({
//                 message: error.message, 
//                 success: false
//             });
//         };
//     };
// };