import { BackgroundColorValue, BorderColorValue, BorderStyleValue, BorderWidthValue, ColorValue, DesignToken, FontSizeValue, OpacityValue, SpaceValue } from '../types/designToken';
interface DividerSizeTokens {
    borderWidth: DesignToken<BorderWidthValue>;
}
interface DividerLabelTokens {
    color: DesignToken<ColorValue>;
    paddingInline: DesignToken<SpaceValue>;
    fontSize: DesignToken<FontSizeValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
}
export interface DividerTokens {
    borderStyle: DesignToken<BorderStyleValue>;
    borderColor: DesignToken<BorderColorValue>;
    borderWidth: DesignToken<BorderWidthValue>;
    label: DividerLabelTokens;
    small: DividerSizeTokens;
    large: DividerSizeTokens;
    opacity: DesignToken<OpacityValue>;
}
export declare const divider: DividerTokens;
export {};
