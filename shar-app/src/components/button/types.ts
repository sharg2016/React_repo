import React from "react";

export interface ButtonProps {
    className?: string;
    state?: 'solid' | 'outlined' | 'ghost' | 'text-only';
    size?: 'small' | 'medium' | 'large';
    onClick?: any;
    onHover?: any;
    cursor?: string;
    styles?: object;
    isDisabled?: boolean;
    LeadingIcon?: React.ElementType;
    TrailingIcon?: React.ElementType;
    text?: string;
    title?: string;
    ariaLabel?: string;
    tabIndex?: number;

}