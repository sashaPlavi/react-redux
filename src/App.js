import './App.css';
import Posts from './componets/Posts';
import PostForm from './componets/PostForm';
import { Provider } from 'react-redux';

import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Redux App</h1>
        </header>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
