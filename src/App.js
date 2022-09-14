import './App.css';
import Heading from "./components/heading";
import Generator from "./components/generator";
import Result from "./components/result";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <Generator />
      <Result upperText="MILK THE COW" lowerText="WHILE YOU CAN"/>
    </div>
  );
}
