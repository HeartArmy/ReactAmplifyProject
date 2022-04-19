import * as React from 'react';
import { ToggleButtonProps } from '../types';
export declare const useToggleButton: ({ isPressed, defaultPressed, onClick, onChange, value, }: ToggleButtonProps) => {
    isPressed: boolean;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
