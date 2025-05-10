import React, { useEffect, useState } from 'react';
import './Ranking.css';
import gold from '../assets/Gold.png';
import silver from '../assets/Silver.png';
import bronze from '../assets/Bronze.png';

const trophies = [gold, silver, bronze];

type Player = {
  name: string;
  score: string;
};

type RankingItemProps = {
  rank: number;
  name: string;
  score: string;
};

const RankingItem: React.FC<RankingItemProps> = ({ rank, name, score }) => {
  const trophy = rank <= 3 ? trophies[rank - 1] : null;

  return (
    <div className="ranking-item">
      <div className="player-info">
        {trophy && <img src={trophy} alt={`Rank ${rank}`} className="trophy" />}
        <span>{name}</span>
      </div>
      <span className="score">{score}</span>
    </div>
  );
};

const Ranking: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API URL
    const fetchPlayers = async () => {
      try {
        // 예시: const response = await fetch('/api/players');
        // const data = await response.json();

        // 더미 데이터
        const data: Player[] = Array.from({ length: 12 }, (_, i) => ({
          name: `Player name ${i + 1}`,
          score: '999999999',
        }));

        setPlayers(data);
      } catch (error) {
        console.error('플레이어 데이터 불러오기 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) return <div className="ranking-board">로딩 중...</div>;

  return (
    <div className="ranking-board">
      <h2 className="ranking-title">RANKING</h2>
      <div className="ranking-list">
        {players.map((player, idx) => (
          <RankingItem
            key={idx}
            rank={idx + 1}
            name={player.name}
            score={player.score}
          />
        ))}
      </div>
    </div>
  );
};

export default Ranking;
