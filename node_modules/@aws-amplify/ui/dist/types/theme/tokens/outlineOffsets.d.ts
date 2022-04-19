import { DesignToken, WebDesignToken, OutlineOffsetValue } from './types/designToken';
export declare type OutlineOffsets = {
    small: DesignToken<OutlineOffsetValue>;
    medium: DesignToken<OutlineOffsetValue>;
    large: DesignToken<OutlineOffsetValue>;
};
export declare type WebOutlineOffsets = {
    [Property in keyof OutlineOffsets]: WebDesignToken<OutlineOffsetValue>;
};
export declare const outlineOffsets: OutlineOffsets;
