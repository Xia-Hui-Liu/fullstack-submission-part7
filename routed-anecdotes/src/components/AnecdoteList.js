import React from "react";
import { Link, useNavigate } from "react-router-dom"
import Footer from "./Footer";

const AnecdoteList = ({ anecdotes }) => {
  const navigate = useNavigate()

  const handleAnecdoteClick = (id) => {
    navigate(`/anecdotes/${id}`)
  }

  return (
    <>
      <div>
        <h1>Software anecdotes</h1>
      </div>
      <div>
        <h2>Anecdotes</h2>
        <ul>
          {anecdotes.map(anecdote => 
            <li key={anecdote.id} onClick={() => handleAnecdoteClick(anecdote.id)}>
              <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
            </li>
          )}
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default AnecdoteList;
