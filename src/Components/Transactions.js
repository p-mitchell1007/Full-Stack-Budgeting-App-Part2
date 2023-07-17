import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="Transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Transaction ID</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <Transaction key={index} transaction={transaction} index={index} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;

