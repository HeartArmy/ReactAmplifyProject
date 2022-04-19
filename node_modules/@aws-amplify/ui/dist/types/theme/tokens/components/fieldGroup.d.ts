import { DesignToken, AlignItemsValue, GapValue } from '../types/designToken';
interface FieldGroupVerticalTokens {
    alignItems: DesignToken<AlignItemsValue>;
}
interface FieldGroupOuterTokens {
    alignItems: DesignToken<AlignItemsValue>;
}
export interface FieldGroupTokens {
    gap: DesignToken<GapValue>;
    vertical: FieldGroupVerticalTokens;
    outer: FieldGroupOuterTokens;
}
export declare const fieldgroup: FieldGroupTokens;
export {};
