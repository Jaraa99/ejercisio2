
import React, { useState } from 'react';

function LeapYearChecker() {
  const [year, setYear] = useState('');
  const [result, setResult] = useState('');

  const isLeap = (year: number) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  };

  const checkLeapYear = () => {
    const parsedYear = parseInt(year, 10);
    if (!isNaN(parsedYear)) {
      const leapResult = isLeap(parsedYear);
      setResult(`${parsedYear} is${leapResult ? '' : ' not'} a leap year.`);
    } else {
      setResult('Please enter a valid year.');
    }
  };

  return (
    <div>
      <h2>Leap Year Checker</h2>
      <input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Enter a year"
      />
      <button onClick={checkLeapYear}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default LeapYearChecker;
