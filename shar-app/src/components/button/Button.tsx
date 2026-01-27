import React, {ReactHTMLElement, ReactNode, useCallback, useMemo} from "react";
import './Button.css'

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

const Button: React.FC<ButtonProps> = ({
                                           className,
                                           state = 'solid',
                                           size = 'small',
                                           onClick,
                                           isDisabled = false,
                                           title,
                                           LeadingIcon,
                                           TrailingIcon,
                                           text = 'submit',
                                           ariaLabel,
                                           styles = {},
                                           cursor = 'pointer',

                                       }) => {
    const buttonClasses = useMemo(() => {
        let classesStr = `${className} ${cursor} btn-primary`;

        if (text) {
            classesStr = `${classesStr} btn-${size}`
        } else {
            classesStr = `${classesStr} btn-circle-${size}`
        }

        if (isDisabled) {
            classesStr = `${classesStr} btn-disabled-${state}`
        } else {
            classesStr = `${classesStr} btn-${state}`
        }

        return classesStr;
    }, [className, cursor, text, size, state, isDisabled]);


    const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isDisabled && onClick) {
            onClick(event);
        }
    }, [isDisabled, onClick]);

    const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' && !isDisabled && onClick) {
            onClick(event as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>);
        }
    }, [isDisabled, onClick]);

    return (
        <div
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            style={styles}
            className={buttonClasses}
            title={title}
        >
            {LeadingIcon && <LeadingIcon/>}
            {text && <span>{text}</span>}
            {TrailingIcon && <TrailingIcon/>}
        </div>
    );
};

export default Button;