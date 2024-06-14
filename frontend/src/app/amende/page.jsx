// import Link from 'next/link.js';
// import React from 'react'

// export default function page() {
//     return (
//         <>

//             <Link href={`/accueil`}>choisir la page</Link>

//             <div class="container mt-5">
//                 <div class="infos-contravention">
//                     <div class="motif mb-3">
//                         <h3>Motif de l'infraction :</h3>
//                         <p id="motif-infraction">" Stationnement interdit "</p>
//                     </div>
//                     <div class="somme mb-3">
//                         <h3>Somme à régler :</h3>
//                         <p id="somme-a-regler">" 50€ "</p>
//                     </div>
//                 </div>
        
//                 <form>
//                     <div class="row mb-3">
//                         <div class="col-md-6">
//                             <label for="nom" class="form-label">Nom :</label>
//                             <input type="text" class="form-control" id="nom" placeholder="(ex: Dubois)" />
//                         </div>
//                         <div class="col-md-6">
//                             <label for="prenom" class="form-label">Prénom :</label>
//                             <input type="text" class="form-control" id="prenom" placeholder="(ex: Pierre)" />
//                         </div>
//                     </div>
//                     <div class="row mb-3">
//                         <div class="col-md-6">
//                             <label for="adresse" class="form-label">Adresse physique :</label>
//                             <input type="text" class="form-control" id="adresse" placeholder="(ex: 27 Rue De L'arbre, 56700 Morbihan)" />
//                         </div>
//                         <div class="col-md-6">
//                             <label for="telephone" class="form-label">N° de téléphone :</label>
//                             <input type="number" class="form-control" id="telephone" placeholder="(ex: 01 02 03 04 05)" maxLength="10" />
//                         </div>
//                     </div>
//                     <div class="row mb-3">
//                         <div class="col-md-6">
//                             <label for="email" class="form-label">Adresse email :</label>
//                             <input type="email" class="form-control" id="email" placeholder="(ex: monadressemail@gmail.com)" />
//                         </div>
//                         <div class="col-md-6">
//                             <label for="carte" class="form-label">N° carte de paiement :</label>
//                             <input type="number" maxLength={16} class="form-control" id="carte" placeholder="(ex: 1234 5678 9101 1121)" />
//                         </div>
//                     </div>
//                     <div class="row mb-3">
//                         <div class="col-md-6">
//                             <label for="cryptogramme" class="form-label">Cryptogramme :</label>
//                             <input type="number" class="form-control" id="cryptogramme" placeholder="(ex: 123)" maxLength={3}/>
//                         </div>
//                         <div class="col-md-6">
//                             <label for="expiration" class="form-label">Date d'expiration :</label>
//                             <input type="date" class="form-control" id="expiration" placeholder="(ex: 11/11)" maxLength="4" />
//                         </div>
//                     </div>
//                     <button type="submit" class="btn btn-primary mt-3 mb-3">Valider et payer :</button>
//                 </form>
//             </div>
//             <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
//         </>
//     );
// }


"use client";

import Link from 'next/link';
import React from 'react';

export default function Page() {
    return (
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-center mb-3">
                    <Link href="/accueil">
                        <a className="btn btn-primary">Accueil</a>
                    </Link>
                </div>

                <div className="infos-contravention">
                    <div className="motif mb-3">
                        <h3>Motif de l'infraction :</h3>
                        <p id="motif-infraction">" Stationnement interdit "</p>
                    </div>
                    <div className="somme mb-3">
                        <h3>Somme à régler :</h3>
                        <p id="somme-a-regler">" 50€ "</p>
                    </div>
                </div>

                <form>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="nom" className="form-label">Nom :</label>
                            <input type="text" className="form-control" id="nom" placeholder="(ex: Dubois)" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="prenom" className="form-label">Prénom :</label>
                            <input type="text" className="form-control" id="prenom" placeholder="(ex: Pierre)" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="adresse" className="form-label">Adresse physique :</label>
                            <input type="text" className="form-control" id="adresse" placeholder="(ex: 27 Rue De L'arbre, 56700 Morbihan)" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="telephone" className="form-label">N° de téléphone :</label>
                            <input type="number" className="form-control" id="telephone" placeholder="(ex: 01 02 03 04 05)" maxLength="10" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Adresse email :</label>
                            <input type="email" className="form-control" id="email" placeholder="(ex: monadressemail@gmail.com)" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="carte" className="form-label">N° carte de paiement :</label>
                            <input type="number" maxLength={16} className="form-control" id="carte" placeholder="(ex: 1234 5678 9101 1121)" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="cryptogramme" className="form-label">Cryptogramme :</label>
                            <input type="number" className="form-control" id="cryptogramme" placeholder="(ex: 123)" maxLength={3}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="expiration" className="form-label">Date d'expiration :</label>
                            <input type="date" className="form-control" id="expiration" placeholder="(ex: 11/11)" maxLength="4" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 mb-3">Valider et payer :</button>
                </form>
            </div>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
        </>
    );
}
