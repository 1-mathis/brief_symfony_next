"use client";

import Link from "next/link";
import { FaDollarSign, FaSignInAlt, FaUser, FaUserPlus } from "react-icons/fa";

export default function Menu() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="col-md-6">
                <div className="list-group">
                    <Link href={`/amende`} className="list-group-item list-group-item-action d-flex align-items-center">
                        <FaDollarSign className="me-3" />
                        <span className="text-primary">Page de paiement d'amende</span>
                    </Link>
                    <Link href={`/connexion`} className="list-group-item list-group-item-action d-flex align-items-center">
                        <FaSignInAlt className="me-3" />
                        <span className="text-primary">Page de connexion</span>
                    </Link>
                    <Link href={`/profil`} className="list-group-item list-group-item-action d-flex align-items-center">
                        <FaUser className="me-3" />
                        <span className="text-primary">Page de profil</span>
                    </Link>
                    <Link href={`/signup`} className="list-group-item list-group-item-action d-flex align-items-center">
                        <FaUserPlus className="me-3" />
                        <span className="text-primary">Page d'inscription</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
