import { DesignToken, WebDesignToken, BorderWidthValue } from './types/designToken';
export declare type BorderWidths = {
    /**
     * Small border, used for inputs and such
     */
    small: DesignToken<BorderWidthValue>;
    /**
     * Medium border, used for
     */
    medium: DesignToken<BorderWidthValue>;
    /**
     * Large border
     */
    large: DesignToken<BorderWidthValue>;
};
export declare type WebBorderWidths = {
    [Property in keyof BorderWidths]: WebDesignToken<BorderWidthValue>;
};
export declare const borderWidths: BorderWidths;
