import React from "react";
import Layout from "../Layout/Layout";
import { images } from "./Images";
import Carrousel from "../components/Carousel";
import "./Portofoliu.css";

export function Portofoliu() {
  return (
    <Layout>
      <section className="portofoliu">
        <div className="container-box title">
          <h1>Portofoliu</h1>
        </div>
        <div className="container-wrapper">
          <div className="container-images">
            <Carrousel
              image={images[0].imgNedelea1}
              image2={images[0].imgNedelea2}
              image3={images[0].imgNedelea3}
              image4={images[0].imgNedelea4}
            />
          </div>
          <div className="container-box container-text">
            <h1>Baraj Nedelea</h1>
            <p>
              Lucrari de executie modernizare ,reabilitare, protectie
              anticoroziva stavile, batardouri, diferite tipuri de vane
            </p>
          </div>
        </div>
        <div className="container-wrapper">
          <div className="container-images">
            <Carrousel
              image={images[1].imgBucecea1}
              image2={images[1].imgBucecea2}
              image3={images[1].imgBucecea3}
              image4={images[1].imgBucecea4}
            />
          </div>
          <div className="container-box container-text">
            <h1>Baraj Bucecea</h1>
            <p>
              Lucrari de executie modernizare ,reabilitare, protectie
              anticoroziva stavile, batardouri, diferite tipuri de vane
            </p>
          </div>
        </div>
        <div className="container-wrapper">
          <div className="container-images">
            <Carrousel
              image={images[2].imgUzului1}
              image2={images[2].imgUzului2}
              image3={images[2].imgUzului3}
              image4={images[2].imgUzului4}
            />
          </div>
          <div className="container-box container-text">
            <h1>Baraj Poiana Uzului</h1>
            <p>
              Lucrari de executie modernizare ,reabilitare, protectie
              anticoroziva stavile, batardouri, diferite tipuri de vane
            </p>
          </div>
        </div>
        <div className="container-wrapper">
          <div className="container-images">
            <Carrousel
              image={images[3].imgStejaru1}
              image2={images[3].imgStejaru2}
              image3={images[3].imgStejaru3}
              image4={images[3].imgStejaru4}
            />
          </div>
          <div className="container-box container-text">
            <h1>Che Stejaru</h1>
            <p>
              Lucrari de modernizare si reabilitare, protectie anticoroziva -
              instatalatii auxiliare si conducte de aductiune
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
