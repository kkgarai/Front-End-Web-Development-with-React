import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">

          <MainComponent />

        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
