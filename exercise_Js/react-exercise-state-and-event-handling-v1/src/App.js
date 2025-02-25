import moment from 'moment-timezone'
// TODO: answer here
import { useState } from 'react';

const App = () => {
  const currentTime = '01:00:00'
  // Buatlah state dengan nama "timezone" disini
  // TODO: answer here
  const [timezone, setTimezone] = useState('');
  const formatedTime = moment(currentTime, "HH:mm:ss")
  const time = moment.tz(formatedTime, timezone).format("HH:mm:ss")

  // TODO: answer here
  // function convert(e){
  //   setTimezone(e.target.value);
  // }

  return (
    <div>
      <h1>Time converter</h1>
      <h2>Current time: {currentTime}</h2>
      <h2>Converted time: {timezone === "" ? "00:00:00" : time}</h2>
      <form>
        <label>convert to:</label>
        <select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
          <option value={""}>Select timezone</option>
          <option value={"Asia/Tokyo"}>Tokyo</option>
          <option value={"America/New_York"}>New York</option>
          <option value={"Europe/Madrid"}>Madrid</option>
          <option value={"Africa/Cairo"}>Cairo</option>
          <option value={"Australia/Sydney"}>Sydney</option>
        </select>
      </form>
    </div>
  );
};

export default App;
