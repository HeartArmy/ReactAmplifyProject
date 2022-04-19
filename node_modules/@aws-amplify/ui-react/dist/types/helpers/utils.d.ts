export declare const isDevelopment: () => boolean;
/**
 * Does a comparison of each array value, plus a value equality check for empty
 * objects and arrays.
 */
export declare const areArrayValuesEqual: (arr1: unknown[], arr2: unknown[]) => boolean;
declare type ErrorWithMessage = {
    message: string;
};
export declare const isErrorWithMessage: (error: unknown) => error is ErrorWithMessage;
export declare const toErrorWithMessage: (maybeError: unknown) => ErrorWithMessage;
export declare const getErrorMessage: (error: unknown) => string;
export declare const getFormDataFromEvent: (event: React.FormEvent<HTMLFormElement>) => {
    [k: string]: FormDataEntryValue;
};
export {};
