import './App.css';
import Posts from './componets/Posts';
import PostForm from './componets/PostForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Redux App</h1>
      </header>
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;
