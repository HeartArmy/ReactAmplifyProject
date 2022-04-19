import { ColorValue, DesignToken, SpaceValue } from '../types/designToken';
interface RatingSizeTokens {
    size: DesignToken<SpaceValue>;
}
interface RatingFilledTokens {
    color: DesignToken<ColorValue>;
}
interface RatingEmptyTokens {
    color: DesignToken<ColorValue>;
}
export interface RatingTokens {
    large: RatingSizeTokens;
    default: RatingSizeTokens;
    small: RatingSizeTokens;
    filled: RatingFilledTokens;
    empty: RatingEmptyTokens;
}
export declare const rating: RatingTokens;
export {};
