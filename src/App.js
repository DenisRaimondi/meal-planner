import React, { useState } from 'react';
import Header from './components/Header';
import MealPlan from './components/MealPlan';
import NutritionStats from './components/NutritionStats';
import DietaryTips from './components/DietaryTips';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('meals');
  
  return (
    <div className="App">
      <Header />
      
      <main className="app-content">
        {activeTab === 'meals' && <MealPlan />}
        {activeTab === 'stats' && <NutritionStats />}
        {activeTab === 'tips' && <DietaryTips />}
      </main>
      
      <nav className="app-navigation">
        <button 
          className={`nav-button ${activeTab === 'meals' ? 'active' : ''}`}
          onClick={() => setActiveTab('meals')}
        >
          Piano Pasti
        </button>
        <button 
          className={`nav-button ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          Statistiche
        </button>
        <button 
          className={`nav-button ${activeTab === 'tips' ? 'active' : ''}`}
          onClick={() => setActiveTab('tips')}
        >
          Consigli
        </button>
      </nav>
    </div>
  );
}

export default App;
