import { useEffect, useState } from "react";
import { getTodaysMatches } from "../../../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoReload } from "react-icons/io5";
import { MdSignalWifiConnectedNoInternet2 } from "react-icons/md";

export default function Landing() {
  const [todaysMatch, setTodaysMatch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const data = await getTodaysMatches();
        if (isMounted) {
          setTodaysMatch(data.matches);
        }
      } catch (err) {
        console.log(err);
        setError(err.response.status);

        toast.error("Please check your internet!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to set isMounted to false
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading)
    return (
      <div className="absolute left-2/4 -translate-x-2/4 translate-y-0 text-white text-xl font-semibold">
        Loading...
      </div>
    );

  const reloadPageHandler = () => location.reload();

  return (
    <>
      {error === 500 ? (
        <div className="bg-glass p-4 rounded-xl flex flex-col gap-4">
          <p className="text-lg text-white font-semibold flex items-center gap-2">
            Please check your connection !{" "}
            <MdSignalWifiConnectedNoInternet2 size={30} color="red" />
          </p>
          <button
            className="py-3 px-4 bg-emerald-600 text-white text-lg rounded-xl flex items-center justify-center gap-2"
            onClick={reloadPageHandler}
          >
            Reload <IoReload size={25} />
          </button>
        </div>
      ) : (
        <div className="mb-12">
          <img
            src="/images/landing-1.png"
            alt="Landing Image"
            className="absolute left-2/4 -translate-x-2/4 translate-y-0 -z-10 blur-lg h-screen"
          />
          <h2 className="text-4xl text-slate-100 font-semibold mb-8">
            Todays Match
          </h2>

          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper h-[257px] rounded-xl"
          >
            {todaysMatch &&
              todaysMatch.map((match) => {
                const utcDate = new Date(match.utcDate); // Parse the UTC date
                const timeString = utcDate.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }); // Get time in "HH:MM AM/PM" format

                return (
                  <SwiperSlide key={match.id} className="swiper-slide">
                    <div
                      key={match.id}
                      className="bg-glass p-4 rounded-xl h-[254px] flex flex-col justify-between"
                    >
                      <div className="text-base text-white font-semibold flex items-center gap-4 pb-2 border-b border-slate-400 border-opacity-70">
                        <p className="text-white text-opacity-70">
                          {match.competition.type}
                        </p>
                        <img
                          src={match.competition.emblem}
                          alt="Match Type Image"
                          className="h-10 object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <img
                          src={match.homeTeam.crest}
                          alt="Home Team"
                          className="md:h-40 h-32 object-contain"
                        />
                        <div className="flex flex-col items-center gap-4">
                          <h4 className="text-6xl text-white font-bold font-serif">
                            VS
                          </h4>
                          <div>
                            <span className="text-lg text-white font-semibold text-opacity-70 flex items-center gap-4">
                              {timeString}
                            </span>
                          </div>
                        </div>
                        <img
                          src={match.awayTeam.crest}
                          alt="Away Team"
                          className="md:h-40 h-32 object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      )}
    </>
  );
}
