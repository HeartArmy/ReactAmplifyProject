import { DesignToken, WebDesignToken, RadiusValue } from './types/designToken';
export declare type Radii = {
    xs: DesignToken<RadiusValue>;
    small: DesignToken<RadiusValue>;
    medium: DesignToken<RadiusValue>;
    large: DesignToken<RadiusValue>;
    xl: DesignToken<RadiusValue>;
    xxl: DesignToken<RadiusValue>;
    xxxl: DesignToken<RadiusValue>;
};
export declare type WebRadii = {
    [Property in keyof Radii]: WebDesignToken<RadiusValue>;
};
export declare const radii: Radii;
