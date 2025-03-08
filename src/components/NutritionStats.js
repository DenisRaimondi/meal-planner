import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import useLocalStorage from '../hooks/useLocalStorage';
import { mealTypes } from '../data/foodData';
import './NutritionStats.css';

// Registra i componenti necessari per Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const NutritionStats = () => {
  const [completedMeals] = useLocalStorage('completedMeals', {});
  
  // Calcola la percentuale di completamento per oggi
  const calculateTodayProgress = () => {
    const today = new Date();
    const dateKey = today.toISOString().split('T')[0];
    const todayCompleted = completedMeals[dateKey] || [];
    
    return (todayCompleted.length / mealTypes.length) * 100;
  };
  
  // Calcola la percentuale di completamento per la settimana
  const calculateWeekProgress = () => {
    const today = new Date();
    let totalMeals = 0;
    let completedCount = 0;
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateKey = date.toISOString().split('T')[0];
      
      const dayCompleted = completedMeals[dateKey] || [];
      totalMeals += mealTypes.length;
      completedCount += dayCompleted.length;
    }
    
    return totalMeals > 0 ? (completedCount / totalMeals) * 100 : 0;
  };
  
  const todayProgress = calculateTodayProgress();
  const weekProgress = calculateWeekProgress();
  
  // Configurazione per il grafico
  const chartData = {
    labels: ['Proteine', 'Carboidrati', 'Grassi'],
    datasets: [
      {
        label: 'Grammi consigliati',
        data: [125, 230, 70], // Valori giornalieri target (basati sul profilo)
        backgroundColor: 'rgba(74, 159, 98, 0.6)',
      },
      {
        label: 'Grammi consumati',
        data: [
          todayProgress * 1.25, // Simuliamo valori in base al progresso
          todayProgress * 2.3,
          todayProgress * 0.7
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Grammi',
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Macronutrienti Giornalieri',
      },
    },
  };

  return (
    <div className="nutrition-stats">
      <h2>Statistiche Nutrizionali</h2>
      
      <div className="progress-cards">
        <div className="progress-card">
          <h3>Progresso Oggi</h3>
          <div className="progress-bar-container">
            <div 
              className="progress-bar" 
              style={{ width: `${todayProgress}%` }}
            ></div>
          </div>
          <p className="progress-value">{Math.round(todayProgress)}%</p>
        </div>
        
        <div className="progress-card">
          <h3>Progresso Settimana</h3>
          <div className="progress-bar-container">
            <div 
              className="progress-bar" 
              style={{ width: `${weekProgress}%` }}
            ></div>
          </div>
          <p className="progress-value">{Math.round(weekProgress)}%</p>
        </div>
      </div>
      
      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} height={220} />
      </div>
      
      <div className="daily-goals">
        <h3>Obiettivi Giornalieri</h3>
        <div className="daily-goal-item">
          <span className="goal-label">Calorie</span>
          <span className="goal-value">2253 kcal</span>
        </div>
        <div className="daily-goal-item">
          <span className="goal-label">Proteine (25%)</span>
          <span className="goal-value">125g</span>
        </div>
        <div className="daily-goal-item">
          <span className="goal-label">Carboidrati (45%)</span>
          <span className="goal-value">230g</span>
        </div>
        <div className="daily-goal-item">
          <span className="goal-label">Grassi (30%)</span>
          <span className="goal-value">70g</span>
        </div>
      </div>
    </div>
  );
};

export default NutritionStats;