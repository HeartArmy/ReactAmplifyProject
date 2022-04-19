import { ColorValue, DesignToken, FontSizeValue, GapValue } from '../types/designToken';
interface FieldSizeTokens {
    gap: DesignToken<GapValue>;
    fontSize: DesignToken<FontSizeValue>;
}
interface FieldLabelTokens {
    color: DesignToken<ColorValue>;
}
export interface FieldTokens {
    gap: DesignToken<GapValue>;
    fontSize: DesignToken<FontSizeValue>;
    small: FieldSizeTokens;
    large: FieldSizeTokens;
    label: FieldLabelTokens;
}
export declare const field: FieldTokens;
export {};
