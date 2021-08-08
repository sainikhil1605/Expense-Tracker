
import './App.css';
import ExpensesProvider from './Components/ExpensesProvider';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
function App() {
  return (
    <div className="App">
      <div className="outerContainer">
        <ExpensesProvider>
          <Header />
          <Body />
        </ExpensesProvider>
      </div>
    </div>
  );
}

export default App;
