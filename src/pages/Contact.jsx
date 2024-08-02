import React from "react";
import Layout from "../components/Layout";
import "./Contact.css";

export function Contact() {
  return (
    <Layout>
      <section>
        <div className="container-box title">
          <h1>Date de Contact</h1>
        </div>
        <div className="container-box">
          <p className="text-description">
            Ne-ar plăcea să auzim de la tine! Ai întrebări, sugestii sau vrei să
            colaborezi cu noi? Nu ezita să ne contactezi folosind detaliile de
            mai jos.
            <br />
            <br />
            <strong>Ne puteti contacta:</strong>
          </p>
          <div class="container-box">
            <div class="contact-box">
                <div class="contact-wrapper">
                    <p className="text-logo"><span class="material-symbols-outlined">
                        call
                        </span>Telefon:</p>
                    <p className="text-infos">0722-216-733
                      <br />
                    0349-883-833
                    </p>
                </div>
                <div class="contact-wrapper">
                    <p className="text-logo"><span class="material-symbols-outlined">
                        mail
                        </span>Email:</p>
                    <p className="text-infos">cristian.simionescu@romatanticor.eu
                      <br />
                      office@romatanticor.eu
                    </p>
                </div>
                <div class="contact-wrapper">
                    <p className="text-logo"><span class="material-symbols-outlined">
                        calendar_month
                        </span>Program:</p>
                    <p className="text-infos">Luni-Vineri:
                      <br /> 07:30 - 16:00</p>
                </div>
                <div class="contact-wrapper">
                    <p className="text-logo"><span class="material-symbols-outlined">
                        location_on
                        </span>Sediu social:</p>
                    <p className="text-infos">Sos. Nicolae Titulescu nr. 1 corp C3
                      <br />
                       Oras Draganesti Olt, judetul Olt</p>
                </div>
            </div>
        </div>
          <p className="text-description">
            Te rugăm să ne spui cum putem să te ajutăm și vom reveni la tine cât
            de curând posibil. Feedback-ul tău este important pentru noi și
            suntem aici să te susținem în orice fel posibil!
          </p>
        </div>
      </section>
    </Layout>
  );
}
