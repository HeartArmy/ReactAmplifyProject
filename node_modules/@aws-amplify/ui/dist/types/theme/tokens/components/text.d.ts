import { ColorValue, DesignToken } from '../types/designToken';
interface TextVariationTokens {
    color: DesignToken<ColorValue>;
}
export interface TextTokens {
    color: DesignToken<ColorValue>;
    primary: TextVariationTokens;
    secondary: TextVariationTokens;
    tertiary: TextVariationTokens;
    error: TextVariationTokens;
    warning: TextVariationTokens;
    success: TextVariationTokens;
    info: TextVariationTokens;
}
export declare const text: TextTokens;
export {};
