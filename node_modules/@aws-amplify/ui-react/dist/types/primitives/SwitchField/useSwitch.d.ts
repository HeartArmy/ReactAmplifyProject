import React, { ChangeEvent } from 'react';
export declare const useSwitch: (props: any) => {
    isOn: any;
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    isFocused: boolean;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
};
