import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './../App.css';
import { Routes, Route, Link } from "react-router-dom"
import Posts from "./posts/Posts";
import Comments from "./comments/Comments";
import Album from "./albums/Album";
import Photos from "./photos/Photos";

function Header() {

    return (
        <>
            <Navbar expand="lg" className="hed">
                <Container>
                    <Navbar.Brand href="#home" className="color1">Json Placeholder</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" className="main">
                        <Nav className="m-1 ">
                            <Nav.Link href="#home" className="manu">
                                <Link to="/"  className="color">Posts</Link>
                            </Nav.Link>
                            <Nav.Link href="#link" className="manu">
                                <Link to="/comments" className="color">Comments</Link>
                            </Nav.Link>
                            <Nav.Link href="#link" className="manu">
                                <Link to="/albumes" className="color">Albums</Link>
                            </Nav.Link>
                            <Nav.Link href="#link" className="manu">
                                <Link to="/photos" className="color">Photos</Link>
                            </Nav.Link>
                            <Nav.Link href="#link" className="manu">
                                <Link to="/comments" className="color">Todos</Link>
                            </Nav.Link>
                            <Nav.Link href="#link" className="manu">
                                <Link to="/comments" className="color">Users</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/albumes" element={<Album />} />
                <Route path="/photos" element={<Photos />} />
            </Routes>
        </>
    )

}

export default Header;