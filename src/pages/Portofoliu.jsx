import React from "react";
import Layout from "../components/Layout";
import { images, projectsData } from "../data/ProjectData";
import Carrousel from "../components/Carousel";
import "./Portofoliu.css";

export function Portofoliu() {
  return (
    <Layout>
    <section className="portofoliu">
      <div className="container-box title">
        <h1>Portofoliu</h1>
      </div>
      {projectsData.map((project) => {
        return (
          <div className="container-wrapper">
            <div className="container-images">
              <Carrousel
                image={project.img1}
                image2={project.img2}
                image3={project.img3}
                image4={project.img4}
              />
            </div>
            <div className="container-box container-text">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  </Layout>
  );
}
