"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link.js";
import components from "react";

export default function Home() {
  return (
    <>
      <Main>
        <h1>Mes informations personnelles</h1>
        <h1>Payer une taxe</h1>
        <h1>Mes règlements enregistrés :</h1>
      </Main>
    </>
  );
}
