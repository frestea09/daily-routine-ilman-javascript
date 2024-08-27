import { useFetch } from "./useFetch";

const { data } = useFetch("/users");
console.log(data);
