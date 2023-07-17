import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <tr>
      <td>
        {transaction.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={transaction.url} target="_blank" rel="noopener noreferrer">
          {transaction.id}
        </a>
      </td>
      <td>
        <Link to={`/transactions/${index}`}>
          <span role="img" aria-label="edit">
            ✏️
          </span>
        </Link>
      </td>
    </tr>
  );
}

export default Transaction;
