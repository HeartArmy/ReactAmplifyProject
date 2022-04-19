import { DesignToken, ObjectFitValue, PositionValue, SpaceValue } from '../types/designToken';
export interface ImageTokens {
    maxWidth: DesignToken<SpaceValue>;
    height: DesignToken<SpaceValue>;
    objectFit: DesignToken<ObjectFitValue>;
    objectPosition: DesignToken<PositionValue>;
}
export declare const image: ImageTokens;
