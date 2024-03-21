
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [studentName, setStudentName] = useState("");
  const [selectedMonitor, setSelectedMonitor] = useState("");
  const [votes, setVotes] = useState({
    Akshxar: [],
    Rajeshwari: [],
    Bhhuma: [],
    Total: 0,
  });

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("votes"));
    if (storedVotes) {
      setVotes(storedVotes);
    }
  }, []);

  const handleVote = () => {
    if (selectedMonitor && studentName.trim() !== "") {
      const updatedVotes = { ...votes };
      updatedVotes[selectedMonitor] = [...votes[selectedMonitor], studentName];
      updatedVotes.Total += 1;
      setVotes(updatedVotes);
      localStorage.setItem("votes", JSON.stringify(updatedVotes));
    }
  };

  const handleDelete = (monitor, index) => {
    const updatedVotes = { ...votes };
    updatedVotes[monitor] = votes[monitor].filter((_, i) => i !== index);
    updatedVotes.Total -= 1;
    setVotes(updatedVotes);
    localStorage.setItem("votes", JSON.stringify(updatedVotes));
  };

  return (
    <div className="voteFormContainer">
      <h2 className="voteFormLabel">Monitor Vote</h2>
      <div className="voteFormBox">
        <input
          type="text"
          placeholder="Enter your name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <select
          className="choose"
          value={selectedMonitor}
          onChange={(e) => setSelectedMonitor(e.target.value)}
        >
          <option value="">Choose Monitor</option>
          <option value="Akshxar">Akshxar</option>
          <option value="Rajeshwari">Rajeshwari</option>
          <option value="Bhhuma">Bhhuma</option>
        </select>
        <button className="voteFormButton" onClick={handleVote}>
          Vote
        </button>
      </div>
      <div className="voteDataContainer">
        <div className="voteData">
          <h3 className="voteDataLabel">Akshxar Vote Data:</h3>
          {votes.Akshxar.map((name, index) => (
            <p key={index} className="voteDataList">
              {name}{" "}
              <button onClick={() => handleDelete("Akshxar", index)}>
                Delete
              </button>
            </p>
          ))}
          <p className="count">{`Count: ${votes.Akshxar.length}`}</p>
        </div>
        <div className="voteData">
          <h3 className="voteDataLabel">Rajeshwari Vote Data:</h3>
          {votes.Rajeshwari.map((name, index) => (
            <p key={index} className="voteDataList">
              {name}{" "}
              <button onClick={() => handleDelete("Rajeshwari", index)}>
                Delete
              </button>
            </p>
          ))}
          <p className="count">{`Count: ${votes.Rajeshwari.length}`}</p>
        </div>
        <div className="voteData">
          <h3 className="voteDataLabel">Bhhuma Vote Data:</h3>
          {votes.Bhhuma.map((name, index) => (
            <p key={index} className="voteDataList">
              {name}{" "}
              <button onClick={() => handleDelete("Bhhuma", index)}>
                Delete
              </button>
            </p>
          ))}
          <p className="count">{`Count: ${votes.Bhhuma.length}`}</p>
        </div>
        <div className="totalVote">
          <h3 className="voteDataLabel">Total Votes:</h3>
          <p className="totalCount">{votes.Total}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
