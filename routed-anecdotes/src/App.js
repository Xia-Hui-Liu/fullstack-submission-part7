import { useState } from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import About from './components/About';
import AnecdoteList from './components/AnecdoteList';
import CreateNew from './components/CreateNew';
import Anecdote from './components/Anecdote';

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info:
        'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1,
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2,
    },
  ]);

  const [notification, setNotification] = useState('');
  const navigate = useNavigate()

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    navigate('/')
    setNotification(`A new anecdote "${anecdote.content}" has been created!`);
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  const padding = {
    paddingRight: 5,
  };

  return (
    <>
      <div>
        <h1>Software anecdotes</h1>
      </div>
      <div>
        <Link to='/anecdotes' style={padding}>
          anecdotes
        </Link>
        <Link to='/create' style={padding}>
          create new
        </Link>
        <Link to='/about' style={padding}>
          about
        </Link>
      </div>
      {notification && <p>{notification}</p>}
      <Routes>
        <Route path='/anecdotes' element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route
          path='/anecdotes/:id'
          element={<Anecdote anecdotes={anecdotes} vote={vote} />}
        />
        <Route
          path='/create'
          element={<CreateNew addNew={addNew} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<AnecdoteList anecdotes={anecdotes} />} />
      </Routes>
    </>
  );
};

export default App;
