import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Teacher } from "../@types/teacher";
import List from "../components/List";
import { getTeachers } from "../services/getTeacher";
import styles from "../styles/Home.module.css";


const Home: NextPage = () => {

  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(()=>{
    getTeachers()
    .then(setTeachers)
    .catch(error => console.log(error));
  },[]);

  return (
    <>
      <div className={styles.container}>
        <List teachers={teachers} />
      </div>
    </>
  );
};

export default Home;
