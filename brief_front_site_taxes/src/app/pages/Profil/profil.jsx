"use client"

import Navbar from "@/components/Navbar/Navbar.jsx";
import "./page.css";

export default function Page() {
  return (
    <>
    <main>
    <div class="container mt-5">
        <h1>Informations personnelles</h1>
        <form>
            <div class="mb-3">
                <label for="email" class="form-label">E-mail</label>
                <input type="text" class="form-control" id="email" placeholder="E-mail" />
            </div>
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control" id="nom" placeholder="Nom" />
            </div>
            <div class="mb-3">
                <label for="prenom" class="form-label">Prénom</label>
                <input type="text" class="form-control" id="prenom" placeholder="Prénom" />
            </div>
            <div class="mb-3">
                <label for="adresse" class="form-label">Adresse</label>
                <input type="text" class="form-control" id="adresse" placeholder="Adresse" />
            </div>
            <button type="submit" class="btn btn-primary">Modifier et enregistrer</button>
        </form>
    </div>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </main>
    </>
  )
}
