import Transaction from './trasaction';

export default function TransactionHistory({transactions}) {
  return (
    <table className="transaction-history">
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

