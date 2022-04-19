import { AlignItemsValue, AnimationDurationValue, AnimationTimingFunctionValue, BackgroundColorValue, BorderRadiusValue, BoxShadowValue, ColorValue, DesignToken, DisplayValue, JustifyContentValue, RadiusValue, SpaceValue, TransitionDurationValue, TransitionTimingFunctionValue } from '../types/designToken';
interface ExpanderItemFocusTokens {
    boxShadow: DesignToken<BoxShadowValue>;
}
interface ExpanderItemTokens {
    marginTop: DesignToken<SpaceValue>;
    boxShadow: DesignToken<BoxShadowValue>;
    borderBottomLeftRadius: DesignToken<RadiusValue>;
    borderBottomRightRadius: DesignToken<RadiusValue>;
    borderTopLeftRadius: DesignToken<RadiusValue>;
    borderTopRightRadius: DesignToken<RadiusValue>;
    borderStartStartRadius: DesignToken<RadiusValue>;
    borderStartEndRadius: DesignToken<RadiusValue>;
    borderEndStartRadius: DesignToken<RadiusValue>;
    borderEndEndRadius: DesignToken<RadiusValue>;
    _focus: ExpanderItemFocusTokens;
}
interface ExpanderHeaderTokens {
    boxShadow: DesignToken<BoxShadowValue>;
}
interface ExpanderTriggerTokens {
    minHeight: DesignToken<SpaceValue>;
    paddingInlineStart: DesignToken<SpaceValue>;
    paddingInlineEnd: DesignToken<SpaceValue>;
    alignItems: DesignToken<AlignItemsValue>;
    justifyContent: DesignToken<JustifyContentValue>;
    _hover: ExpanderTriggerHoverTokens;
}
interface ExpanderTriggerHoverTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface ExpanderContentTokens {
    paddingInlineStart: DesignToken<SpaceValue>;
    paddingInlineEnd: DesignToken<SpaceValue>;
    text: ExpanderContentTextTokens;
    _open: ExpanderContentOpenTokens;
    _closed: ExpanderContentClosedTokens;
}
interface ExpanderContentTextTokens {
    color: DesignToken<ColorValue>;
    paddingBlockStart: DesignToken<SpaceValue>;
    paddingBlockEnd: DesignToken<SpaceValue>;
}
interface ExpanderContentOpenTokens {
    animationDuration: DesignToken<AnimationDurationValue>;
    animationTimingFunction: DesignToken<AnimationTimingFunctionValue>;
}
interface ExpanderContentClosedTokens {
    animationDuration: DesignToken<AnimationDurationValue>;
    animationTimingFunction: DesignToken<AnimationTimingFunctionValue>;
}
interface ExpanderIconTokens {
    transitionDuration: DesignToken<TransitionDurationValue>;
    transitionTimingFunction: DesignToken<TransitionTimingFunctionValue>;
}
export interface ExpanderTokens {
    display: DesignToken<DisplayValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    boxShadow: DesignToken<BoxShadowValue>;
    width: DesignToken<SpaceValue>;
    item: ExpanderItemTokens;
    header: ExpanderHeaderTokens;
    trigger: ExpanderTriggerTokens;
    content: ExpanderContentTokens;
    icon: ExpanderIconTokens;
}
export declare const expander: ExpanderTokens;
export {};
