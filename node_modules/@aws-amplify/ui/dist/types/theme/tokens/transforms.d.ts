import { DesignToken, WebDesignToken, TransformValue } from './types/designToken';
export declare type Transforms = {
    slideX: {
        small: DesignToken<TransformValue>;
        medium: DesignToken<TransformValue>;
        large: DesignToken<TransformValue>;
    };
};
export declare type WebTransforms = {
    slideX: {
        [Property in keyof Transforms['slideX']]: WebDesignToken<TransformValue>;
    };
};
export declare const transforms: Transforms;
