import { useState } from "react";
import "../styles/Alerts.css";
import AlertCard from "../components/AlertCard";
import alertsData from "../data/alertsData"; // Mock data for testing

function Alerts() {
  const [alerts, setAlerts] = useState(alertsData);

  const handleDismiss = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <div className="alerts-container">
      <h1>🚨 Active Snake Alerts</h1>

      {alerts.length === 0 ? (
        <p className="no-alerts">No active alerts at the moment.</p>
      ) : (
        <div className="alerts-list">
          {alerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} onDismiss={handleDismiss} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Alerts;
