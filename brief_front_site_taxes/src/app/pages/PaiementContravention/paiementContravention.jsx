"use client"

import "./formulaireConnexion.css";

export default function FormulaireConnexion() {
    return (
        <>
            <div class="container mt-5">
                <div class="infos-contravention">
                    <div class="motif mb-3">
                        <h3>Motif de l'infraction</h3>
                        <p id="motif-infraction">Stationnement interdit</p>
                    </div>
                    <div class="somme mb-3">
                        <h3>Somme à régler</h3>
                        <p id="somme-a-regler">50€</p>
                    </div>
                </div>
        
                <form>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="nom" class="form-label">Nom</label>
                            <input type="text" class="form-control" id="nom" placeholder="Nom" />
                        </div>
                        <div class="col-md-6">
                            <label for="prenom" class="form-label">Prénom</label>
                            <input type="text" class="form-control" id="prenom" placeholder="Prénom" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="adresse" class="form-label">Adresse</label>
                            <input type="text" class="form-control" id="adresse" placeholder="Adresse" />
                        </div>
                        <div class="col-md-6">
                            <label for="telephone" class="form-label">N° de téléphone</label>
                            <input type="text" class="form-control" id="telephone" placeholder="N° de téléphone" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="email" class="form-label">Adresse email</label>
                            <input type="email" class="form-control" id="email" placeholder="Adresse email" />
                        </div>
                        <div class="col-md-6">
                            <label for="carte" class="form-label">N° carte de paiement</label>
                            <input type="text" class="form-control" id="carte" placeholder="N° carte de paiement" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="cryptogramme" class="form-label">Cryptogramme</label>
                            <input type="text" class="form-control" id="cryptogramme" placeholder="Cryptogramme" />
                        </div>
                        <div class="col-md-6">
                            <label for="expiration" class="form-label">Date d'expiration</label>
                            <input type="text" class="form-control" id="expiration" placeholder="Date d'expiration" />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Valider et payer</button>
                </form>
            </div>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
        </>
    );
}