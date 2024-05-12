import React from "react";
import "./Footer.css"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <footer className="Footer">
            <Container className="d-flex justify-content-between align-items-center">
                <Link to="https://www.listafirme.ro/romat-anticor-srl-36757419/" target="_blank" className="info p-4">
                    <p>ROMAT ANTICOR SRL </p>
                </Link>
                <Link to="/" className="info p-4 credits">
                    <p>@VS</p>
                </Link>
            </Container>
        </footer>
    )
}

