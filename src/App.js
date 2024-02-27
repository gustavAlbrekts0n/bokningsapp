import './App.css';
import Calendar from './calendar';
import TimePicker from './time-picker';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h2>
          Boka tvättid
        </h2>
        <h2>
          Brf Ripa
        </h2>
      </div>
      <Calendar />
      <TimePicker />
    </div>
  );
}

export default App;