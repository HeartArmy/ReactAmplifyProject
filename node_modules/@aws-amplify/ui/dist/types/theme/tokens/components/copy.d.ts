import { ColorValue, DesignToken, FontSizeValue, SpaceValue } from '../types/designToken';
interface CopySVGFillTokens {
    fill: DesignToken<ColorValue>;
}
interface CopySVGTokens {
    path: CopySVGFillTokens;
}
interface CopyToolTipTokens {
    bottom: DesignToken<SpaceValue>;
    color: DesignToken<ColorValue>;
    fontSize: DesignToken<FontSizeValue>;
}
export interface CopyTokens {
    fontSize: DesignToken<FontSizeValue>;
    gap: DesignToken<SpaceValue>;
    svg: CopySVGTokens;
    toolTip: CopyToolTipTokens;
}
export declare const copy: CopyTokens;
export {};
