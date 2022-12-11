import Transaction from './trasaction';

// import ColumnTitle from './columnTitle';

export default function TransactionHistory({transactions}) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
              {transactions.map(el =>                 
                  <Transaction
                      key={el.id}
                      type={el.type}
                      amount={el.amount}
                      currency={el.currency}
                  />
                )}
      </tbody>
    </table>
  );
}
// <table class="transaction-history">
//   <thead>
//     <tr>
//       <th>Type</th>
//       <th>Amount</th>
//       <th>Currency</th>
//     </tr>
//   </thead>

//   <tbody>
//     <tr>
//       <td>Invoice</td>
//       <td>125</td>
//       <td>USD</td>
//     </tr>
//     <tr>
//       <td>Withdrawal</td>
//       <td>85</td>
//       <td>USD</td>
//     </tr>
//   </tbody>
// </table>
