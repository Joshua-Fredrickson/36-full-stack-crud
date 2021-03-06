export default function autoBind(classComponent) {
  const classMethods = Object.getOwnPropertyNames(classComponent.prototype);
  classMethods.forEach((method) => {
    if (method.startsWith('handle')) {
      this[method] = this[method].bind(this);
    }
  });
}

export const validateTodo = (payload) => {
  if (!payload._id) {
    throw new Error('VALIDATION ERROR: todo MUST have an ID');
  }

  if (!payload.title) {
    throw new Error ('VALIDATION ERROR: todo MUST have a title');
  }
};
