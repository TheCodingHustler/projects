import React from "react";

export default function AlertModal({ message, onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <p>{message}</p>
        <button style={styles.button} onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#f8dcdc",
    padding: "2rem",
    borderRadius: "15px",
    textAlign: "center",
    maxWidth: "400px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#F85A5A",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  }
};
