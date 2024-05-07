import React from "react";
import Layout from "../Layout/Layout";
import GridCards from "../components/Grid";
import "./Home.css";

export function Home() {
  return (
    <div>
      <Layout>
        <div className="Home">
          <section>
            <div className="container-box title">
              <h1>Despre noi</h1>
            </div>
            <div className="container-box">
              <p className="text-description">
                <strong>Bine ați venit la prezentarea societății <i>ROMAT ANTICOR</i></strong>
                <br />
                <br /> 
                Suntem o companie specializată în soluții avansate de protecție
                anticorozivă și oferim servicii de mentenanță pentru echipamente
                hidroenergetice. Cu o experiență vastă și o echipă dedicată de
                specialiști, ne concentrăm pe furnizarea de soluții de înaltă
                calitate și servicii personalizate, adaptate nevoilor și
                cerințelor fiecărui client.
                <br />
                <br />
                Iată câteva aspecte cheie ale societății noastre:
              </p>
              <GridCards />
              <p className="text-description">
                Ne considerăm parteneri ai clienților noștri, lucrând împreună
                pentru a identifica cele mai bune soluții și pentru a asigura
                succesul proiectelor lor.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
}
