import { Button } from "@mui/material";
import styles from "../styles/components/Item.module.css"

const Item = () => {

    return(
        <>
            <div className={styles.item}>
                <img src="/images/professor.jpg"/>
                <div>
                    <h3>Name</h3>
                    <p>Value</p>
                    <p>Description</p>
                    <Button variant="contained" color="primary">Contact</Button>
                </div>
            </div>
        </>
    )
}

export default Item;
