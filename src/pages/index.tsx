import type { NextPage } from "next";
import { Teacher } from "../@types/teacher";
import List from "../components/List";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Sr Clevelares",
      value: 400,
      description: "Professor de programação",
      photo: "/images/professor.jpg"
    },
    {
      id: 2,
      name: "Kevin Space",
      value: 450,
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
