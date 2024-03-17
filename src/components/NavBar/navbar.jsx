function NavBar({ scrollToProjects }) {
  return (
    <nav>
      <ul>
        <li><a href="/">About Me</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <button onClick={scrollToProjects}>Projects</button>
      </ul>
    </nav>
  );
}


export default NavBar;
