import React, {ReactNode} from "react";

export interface BadgeProps{
    className?:string;
    count?:number;
    maxCount?:number;
    position?: 'top-left'|'top-right'|'bottom-left' |'bottom-right';
    children?: ReactNode;
    showZero?:boolean;
    ariaLabel?:string;
    color?:string;
}

const Badge : React.FC<BadgeProps> = ({
    children,
    count,
    maxCount= 99,
    showZero= false,
    position = 'top-left',
    className,
    color= '#E00914',
    ariaLabel
})=> {
    const shouldShowBadge = count !== undefined ? (count>0 || showZero) : true;

    const displayCount = count!== undefined && count > maxCount ? `${maxCount}+` : count?.toString();

    const isDotBadge = count === undefined;

    const getAriaLabel =(): string => {
        if(ariaLabel) return ariaLabel;
        if(count !== undefined){
            count === 1 ? '1 unread notifications' : `${count} unread notifications`;
        }
        return 'New notification';
    }

    if(!shouldShowBadge){
        return <div className="badge-wrapper">{children}</div>
    }

    return(
        <div className={`badge-wrapper badge-position-${position} ${className}`}>
            {children}
            <span className={ `badge-comp ${isDotBadge ? 'badge-dot' : 'badge-count'}`}
                  style={ { backgroundColor : color}}
                  aria-label={getAriaLabel()}
                  >
                {!isDotBadge && (
                    <span className="badge-content" aria-hidden='true'>
                        {displayCount}
                    </span>
                )}
            </span>
        </div>
    );
};

export default Badge;
