"use client"


export default function PaiementContravention() {
    return (
        <>
            <div class="container mt-5">
                <div class="infos-contravention">
                    <div class="motif mb-3">
                        <h3>Motif de l'infraction :</h3>
                        <p id="motif-infraction">" Stationnement interdit "</p>
                    </div>
                    <div class="somme mb-3">
                        <h3>Somme à régler :</h3>
                        <p id="somme-a-regler">" 50€ "</p>
                    </div>
                </div>
        
                <form>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="nom" class="form-label">Nom :</label>
                            <input type="text" class="form-control" id="nom" placeholder="(ex: Dubois)" />
                        </div>
                        <div class="col-md-6">
                            <label for="prenom" class="form-label">Prénom :</label>
                            <input type="text" class="form-control" id="prenom" placeholder="(ex: Pierre)" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="adresse" class="form-label">Adresse physique :</label>
                            <input type="text" class="form-control" id="adresse" placeholder="(ex: 27 Rue De L'arbre, 56700 Morbihan)" />
                        </div>
                        <div class="col-md-6">
                            <label for="telephone" class="form-label">N° de téléphone :</label>
                            <input type="number" class="form-control" id="telephone" placeholder="(ex: 01 02 03 04 05)" maxLength="10" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="email" class="form-label">Adresse email :</label>
                            <input type="email" class="form-control" id="email" placeholder="(ex: monadressemail@gmail.com)" />
                        </div>
                        <div class="col-md-6">
                            <label for="carte" class="form-label">N° carte de paiement :</label>
                            <input type="number" maxLength={16} class="form-control" id="carte" placeholder="(ex: 1234 5678 9101 1121)" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="cryptogramme" class="form-label">Cryptogramme :</label>
                            <input type="number" class="form-control" id="cryptogramme" placeholder="(ex: 123)" maxLength={3}/>
                        </div>
                        <div class="col-md-6">
                            <label for="expiration" class="form-label">Date d'expiration :</label>
                            <input type="date" class="form-control" id="expiration" placeholder="(ex: 11/11)" maxLength="4" />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3 mb-3">Valider et payer :</button>
                </form>
            </div>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
        </>
    );
}