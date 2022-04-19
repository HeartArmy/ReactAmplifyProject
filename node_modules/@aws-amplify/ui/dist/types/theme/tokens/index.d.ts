import { BorderWidths, WebBorderWidths } from './borderWidths';
import { Colors, WebColors } from './colors';
import { ComponentTokens } from './components';
import { Fonts, WebFonts } from './fonts';
import { FontSizes, WebFontSizes } from './fontSizes';
import { FontWeights, WebFontWeights } from './fontWeights';
import { LineHeights, WebLineHeights } from './lineHeights';
import { Opacities, WebOpacities } from './opacities';
import { OutlineOffsets, WebOutlineOffsets } from './outlineOffsets';
import { OutlineWidths, WebOutlineWidths } from './outlineWidths';
import { Radii, WebRadii } from './radii';
import { Shadows, WebShadows } from './shadows';
import { Space, WebSpace } from './space';
import { Time, WebTime } from './time';
import { Transforms, WebTransforms } from './transforms';
export interface Tokens {
    components: ComponentTokens;
    borderWidths: BorderWidths;
    colors: Colors;
    fonts: Fonts;
    fontSizes: FontSizes;
    fontWeights: FontWeights;
    lineHeights: LineHeights;
    opacities: Opacities;
    outlineOffsets: OutlineOffsets;
    outlineWidths: OutlineWidths;
    radii: Radii;
    shadows: Shadows;
    space: Space;
    time: Time;
    transforms: Transforms;
}
/**
 * The fully setup theme tokens. It has the same shape as Tokens
 * but each token has added fields.
 */
export interface WebTokens extends Tokens {
    borderWidths: WebBorderWidths;
    colors: WebColors;
    fonts: WebFonts;
    fontSizes: WebFontSizes;
    fontWeights: WebFontWeights;
    lineHeights: WebLineHeights;
    opacities: WebOpacities;
    outlineOffsets: WebOutlineOffsets;
    outlineWidths: WebOutlineWidths;
    radii: WebRadii;
    shadows: WebShadows;
    space: WebSpace;
    time: WebTime;
    transform: WebTransforms;
}
export declare const tokens: Tokens;
