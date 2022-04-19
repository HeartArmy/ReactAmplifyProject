import { AlignItemsValue, BackgroundColorValue, ColorValue, DesignToken, FontSizeValue, FontWeightValue, JustifyContentValue, SpaceValue } from '../types/designToken';
interface AlertVariationTokens {
    color: DesignToken<ColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface AlertIconTokens {
    size: DesignToken<FontSizeValue>;
}
interface AlertHeadingTokens {
    fontSize: DesignToken<FontSizeValue>;
    fontWeight: DesignToken<FontWeightValue>;
}
export interface AlertTokens {
    alignItems: DesignToken<AlignItemsValue>;
    justifyContent: DesignToken<JustifyContentValue>;
    color: DesignToken<ColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
    paddingBlock: DesignToken<SpaceValue>;
    paddingInline: DesignToken<SpaceValue>;
    icon: AlertIconTokens;
    heading: AlertHeadingTokens;
    info: AlertVariationTokens;
    error: AlertVariationTokens;
    warning: AlertVariationTokens;
    success: AlertVariationTokens;
}
export declare const alert: AlertTokens;
export {};
