import { BackgroundColorValue, BorderColorValue, BorderRadiusValue, BorderStyleValue, BorderWidthValue, BoxShadowValue, DesignToken, FlexDirectionValue, GapValue, SpaceValue } from '../types/designToken';
interface MenuSizeTokens {
    width: DesignToken<SpaceValue>;
    height: DesignToken<SpaceValue>;
}
interface MenuItemTokens {
    minHeight: DesignToken<SpaceValue>;
    paddingInlineStart: DesignToken<SpaceValue>;
    paddingInlineEnd: DesignToken<SpaceValue>;
}
export interface MenuTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    borderWidth: DesignToken<BorderWidthValue>;
    borderStyle: DesignToken<BorderStyleValue>;
    borderColor: DesignToken<BorderColorValue>;
    boxShadow: DesignToken<BoxShadowValue>;
    flexDirection: DesignToken<FlexDirectionValue>;
    gap: DesignToken<GapValue>;
    maxWidth: DesignToken<SpaceValue>;
    minWidth: DesignToken<SpaceValue>;
    small: MenuSizeTokens;
    large: MenuSizeTokens;
    item: MenuItemTokens;
}
export declare const menu: MenuTokens;
export {};
