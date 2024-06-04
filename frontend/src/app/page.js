"use client"


import FormulaireConnexion from "@/components/FormulaireConnexion/FormulaireConnexion.jsx";
import Navbar from "@/components/Navbar/Navbar.jsx";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <body>
        <Navbar />
        <FormulaireConnexion/>
      </body>
    </>
  );
}
