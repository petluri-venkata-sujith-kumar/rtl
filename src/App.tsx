import './App.css';
// import Application from './components/applications/Application';
import MuiMode from './components/mui/MuiMode';
import AppProviders from './components/providers/AppProviders';
// import Skills from './components/skills/Skills';
// import Counter from './components/counter/Counter';

function App() {
  const skills=["HTML","CSS","JAVASCRIPT"]
  return (
    // <div className="App">
    //   <Application/>
    //   {/* <Counter/> */}
    //   {/* <Skills skills={skills}/> */}
    // </div>
    <AppProviders>
      <div>
        <MuiMode/>
      </div>
    </AppProviders>
  );
}

export default App;
