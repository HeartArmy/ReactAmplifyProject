import { AnimationDurationValue, ColorValue, DesignToken, FontSizeValue, SpaceValue, StrokeEmptyValue, StrokeFilledValue, StrokeLinecapValue } from '../types/designToken';
interface LoaderSizeTokens {
    fontSize: DesignToken<FontSizeValue>;
    height: DesignToken<SpaceValue>;
    width: DesignToken<SpaceValue>;
}
interface LoaderLinearSizeTokens {
    fontSize: DesignToken<FontSizeValue>;
    strokeWidth: DesignToken<SpaceValue>;
}
interface LoaderLinearTokens {
    width: DesignToken<SpaceValue>;
    minWidth: DesignToken<SpaceValue>;
    fontSize: DesignToken<FontSizeValue>;
    strokeWidth: DesignToken<SpaceValue>;
    strokeFilled: DesignToken<StrokeFilledValue>;
    strokeEmpty: DesignToken<StrokeEmptyValue>;
    strokeLinecap: DesignToken<StrokeLinecapValue>;
    animationDuration: DesignToken<AnimationDurationValue>;
    small: LoaderLinearSizeTokens;
    large: LoaderLinearSizeTokens;
}
interface LoaderTextTokens {
    fill: DesignToken<ColorValue>;
}
export interface LoaderTokens {
    width: DesignToken<SpaceValue>;
    height: DesignToken<SpaceValue>;
    fontSize: DesignToken<FontSizeValue>;
    strokeEmpty: DesignToken<StrokeEmptyValue>;
    strokeFilled: DesignToken<StrokeFilledValue>;
    strokeLinecap: DesignToken<StrokeLinecapValue>;
    animationDuration: DesignToken<AnimationDurationValue>;
    small: LoaderSizeTokens;
    large: LoaderSizeTokens;
    linear: LoaderLinearTokens;
    text: LoaderTextTokens;
}
export declare const loader: LoaderTokens;
export {};
