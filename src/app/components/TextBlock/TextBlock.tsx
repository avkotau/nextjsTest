import {Typography} from "@/app/components/common/Typography/Typography";
import styles from "./TextBlock.module.css";

interface Props {
    title: string;
    subtitle: string;
    isActive: boolean;
}


export const TextBlock = ({ title, subtitle, isActive }: Props) => {
    return (
        <div className={isActive ? styles.borderActive : styles.borderUnActive}>
            <div className={styles.textWrapper}>
                <Typography variant="title" >{title}</Typography>
                <Typography variant="subtitle" >{subtitle}</Typography>
            </div>

        </div>
    )
};
