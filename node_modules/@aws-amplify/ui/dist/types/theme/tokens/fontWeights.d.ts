import { DesignToken, WebDesignToken, FontWeightValue } from './types/designToken';
export declare type FontWeights = {
    hairline: DesignToken<FontWeightValue>;
    thin: DesignToken<FontWeightValue>;
    light: DesignToken<FontWeightValue>;
    normal: DesignToken<FontWeightValue>;
    medium: DesignToken<FontWeightValue>;
    semibold: DesignToken<FontWeightValue>;
    bold: DesignToken<FontWeightValue>;
    extrabold: DesignToken<FontWeightValue>;
    black: DesignToken<FontWeightValue>;
};
export declare type WebFontWeights = {
    [Property in keyof FontWeights]: WebDesignToken<FontWeightValue>;
};
export declare const fontWeights: FontWeights;
