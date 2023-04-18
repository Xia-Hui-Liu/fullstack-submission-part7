import { useField } from '../hooks/index'
import Footer from './Footer';

const CreateNew = (props) => {
  const anecdote = useField('text');
  const author = useField('text');
  const info = useField('text');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.addNew) {
      props.addNew({
        content: anecdote.value,
        author: author.value,
        info: info.value,
        votes: 0,
      });
    }
  };

  const handleReset = () => {
    anecdote.reset();
    author.reset();
    info.reset();
  };

  if (!props.addNew) {
    return null;
  }

  return (
    <>
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input name="content" {...anecdote} reset='' />
          </div>
          <div>
            author
            <input name="author" {...author} reset='' />
          </div>
          <div>
            url for more info
            <input name="info" {...info} reset=''/>
          </div>
          <button type="submit">create</button>
          <button type="button" onClick={handleReset}>reset</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateNew;
