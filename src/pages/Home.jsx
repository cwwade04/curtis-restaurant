import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const heroImages = [
    "/images/bbq1.jpg",
    "/images/bbq2.jpg",
    "/images/bbq3.jpg",
    "/images/bbq4.jpg",
    "/images/mexfood1.jpg",
    "/images/mexfood2.jpg",
    "/images/mexfood3.jpg",
    "/images/mexfood4.jpg",
  ];

  const [bgImage, setBgImage] = useState(heroImages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage =
        heroImages[Math.floor(Math.random() * heroImages.length)];

      setBgImage(randomImage);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <section className="hero">
  <div
  key={bgImage}
  className="hero-bg"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
></div>

  <div className="hero-content">
    <h1>Smoke and Salsa</h1>
    <p className="tagline">Bold Smoke. Fresh Flavor.</p>
    <Link to="/menu" className="cta-button">
      View Our Menu
    </Link>
  </div>
</section>

      <section className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome to Smoke and Salsa</h2>
          <p>
            Smoke and Salsa brings together Texas BBQ and Traditional Mexican food.
            We focus on smoked meats, street-style dishes, and bold flavors.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Our goal is to create a relaxed place where people can enjoy great food,
            strong flavors, and a unique mix of cultures.
          </p>
        </div>

        <div className="welcome-image">
          <img src="/images/bbqlots.jpg" alt="BBQ food" />
        </div>
      </section>

      <section>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <img src="/images/smokedmeats.jpg" alt="Smoked meats" />
            </div>
            <h3>Smoked Meats</h3>
            <p>Slow-smoked meats with rich flavor.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="/images/briskettaco.jpg" alt="Street tacos" />
            </div>
            <h3>Street Tacos</h3>
            <p>Authentic tacos made fresh daily.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="/images/freshingredients.jpg" alt="Fresh ingredients" />
            </div>
            <h3>Fresh Ingredients</h3>
            <p>Quality ingredients in every dish.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;