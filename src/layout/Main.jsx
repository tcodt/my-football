import Landing from "../components/Main/Landing/Landing";
import MatchResults from "../components/Main/MatchResults/MatchResults";

export default function Main() {
  return (
    <main className="md:container md:mx-auto md:p-0 p-4 mt-12 relative">
      <Landing />
      <MatchResults />
    </main>
  );
}
