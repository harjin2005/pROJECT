import React, { useState } from 'react';
import { Calculator, DollarSign } from 'lucide-react';

interface Expense {
  id: string;
  name: string;
  amount: number;
}

const BudgetCalculator = () => {
  const [totalBudget, setTotalBudget] = useState<number>(0);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpenseName, setNewExpenseName] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');

  const remainingBudget = totalBudget - expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const addExpense = () => {
    if (newExpenseName && newExpenseAmount) {
      setExpenses([
        ...expenses,
        {
          id: Date.now().toString(),
          name: newExpenseName,
          amount: parseFloat(newExpenseAmount)
        }
      ]);
      setNewExpenseName('');
      setNewExpenseAmount('');
    }
  };

  const removeExpense = (id: string) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 text-rose-500 mr-2" />
        <h3 className="text-2xl font-serif">Budget Calculator</h3>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Total Budget</label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="number"
            value={totalBudget}
            onChange={(e) => setTotalBudget(parseFloat(e.target.value) || 0)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            placeholder="Enter your total budget"
          />
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Add Expense</h4>
        <div className="flex gap-2">
          <input
            type="text"
            value={newExpenseName}
            onChange={(e) => setNewExpenseName(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            placeholder="Expense name"
          />
          <input
            type="number"
            value={newExpenseAmount}
            onChange={(e) => setNewExpenseAmount(e.target.value)}
            className="w-32 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            placeholder="Amount"
          />
          <button
            onClick={addExpense}
            className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
          >
            Add
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Expenses</h4>
        <div className="space-y-2">
          {expenses.map((expense) => (
            <div key={expense.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span>{expense.name}</span>
              <div className="flex items-center gap-2">
                <span>${expense.amount}</span>
                <button
                  onClick={() => removeExpense(expense.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center text-lg font-medium">
          <span>Remaining Budget:</span>
          <span className={remainingBudget >= 0 ? 'text-green-500' : 'text-red-500'}>
            ${remainingBudget}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;