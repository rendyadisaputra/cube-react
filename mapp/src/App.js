import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className={classes.root}>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default App;
