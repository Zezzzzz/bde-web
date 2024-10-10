import React from "react";
import { useNavigate } from "react-router-dom";

function AgeVerification() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/homePage");
  };

  const containerStyle = {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  };

  const boxStyle = {
    backgroundColor: "#000",
    padding: "30px",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  };

  const logoStyle = {
    fontSize: "1.8em",
    marginBottom: "15px",
  };

  const logoHighlightStyle = {
    backgroundColor: "#f90",
    padding: "0 2px",
    borderRadius: "2px",
    fontWeight: "bold",
    color: "#000"
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  };

  const buttonStyle = {
    flex: "1",
    padding: "12px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1em",
    cursor: "pointer",
  };

  const enterButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f90",
    color: "#000",
  };

  const exitButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#333",
    color: "#fff",
  };

  const linkStyle = {
    color: "#f90",
    textDecoration: "none",
  };

  const bodyStyle = {
    backgroundColor: "#000",
    color: "#cccccc",
    fontFamily: "Arial, Helvetica, sans-serif",
}

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={logoStyle}>
          <span style={{ color: "#fff", fontWeight: "bold" }}>BigDick</span>
          <span style={logoHighlightStyle}>Energy</span>
        </div>
        <h2 style={{ margin: "20px 0", fontWeight: "bold" }}>
          This is an adult website
        </h2>
        <p style={ bodyStyle }>
          This website contains age-restricted materials. By entering, you
          affirm that you are at least 18 years of age or the age of majority in
          the jurisdiction you are accessing the website from and you consent to
          viewing sexually explicit content.
        </p>
        <div style={buttonContainerStyle}>
          <button style={enterButtonStyle} onClick={handleEnter}>
            <b>I am 18 or older - Enter</b>
          </button>
          <button style={exitButtonStyle} onClick={handleEnter}><b>I am under 18 - Enter</b></button>
        </div>
        <p style={{ marginTop: "20px", fontSize: "0.8em" }}>
          Our{" "}
          <a href="/homePage" style={linkStyle}>
            parental controls page
          </a>{" "}
          explains how you can easily block access to this site.
        </p>
        <footer style={{ marginTop: "20px", fontSize: "0.7em", color: "#777" }}>
          &copy; BDE.com, 2024 RTA
        </footer>
      </div>
    </div>
  );
}

export default AgeVerification;
