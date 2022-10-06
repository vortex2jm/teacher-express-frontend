import { Button } from "@mui/material";
import { Teacher } from "../@types/teacher";
import styles from "../styles/components/Item.module.css";

interface ItemProps {
  teacher: Teacher;
}

const Item = (props: ItemProps) => {
  return (
    <>
      <div className={styles.item}>
        <img src={props.teacher.photo} />
        <div>
          <h3>{props.teacher.name}</h3>
          <p>{props.teacher.value}</p>
          <p>{props.teacher.description}</p>
          <Button variant="contained" color="primary">
            Contact
          </Button>
        </div>
      </div>
    </>
  );
};

export default Item;
