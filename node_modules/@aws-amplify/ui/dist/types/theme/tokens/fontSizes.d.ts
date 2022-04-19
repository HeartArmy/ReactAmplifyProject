import { DesignToken, WebDesignToken, FontSizeValue } from './types/designToken';
export declare type FontSizes = {
    xxxs: DesignToken<FontSizeValue>;
    xxs: DesignToken<FontSizeValue>;
    xs: DesignToken<FontSizeValue>;
    small: DesignToken<FontSizeValue>;
    medium: DesignToken<FontSizeValue>;
    large: DesignToken<FontSizeValue>;
    xl: DesignToken<FontSizeValue>;
    xxl: DesignToken<FontSizeValue>;
    xxxl: DesignToken<FontSizeValue>;
    xxxxl: DesignToken<FontSizeValue>;
};
export declare type WebFontSizes = {
    [Property in keyof FontSizes]: WebDesignToken<FontSizeValue>;
};
export declare const fontSizes: FontSizes;
