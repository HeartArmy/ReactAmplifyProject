import { DesignToken, WebDesignToken, OpacityValue } from './types/designToken';
export declare type Opacities = {
    0: DesignToken<OpacityValue>;
    10: DesignToken<OpacityValue>;
    20: DesignToken<OpacityValue>;
    30: DesignToken<OpacityValue>;
    40: DesignToken<OpacityValue>;
    50: DesignToken<OpacityValue>;
    60: DesignToken<OpacityValue>;
    70: DesignToken<OpacityValue>;
    80: DesignToken<OpacityValue>;
    90: DesignToken<OpacityValue>;
    100: DesignToken<OpacityValue>;
};
export declare type WebOpacities = {
    [Property in keyof Opacities]: WebDesignToken<OpacityValue>;
};
export declare const opacities: Opacities;
