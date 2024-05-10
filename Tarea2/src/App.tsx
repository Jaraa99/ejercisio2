import React, { useState } from 'react';

function DNAToRNAConverter() {
  const [dnaInput, setDnaInput] = useState('');
  const [rnaOutput, setRnaOutput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const convertLetter = (dnaLetter: any) => {
    switch (dnaLetter) {
      case "A": return "U";
      case "C": return "G";
      case "G": return "C";
      case "T": return "A";
      default: throw new Error("Invalid input DNA.");
    }
  };

  const toRna = (dnaString: string) => {
    const rnaString = dnaString
      .split("")
      .map((letter) => convertLetter(letter))
      .join("");

    return rnaString;
  };

  const handleConvert = () => {
    try {
      const rnaResult = toRna(dnaInput.toUpperCase());
      setRnaOutput(rnaResult);
      setErrorMessage('');
    } catch (error) {
      setRnaOutput('');
      setErrorMessage;
    }
  };

  return (
    <div>
      <h2>DNA to RNA Converter</h2>
      <input
        type="text"
        value={dnaInput}
        onChange={(e) => setDnaInput(e.target.value)}
        placeholder="Enter DNA sequence"
      />
      <button onClick={handleConvert}>Convert</button>
      {rnaOutput && <p>RNA Output: {rnaOutput}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default DNAToRNAConverter;
