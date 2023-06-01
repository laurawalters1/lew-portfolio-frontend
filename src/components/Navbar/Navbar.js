import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="div sticky-top bg-white">
      <navbar className="nav">
        <a className="a" href="/">
          Home
        </a>
        <a className="a" href="/projects">
          Projects
        </a>
        {/* <a className="a" href="/blog">
          Blog
        </a> */}
      </navbar>
    </div>
  );
}
