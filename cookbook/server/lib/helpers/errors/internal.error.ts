export {};

class InternalError {
  message: string;

  stack: string | undefined;

  constructor(err = new Error()) {
    this.message = err.message;
    this.stack = err.stack;
  }
}

module.exports = {
  InternalError,
};
