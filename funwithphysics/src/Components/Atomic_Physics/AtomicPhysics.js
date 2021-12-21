import React from "react";
import { Card } from "react-bootstrap";
import "./AtomicPhysics.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";

export default function AtomicPhysics() {
  // topics_data
  const Topics = [
    {
      topic: "Bohr's model",
      formula: "1/λ=R[(1/nf²)-(1/ni²)]",
      siunit: "Wavelength: m",
      details:
        "The Rydberg formula describes the various transition energies that occur between energy levels. A photon is released when an electron goes from a higher to a lower energy level. Depending on the beginning and ultimate energy levels of the transition, the hydrogen atom can produce different wavelengths of light. It emits a photon with an energy equal to the square of the energy levels of the final (nf) and initial (ni).",
      process:
        "To find the (λ) wavelength of the emitted EM radiation we need to know the value of initial state (ni) and the final excitation state (nf) where R is the Rydberg constant, and it's value is determined by an experiment 1.097 × 107 / m (or m⁻¹)",
      dimension: "[L]",
    },
  ];

  return (
    <>
    <div className="mech__main">
      <Helmet>
        <title>Atomic | physics | Tech N Science</title>
        <meta name="description" content="Explore the Atomic physics calculator" />
        <meta name="keywords" content="Atomic physics, Bohr's model" />
      </Helmet>
      <div className="mech__header"> 
        <h1>Atomic Physics-Topics</h1>
      </div>
      <div className="mech__topics-card">
        {Topics.map((data) => (
          <React.Fragment key={data.topic}>
            <Card key={data.topic} style={{ width: "18rem" }}>
              <Card.Body>
                {data.details === undefined ? (
                  <Link
                    className="btn"
                    disabled={true}
                    to={`/atomicphysics/calc/${data.topic}`}
                    variant="outline-dark"
                  >
                    {" "}
                    {data.topic}
                  </Link>
                ) : (
                  <Link
                    className="btn"
                    to={`/atomicphysics/calc/${data.topic}`}
                    variant="outline-dark"
                  >
                    {" "}
                    {data.topic}
                  </Link>
                )}
                <div style={{ padding: "0.3em" }}>
                  {data.details === undefined ? (
                    <Card.Text>
                      {" "}
                      Will be{" "}
                      <span style={{ fontWeight: "bold", color: "#19165b" }}>
                        available
                      </span>{" "}
                      soon...
                    </Card.Text>
                  ) : (
                    <Card.Text> </Card.Text>
                  )}
                </div>
              </Card.Body>
            </Card>
          </React.Fragment>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
