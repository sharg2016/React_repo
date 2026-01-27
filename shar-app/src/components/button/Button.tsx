import React, {ReactHTMLElement, ReactNode, useCallback, useMemo} from "react";

export interface ButtonProps{
    className?:string;
    state?: 'solid'|'outlined'|'ghost'|'text-only';
    size?: 'small'|'medium'|'large';
    onClick?: any;
    onHover?:any;
    cursor?:string;
    styles?:object;
    isDisabled?:boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    text?:string;
    title?:string;
    ariaLabel?:string;
    tabIndex?:number;

}

const Button : React.FC<ButtonProps> = ({
    className,
    state ='solid',
    size='small',
    onClick,
    isDisabled=false,
    title,
    leadingIcon,
    trailingIcon,
    text='submit',
    ariaLabel,
    styles={},
    cursor = 'pointer',

})=> {
    const buttonClasses = useMemo(()=> {
        let classesStr = `${className} ${cursor} btn-primary`;

        if (text){
            classesStr = `${classesStr} btn-${size}`
        }
        else{
            classesStr = `${classesStr} btn-circle-${size}`
        }

        if(isDisabled){
            classesStr = `${classesStr} btn-disabled-${state}`
        }
        else{
            classesStr = `${classesStr} btn-${state}`
        }

        return classesStr;
    },[className , cursor , text , size , state , isDisabled]);


    const handleClick= useCallback((event: React.MouseEvent<HTMLDivElement , MouseEvent>) =>
    {
        if(!isDisabled && onClick){
            onClick(event);
        }
    },[isDisabled , onClick]);

    const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) =>{
        if(event.key === 'Enter' && !isDisabled && onClick){
            onClick(event as unknown as React.MouseEvent<HTMLDivElement ,MouseEvent>);
        }
    }, [isDisabled , onClick]);

    return(
        <div
         onClick={handleClick}
         onKeyDown={handleKeyDown}
         style={styles}
         className = {buttonClasses}
         title={title}
        >
             {leadingIcon && <leadingIcon/>}
    {text && <span>{text}</span>}
    {trailingIcon && <trailingIcon/>}
        </div>
    );
};

export default Button;