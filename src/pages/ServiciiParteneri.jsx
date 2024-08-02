import React from "react";
import Layout from "../components/Layout";
import AccordionFirstOpen from "../components/Accordion";
import "./ServiciiParteneri.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ServiciiParteneri() {
  return (
    <Layout>
      <section>
        <div className="container-box title">
          <h1>Servicii si Parteneri</h1>
        </div>
        <div className="container-box">
          <h3>Servicii</h3>
          <AccordionFirstOpen />
          <h3>Furnizori</h3>
          <div className="furnizori-wrapper">
            <p>Totunik - Furnizor vopsele Jotun</p>
            <Link to="https://totunik.ro/en/home-en/" target="_blank"><Button variant="success"> Afla mai multe</Button></Link>
          </div>
          <div className="furnizori-wrapper">
            <p>Hempel Romania - Furnizor vopsele Hempel</p>
            <Link to="https://www.hempel.com/ro-ro" target="_blank"><Button variant="success"> Afla mai multe</Button></Link>
          </div>
          <div className="furnizori-wrapper">
            <p>Policolor SA - Furnizor Vopsea Policolor</p>
            <Link to="https://policolor.ro/" target="_blank"><Button variant="success"> Afla mai multe</Button></Link>
          </div>
          <div className="furnizori-wrapper">
            <p>Mairon Galati SA - Furnizor table si profile metalice</p>
            <Link to="https://www.mairon.ro/" target="_blank"><Button variant="success"> Afla mai multe</Button></Link>
          </div>
          <div className="furnizori-wrapper">
            <p>Truzi SRL - Furnizor de table si profile metalice</p>
            <Link to="https://www.trutzi.ro/" target="_blank"><Button variant="success"> Afla mai multe</Button></Link>
          </div>
          <div className="furnizori-wrapper">
            <p>Petrouzinex SRL - Furnizor robineti si Vane</p>
            <Link to="https://petrouzinex.com/" target="_blank"><Button variant="success"> Afla mai multe</Button></Link>
          </div>
          <div className="parteneri">
          <h3>Parteneri</h3>
          <div className="parteneri-wrapper">
            <p>1. Mecanica Ind 2004 SRL - Montaj echipamente Mecanice</p>
            <Link to="https://www.mecanicaind.ro/" target="_blank"><Button variant="success"> Afla mai multe</Button></Link>
          </div>
          <p>2. Tehnomontaj Consulting SRL - Servicii de Proiectare</p>
          <p>3. Power Desk SRL - Servicii de Proiectare; Servicii de Antreprenoriat</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
