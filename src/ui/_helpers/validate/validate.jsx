const regex = /.{5}/;
const required = value => value ? undefined : "Required";
const valueLength = value => regex.test(value) ? undefined : "Should be longer than 5 symbols";
const validateInput = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);

export const validate = validateInput(required, valueLength);