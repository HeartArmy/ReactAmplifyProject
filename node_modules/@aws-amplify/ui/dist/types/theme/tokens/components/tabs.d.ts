import { BackgroundColorValue, BorderColorValue, BorderStyleValue, BorderWidthValue, ColorValue, DesignToken, FontSizeValue, FontWeightValue, GapValue, SpaceValue, TextAlignValue, TransitionDurationValue } from '../types/designToken';
interface TabsItemTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    borderStyle: DesignToken<BorderStyleValue>;
    borderWidth: DesignToken<BorderWidthValue>;
    color: DesignToken<ColorValue>;
    fontSize: DesignToken<FontSizeValue>;
    fontWeight: DesignToken<FontWeightValue>;
    paddingVertical: DesignToken<SpaceValue>;
    paddingHorizontal: DesignToken<SpaceValue>;
    textAlign: DesignToken<TextAlignValue>;
    transitionDuration: DesignToken<TransitionDurationValue>;
    _hover: TabsItemHoverTokens;
    _focus: TabsItemFocusTokens;
    _active: TabsItemActiveTokens;
    _disabled: TabsItemDisabledTokens;
}
interface TabsItemHoverTokens {
    color: DesignToken<ColorValue>;
}
interface TabsItemFocusTokens {
    color: DesignToken<ColorValue>;
}
interface TabsItemActiveTokens {
    color: DesignToken<ColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface TabsItemDisabledTokens {
    color: DesignToken<ColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
}
export interface TabsTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    borderStyle: DesignToken<BorderStyleValue>;
    borderWidth: DesignToken<BorderWidthValue>;
    gap: DesignToken<GapValue>;
    item: TabsItemTokens;
}
export declare const tabs: TabsTokens;
export {};
