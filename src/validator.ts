const isNotStartWithSpace = (target: string) => new RegExp("^$|^[^\\s]").test(target);
const isNotEndWithSpace = (target: string) => new RegExp("^$|[^\\s]$").test(target);
const hasLowerLetter = (target: string) => new RegExp("[a-z]").test(target);
const hasUpperLetter = (target: string) => new RegExp("[A-Z]").test(target);
const hasNumber = (target: string) => new RegExp("[0-9]").test(target);
const isLengthBetween = (min: number, max: number) => (target: string) => {
  const _min = Math.max(0, min);

  if (_min > max) {
    return false;
  }

  return new RegExp(`^.{${_min},${max}}$`).test(target);
};

export default { isNotStartWithSpace, isNotEndWithSpace, hasLowerLetter, hasUpperLetter, hasNumber, isLengthBetween };
