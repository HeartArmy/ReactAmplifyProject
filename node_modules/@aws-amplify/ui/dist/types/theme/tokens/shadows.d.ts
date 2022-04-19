import { DesignToken, WebDesignToken, ShadowValue } from './types/designToken';
export declare type Shadows = {
    small: DesignToken<ShadowValue>;
    medium: DesignToken<ShadowValue>;
    large: DesignToken<ShadowValue>;
};
export declare type WebShadows = {
    [Property in keyof Shadows]: WebDesignToken<ShadowValue>;
};
export declare const shadows: Shadows;
