import { Teacher } from "../@types/teacher";
import api from "./api";

export async function getTeachers(): Promise<Teacher[]>{
  return api.get("teachers").then(res => res.data);
}
