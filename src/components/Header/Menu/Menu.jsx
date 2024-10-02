import Logo from "../Logo/Logo";

export default function Menu() {
  return (
    <header>
      <nav className="bg-glass border-b border-slate-400 flex items-center gap-12 md:p-4 p-2">
        <Logo />
        <ul className="flex items-center gap-4">
          <li className="md:text-base text-sm text-white font-semibold">
            <a href="#">Home</a>
          </li>
          <li className="md:text-base text-sm text-white font-semibold">
            <a href="#">Leagues</a>
          </li>
          <li className="md:text-base text-sm text-white font-semibold">
            <a href="#">News</a>
          </li>
          <li className="md:text-base text-sm text-white font-semibold">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
