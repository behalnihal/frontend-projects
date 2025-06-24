import { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);

  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isSpecialAllowed, setIsSpecialAllowed] = useState(false);
  const [isUpperAllowed, setIsUpperAllowed] = useState(false);

  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  let numbers = "0123456789";
  function generate(length) {
    let allChars = lower;
    let generatedPassword = "";
    if (isNumAllowed) {
      allChars += numbers;
    }
    if (isSpecialAllowed) {
      allChars += special;
    }
    if (isUpperAllowed) {
      allChars += upper;
    }
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[index];
    }
    setPassword(generatedPassword);
  }

  function handleToast() {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "Password copied to clipboard";
    document.querySelector(".toast-container").appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">Password Generator</h1>
      <div>
        <div>
          <textarea
            type="password"
            readOnly
            value={password}
            className="border border-gray-300 p-2 rounded w-100 h-100"
          ></textarea>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          ></input>
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isNumAllowed"
            checked={isNumAllowed}
            onChange={() => setIsNumAllowed(!isNumAllowed)}
          ></input>
          <label htmlFor="isNumAllowed">Numbers</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isSpecialAllowed"
            checked={isSpecialAllowed}
            onChange={() => setIsSpecialAllowed(!isSpecialAllowed)}
          ></input>
          <label htmlFor="isSpecialAllowed">Special</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isUpperAllowed"
            checked={isUpperAllowed}
            onChange={() => setIsUpperAllowed(!isUpperAllowed)}
          ></input>
          <label htmlFor="isUpperAllowed">Uppercase</label>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => generate(length)}
          >
            Generate
          </button>
          <button
            className="bg-gray-300 p-2 rounded"
            onClick={() => {
              navigator.clipboard.writeText(password);
              handleToast();
            }}
          >
            Copy
          </button>
        </div>
        <div className="toast-container"></div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
