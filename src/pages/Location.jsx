function Location() {
  return (
    <div className="page">
      <div className="location-header">
        <h1>Find Us</h1>
      </div>

      <div className="location-content">
        {/* ============================================================
            LEFT COLUMN: Restaurant info
            TODO: Replace ALL placeholder text with YOUR restaurant's
            address, phone number, and hours of operation.
            ============================================================ */}
        <div className="location-info">
          <h2>Address</h2>
          <p>123 Smokehouse Lane</p>
          <p>Salisbury, NC 28144</p>
          <p className="phone">(704) 555-1234</p>

          <h2>Hours of Operation</h2>
          <div>
            <div className="hours-row">
              <span className="day">Mon–Thu</span>
              <span className="time">11am–9pm</span>
            </div>
            <div className="hours-row">
              <span className="day">Fri–Sat</span>
              <span className="time">11am–11pm</span>
            </div>
            <div className="hours-row">
              <span className="day">Sunday</span>
              <span className="time">12pm–8pm</span>
            </div>
          </div>

          <h2>Getting Here</h2>
          <p>
            Smoke and Salsa is located at 1624 W Innes St in Salisbury, NC, just a short drive from Catawba College. We're right off a main 
            road with easy access and plenty of nearby parking, making it a convenient spot for students, locals, and visitors to stop in for lunch or dinner.
          </p>
        </div>

        {/* ============================================================
            RIGHT COLUMN: Map
            WEEK 4: Replace the placeholder below with a Google Maps embed.
            Instructions:
            1. Go to Google Maps and search for any address
            2. Click "Share" > "Embed a map"
            3. Copy the src URL from the iframe code
            4. Uncomment the iframe below and paste your URL
            ============================================================ */}
        <div className="map-container">
  <iframe
    title="Restaurant Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1211.035169699661!2d-80.4829690249819!3d35.68489343174725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853f2e94da937cd%3A0x3b388025162d50b9!2sHendrix%20Barbecue!5e1!3m2!1sen!2sus!4v1777437069145!5m2!1sen!2sus"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
      </div>
    </div>
  );
}

export default Location;
