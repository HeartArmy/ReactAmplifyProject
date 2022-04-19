import { ColorValue, DesignToken, FontSizeValue, FontWeightValue, LineHeightValue } from '../types/designToken';
interface HeadingLevelTokens {
    fontSize: DesignToken<FontSizeValue>;
    fontWeight: DesignToken<FontWeightValue>;
}
export interface HeadingTokens {
    color: DesignToken<ColorValue>;
    lineHeight: DesignToken<LineHeightValue>;
    1: HeadingLevelTokens;
    2: HeadingLevelTokens;
    3: HeadingLevelTokens;
    4: HeadingLevelTokens;
    5: HeadingLevelTokens;
    6: HeadingLevelTokens;
}
export declare const heading: HeadingTokens;
export {};
