import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function TransactionEditForm() {
let { index } = useParams();

const [transaction, setTransaction] = useState({
item_name: "",
amount: 0,
category: "",
date: "",
});

const handleTextChange = (event) => {
setTransaction({ ...transaction, [event.target.id]: event.target.value });
};

// const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     try {
//       const response = await fetch(`${process.env.REACT_APP_API_URL}/transactions/${index}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(transaction),
//       });
  
//       if (!response.ok) {
//         throw new Error("Failed to update transaction");
//       }
  
//     } catch (error) {
//       console.log(error);
//     }
//   };

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/transactions/${index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    });

    if (!response.ok) {
      throw new Error("Failed to update transaction");
    }

    console.log("Transaction updated successfully!");
  } catch (error) {
    console.log(error);
    console.error("An error occurred while updating the transaction. Please try again.");
  }
};

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
  

return (
<div className="Edit">
<form onSubmit={handleSubmit}>
<label htmlFor="name">Name:</label>
<input
       id="name"
       type="text"
       value={transaction.item_name}
       onChange={handleTextChange}
       placeholder=" Name"
       required
     />
         <label htmlFor="amount">Amount:</label>
    <input
      id="amount"
      type="number"
      value={transaction.amount}
      onChange={handleTextChange}
      placeholder="Transaction Amount"
      required
    />

    <label htmlFor="category">Category:</label>
    <input
      id="category"
      type="text"
      value={transaction.category}
      onChange={handleTextChange}
      placeholder="Transaction Category"
    />

    <label htmlFor="date">Date:</label>
    <input
      id="date"
      type="date"
      value={transaction.date}
      onChange={handleTextChange}
    />

    <br />

    <input type="submit" value="Save" />
  </form>

  <Link to={`/transactions/${index}`}>
    <button>Cancel</button>
  </Link>
</div>

);
}

export default TransactionEditForm;