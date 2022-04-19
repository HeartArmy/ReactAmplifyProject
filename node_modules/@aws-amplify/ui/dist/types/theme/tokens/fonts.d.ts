import { DesignToken, WebDesignToken, FontValue } from './types/designToken';
export declare type Fonts = {
    default: {
        variable: DesignToken<FontValue>;
        static: DesignToken<FontValue>;
    };
};
export interface WebFonts {
    default: {
        [Property in keyof Fonts['default']]: WebDesignToken<FontValue>;
    };
}
export declare const fonts: Fonts;
