import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace isIp {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
