import './App.css';
import Application from './components/applications/Application';
// import Skills from './components/skills/Skills';
// import Counter from './components/counter/Counter';

function App() {
  const skills=["HTML","CSS","JAVASCRIPT"]
  return (
    <div className="App">
      <Application/>
      {/* <Counter/> */}
      {/* <Skills skills={skills}/> */}
    </div>
  );
}

export default App;
