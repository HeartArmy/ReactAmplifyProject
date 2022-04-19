import { UseSearchFieldProps } from '../types';
export declare const useSearchField: ({ onSubmit, onClear, externalRef, }: UseSearchFieldProps) => {
    value: string;
    onClearHandler: () => void;
    onKeyDown: (event: any) => void;
    onInput: (event: any) => void;
    onClick: () => void;
    composedRefs: import("../../hooks/useComposeRefsCallback").UseComposeRefsCallback<HTMLInputElement>;
};
