import "../styles/Alerts.css";

function AlertCard({ alert, onDismiss }) {
  return (
    <div className={`alert-card ${alert.level}`}>
      <h2>{alert.type}</h2>
      <p><strong>Time:</strong> {alert.timestamp}</p>

      {alert.image && <img src={alert.image} alt="Detected Snake" className="alert-image" />}

      <div className="alert-actions">
        <button className="dismiss-btn" onClick={() => onDismiss(alert.id)}>Dismiss</button>
        <button className="notify-btn">Notify Authorities</button>
        <button className="safety-btn">View Safety Tips</button>
      </div>
    </div>
  );
}

export default AlertCard;
