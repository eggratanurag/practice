// import React from "react";
// import "./style.css";

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

import { useState } from 'react';

function AgeCalculator() {
  const [date, setDate] = useState('');
  const [days, setDays] = useState<number | null>(null);

  const _handleClick = () => {
    const start = new Date(date).getTime();
    const end = Date.now();
    if (isNaN(start)) {
      setDays(null);
      return;
    }
    const milliseconds = end - start;
    const seconds = milliseconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const totalDays = Math.floor(hours / 24);
    setDays(totalDays);
    console.log('date', seconds, minutes, hours, totalDays);
  };

  const formatDays = (days: number) => {
    const years = Math.floor(days / 365);
    const remainingDays = days - years * 365;
    const months = Math.floor(remainingDays / 30);
    const remainingDaysAfterMonths = remainingDays - months * 30;
    const parts: string[] = [];
    if (years > 0) parts.push(`${years} years`);
    if (months > 0) parts.push(`${months} months`);
    if (remainingDaysAfterMonths > 0) parts.push(`${remainingDaysAfterMonths} days`);
    return parts.join(' ');
  };

  // console.log("hello kitty")

  return (
    <div className="conatiner">
      <h2 className="title"></h2>
      <label className="label"></label>
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        id="birthdate"
        type="date"
        className="input-date"
      />
      <button onClick={_handleClick} className="btn-calc">
        Calculate Age
      </button>
      {days !== null && <div>{formatDays(days)}</div>}
      <p className="error-msg"></p>
      <p className="age-result"></p>
    </div>
  );
}

export default AgeCalculator;
