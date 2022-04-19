import { BackgroundColorValue, BorderCollapseValue, BorderColorValue, BorderStyleValue, BorderWidthValue, CaptionSideValue, ColorValue, DesignToken, DisplayValue, FontSizeValue, FontWeightValue, SpaceValue, TextAlignValue, VerticalAlignValue, WordBreakValue } from '../types/designToken';
interface TableDefaultTokens {
    display: DesignToken<DisplayValue>;
    verticalAlign: DesignToken<VerticalAlignValue>;
}
interface TableRowTokens extends TableDefaultTokens {
    hover: TableRowHoverTokens;
    striped: TableRowStripedTokens;
}
interface TableRowHoverTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface TableRowStripedTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface TableCellTokens extends TableDefaultTokens {
    borderColor: DesignToken<BorderColorValue>;
    borderStyle: DesignToken<BorderStyleValue>;
    borderWidth: DesignToken<BorderWidthValue>;
    color: DesignToken<ColorValue>;
    fontSize: DesignToken<FontSizeValue>;
    fontWeight: DesignToken<FontWeightValue>;
    padding: DesignToken<SpaceValue>;
    large: TableCellSizeTokens;
    small: TableCellSizeTokens;
}
interface TableHeaderTokens extends TableCellTokens {
}
interface TableDataTokens extends TableCellTokens {
}
interface TableCellSizeTokens {
    fontSize: DesignToken<FontSizeValue>;
    padding: DesignToken<SpaceValue>;
}
interface TableCaptionTokens {
    captionSide: DesignToken<CaptionSideValue>;
    color: DesignToken<ColorValue>;
    display: DesignToken<DisplayValue>;
    fontSize: DesignToken<FontSizeValue>;
    textAlign: DesignToken<TextAlignValue>;
    wordBreak: DesignToken<WordBreakValue>;
    large: TableCaptionSizeTokens;
    small: TableCaptionSizeTokens;
}
interface TableCaptionSizeTokens {
    fontSize: DesignToken<FontSizeValue>;
}
export interface TableTokens {
    borderCollapse: DesignToken<BorderCollapseValue>;
    display: DesignToken<DisplayValue>;
    width: DesignToken<SpaceValue>;
    head: TableDefaultTokens;
    body: TableDefaultTokens;
    foot: TableDefaultTokens;
    row: TableRowTokens;
    header: TableHeaderTokens;
    data: TableDataTokens;
    caption: TableCaptionTokens;
}
export declare const table: TableTokens;
export {};
