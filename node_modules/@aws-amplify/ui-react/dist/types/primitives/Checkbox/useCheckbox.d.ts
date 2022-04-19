import React, { ChangeEvent } from 'react';
export declare const useCheckbox: (initialChecked: boolean, onChangeProp: React.ChangeEventHandler) => {
    dataChecked: boolean;
    dataFocus: boolean;
    onBlur: () => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
    setDataChecked: React.Dispatch<React.SetStateAction<boolean>>;
};
