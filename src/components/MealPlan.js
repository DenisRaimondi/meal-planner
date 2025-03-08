import React, { useState } from 'react';
import { format, addDays, subDays, startOfWeek, isSameDay, getDay } from 'date-fns';
import { it } from 'date-fns/locale';
import { FaCalendarAlt, FaAngleRight, FaCheckCircle, FaExclamationCircle, FaArrowLeft, FaArrowRight, FaShoppingBasket, FaUtensils } from 'react-icons/fa';
import { mealTypes, foods } from '../data/foodData';
import { weeklyMealPlan } from '../data/weeklyMealPlan';
import { foodPreparations } from '../data/preparationGuide';
import useLocalStorage from '../hooks/useLocalStorage';
import './MealPlan.css';

// eslint-disable-next-line
const MealPlan = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [expandedMeal, setExpandedMeal] = useState(null);
  const [completedMeals, setCompletedMeals] = useLocalStorage('completedMeals', {});
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [weekStartDate, setWeekStartDate] = useState(() => startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [expandedFoodItem, setExpandedFoodItem] = useState(null);
  
  const dateKey = format(currentDate, 'yyyy-MM-dd');
  const todayCompletedMeals = completedMeals[dateKey] || [];
  
  // Naviga al giorno precedente
  const goToPreviousDay = () => {
    setCurrentDate(prevDate => subDays(prevDate, 1));
  };
  
  // Naviga al giorno successivo
  const goToNextDay = () => {
    setCurrentDate(prevDate => addDays(prevDate, 1));
  };

  // Naviga alla settimana precedente
  const goToPreviousWeek = () => {
    setWeekStartDate(prevDate => subDays(prevDate, 7));
  };
  
  // Naviga alla settimana successiva
  const goToNextWeek = () => {
    setWeekStartDate(prevDate => addDays(prevDate, 7));
  };
  
  // Seleziona un giorno specifico
  const selectDate = (date) => {
    setCurrentDate(date);
    setShowShoppingList(false);
  };
  
  // Toggle per espandere/chiudere un pasto
  const toggleMealExpanded = (mealId) => {
    setExpandedMeal(expandedMeal === mealId ? null : mealId);
  };
  
  // Toggle per completare/annullare un pasto
  const toggleMealCompleted = (mealId) => {
    const newCompletedMeals = { ...completedMeals };
    
    if (!newCompletedMeals[dateKey]) {
      newCompletedMeals[dateKey] = [];
    }
    
    if (todayCompletedMeals.includes(mealId)) {
      newCompletedMeals[dateKey] = todayCompletedMeals.filter(id => id !== mealId);
    } else {
      newCompletedMeals[dateKey] = [...todayCompletedMeals, mealId];
    }
    
    setCompletedMeals(newCompletedMeals);
  };
  
  // Toggle per mostrare/nascondere la lista della spesa
  const toggleShoppingList = () => {
    setShowShoppingList(!showShoppingList);
    if (!showShoppingList) {
      setExpandedMeal(null);
    }
  };
  
  // Funzione per ottenere il nome dell'alimento dall'ID
  const getFoodName = (foodId) => {
    const food = foods.find(f => f.id === foodId);
    return food ? food.name : 'Sconosciuto';
  };
  
  // Funzione per ottenere istruzioni di preparazione
  const getFoodPreparation = (foodId) => {
    return foodPreparations[foodId];
  };
  
  const getMealRecommendations = (mealId) => {
    // Ottiene il giorno della settimana dalla data corrente (0-6, dove 0 è domenica)
    const dayOfWeek = getDay(currentDate);
    
    // Recupera il piano pasti specifico per il giorno corrente
    const dayPlan = weeklyMealPlan[dayOfWeek];
    
    // Se esiste un piano per questo giorno e un piano per questo tipo di pasto, lo restituisce
    if (dayPlan && dayPlan[mealId] && dayPlan[mealId].recommendations) {
      return dayPlan[mealId].recommendations;
    }
    
    // Fallback al piano predefinito per quel tipo di pasto
    return [];
  };

  // Genera un array di 7 giorni a partire da weekStartDate
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStartDate, i));
  
  // Genera la lista della spesa per la settimana
  const generateShoppingList = () => {
    const shoppingItems = {};
    
    // Per ogni giorno della settimana (0-6, domenica-sabato)
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      const dayPlan = weeklyMealPlan[dayOfWeek];
      
      if (dayPlan) {
        // Per ogni tipo di pasto
        Object.keys(dayPlan).forEach(mealId => {
          if (dayPlan[mealId] && dayPlan[mealId].recommendations) {
            const recommendations = dayPlan[mealId].recommendations;
            
            // Aggiungi gli alimenti alla lista della spesa
            recommendations.forEach(item => {
              if (!shoppingItems[item.foodId]) {
                shoppingItems[item.foodId] = {
                  name: getFoodName(item.foodId),
                  amount: 0
                };
              }
              shoppingItems[item.foodId].amount += item.amount;
            });
          }
        });
      }
    }
    
    return Object.values(shoppingItems);
  };
  
  const shoppingList = generateShoppingList();
  
  // Verifica se il giorno è oggi
  const isToday = (date) => {
    return isSameDay(date, new Date());
  };

  return (
    <div className="meal-plan">
      {!showShoppingList ? (
        <>
          {/* Header con navigazione tra giorni */}
          <div className="date-navigation">
            <button className="nav-arrow" onClick={goToPreviousDay}>
              <FaArrowLeft />
            </button>
            <div className="date-header">
              <FaCalendarAlt className="calendar-icon" />
              <h2>{format(currentDate, 'EEEE d MMMM', { locale: it })}</h2>
            </div>
            <button className="nav-arrow" onClick={goToNextDay}>
              <FaArrowRight />
            </button>
          </div>
          
          {/* Calendarietto settimanale */}
          <div className="week-calendar">
            <button className="week-nav-arrow" onClick={goToPreviousWeek}>
              <FaArrowLeft />
            </button>
            <div className="week-days">
              {weekDays.map((day, index) => (
                <div 
                  key={index}
                  className={`week-day ${isSameDay(day, currentDate) ? 'selected' : ''} ${isToday(day) ? 'today' : ''}`}
                  onClick={() => selectDate(day)}
                >
                  <div className="day-name">{format(day, 'EEE', { locale: it })}</div>
                  <div className="day-number">{format(day, 'd')}</div>
                </div>
              ))}
            </div>
            <button className="week-nav-arrow" onClick={goToNextWeek}>
              <FaArrowRight />
            </button>
          </div>
          
          {/* Lista dei pasti per il giorno selezionato */}
          <div className="meals-container">
            {mealTypes.map((meal) => {
              const isCompleted = todayCompletedMeals.includes(meal.id);
              const recommendations = getMealRecommendations(meal.id);
              
              return (
                <div 
                  key={meal.id} 
                  className={`meal-card ${expandedMeal === meal.id ? 'expanded' : ''}`}
                >
                  <div 
                    className="meal-header" 
                    onClick={() => toggleMealExpanded(meal.id)}
                  >
                    <div className="meal-title">
                      {isCompleted ? (
                        <FaCheckCircle className="meal-completed-icon" />
                      ) : (
                        <FaExclamationCircle className="meal-pending-icon" />
                      )}
                      <h3>{meal.name}</h3>
                    </div>
                    <FaAngleRight className={`expand-icon ${expandedMeal === meal.id ? 'rotated' : ''}`} />
                  </div>
                  
                  {expandedMeal === meal.id && (
                    <div className="meal-details">
                      <h4>Alimenti consigliati:</h4>
                      <ul className="foods-list">
                        {recommendations.map((item, index) => {
                          const preparation = getFoodPreparation(item.foodId);
                          const isExpanded = expandedFoodItem === item.foodId;
                          
                          return (
                            <React.Fragment key={index}>
                              <li className={preparation ? 'has-preparation' : ''}>
                                <div className="food-item-header">
                                  <span>{getFoodName(item.foodId)} - {item.amount}g</span>
                                  {preparation && (
                                    <button
                                      className="preparation-toggle"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedFoodItem(isExpanded ? null : item.foodId);
                                      }}
                                    >
                                      <FaUtensils /> {isExpanded ? 'Nascondi preparazione' : 'Come preparare'}
                                    </button>
                                  )}
                                </div>
                              </li>
                              {isExpanded && preparation && (
                                <li className="preparation-details">
                                  <h5>{preparation.title}</h5>
                                  <div
                                    className="preparation-instructions"
                                    dangerouslySetInnerHTML={{__html: preparation.preparation.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />')}}
                                  />
                                </li>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </ul>
                      
                      <div className="meal-actions">
                        <button 
                          className={`meal-toggle-btn ${isCompleted ? 'completed' : 'pending'}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMealCompleted(meal.id);
                          }}
                        >
                          {isCompleted ? 'Completato ✓' : 'Segna come completato'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Pulsante per visualizzare la lista della spesa */}
          <button className="shopping-list-button" onClick={toggleShoppingList}>
            <FaShoppingBasket className="shopping-icon" />
            <span>Lista della Spesa Settimanale</span>
          </button>
        </>
      ) : (
        <>
          {/* Lista della spesa */}
          <div className="shopping-list-header">
            <button className="back-button" onClick={toggleShoppingList}>
              <FaArrowLeft /> Torna al Piano Pasti
            </button>
            <h2>Lista della Spesa Settimanale</h2>
            <p className="shopping-list-dates">
              {format(weekStartDate, 'd MMM', { locale: it })} - {format(addDays(weekStartDate, 6), 'd MMM', { locale: it })}
            </p>
          </div>
          
          <div className="shopping-list-container">
            {shoppingList.length > 0 ? (
              <>
                <ul className="shopping-list">
                  {shoppingList.map((item, index) => (
                    <li key={index} className="shopping-item">
                      <span className="shopping-item-name">{item.name}</span>
                      <span className="shopping-item-amount">{item.amount}g</span>
                    </li>
                  ))}
                </ul>
                <div className="shopping-list-note">
                  <p>
                    <strong>Nota:</strong> Questa lista copre i pasti dal {format(weekStartDate, 'EEEE d MMMM', { locale: it })} 
                    al {format(addDays(weekStartDate, 6), 'EEEE d MMMM', { locale: it })}.
                  </p>
                </div>
              </>
            ) : (
              <p className="empty-list">Nessun prodotto nella lista della spesa.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MealPlan;