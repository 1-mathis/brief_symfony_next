"use client";

import Link from "next/link.js";


export default function FormulaireConnexion() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="col-md-4">
                    <div className="card p-4 shadow-sm">
                        <h2 className="card-title text-center mb-4">Connexion</h2>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Votre adresse e-mail</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="monadressemail@gmail.com" />
                                <div id="emailHelp" className="form-text">Nous ne partagerons jamais votre email avec quelqu'un d'autre.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Votre mot de passe :</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="votre mot de passe" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Rester connecté</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Envoyer</button>
                                <Link href={`/signup`}>
                                    <p className="btn mt-3 text-primary w-100 text-center">Je n'ai pas de compte</p>
                                </Link>
                        </form>
                    </div>
                </div>
            </div>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
        </>
    );
}