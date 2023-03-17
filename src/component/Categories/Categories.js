import React, { useState, useEffect } from "react";
import "./Categories.css";
import { NavLink, Link } from "react-router-dom";
import Details from "../Details";
import DataCategories from "../Data";

export default function Categories() {


  return (
    // <NavLink to={`/Details`}>
    <div className="boxes">
      {Object.keys(DataCategories).map((key) => (
        <button className={key}>
          <Link to={`/details/${key}`}>{DataCategories[key].title}</Link>
        </button>
      ))}
      {/* <input className="box1" value="ambasel" onClick={handleCategoryClick}/>
        <button className="box1">Bati</button>
        <button className="box1">Anchihoye</button>
        <button className="box1">Tizita</button> */}
    </div>

    // </NavLink>
  );
}
