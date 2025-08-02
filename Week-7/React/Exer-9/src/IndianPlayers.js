import React from 'react';

const IndianPlayers = () => {
  const team = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6'];

  const oddTeam = team.filter((_, index) => index % 2 === 0);
  const evenTeam = team.filter((_, index) => index % 2 !== 0);

  const T20players = ['Kohli', 'Rohit', 'Pant'];
  const RanjiPlayers = ['Pujara', 'Rahane'];
  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players (Destructured)</h2>
      <ul>
        {oddTeam.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>

      <h2>Even Team Players (Destructured)</h2>
      <ul>
        {evenTeam.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>

      <h2>Merged Players (Spread Operator)</h2>
      <ul>
        {mergedPlayers.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
