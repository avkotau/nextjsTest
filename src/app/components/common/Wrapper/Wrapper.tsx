import styles from './Wrapper.module.css';
import {ReactNode} from "react";

interface WrapperProps {
    children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
    return <div className={styles.component}>{children}</div>
};


