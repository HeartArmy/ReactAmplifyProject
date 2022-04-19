/**
 * Helper function to test if something is a design token or not.
 * Used in the React component style props.
 *
 * @param arg - thing to test if it is a design token or not
 * @returns boolean
 */
export declare function isDesignToken(arg: unknown): arg is WebDesignToken;
/**
 *
 */
export declare type DesignToken<ValueType = any> = {
    value: ValueType;
};
/**
 * A fully setup design token ready to be used in web platform.
 */
export declare type WebDesignToken<ValueType = any> = {
    /**
     * Name of the design token
     */
    name: string;
    /**
     * Object path of the design token. Used for constructing the name
     */
    path: Array<string>;
    /**
     * Original (unresolved, untransformed) value of the design token
     */
    original: ValueType;
    /**
     * The wrapped CSS variable name of this design token, for example
     * `var(--amplify-colors-font-primary)`
     */
    toString(): string;
} & DesignToken<ValueType>;
export declare type AnimationDurationValue = string;
export declare type AnimationTimingFunctionValue = string;
export declare type AlignItemsValue = string;
export declare type AlignContentValue = string;
export declare type BackgroundColorValue = ColorValue;
export declare type BorderColorValue = ColorValue;
export declare type BorderCollapseValue = string;
export declare type BorderRadiusValue = RadiusValue;
export declare type BorderStyleValue = string;
export declare type BorderWidthValue = SpaceValue;
export declare type BorderValue = string;
export declare type BoxSizingValue = string;
export declare type BoxShadowValue = ShadowValue;
export declare type CaptionSideValue = string;
export declare type ColorValue = string;
export declare type CursorValue = string;
export declare type DisplayValue = string;
export declare type FlexDirectionValue = string;
export declare type FlexValue = string;
export declare type FlexWrapValue = string;
export declare type FontSizeValue = string;
export declare type FontStyleValue = string;
export declare type FontValue = string;
export declare type FontWeightValue = string | number;
export declare type GapValue = string;
export declare type JustifyContentValue = string;
export declare type LineHeightValue = string | number;
export declare type ObjectFitValue = string;
export declare type OpacityValue = string;
export declare type OutlineOffsetValue = string;
export declare type OutlineWidthValue = string;
export declare type OutlineColorValue = string;
export declare type OutlineStyleValue = string;
export declare type PositionValue = string;
export declare type PointerEventsValue = string;
export declare type RadiusValue = string;
export declare type ShadowValue = {
    offsetX: string;
    offsetY: string;
    blurRadius: string;
    spreadRadius?: string;
    color: string;
} | string;
export declare type StrokeFilledValue = string;
export declare type StrokeEmptyValue = string;
export declare type StrokeLinecapValue = string;
export declare type SpaceValue = string;
export declare type TextAlignValue = string;
export declare type TimeValue = string;
export declare type TransformValue = string;
export declare type TransitionDurationValue = string;
export declare type TransitionPropertyValue = string;
export declare type TransitionTimingFunctionValue = string;
export declare type VerticalAlignValue = string;
export declare type WhiteSpaceValue = string;
export declare type WordBreakValue = string;
