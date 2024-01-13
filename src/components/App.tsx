import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { NavMenu } from "./common/NavMenu";
import { Header } from "./common/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./routes/Home";
import AddPost from "./routes/AddPost";
import EditPost from "./routes/EditPost";
import Base from "./../style/base"
import User from "./routes/User";
import Profile from "./routes/Profile";
import Photos from "./routes/Photos";
import ToDo from "./routes/TODO";
import Posts from "./routes/Posts";
import AlbumsList from "./routes/AlbumsList";

export const App = () => {
  return (
      <Base>
        <BrowserRouter basename="/React-PostOn">
          <div className="App">
            <Header />
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-post" element={<AddPost />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/todo/:id" element={<ToDo />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/edit-post/:id" element={<EditPost />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="/albums/:id" element={<AlbumsList />} />
                <Route path="/photos/:id" element={<Photos />} />
              </Routes>
            </Container>
            <ToastContainer />
            <Container>
              <NavMenu />
            </Container>
          </div>
        </BrowserRouter>
      </Base>
  );
};
