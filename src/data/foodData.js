// Dati degli alimenti con valori nutrizionali
// Le calorie e i macronutrienti sono calcolati per 100g di prodotto

export const foodCategories = [
  { id: 'proteins', name: 'Proteine' },
  { id: 'carbs', name: 'Carboidrati' },
  { id: 'fats', name: 'Grassi' },
  { id: 'veggies', name: 'Verdure' },
  { id: 'fruits', name: 'Frutta' },
];

export const foods = [
  // Proteine
  {
    id: 'chicken_breast',
    name: 'Petto di pollo',
    category: 'proteins',
    calories: 165,
    proteins: 31,
    carbs: 0,
    fats: 3.6,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
  {
    id: 'turkey_breast',
    name: 'Tacchino',
    category: 'proteins',
    calories: 104,
    proteins: 24,
    carbs: 0,
    fats: 1,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
  {
    id: 'eggs',
    name: 'Uova',
    category: 'proteins',
    calories: 155,
    proteins: 13,
    carbs: 1.1,
    fats: 11,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
    notes: 'Preferibilmente cotti sodo o alla coque'
  },
  {
    id: 'white_fish',
    name: 'Pesce bianco',
    category: 'proteins',
    calories: 96,
    proteins: 20,
    carbs: 0,
    fats: 1.5,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
  {
    id: 'salmon',
    name: 'Salmone',
    category: 'proteins',
    calories: 208,
    proteins: 20,
    carbs: 0,
    fats: 13,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
  {
    id: 'tofu',
    name: 'Tofu',
    category: 'proteins',
    calories: 76,
    proteins: 8,
    carbs: 2,
    fats: 4.5,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
  {
    id: 'beans',
    name: 'Fagioli',
    category: 'proteins',
    calories: 127,
    proteins: 9,
    carbs: 20,
    fats: 0.5,
    portion: 100,
    unit: 'g',
    safeForGastritis: false,
    notes: 'Può causare gonfiore, consumare con moderazione'
  },
  
  // Carboidrati
  {
    id: 'brown_rice',
    name: 'Riso integrale',
    category: 'carbs',
    calories: 357,
    proteins: 7.5,
    carbs: 76,
    fats: 2.5,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
  {
    id: 'oats',
    name: 'Avena',
    category: 'carbs',
    calories: 389,
    proteins: 16.9,
    carbs: 66.3,
    fats: 6.9,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
  {
    id: 'sweet_potato',
    name: 'Patata dolce',
    category: 'carbs',
    calories: 115,
    proteins: 1.6,
    carbs: 26.2,
    fats: 0.1,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
  {
    id: 'whole_wheat_pasta',
    name: 'Pasta integrale',
    category: 'carbs',
    calories: 348,
    proteins: 13.4,
    carbs: 67.2,
    fats: 2.8,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
    notes: 'Da consumare ben cotta'
  },

  // Grassi sani
  {
    id: 'olive_oil',
    name: 'Olio d\'oliva',
    category: 'fats',
    calories: 884,
    proteins: 0,
    carbs: 0,
    fats: 100,
    portion: 15,
    unit: 'ml',
    safeForGastritis: true,
    notes: 'Da utilizzare a crudo'
  },
  {
    id: 'avocado',
    name: 'Avocado',
    category: 'fats',
    calories: 160,
    proteins: 2,
    carbs: 8.5,
    fats: 14.7,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
  {
    id: 'nuts',
    name: 'Frutta secca mista',
    category: 'fats',
    calories: 607,
    proteins: 20,
    carbs: 20,
    fats: 50,
    portion: 30,
    unit: 'g',
    safeForGastritis: false,
    notes: 'Può irritare lo stomaco. Consumare con moderazione e non a stomaco vuoto'
  },

  // Verdure
  {
    id: 'spinach',
    name: 'Spinaci',
    category: 'veggies',
    calories: 23,
    proteins: 2.9,
    carbs: 3.6,
    fats: 0.4,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
    notes: 'Da consumare cotti'
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    category: 'veggies',
    calories: 34,
    proteins: 2.8,
    carbs: 7,
    fats: 0.4,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
    notes: 'Da consumare cotti'
  },
  {
    id: 'carrot',
    name: 'Carote',
    category: 'veggies',
    calories: 41,
    proteins: 0.9,
    carbs: 9.6,
    fats: 0.2,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
  {
    id: 'zucchini',
    name: 'Zucchine',
    category: 'veggies',
    calories: 17,
    proteins: 1.2,
    carbs: 3.1,
    fats: 0.3,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
  {
    id: 'cucumber',
    name: 'Cetriolo',
    category: 'veggies',
    calories: 15,
    proteins: 0.7,
    carbs: 3.6,
    fats: 0.1,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },

  // Frutta
  {
    id: 'apple',
    name: 'Mela',
    category: 'fruits',
    calories: 52,
    proteins: 0.3,
    carbs: 14,
    fats: 0.2,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
  {
    id: 'banana',
    name: 'Banana',
    category: 'fruits',
    calories: 89,
    proteins: 1.1,
    carbs: 22.8,
    fats: 0.3,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
  {
    id: 'berries',
    name: 'Frutti di bosco',
    category: 'fruits',
    calories: 57,
    proteins: 0.7,
    carbs: 14,
    fats: 0.3,
    portion: 100,
    unit: 'g',
    safeForGastritis: true,
  },
];

// Lista di alimenti sicuri per la gastrite, ordinati per priorità
export const safeFoodsForGastritis = foods
  .filter(food => food.safeForGastritis)
  .map(food => food.id);

// Lista di alimenti da evitare per la gastrite
export const foodsToAvoid = [
  { 
    name: 'Agrumi', 
    reason: 'Acidi, possono irritare lo stomaco'
  },
  { 
    name: 'Cibi piccanti', 
    reason: 'Irritano la mucosa gastrica' 
  },
  { 
    name: 'Caffè', 
    reason: 'Stimola la produzione di acido gastrico' 
  },
  { 
    name: 'Bevande gassate', 
    reason: 'Aumentano la pressione e irritano lo stomaco' 
  },
  { 
    name: 'Pomodori', 
    reason: 'Acidi, possono causare bruciore' 
  },
  { 
    name: 'Cipolla e aglio', 
    reason: 'Possono irritare lo stomaco in alcune persone' 
  },
  { 
    name: 'Alimenti fritti', 
    reason: 'Difficili da digerire' 
  },
  { 
    name: 'Latte intero', 
    reason: 'Contiene lattosio e grassi che possono irritare' 
  },
  { 
    name: 'Cioccolato', 
    reason: 'Può rilassare lo sfintere esofageo causando reflusso' 
  },
  { 
    name: 'Alcol', 
    reason: 'Irrita direttamente la mucosa gastrica' 
  },
];

export const mealTypes = [
  { id: 'breakfast', name: 'Colazione', icon: 'coffee' },
  { id: 'morning_snack', name: 'Spuntino Mattutino', icon: 'apple-alt' },
  { id: 'lunch', name: 'Pranzo', icon: 'utensils' },
  { id: 'afternoon_snack', name: 'Spuntino Pomeridiano', icon: 'carrot' },
  { id: 'dinner', name: 'Cena', icon: 'moon' },
];

export const defaultMealPlan = {
  breakfast: {
    name: 'Colazione',
    calories: 450,
    proteins: 25,
    carbs: 55,
    fats: 15,
    recommendations: [
      { foodId: 'oats', amount: 50 },
      { foodId: 'berries', amount: 100 },
      { foodId: 'eggs', amount: 50 }, // 1 uovo circa
    ]
  },
  morning_snack: {
    name: 'Spuntino Mattutino',
    calories: 200,
    proteins: 10,
    carbs: 25,
    fats: 5,
    recommendations: [
      { foodId: 'apple', amount: 150 },
      { foodId: 'nuts', amount: 15 },
    ]
  },
  lunch: {
    name: 'Pranzo',
    calories: 650,
    proteins: 40,
    carbs: 70,
    fats: 20,
    recommendations: [
      { foodId: 'brown_rice', amount: 70 },
      { foodId: 'chicken_breast', amount: 120 },
      { foodId: 'broccoli', amount: 150 },
      { foodId: 'olive_oil', amount: 10 },
    ]
  },
  afternoon_snack: {
    name: 'Spuntino Pomeridiano',
    calories: 200,
    proteins: 15,
    carbs: 20,
    fats: 5,
    recommendations: [
      { foodId: 'tofu', amount: 100 },
      { foodId: 'carrot', amount: 100 },
    ]
  },
  dinner: {
    name: 'Cena',
    calories: 550,
    proteins: 35,
    carbs: 50,
    fats: 20,
    recommendations: [
      { foodId: 'white_fish', amount: 150 },
      { foodId: 'sweet_potato', amount: 150 },
      { foodId: 'spinach', amount: 100 },
      { foodId: 'olive_oil', amount: 5 },
    ]
  }
};