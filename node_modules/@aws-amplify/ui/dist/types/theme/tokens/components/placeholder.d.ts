import { BorderRadiusValue, ColorValue, DesignToken, SpaceValue, TransitionDurationValue } from '../types/designToken';
interface PlaceholderSizeTokens {
    height: DesignToken<SpaceValue>;
}
export interface PlaceholderTokens {
    borderRadius: DesignToken<BorderRadiusValue>;
    transitionDuration: DesignToken<TransitionDurationValue>;
    startColor: DesignToken<ColorValue>;
    endColor: DesignToken<ColorValue>;
    small: PlaceholderSizeTokens;
    default: PlaceholderSizeTokens;
    large: PlaceholderSizeTokens;
}
export declare const placeholder: PlaceholderTokens;
export {};
