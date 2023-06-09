import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home({ setBcg }) {
  useEffect(() => {
    setBcg("hero");
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-box">
          <p className="sub-heading">So, you want to travel to</p>
          <h1> SPACE</h1>
          <p className="p-primary">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link to="/destination/moon">
          <div className="hero-circle">EXPLORE</div>
        </Link>
      </div>
    </section>
  );
}
