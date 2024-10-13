import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./FinanceCalculator.scss";

function FinanceCalculator() {
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [propertyTax, setPropertyTax] = useState("");
  const [homeInsurance, setHomeInsurance] = useState("");
  const [hoaFees, setHoaFees] = useState("");
  const [totalCost, setTotalCost] = useState(null);
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!homePrice || !downPayment || !interestRate || !loanTerm || !propertyTax || !homeInsurance) {
      setError("Please fill in all required fields.");
      return;
    }

    const P = parseFloat(homePrice) - parseFloat(downPayment);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) || 0;
    const totalInterestPaid = (M * n - P).toFixed(2);
    const totalCostOfLoan = (M * n).toFixed(2);
    const monthlyTax = parseFloat(propertyTax) / 12;
    const monthlyInsurance = parseFloat(homeInsurance) / 12;
    const totalMonthlyPayment = M + monthlyTax + monthlyInsurance + parseFloat(hoaFees || 0);

    setMonthlyPayment(totalMonthlyPayment.toFixed(2));
    setTotalInterest(totalInterestPaid);
    setTotalCost(totalCostOfLoan);

    setChartData({
      labels: ["Mortgage", "Property Tax", "Home Insurance", "HOA Fees"],
      datasets: [
        {
          data: [
            (M * 12).toFixed(2),
            (monthlyTax * 12).toFixed(2),
            (monthlyInsurance * 12).toFixed(2),
            hoaFees ? parseFloat(hoaFees) * 12 : 0,
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        },
      ],
    });

    setError("");
  };

  return (
    <div className="finance-calculator">
      <h1>Home Finance Calculator</h1>
      <form onSubmit={handleCalculate}>
        <div className="input-group">
          <label>Home Price ($)</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Down Payment ($)</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Interest Rate (%)</label>
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Loan Term (years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Property Tax ($ per year)</label>
          <input
            type="number"
            value={propertyTax}
            onChange={(e) => setPropertyTax(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Homeowners Insurance ($ per year)</label>
          <input
            type="number"
            value={homeInsurance}
            onChange={(e) => setHomeInsurance(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>HOA Fees ($ per month) [Optional]</label>
          <input
            type="number"
            value={hoaFees}
            onChange={(e) => setHoaFees(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Calculate</button>
      </form>

      {monthlyPayment && (
        <div className="results">
          <h2>Monthly Payment Breakdown</h2>

          {/* Pie chart container */}
          <div className="chart-container">
            {chartData && <Pie data={chartData} width={300} height={300} />}
          </div>

          <h2>Loan Summary</h2>
          <div className="result-item">
            <span>Total Interest Paid:</span>
            <span>${totalInterest}</span>
          </div>
          <div className="result-item">
            <span>Total Cost of the Loan:</span>
            <span>${totalCost}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default FinanceCalculator;
