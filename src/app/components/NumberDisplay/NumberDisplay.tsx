import {Typography} from "@/app/components/common/Typography/Typography";
import styles from './NumberDisplay.module.css';

interface Props {
    numberText: string;
    isActive: boolean;
}


export const NumberDisplay = ({numberText, isActive = false}: Props) => {

    return (
        <div className={styles.wrapper}>
            <Typography variant={'number'} style={{color: isActive ? '' : '#111111'}}>{numberText}</Typography>
        </div>
    )
};


