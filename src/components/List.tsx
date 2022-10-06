import Item from "./Item";
import styles from "../styles/components/List.module.css"

const List = () => {

    return(
        <>
            <ul >
                <li className={styles.list}>
                    <Item/>
                    <Item/>
                </li>
            </ul>
        </>
    )
}

export default List;