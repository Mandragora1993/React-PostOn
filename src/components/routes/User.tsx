import { Link, Outlet, useParams } from "react-router-dom";
import { useGetUserById } from "../../api/user/useGetUserById";
import { UserCard } from "./../../components/common/UserCard";
import { Button, CircularProgress } from "@mui/material";
import './../../style/buttons.scss';
import './../../style/icon.css';
import ReplyIcon from '@mui/icons-material/Reply';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import './../../style/circular.scss';


export default function User() {
  const { id } = useParams();
  const user = useGetUserById(id || "");

  if (!user) {
    return <CircularProgress className='circular' />;
  }

  return (
    <div className="user">
      <UserCard
        name={`Imię: ${user.name}`}
        email={`Email: ${user.email}`}
        address={`Adres: ${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`}
        phone={`Telefon: ${user.phone}`}
      >
        <Button
          className="previousButton"
          size="large"
          component={Link}
          to={`/`}
          variant="contained"
        ><ReplyIcon className="icon" /> Powrót
        </Button>
        <Button
          className="cardButton"
          size="large"
          component={Link}
          to={`/albums/${user.id}`}
          variant="contained"
        ><PhotoLibraryIcon className="icon" /> Albumy
        </Button>
      </UserCard>
      <Outlet />
    </div>
  );
}
