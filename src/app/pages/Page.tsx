import {Wrapper} from "@/app/components/common/Wrapper/Wrapper";
import {NumberDisplay} from "@/app/components/NumberDisplay/NumberDisplay";
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import {textData} from "@/app/textData";
import styles from "./Page.module.css";


export const Page = () => {
    return (
        <Wrapper>
            <div>
            {textData.map((item, index) => (
                <div key={index} className={styles.wrapper}>
                    <div className={styles.numberText}>
                        <NumberDisplay numberText={item.number} isActive={index === 0} />
                    </div>
                    <div>
                        <TextBlock title={item.title} subtitle={item.subtitle} isActive={index === 0} />
                    </div>
                </div>
            ))}
            </div>
        </Wrapper>
    )
};
