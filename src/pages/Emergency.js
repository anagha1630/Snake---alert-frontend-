import React from "react";
import "../styles/Emergency.css";
import { useNavigate } from "react-router-dom";
import ambulanceImg from "../assets/ambulance.jpg"; // Local image
import hospitalImg from "../assets/hospital.jpg"; // Local image
import snakebiteHospitalImg from "../assets/snakebite_hospital.jpg"; // Local image
import snakeCatcherImg from "../assets/snake_catcher.jpg"; // Local image

function Emergency() {
  const navigate = useNavigate();

  const emergencyContacts = [
    {
      title: "🚑 Ambulance",
      image: ambulanceImg,
      phone: "📞 108",
    },
    {
      title: "🏥 Nearest Hospital",
      image: hospitalImg,
      phone: "📞 102",
    },
    {
      title: "🩺 Snakebite Specialist Hospital",
      image: snakebiteHospitalImg,
      phone: "📞 +91 9481744521",
    },
    {
      title: "🐍 Snake Catcher",
      image: snakeCatcherImg,
      phone: "📞 +91 9876543210",
    },
  ];

  return (
    <div className="emergency-container">
      <div className="emergency-header">
        <h2>🚨 Emergency Information</h2>
        <p>
          <strong>🌟 Stay Calm:</strong> Panicking will worsen the situation. Take deep breaths and stay composed.
        </p>
        <p>
          <strong>🚶‍♂️ Minimize Movement:</strong> Do not move the victim too much to prevent venom from spreading.
        </p>
        <p>
          <strong>⛔ Avoid Harmful Actions:</strong> Do not attempt to suck out venom or cut the wound or use ice/tourniquets.
        </p>
        <p>
          <strong>📞 Call for Help:</strong> Dial the emergency numbers below for quick assistance.
        </p>
        <p>
          <strong>🌿 Immobilize Limbs:</strong> Keep the victim's lower limbs still to slow venom spread.
        </p>
        <p>
          <strong>🔴 Reassure Victim:</strong> Keep calm, as fear can increase venom spread.
        </p>
        <p>
          <strong>🕰️ Note Time:</strong> Time of the bite is important for medical professionals.
        </p>
       
       
      </div>

      <div className="emergency-cards">
        {emergencyContacts.map((contact, index) => (
          <div key={index} className="card">
            <img src={contact.image} alt={contact.title} className="card-image" />
            <div className="card-details">
              <h3>{contact.title}</h3>
              <p>{contact.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Emergency;
