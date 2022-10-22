import { Button } from "@mui/material";
import { ItemProps } from "../@types/item";
import styles from "../styles/components/Item.module.css";

const Item = (props: ItemProps) => {
  return (
    <>
      <div className={styles.item}>
        <img src={props.teacher.photo} />
        <div>
          <h3>{props.teacher.name}</h3>
          <p>
            {props.teacher.value.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          </p>
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
