"use client"

import "./formulaireInscription.css";

export default function FormulaireInscription() {
    return (
        <>
            <body class="bg-light d-flex justify-content-center align-items-center vh-100">
                <div class="container p-4 bg-white rounded shadow-sm" style="max-width: 500px;">
                    <h2 class="mb-4 text-center">Inscription</h2>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Votre adresse e-mail</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="monadressemail@gmail.com" />
                            <div id="emailHelp" class="form-text">Nous ne partagerons jamais votre email avec quelqu'un d'autre.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Votre mot de passe</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="votre mot de passe"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword2" class="form-label">Confirmer votre mot de passe</label>
                            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="votre mot de passe"/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Rester connecté</label>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Envoyer</button>
                    </form>
                    <p class="mt-3 text-center"><a href="#" class="text-decoration-none">Je n'ai pas de compte</a></p>
                </div>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
            </body>
        </>
    );
}