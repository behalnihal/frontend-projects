import { useState } from "react";

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(1);
  const [time, setTime] = useState(12);
  const [downPayment, setDownPayment] = useState(0);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(0);
  const calculateEmi = () => {
    return (
      Math.floor(
        ((principal - downPayment) * (rate / 100 / 12)) /
          (1 - Math.pow(1 + rate / 100 / 12, -time))
      ) || 0
    );
  };
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">EmiCalculator</h1>
      <div className="flex space-x-4">
        <span>Total Cost of Asset</span>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="border border-gray-300 rounded p-2 w-48"
        />
      </div>
      <div className="flex space-x-4">
        <span>Interest Rate (in %)</span>
        <input
          min={1}
          max={100}
          type="range"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        ></input>
        <label htmlFor="rate">Interest Rate: {rate}</label>
      </div>
      <div className="flex space-x-4">
        <span>Down Payment : {downPayment}</span>
        <input
          type="range"
          value={downPaymentPercentage}
          min={0}
          max={100}
          onChange={(e) => {
            setDownPaymentPercentage(e.target.value);
            setDownPayment(
              Math.floor((downPaymentPercentage / 100) * principal)
            );
          }}
        />
      </div>
      <div>
        <span>Tenure (in months)</span>
        <input
          type="number"
          value={time}
          min={12}
          max={360}
          step={1}
          onChange={(e) => setTime(e.target.value)}
          className="border-gray-300 rounded p-2"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">
          Loan Per Month : {calculateEmi()}
        </span>
        <span>Total Loan Amount : {Math.floor(calculateEmi() * time)}</span>
      </div>
    </div>
  );
};

export default EmiCalculator;
