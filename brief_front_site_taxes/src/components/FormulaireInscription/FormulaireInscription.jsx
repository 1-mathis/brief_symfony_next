import React, { useState } from 'react';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Ajoutez la logique de gestion de la soumission du formulaire ici
        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="container">
            <h2 className="my-4">Formulaire d'Inscription</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adresse mail</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Entrez votre adresse mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Entrez votre mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmation du mot de passe</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirmez votre mot de passe"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Inscription</button>
            </form>
        </div>
    );
};

export default RegisterForm;
