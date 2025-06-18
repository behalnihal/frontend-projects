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
  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <div>
          <textarea
            type="password"
            readOnly
            value={password}
            style={{ width: "100%", height: "100px" }}
          ></textarea>
        </div>
        <div>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          ></input>
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="isNumAllowed"
            checked={isNumAllowed}
            onChange={() => setIsNumAllowed(!isNumAllowed)}
          ></input>
          <label htmlFor="isNumAllowed">Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="isSpecialAllowed"
            checked={isSpecialAllowed}
            onChange={() => setIsSpecialAllowed(!isSpecialAllowed)}
          ></input>
          <label htmlFor="isSpecialAllowed">Special</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="isUpperAllowed"
            checked={isUpperAllowed}
            onChange={() => setIsUpperAllowed(!isUpperAllowed)}
          ></input>
          <label htmlFor="isUpperAllowed">Uppercase</label>
        </div>
        <div>
          <button onClick={() => generate(length)}>Generate</button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
