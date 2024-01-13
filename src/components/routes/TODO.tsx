import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetToDoByUserId } from "../../api/todo/useGetToDoByUser";
import Table from "../common/ListToDo";
import './../../style/circular.scss';


export default function ToDo() {
  const { id } = useParams();
  const toDo = useGetToDoByUserId(id || "");

  if (!toDo) {
    return <CircularProgress className='circular' />;
  }

  return (
    <div>
      <Table data={toDo} />
    </div>
  );
};
