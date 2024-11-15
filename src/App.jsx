import React from "react";

function App() {
  const buttonStyle = {
    color: "white",
    backgroundColor: "#3070bf",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    display: "inline-block",
    cursor: "pointer",
  };

  const openPDF = () => {
    const fileName = "NPTEL24CS30S56258015930435955.pdf";
    const fileURL = `/noc/Ecertificate/${fileName}`;
    const fullURL = `${window.location.origin}${fileURL}`;
    window.open(fullURL, "_blank"); // Opens the PDF in a new tab
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button style={buttonStyle} onClick={openPDF}>
        View Certificate
      </button>
    </div>
  );
}

export default App;