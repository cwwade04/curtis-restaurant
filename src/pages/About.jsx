function About() {
  return (
    <div className="page">
      {/* ============================================================
          ABOUT HEADER
          TODO: Change the heading and subtitle for YOUR restaurant.
          ============================================================ */}
      <div className="about-header">
        <h1>About Smoke and Salsa</h1>
        <p className="subtitle">Texas BBQ meets Mexican flavor <br />One good 'ol combo
        </p>
      </div>
      
      {/* ============================================================
          YOUR STORY
          TODO: Write 2-3 paragraphs telling YOUR restaurant's story.
          Be creative! You can make it all up. Think about:
          - How did the restaurant start?
          - Who founded it and why?
          - What is the restaurant's mission or philosophy?
          ============================================================ */}
      <div className="about-story">
        <p>
          Our story started with two things we love most Texas BBQ and street tacos. The idea came from Curtis, who grew up around slow smoked brisket and weekend cookouts, but also had a deep love for bold Mexican flavors. One night after a long cook, he threw leftover brisket into a tortilla, added fresh lime, onions, and homemade sauce and that was it. Friends kept asking for more, and what started as backyard meals quickly turned into a small pop up that people couldn’t get enough of.
        </p>
        <p>
              From there, the grind really began. Early mornings tending the smoker, late nights perfecting recipes, and learning how to blend two cultures into one menu. There were challenges figuring out the right balance of flavors, keeping quality high, and building a name from nothing but consistency paid off. Today, we’re known for juicy smoked meats, fresh toppings, and tacos that hit different every single time.

        </p>
        <p>
              Our mission is simple, bring people together over real food that feels authentic and unforgettable. We want every guest to feel like they’re getting something made with care, not just another quick meal. Whether it’s your first visit or your tenth, the goal is the same bold flavor, good energy, and a reason to come back for more.

        </p>
        <div className="flags">
  <img src="/images/texas.png" alt="Texas Flag" />
  <img src="/images/mexico.png" alt="Mexico Flag" />
</div>
      </div>

      <div className="about-divider"></div>

      {/* ============================================================
          MEET THE TEAM
          TODO: Create 2-3 fictional team members for YOUR restaurant.
          Change the emoji, name, role, and bio for each person.
          ============================================================ */}
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>Curtis (BigCurt)</h3>
            <p className="role">Founder & Pitmaster</p>
            <p>Curtis started it all with a passion for smoked meats and bold flavors.
        He’s the one behind the grill, making sure everything comes out packed
        with flavor.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👩‍💼</div>
            <h3>Operations Manager</h3>
            <p className="role">Maria</p>
            <p>Maria keeps everything running smooth day to day. From customer
        experience to organization, she makes sure every visit feels right.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>Jr.</h3>
            <p className="role">Head Chef</p>
            <p>Jr. brings authentic Mexican flavor to the menu. His recipes and
        sauces give every dish that fresh, street taco taste.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
