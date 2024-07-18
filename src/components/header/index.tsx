"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./style.scss";
import logo from "../../assets/images/logo-bg.png";

import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import {Menu} from "@/const/menu";

function Header() {

  return (
    <>
      <header className="header animate__animated animate__bounce">
        <Navbar expand="lg" className="bg-white">
          <Container>
            <Navbar.Brand href={"/"}>
              <Image className="" src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="my-2 my-lg-0" navbarScroll>
                {Menu.map((value:any) => 
                  <Nav.Link key={value.id} href={value.url}>{value.name}</Nav.Link>
                )}
              </Nav>
              <div className="btns_wrap mx-4">
                <Button variant="btnSecondary" href="/">
                  Sign Up
                </Button>
                <Button className="btnprimary">Login In</Button>
              </div>
            </Navbar.Collapse>
            <div className="btns_wrap">
              <Button variant="btnSecondary">
                Sign Up
              </Button>
              <Button className="btnprimary">
                Login In
              </Button>
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
export default Header;
