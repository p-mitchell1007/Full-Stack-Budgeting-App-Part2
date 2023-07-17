import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function TransactionDetails() {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/transactions/${index}`);
        if (!response.ok) {
          throw new Error("Failed to fetch transaction data");
        }
        const transactionData = await response.json();
        setTransaction(transactionData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTransaction();
  }, [index]);

const handleDelete = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/transactions/${index}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete transaction");
      }
      
      alert("Transaction deleted successfully!");
  
    } catch (error) {
      console.log(error);
      alert("An error occurred while deleting the transaction. Please try again.");
    }
  };
  

  return (
    <article>
      <h3>
        {transaction.isFavorite ? <span>⭐️</span> : null} {transaction.id}
      </h3>
      <h5>
        <span>
          <a href={transaction.url}>{transaction.id}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {transaction.url}
      </h5>
      <h6>{transaction.category}</h6>
      <p>{transaction.date}</p>
      <p>{transaction.amount}</p>
      <div className="showNavigation">
        <div>
          <Link to="/transactions">
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;

