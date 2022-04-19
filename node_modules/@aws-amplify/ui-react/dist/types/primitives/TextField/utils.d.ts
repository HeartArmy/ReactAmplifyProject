/// <reference types="react" />
import { PrimitiveProps, TextFieldProps } from '../types';
export declare const isTextAreaField: (props: {
    isMultiline?: boolean;
}) => props is PrimitiveProps<TextFieldProps<true>, "textarea">;
export declare const isInputField: (props: {
    isMultiline?: boolean;
}) => props is PrimitiveProps<TextFieldProps<false>, "input">;
export declare const isInputRef: (props: {
    isMultiline?: boolean;
}, ref: React.ForwardedRef<HTMLTextAreaElement | HTMLInputElement>) => ref is import("react").ForwardedRef<HTMLInputElement>;
export declare const isTextAreaRef: (props: {
    isMultiline?: boolean;
}, ref: React.ForwardedRef<HTMLTextAreaElement | HTMLInputElement>) => ref is import("react").ForwardedRef<HTMLTextAreaElement>;
