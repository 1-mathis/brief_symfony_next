// "use client";

// import Link from "next/link";
// import "./profil.css";

// export default function Profil() {
//   return (
//     <>
//       <main className="bg-light">
//         <div className="container pt-3 pb-3">
//           <div className="d-flex justify-content-center mb-3">
//             <Link href="/accueil" className="btn btn-link">Choisir la page</Link>
//           </div>

//           <div className="card p-4 shadow-sm mb-3">
//             <h1>Informations personnelles</h1>
//             <form>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">E-mail</label>
//                 <input type="text" className="form-control" id="email" placeholder="E-mail" />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="nom" className="form-label">Nom</label>
//                 <input type="text" className="form-control" id="nom" placeholder="Nom" />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="prenom" className="form-label">Prénom</label>
//                 <input type="text" className="form-control" id="prenom" placeholder="Prénom" />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="adresse" className="form-label">Adresse</label>
//                 <input type="text" className="form-control" id="adresse" placeholder="Adresse" />
//               </div>
//               <button type="submit" className="btn btn-primary">Modifier et enregistrer</button>
//             </form>
//           </div>

//           <div className="card p-4 shadow-sm mb-3">
//             <h1 className="card-title text-center mb-4">Payer une taxe</h1>
//             <div className="container-id">
//               <h3 className="mb-3">ID de la demande de règlement</h3>
//               <input type="text" className="form-control mb-3" id="idReglement" placeholder="123" />
//               <button type="submit" className="btn btn-primary w-100">Soumettre la demande</button>
//             </div>
//           </div>

//           <div className="card p-4 shadow-sm">
//             <h1 className="card-title text-center mb-4">Règlements enregistrés</h1>
//             <div className="container">
//               <h1>Contenu des règlements enregistrés</h1>
//             </div>
//           </div>
//         </div>

//         <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
//       </main>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa"; // Assurez-vous d'installer react-icons
import "./profil.css";

export default function Profil() {
  return (
    <>
      <main className="bg-light">
        <div className="container pt-3 pb-3">
          <div className="d-flex justify-content-center mb-3">
            <div className="card p-3 shadow-sm">
              <Link href="/accueil" className="btn btn-primary d-flex align-items-center">
                <FaHome className="me-2" />
                Choisir la page
              </Link>
            </div>
          </div>

          <div className="card p-4 shadow-sm mb-3">
            <h1>Informations personnelles</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="text" className="form-control" id="email" placeholder="E-mail" />
              </div>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input type="text" className="form-control" id="nom" placeholder="Nom" />
              </div>
              <div className="mb-3">
                <label htmlFor="prenom" className="form-label">Prénom</label>
                <input type="text" className="form-control" id="prenom" placeholder="Prénom" />
              </div>
              <div className="mb-3">
                <label htmlFor="adresse" className="form-label">Adresse</label>
                <input type="text" className="form-control" id="adresse" placeholder="Adresse" />
              </div>
              <button type="submit" className="btn btn-primary">Modifier et enregistrer</button>
            </form>
          </div>

          <div className="card p-4 shadow-sm mb-3">
            <h1 className="card-title text-center mb-4">Payer une taxe</h1>
            <div className="container-id">
              <h3 className="mb-3">ID de la demande de règlement</h3>
              <input type="text" className="form-control mb-3" id="idReglement" placeholder="123" />
              <button type="submit" className="btn btn-primary w-100">Soumettre la demande</button>
            </div>
          </div>

          <div className="card p-4 shadow-sm">
            <h1 className="card-title text-center mb-4">Règlements enregistrés</h1>
            <div className="container">
              <h1 className="text-center mb-4">Contenu des règlements enregistrés</h1>
            </div>
          </div>
        </div>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
      </main>
    </>
  );
}
