import React from 'react';
import { FaInfoCircle, FaExclamationTriangle, FaClipboardCheck, FaCheckCircle } from 'react-icons/fa';
import { safeFoodsForGastritis, foodsToAvoid, foods } from '../data/foodData';
import './DietaryTips.css';

const DietaryTips = () => {
  // Ottiene i nomi degli alimenti sicuri per la gastrite
  const getSafeFoodNames = () => {
    return safeFoodsForGastritis.map(id => {
      const food = foods.find(f => f.id === id);
      return food ? food.name : '';
    }).filter(name => name !== '').slice(0, 10); // Prendiamo solo i primi 10 per non avere una lista troppo lunga
  };
  
  const safeFoodsList = getSafeFoodNames();
  return (
    <div className="dietary-tips">
      <h2>Consigli Alimentari</h2>
      
      <div className="tips-section">
        <div className="tip-header">
          <FaInfoCircle className="tip-icon" />
          <h3>Per la Gastrite</h3>
        </div>
        <div className="tip-content">
          <p>
            Con la gastrite è importante seguire un'alimentazione che non irriti la mucosa gastrica.
            Ecco alcuni consigli generali:
          </p>
          <ul>
            <li>Mangia pasti più piccoli e frequenti</li>
            <li>Mastica lentamente e accuratamente</li>
            <li>Evita di mangiare prima di coricarti</li>
            <li>Mantieni un peso sano</li>
            <li>Bevi acqua a temperatura ambiente</li>
          </ul>
        </div>
      </div>
      
      <div className="tips-section">
        <div className="tip-header">
          <FaExclamationTriangle className="tip-icon warning" />
          <h3>Alimenti da Evitare</h3>
        </div>
        <div className="tip-content">
          <ul className="avoid-list">
            {foodsToAvoid.map((food, index) => (
              <li key={index}>
                <span className="food-name">{food.name}</span>
                <span className="food-reason">{food.reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="tips-section">
        <div className="tip-header">
          <FaCheckCircle className="tip-icon good" />
          <h3>Alimenti Consigliati per la Gastrite</h3>
        </div>
        <div className="tip-content">
          <p>
            Questi alimenti sono generalmente ben tollerati dalle persone con gastrite:
          </p>
          <div className="safe-foods-grid">
            {safeFoodsList.map((food, index) => (
              <div key={index} className="safe-food-item">
                <FaCheckCircle className="safe-food-icon" />
                <span>{food}</span>
              </div>
            ))}
          </div>
          <p className="tip-note">
            <strong>Consiglio:</strong> Preferisci cotture al vapore, al forno o alla griglia.
            Evita fritture e cotture molto elaborate.
          </p>
        </div>
      </div>
      
      <div className="tips-section">
        <div className="tip-header">
          <FaClipboardCheck className="tip-icon good" />
          <h3>Consigli per la Massa Muscolare</h3>
        </div>
        <div className="tip-content">
          <p>
            Per aumentare la massa muscolare e ridurre il grasso corporeo è fondamentale:
          </p>
          <ul>
            <li>Consumare proteine ad ogni pasto (25-30g per pasto)</li>
            <li>Mantenere un leggero surplus calorico nei giorni di allenamento</li>
            <li>Preferire carboidrati complessi prima dell'attività fisica</li>
            <li>Idratarsi adeguatamente (minimo 2L di acqua al giorno)</li>
            <li>Consumare proteine entro 30 minuti dopo l'allenamento</li>
            <li>Assicurarsi di consumare abbastanza acidi grassi essenziali</li>
          </ul>
          <p className="tip-note">
            <strong>Nota:</strong> Queste raccomandazioni sono compatibili con la gestione della gastrite, 
            privilegiando alimenti proteici più facilmente digeribili.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DietaryTips;