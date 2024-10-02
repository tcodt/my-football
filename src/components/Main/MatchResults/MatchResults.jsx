import { useEffect, useState } from "react";
import { getTodaysMatches } from "../../../services/api";

export default function MatchResults() {
  const [matchResultsData, setMatchResultsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodaysMatches();
        setMatchResultsData(data.matches);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3 className="text-3xl text-slate-100 font-semibold mb-8">
        Match Results
      </h3>
      {matchResultsData &&
        matchResultsData.map((match) => {
          const utcDate = new Date(match.utcDate);
          const timeString = utcDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });

          return (
            <div key={match.id} className="bg-glass p-2 rounded-xl mb-2">
              <div className="flex items-center justify-between">
                <img
                  src={match?.homeTeam?.crest}
                  alt="Home Team"
                  className="h-12 object-contain"
                />
                <div>
                  <span className="text-xl text-white font-semibold">
                    {match.score?.fullTime?.home !== null
                      ? `${match.score.fullTime.home} : ${match.score.fullTime.away}`
                      : timeString}
                  </span>
                </div>
                <img
                  src={match?.awayTeam?.crest}
                  alt="Away Team"
                  className="h-12 object-contain"
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
