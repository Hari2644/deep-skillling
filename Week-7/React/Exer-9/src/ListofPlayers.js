import React from 'react';

const players = [
  { name: 'Virat', score: 88 },
  { name: 'Rohit', score: 95 },
  { name: 'Rahul', score: 42 },
  { name: 'Shreyas', score: 67 },
  { name: 'Hardik', score: 78 },
  { name: 'Pant', score: 60 },
  { name: 'Jadeja', score: 82 },
  { name: 'Shami', score: 55 },
  { name: 'Bumrah', score: 90 },
  { name: 'Ashwin', score: 74 },
  { name: 'Surya', score: 40 },
];

const ListofPlayers = () => {
  const highScorers = players.filter(p => p.score >= 70);
  
  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score ≥ 70</h3>
      <ul>
        {highScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
