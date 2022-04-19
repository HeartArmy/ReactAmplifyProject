import { DesignToken, WebDesignToken, OutlineWidthValue } from './types/designToken';
export declare type OutlineWidths = {
    small: DesignToken<OutlineWidthValue>;
    medium: DesignToken<OutlineWidthValue>;
    large: DesignToken<OutlineWidthValue>;
};
export declare type WebOutlineWidths = {
    [Property in keyof OutlineWidths]: WebDesignToken<OutlineWidthValue>;
};
export declare const outlineWidths: OutlineWidths;
