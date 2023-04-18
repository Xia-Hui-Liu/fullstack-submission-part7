import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const Anecdote = ({ anecdotes}) => {
  const { id } = useParams();
  const anecdote = anecdotes.find(n => n.id === Number(id));
  return (
    <>
        <div>
        <h2>{anecdote.content}</h2>
        <p>has {anecdote.votes} votes</p>
        <p>for more information see <a href='https://martinfowler.com/bliki/FrequencyReducesDifficulty.html'>https://martinfowler.com/bliki/FrequencyReducesDifficulty.html</a></p>
        </div>
        <Footer />
    </>
  );
};

export default Anecdote;
