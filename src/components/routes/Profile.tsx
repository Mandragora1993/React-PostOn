import { Link, Outlet, useParams } from "react-router-dom";
import { ProfileCard } from "./../../components/common/ProfileCard";
import { Button, CircularProgress } from "@mui/material";
import { useGetUserById } from "../../api/user/useGetUserById";
import './../../style/circular.scss';
import ReplyIcon from '@mui/icons-material/Reply';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';


export default function Profile() {
  const { id } = useParams();
  const user = useGetUserById(id || "");

  if (!user) {
    return <CircularProgress className='circular' />;
  }

  return (
    <div className="user">
      <ProfileCard>
        <Button
          className="previousButton"
          size="large"
          component={Link}
          to={`/`}
          variant="contained"
        >
          <ReplyIcon className="icon" />Powrót
        </Button>
        <Button
          className="cardButton"
          size="large"
          component={Link}
          to={`/todo/${user.id}`}
          variant="contained"
        >
          <ChecklistIcon className="icon" />TODO
        </Button>
        <Button
          className="cardButton"
          size="large"
          component={Link}
          to={`/posts`}
          variant="contained"
        >
          <DynamicFeedIcon className="icon" />Posty
        </Button>
      </ProfileCard>

      <Outlet />
    </div>
  );
}
