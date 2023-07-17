import { useState } from "react";

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create transaction");
      }
  
      alert("Transaction created successfully!");
  
    } catch (error) {
      console.log(error);
  
      alert("An error occurred while creating the transaction. Please try again.");
    }
  };
  
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          type="text"
          value={transaction.item_name}
          onChange={handleTextChange}
          placeholder="Item Name"
          required
        />

        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="Amount"
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          value={transaction.date}
          onChange={handleTextChange}
        />

        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="From"
        />

        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          value={transaction.category}
          onChange={handleTextChange}
          placeholder="Category"
        />

        <br />

        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default TransactionNewForm;
