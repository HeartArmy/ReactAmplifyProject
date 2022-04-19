import { DesignToken, ColorValue, FontStyleValue, FontSizeValue } from '../types/designToken';
interface FieldMessagesErrorTokens {
    color: DesignToken<ColorValue>;
    fontSize: DesignToken<FontSizeValue>;
}
interface FieldMessagesDescriptionTokens {
    color: DesignToken<ColorValue>;
    fontStyle: DesignToken<FontStyleValue>;
    fontSize: DesignToken<FontSizeValue>;
}
export interface FieldMessagesTokens {
    error: FieldMessagesErrorTokens;
    description: FieldMessagesDescriptionTokens;
}
export declare const fieldmessages: FieldMessagesTokens;
export {};
