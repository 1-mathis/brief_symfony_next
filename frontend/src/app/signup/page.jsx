"use client"

import Link from "next/link.js";

export default function FormulaireInscription() {
    return (
        <div className="bg-light d-flex justify-content-center align-items-center vh-100">
            <div className="container p-4 bg-white rounded shadow-sm" style={{ maxWidth: '500px' }}>
                <h2 className="mb-4 text-center">Inscription</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Votre adresse e-mail</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="monadressemail@gmail.com" />
                        <div id="emailHelp" className="form-text">Nous ne partagerons jamais votre email avec quelqu'un d'autre.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Votre mot de passe</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="votre mot de passe"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Confirmer votre mot de passe</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="votre mot de passe"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Rester connecté</label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Envoyer</button>
                </form>
                <Link href={`/connexion`}>
                    <p className="btn mt-3 text-primary w-100 text-center">J'ai déjà un compte</p>
                </Link>
            </div>
        </div>
    );
}