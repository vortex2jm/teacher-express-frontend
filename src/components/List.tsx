import Item from "./Item";
import styles from "../styles/components/List.module.css"

const List = () => {

    return(
        <>
            <ul className={styles.list}>
                <li><Item/></li>
                <li><Item/></li>
                <li><Item/></li>
                <li><Item/></li>
                <li><Item/></li>
                <li><Item/></li>
                <li><Item/></li>
            </ul>
        </>
    )
}

export default List;
