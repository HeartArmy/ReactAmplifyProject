import { BackgroundColorValue, ColorValue, DesignToken, FontSizeValue, FontWeightValue, LineHeightValue, RadiusValue, SpaceValue, TextAlignValue } from '../types/designToken';
interface BadgeVariationTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    color: DesignToken<ColorValue>;
}
interface BadgeSizeTokens {
    fontSize: DesignToken<FontSizeValue>;
    paddingHorizontal: DesignToken<SpaceValue>;
    paddingVertical: DesignToken<SpaceValue>;
}
export interface BadgeTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderRadius: DesignToken<RadiusValue>;
    color: DesignToken<ColorValue>;
    error: BadgeVariationTokens;
    fontSize: DesignToken<FontSizeValue>;
    fontWeight: DesignToken<FontWeightValue>;
    info: BadgeVariationTokens;
    large: BadgeSizeTokens;
    lineHeight: DesignToken<LineHeightValue>;
    paddingHorizontal: DesignToken<SpaceValue>;
    paddingVertical: DesignToken<SpaceValue>;
    small: BadgeSizeTokens;
    success: BadgeVariationTokens;
    textAlign: DesignToken<TextAlignValue>;
    warning: BadgeVariationTokens;
}
export declare const badge: BadgeTokens;
export {};
