import type { NextPage } from "next";
import { Teacher } from "../@types/teacher";
import List from "../components/List";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Sr Clevelares",
      value: "R$ 400,00 por hora",
      description: "Professor de programação",
      photo: "/images/professor.jpg"
    },
    {
      id: 2,
      name: "Kevin Space",
      value: "R$ 450,00 por hora",
      description: "Professor de Brabeza language",
      photo: "/images/professor.jpg"
    }
  ];

  return (
    <>
      <div className={styles.container}>
        <List teachers={teachers} />
      </div>
    </>
  );
};

export default Home;
