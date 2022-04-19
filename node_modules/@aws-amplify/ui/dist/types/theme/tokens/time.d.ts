import { DesignToken, WebDesignToken, TimeValue } from './types/designToken';
export declare type Time = {
    short: DesignToken<TimeValue>;
    medium: DesignToken<TimeValue>;
    long: DesignToken<TimeValue>;
};
export declare type WebTime = {
    [Property in keyof Time]: WebDesignToken<TimeValue>;
};
export declare const time: Time;
