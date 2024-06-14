"use client"

import "./formulaireConnexion.css";

export default function FormulaireConnexion() {
    return (
        <>
 <div class="container mt-5">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Votre adresse e-mail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="monadressemail@gmail.com"/>
                <div id="emailHelp" class="form-text">Nous ne partagerons jamais votre email avec quelqu'un d'autre.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Votre mot de passe :</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="votre mot de passe"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Rester connecté</label>
            </div>

            <button type="submit" class="btn btn-primary">Envoyer</button>
            <p className="btn mt-3 text-primary">je n'ai pas de compte</p>

        </form>
    </div>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
        </>
    );
}