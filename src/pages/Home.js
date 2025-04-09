import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import dashboardImg from "../assets/dashboard.jpg"; 

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>🐍 Real-Time Snake Detection & Alert System</h1>

      <div className="image-container">
        <img src={dashboardImg} alt="Agriculture Field" className="dashboard-img" />
      </div>

      <div className="dashboard">
        <div className="card" onClick={() => navigate("/alerts")}>🛑 Alerts</div>
        <div className="card" onClick={() => navigate("/emergency")}>🚨 Emergency</div>
        <div className="card" onClick={() => navigate("/first-aid")}>🩹 First Aid</div>
        <div className="card" onClick={() => navigate("/contact")}>📞 Contact Info</div>
     
      </div>

      <div className="scroll-indicator">↓ Scroll down to learn more about our system ↓</div>

      <div className="info-text">
        <p>
          The Real-Time Snake Detection & Alert System is a groundbreaking safety innovation designed to protect people in snake-prone areas. Using advanced AI-driven image recognition, the system continuously monitors the surroundings and detects the presence of snakes with high precision.
        </p>
        <p>
          Once a snake is identified, the system immediately sends alerts to users, enabling them to take necessary precautions and avoid potential dangers. Whether it's in agricultural fields, gardens, backyards, or forested regions, this technology ensures real-time awareness and safety. 
        </p>
        <p>
          Designed with accessibility in mind, the system features an intuitive interface that provides instant emergency contact information and safety measures. It not only helps users respond swiftly in critical situations but also educates them on how to handle encounters with both venomous and non-venomous snakes.
        </p>
        <p>
          By integrating AI and continuous learning capabilities, the system enhances its detection accuracy over time, reducing false alarms while improving efficiency. Additionally, it contributes to wildlife conservation by preventing unnecessary harm to snakes, fostering a balanced coexistence between humans and nature.
        </p>
        <p>
          This cutting-edge solution is not just about preventing snake bites; it’s about creating a safer, more informed community. With real-time alerts, smart detection technology, and instant access to life-saving information, our system stands as a vital tool in ensuring safety and awareness in snake-prone environments.
        </p>
      </div>
    </div>
  );
}

export default Home;
