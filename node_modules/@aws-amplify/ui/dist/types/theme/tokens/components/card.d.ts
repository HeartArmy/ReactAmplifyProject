import { BackgroundColorValue, BorderColorValue, BorderRadiusValue, BorderStyleValue, BorderWidthValue, BoxShadowValue, DesignToken, SpaceValue } from '../types/designToken';
interface CardVariationTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    borderWidth: DesignToken<BorderWidthValue>;
    borderStyle: DesignToken<BorderStyleValue>;
    borderColor: DesignToken<BorderColorValue>;
    boxShadow: DesignToken<BoxShadowValue>;
}
export declare type CardTokens = CardVariationTokens & {
    padding: DesignToken<SpaceValue>;
    outlined: CardVariationTokens;
    elevated: CardVariationTokens;
};
export declare const card: CardTokens;
export {};
