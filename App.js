import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Madi"} lastName={"Greeley"} initialAge={22} haircolor={"red"}/>
      <PersonCard firstName={"Blake"} lastName={"Greeley"} initialAge={26} haircolor={"light brown"}/>
      <PersonCard firstName={"Levi"} lastName={"Ackerman"} initialAge={32} haircolor={"black"}/>
      <PersonCard firstName={"Naruto"} lastName={"Uzumaki"} initialAge={18} haircolor={"yellow"}/>
    </div>
  );
}

export default App;