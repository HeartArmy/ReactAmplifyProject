import { BackgroundColorValue, BorderColorValue, BorderRadiusValue, BorderStyleValue, BorderValue, BorderWidthValue, BoxShadowValue, ColorValue, CursorValue, DesignToken, FontSizeValue, LineHeightValue, OutlineColorValue, OutlineOffsetValue, OutlineStyleValue, OutlineWidthValue, SpaceValue, TransitionDurationValue } from '../types/designToken';
interface FieldControlSizeTokens {
    fontSize: DesignToken<FontSizeValue>;
    paddingBlockStart: DesignToken<SpaceValue>;
    paddingBlockEnd: DesignToken<SpaceValue>;
    paddingInlineStart: DesignToken<SpaceValue>;
    paddingInlineEnd: DesignToken<SpaceValue>;
}
interface FieldControlFocusTokens {
    borderColor: DesignToken<BorderColorValue>;
    boxShadow: DesignToken<BoxShadowValue>;
}
interface FieldControlDisabledTokens {
    color: DesignToken<ColorValue>;
    cursor: DesignToken<CursorValue>;
    borderColor: DesignToken<BorderColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface FieldControlErrorTokens {
    borderColor: DesignToken<BorderColorValue>;
    _focus: FieldControlErrorFocusTokens;
}
interface FieldControlErrorFocusTokens {
    boxShadow: DesignToken<BoxShadowValue>;
}
interface FieldControlQuietTokens {
    borderStyle: DesignToken<BorderStyleValue>;
    borderBlockEnd: DesignToken<BorderValue>;
    borderInlineStart: DesignToken<BorderValue>;
    borderInlineEnd: DesignToken<BorderValue>;
    borderBlockStart: DesignToken<BorderValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    _focus: FieldControlQuietFocusTokens;
    _error: FieldControlQuietErrorTokens;
}
interface FieldControlQuietFocusTokens {
    borderBlockEndColor: DesignToken<ColorValue>;
    boxShadow: DesignToken<BoxShadowValue>;
}
interface FieldControlQuietErrorTokens {
    borderBlockEndColor: DesignToken<ColorValue>;
    _focus: FieldControlQuietErrorFocusTokens;
}
interface FieldControlQuietErrorFocusTokens {
    boxShadow: DesignToken<BoxShadowValue>;
}
export interface FieldControlTokens {
    borderStyle: DesignToken<BorderStyleValue>;
    borderColor: DesignToken<BorderColorValue>;
    borderWidth: DesignToken<BorderWidthValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    color: DesignToken<ColorValue>;
    paddingBlockStart: DesignToken<SpaceValue>;
    paddingBlockEnd: DesignToken<SpaceValue>;
    paddingInlineStart: DesignToken<SpaceValue>;
    paddingInlineEnd: DesignToken<SpaceValue>;
    fontSize: DesignToken<FontSizeValue>;
    lineHeight: DesignToken<LineHeightValue>;
    transitionDuration: DesignToken<TransitionDurationValue>;
    outlineColor: DesignToken<OutlineColorValue>;
    outlineStyle: DesignToken<OutlineStyleValue>;
    outlineWidth: DesignToken<OutlineWidthValue>;
    outlineOffset: DesignToken<OutlineOffsetValue>;
    small: FieldControlSizeTokens;
    large: FieldControlSizeTokens;
    quiet: FieldControlQuietTokens;
    _focus: FieldControlFocusTokens;
    _disabled: FieldControlDisabledTokens;
    _error: FieldControlErrorTokens;
}
export declare const fieldcontrol: FieldControlTokens;
export {};
