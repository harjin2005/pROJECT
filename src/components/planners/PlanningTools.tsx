import React from 'react';
import BudgetCalculator from '../calculators/BudgetCalculator';
import GuestListManager from './GuestListManager';

const PlanningTools = () => {
  return (
    <section id="planning-tools" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Planning Tools</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BudgetCalculator />
          <GuestListManager />
        </div>
      </div>
    </section>
  );
};

export default PlanningTools;