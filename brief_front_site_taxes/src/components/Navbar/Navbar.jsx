"use client";

import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />    
    <header>
      <div class="logo-name-search-bar">
        <div class="logo-name">
          <h1>Titre</h1>
        </div>

        <div class="search-bar">
          <input
            type="search"
            name="searchBar"
            id="searchBar"
            placeholder="Rechercher..."
          />
        </div>
      </div>

      <div class="logo-name">
        <img src="/logo.png" alt="logo de Chuan" />
        <h1>Titre</h1>
      </div>

      <div class="search-bar">
        <input
          type="search"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher..."
        />
      </div>

      <nav class="nav-pas-response" id="nav-pas-response">
        <a href="#accueil">Accueil</a>
        <a href="#consultations">lien 2</a>
        <a href="#description">lien 3</a>
        <a href="#carte">Lien 4</a>
        <a href="#contact">Lien 5</a>
        <a href="#connection">Lien 6</a>
      </nav>

      <nav class="nav-response" id="nav-bar">
        <span class="material-symbols-outlined" data-hover="Home">captive_portal</span>
        <div id="home-text" class="hover-text">Lien 1</div>

        <span class="material-symbols-outlined" data-hover="Login">
          captive_portal
        </span>
        <div id="login-text" class="hover-text">Lien 2</div>

        <span class="material-symbols-outlined" data-hover="Groups">
          captive_portal
        </span>
        <div id="groups-text" class="hover-text">Lien 3</div>

        <span class="material-symbols-outlined" data-hover="Credit Card">
          captive_portal
        </span>
        <div id="credit-card-text" class="hover-text">
          Lien 4
        </div>

        <span class="material-symbols-outlined" data-hover="Contact Mail">
          captive_portal
        </span>
        <div id="contact-mail-text" class="hover-text">Lien 5</div>

        <span class="material-symbols-outlined" data-hover="Login">
          captive_portal
        </span>
        <div id="login2-text" class="hover-text">Lien 6</div>
      </nav>
    </header>
    </>
  );
}
