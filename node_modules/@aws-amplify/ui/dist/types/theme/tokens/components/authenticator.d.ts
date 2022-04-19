import { DesignToken, ColorValue, SpaceValue, BorderWidthValue, BorderColorValue, BackgroundColorValue, BorderStyleValue, BoxShadowValue } from '../types/designToken';
interface AuthenticatorModalTokens {
    width: DesignToken<SpaceValue>;
    height: DesignToken<SpaceValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
    top: DesignToken<SpaceValue>;
    left: DesignToken<SpaceValue>;
}
interface AuthenticatorRouterTokens {
    borderWidth: DesignToken<BorderWidthValue>;
    borderStyle: DesignToken<BorderStyleValue>;
    borderColor: DesignToken<BorderColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
    boxShadow: DesignToken<BoxShadowValue>;
}
interface AuthenticatorFooterTokens {
    paddingBottom: DesignToken<SpaceValue>;
}
interface AuthenticatorFormTokens {
    padding: DesignToken<SpaceValue>;
}
interface AuthenticatorStateTokens {
    inactive: {
        backgroundColor: DesignToken<BackgroundColorValue>;
    };
}
interface AuthenticatorOrContainerTokens {
    color: DesignToken<ColorValue>;
    orLine: {
        backgroundColor: DesignToken<BackgroundColorValue>;
    };
}
interface AuthenticatorContainerToken {
    widthMax: DesignToken<SpaceValue>;
}
export interface AuthenticatorTokens {
    maxWidth: DesignToken<SpaceValue>;
    modal: AuthenticatorModalTokens;
    container: AuthenticatorContainerToken;
    router: AuthenticatorRouterTokens;
    footer: AuthenticatorFooterTokens;
    form: AuthenticatorFormTokens;
    state: AuthenticatorStateTokens;
    orContainer: AuthenticatorOrContainerTokens;
}
export declare const authenticator: AuthenticatorTokens;
export {};
