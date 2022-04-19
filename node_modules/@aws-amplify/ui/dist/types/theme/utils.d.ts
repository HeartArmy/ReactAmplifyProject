import { DesignToken } from './tokens/types/designToken';
export declare const CSS_VARIABLE_PREFIX = "amplify";
export declare function cssValue(token: DesignToken): any;
interface NameTransformProps {
    path?: Array<string>;
}
export declare function cssNameTransform({ path }: NameTransformProps): string;
export {};
