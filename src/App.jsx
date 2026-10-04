
import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight === "" || height === "") {
      alert("Please enter weight and height");
      return;
    }

    const heightInMeter = height / 100;

    const bmiValue = (
      weight / (heightInMeter * heightInMeter)
    ).toFixed(2);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setMessage("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("Normal Weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage("Overweight");
    } else {
      setMessage("Obese");
    }
  };

  const resetData = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };

  const goToCalculator = () => {
    setPage("calculator");
  };

  const goToHome = () => {
    setPage("home");
    resetData();
  };

  // HOME PAGE
  if (page === "home") {
    return (
      <div className="home-container">

        <nav className="navbar">
          <h2>BMI Health</h2>

          <button
            className="nav-button"
            onClick={goToCalculator}
          >
            BMI Calculator
          </button>
        </nav>

        <div className="home-content">

          <div className="home-text">
            <p className="small-title">
              HEALTH & FITNESS
            </p>

            <h1>
              Understand Your
              <span> BMI</span>
            </h1>

            <p className="home-description">
              Calculate your Body Mass Index quickly and
              easily. Enter your height and weight to
              understand your BMI category.
            </p>

            <button
              className="start-button"
              onClick={goToCalculator}
            >
              Calculate Your BMI →
            </button>
          </div>

          <div className="home-card">

            <div className="heart-icon">
              ❤️
            </div>

            <h2>
              Take Care of
              <br />
              Your Health
            </h2>

            <p>
              A simple BMI calculator to help you
              understand your body measurement.
            </p>

          </div>

        </div>

        <div className="features">

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Quick</h3>
            <p>Calculate BMI in seconds.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Simple</h3>
            <p>Easy-to-understand BMI results.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💚</div>
            <h3>Useful</h3>
            <p>Understand your BMI category.</p>
          </div>

        </div>

      </div>
    );
  }

  // BMI CALCULATOR PAGE
  return (
    <div className="container">

      <div className="box">

        <button
          className="back-button"
          onClick={goToHome}
        >
          ← Back to Home
        </button>

        <h1>BMI Calculator</h1>

        <p className="calculator-subtitle">
          Enter your height and weight
        </p>

        <input
          type="number"
          placeholder="Enter Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <div className="buttons">

          <button onClick={calculateBMI}>
            Calculate
          </button>

          <button
            className="reset-button"
            onClick={resetData}
          >
            Reset
          </button>

        </div>

        {bmi && (
          <div className="result">

            <h2>Your BMI: {bmi}</h2>

            <h3>{message}</h3>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;

