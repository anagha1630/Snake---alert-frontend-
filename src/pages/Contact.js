import React from "react";
import "../styles/ContactInfo.css"; // Make sure the path to your CSS is correct

function Contact() {
  return (
    <div className="contact-info-container">
      <h1>📞 Contact Information</h1>

      {/* Snake Charmer and Snake Catcher Section */}
      <div className="contact-section">
        <h2>🐍 Snake Charmer & Catcher</h2>
        <div className="contact-card">
          <h3>Snake Catcher 1</h3>
          <p>📞 +91 98765 43210</p>
          <p>Location: Bengaluru</p>
          <p>Specialty: Venomous and Non-Venomous Snake Rescue</p>
        </div>
        <div className="contact-card">
          <h3>Snake Catcher 2</h3>
          <p>📞 +91 91234 56789</p>
          <p>Location: Bengaluru</p>
          <p>Specialty: Emergency Snake Handling and Safe Relocation</p>
        </div>
      </div>

      {/* Wildlife Saving and Snake Rescue Section */}
      <div className="contact-section">
        <h2>🌱 Wildlife and Snake Rescue</h2>
        <div className="contact-card">
          <h3>Wildlife Rescue</h3>
          <p>📞 1800-11-6666</p>
          <p>Location: Bengaluru,Karnataka</p>
          <p>Specialty: Wildlife Protection and Rescue Services</p>
        </div>
      </div>

      {/* Your Contact Info Section */}
      <div className="contact-section">
        <h2>📱 Our Contact Information</h2>
        <div className="contact-card">
          <h3>Our Emergency Helpline</h3>
          <p>📞 +91 12345 67890</p>
          <p>Available 24/7 for emergencies and consultations</p>
        </div>
        <div className="contact-card">
          <h3>Social Media</h3>
          <p>Follow us on: </p>
          <ul>
            <li>Facebook: @RealTImeSnakeDetection</li>
            <li>Instagram: @RealTImeSnakeDetection</li>
            <li>Twitter: @RealTImeSnakeDetection</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
