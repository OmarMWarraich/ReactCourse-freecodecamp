import React from 'react';

export default function Hero() {
  return (
        <section>
            <img src={require("../images/photo-grid.png")} alt="grid" className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactivities led by
            one-of-a-kind hosts-all without leaving home.
            </p>
        </section>
    );
}
