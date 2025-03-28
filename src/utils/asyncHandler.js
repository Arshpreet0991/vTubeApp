// this will creata a method and export it. It will be used to handle async operation which we will need a lot in the projects. It is also a standard practice to do this.

const asyncHandler = (requstHandler) => {
  (req, res, next) => {
    Promise.resolve(requstHandler(req, res, next)).reject((err) => next(err));
  };
};

//----------------------------------------------

// async handler using try catch block
/*
const asyncHandler = (fn) => {
  async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(error.code || 500).json({
        success: false,
        message: error.message,
      });
    }
  };
};
*/
