import { DesignToken, WebDesignToken, LineHeightValue } from './types/designToken';
export declare type LineHeights = {
    small: DesignToken<LineHeightValue>;
    medium: DesignToken<LineHeightValue>;
    large: DesignToken<LineHeightValue>;
};
export declare type WebLineHeights = {
    [Property in keyof LineHeights]: WebDesignToken<LineHeightValue>;
};
export declare const lineHeights: LineHeights;
