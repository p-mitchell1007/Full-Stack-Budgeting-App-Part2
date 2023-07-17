// import { useState, useEffect } from "react";
// import Transactions from "../Components/Transactions";
// import axios from "axios";


// function Index() {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/transactions`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch transaction data");
//         }
//         const fetchedTransactions = response.data;
//         setTransactions(fetchedTransactions);
//       } catch (error) {
//         console.log(error);
//         // Handle error, display an error message, or redirect to an error page
//       }
//     };
  
//     fetchTransactions();
//   }, []);

//   function calculateTotal(transactions) {
//     let total = 0;
//     transactions.forEach((transaction) => {
//       total += transaction.amount;
//     });
//     return total;
//   }

//   const total = calculateTotal(transactions);

//   let totalStyle = "";

//   if (total >= 100) {
//     totalStyle = "greenish";
//   } else if (total > 0) {
//     totalStyle = "yellowish";
//   } else {
//     totalStyle = "reddish";
//   }

//   return (
//     <div className="Index">
//       <h2>Index</h2>
//       <div className={`total ${totalStyle}`}>
//         Total: {total}
//       </div>
//       <Transactions />
//     </div>
//   );
// }

// export default Index;

import { useState, useEffect } from "react";
import Transactions from "../Components/Transactions";
import axios from "axios";

function Index() {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/transactions`);
        if (response.status !== 200) {
          throw new Error("Failed to fetch transaction data");
        }
        const fetchedTransactions = response.data;
        setTransactions(fetchedTransactions);
        calculateTotal(fetchedTransactions);
      } catch (error) {
        console.log(error);
        // Handle error, display an error message, or redirect to an error page
      }
    };

    fetchTransactions();
  }, []);

  const calculateTotal = (transactions) => {
    let total = 0;
    transactions.forEach((transaction) => {
      total += transaction.amount;
    });
    setTotal(total);
  };

  let totalStyle = "";

  if (total >= 100) {
    totalStyle = "greenish";
  } else if (total > 0) {
    totalStyle = "yellowish";
  } else {
    totalStyle = "reddish";
  }

  return (
    <div className="Index">
      <h2>Index</h2>
      <div className={`total ${totalStyle}`}>
        Total: {total}
      </div>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default Index;
