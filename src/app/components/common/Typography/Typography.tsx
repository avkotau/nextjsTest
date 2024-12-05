import React, {CSSProperties} from "react";
import styles from "./Typography.module.css";

interface TypographyProps {
    variant: "number" | "title" | "subtitle";
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}

export const Typography = ({ variant, children, style: customStyle = {}, className = "", ...rest }: TypographyProps) => {

    const classNames = {
        number: styles.number,
        title: styles.title,
        subtitle: styles.subtitle,
    };

    const classNameToApply = `${classNames[variant]} ${className}`;

    return (
        <div className={classNameToApply} style={customStyle} {...rest}>
            {children}
        </div>
    );
};
