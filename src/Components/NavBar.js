import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li>
          <Link to="/transactions/new">New Transaction</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
