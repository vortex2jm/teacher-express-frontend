import Item from "./Item";
import styles from "../styles/components/List.module.css";
import { ListProps } from "../@types/list";

const List = (props: ListProps) => {
  return (
    <>
      {props.teachers.length > 0 ? (
        <ul className={styles.list}>
          {props.teachers.map((teacher) => (
            <li>
              <Item teacher={teacher} key={teacher.id}/>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles.voidListMessage}>Nenhum professor encontrado!</h2>
      )}
    </>
  );
};

export default List;
