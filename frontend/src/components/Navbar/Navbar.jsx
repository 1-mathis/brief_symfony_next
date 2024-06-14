"use client";

import Link from "next/link.js";
import "./navbar.css";
// import SearchBar from "../Search/Search.jsx";


export default function Navbar() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <header>
        <div className="logo-name-search-bar">
          <div className="logo-name">
            <h1></h1>
          </div>

          <div className="search-bar">
            <input
              type="search"
              name="searchBar"
              id="searchBar"
              placeholder="n° d'amende (ex: 123)"
            />
          </div>
        </div>

        <div className="logo-name">
          <h1>PayUrTaxes !</h1>
        </div>

        <div className="search-bar">
          <input
            type="search"
            name="searchBar"
            id="searchBar"
            placeholder="n° d'amende (ex: 123)"
          />

          {/* <SearchBar /> */}
        </div>

        <nav className="nav-pas-response" id="nav-pas-response">
          <Link href="/">Accueil</Link>
          <Link href="">Payer une amende</Link>
          <Link href="">Me connecter</Link>
          <Link href="">Me déconnecter</Link>
          <Link href="">Mon profil</Link>
        </nav>

        <nav className="nav-response" id="nav-bar">
          <span className="material-symbols-outlined" data-hover="Home">home</span>
          <div id="home-text" className="hover-text">Accueil</div>

          <span className="material-symbols-outlined" data-hover="Login">payments</span>
          <div id="login-text" className="hover-text">payer une amende</div>

          <span className="material-symbols-outlined" data-hover="Groups">login</span>
          <div id="groups-text" className="hover-text">me connecter</div>

          <span className="material-symbols-outlined" data-hover="Credit Card">logout</span>
          <div id="credit-card-text" className="hover-text">me déconnecter</div>

          <span className="material-symbols-outlined" data-hover="Login">person</span>
          <div id="login2-text" className="hover-text">mon profil</div>
        </nav>
      </header>
    </>
  );
}
