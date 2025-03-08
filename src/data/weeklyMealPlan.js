// Piani alimentari diversificati per ogni giorno della settimana
// Gli alimenti e le quantità sono stati selezionati per:
// 1. Essere sicuri per chi soffre di gastrite
// 2. Essere semplici e facili da preparare
// 3. Supportare gli obiettivi di perdita di massa grassa e aumento di massa muscolare
// 4. Garantire una buona varietà di alimenti durante la settimana

export const weeklyMealPlan = {
  // Lunedì
  1: {
    breakfast: {
      name: 'Colazione',
      recommendations: [
        { foodId: 'oats', amount: 50 },
        { foodId: 'banana', amount: 100 },
        { foodId: 'eggs', amount: 50 }, // 1 uovo circa
      ]
    },
    morning_snack: {
      name: 'Spuntino Mattutino',
      recommendations: [
        { foodId: 'apple', amount: 150 },
        { foodId: 'nuts', amount: 15 },
      ]
    },
    lunch: {
      name: 'Pranzo',
      recommendations: [
        { foodId: 'brown_rice', amount: 70 },
        { foodId: 'chicken_breast', amount: 120 },
        { foodId: 'broccoli', amount: 150 },
        { foodId: 'olive_oil', amount: 10 },
      ]
    },
    afternoon_snack: {
      name: 'Spuntino Pomeridiano',
      recommendations: [
        { foodId: 'tofu', amount: 100 },
        { foodId: 'carrot', amount: 100 },
      ]
    },
    dinner: {
      name: 'Cena',
      recommendations: [
        { foodId: 'white_fish', amount: 150 },
        { foodId: 'sweet_potato', amount: 150 },
        { foodId: 'spinach', amount: 100 },
        { foodId: 'olive_oil', amount: 5 },
      ]
    }
  },
  
  // Martedì
  2: {
    breakfast: {
      name: 'Colazione',
      recommendations: [
        { foodId: 'oats', amount: 50 },
        { foodId: 'berries', amount: 100 },
        { foodId: 'tofu', amount: 50 },
      ]
    },
    morning_snack: {
      name: 'Spuntino Mattutino',
      recommendations: [
        { foodId: 'banana', amount: 120 },
        { foodId: 'avocado', amount: 20 },
      ]
    },
    lunch: {
      name: 'Pranzo',
      recommendations: [
        { foodId: 'whole_wheat_pasta', amount: 80 },
        { foodId: 'turkey_breast', amount: 120 },
        { foodId: 'zucchini', amount: 150 },
        { foodId: 'olive_oil', amount: 10 },
      ]
    },
    afternoon_snack: {
      name: 'Spuntino Pomeridiano',
      recommendations: [
        { foodId: 'apple', amount: 150 },
        { foodId: 'nuts', amount: 10 },
      ]
    },
    dinner: {
      name: 'Cena',
      recommendations: [
        { foodId: 'salmon', amount: 130 },
        { foodId: 'brown_rice', amount: 60 },
        { foodId: 'broccoli', amount: 150 },
        { foodId: 'olive_oil', amount: 5 },
      ]
    }
  },
  
  // Mercoledì
  3: {
    breakfast: {
      name: 'Colazione',
      recommendations: [
        { foodId: 'oats', amount: 40 },
        { foodId: 'apple', amount: 150 },
        { foodId: 'eggs', amount: 100 }, // 2 uova circa
      ]
    },
    morning_snack: {
      name: 'Spuntino Mattutino',
      recommendations: [
        { foodId: 'berries', amount: 150 },
        { foodId: 'nuts', amount: 15 },
      ]
    },
    lunch: {
      name: 'Pranzo',
      recommendations: [
        { foodId: 'sweet_potato', amount: 150 },
        { foodId: 'chicken_breast', amount: 120 },
        { foodId: 'spinach', amount: 150 },
        { foodId: 'olive_oil', amount: 10 },
      ]
    },
    afternoon_snack: {
      name: 'Spuntino Pomeridiano',
      recommendations: [
        { foodId: 'tofu', amount: 100 },
        { foodId: 'cucumber', amount: 100 },
      ]
    },
    dinner: {
      name: 'Cena',
      recommendations: [
        { foodId: 'white_fish', amount: 150 },
        { foodId: 'brown_rice', amount: 60 },
        { foodId: 'carrot', amount: 150 },
        { foodId: 'olive_oil', amount: 5 },
      ]
    }
  },
  
  // Giovedì
  4: {
    breakfast: {
      name: 'Colazione',
      recommendations: [
        { foodId: 'oats', amount: 50 },
        { foodId: 'banana', amount: 120 },
        { foodId: 'tofu', amount: 60 },
      ]
    },
    morning_snack: {
      name: 'Spuntino Mattutino',
      recommendations: [
        { foodId: 'apple', amount: 150 },
        { foodId: 'avocado', amount: 25 },
      ]
    },
    lunch: {
      name: 'Pranzo',
      recommendations: [
        { foodId: 'brown_rice', amount: 70 },
        { foodId: 'turkey_breast', amount: 120 },
        { foodId: 'broccoli', amount: 150 },
        { foodId: 'olive_oil', amount: 10 },
      ]
    },
    afternoon_snack: {
      name: 'Spuntino Pomeridiano',
      recommendations: [
        { foodId: 'berries', amount: 100 },
        { foodId: 'nuts', amount: 10 },
      ]
    },
    dinner: {
      name: 'Cena',
      recommendations: [
        { foodId: 'eggs', amount: 100 }, // 2 uova circa
        { foodId: 'sweet_potato', amount: 150 },
        { foodId: 'zucchini', amount: 150 },
        { foodId: 'olive_oil', amount: 5 },
      ]
    }
  },
  
  // Venerdì
  5: {
    breakfast: {
      name: 'Colazione',
      recommendations: [
        { foodId: 'oats', amount: 50 },
        { foodId: 'berries', amount: 100 },
        { foodId: 'eggs', amount: 50 }, // 1 uovo circa
      ]
    },
    morning_snack: {
      name: 'Spuntino Mattutino',
      recommendations: [
        { foodId: 'banana', amount: 120 },
        { foodId: 'nuts', amount: 15 },
      ]
    },
    lunch: {
      name: 'Pranzo',
      recommendations: [
        { foodId: 'whole_wheat_pasta', amount: 80 },
        { foodId: 'chicken_breast', amount: 120 },
        { foodId: 'carrot', amount: 150 },
        { foodId: 'olive_oil', amount: 10 },
      ]
    },
    afternoon_snack: {
      name: 'Spuntino Pomeridiano',
      recommendations: [
        { foodId: 'apple', amount: 150 },
        { foodId: 'tofu', amount: 50 },
      ]
    },
    dinner: {
      name: 'Cena',
      recommendations: [
        { foodId: 'salmon', amount: 130 },
        { foodId: 'sweet_potato', amount: 150 },
        { foodId: 'spinach', amount: 100 },
        { foodId: 'olive_oil', amount: 5 },
      ]
    }
  },
  
  // Sabato
  6: {
    breakfast: {
      name: 'Colazione',
      recommendations: [
        { foodId: 'oats', amount: 50 },
        { foodId: 'berries', amount: 100 },
        { foodId: 'avocado', amount: 30 },
      ]
    },
    morning_snack: {
      name: 'Spuntino Mattutino',
      recommendations: [
        { foodId: 'apple', amount: 150 },
        { foodId: 'nuts', amount: 15 },
      ]
    },
    lunch: {
      name: 'Pranzo',
      recommendations: [
        { foodId: 'brown_rice', amount: 70 },
        { foodId: 'white_fish', amount: 150 },
        { foodId: 'zucchini', amount: 150 },
        { foodId: 'olive_oil', amount: 10 },
      ]
    },
    afternoon_snack: {
      name: 'Spuntino Pomeridiano',
      recommendations: [
        { foodId: 'banana', amount: 120 },
        { foodId: 'tofu', amount: 50 },
      ]
    },
    dinner: {
      name: 'Cena',
      recommendations: [
        { foodId: 'chicken_breast', amount: 120 },
        { foodId: 'sweet_potato', amount: 150 },
        { foodId: 'broccoli', amount: 150 },
        { foodId: 'olive_oil', amount: 5 },
      ]
    }
  },
  
  // Domenica
  0: {
    breakfast: {
      name: 'Colazione',
      recommendations: [
        { foodId: 'oats', amount: 50 },
        { foodId: 'apple', amount: 150 },
        { foodId: 'eggs', amount: 100 }, // 2 uova circa
      ]
    },
    morning_snack: {
      name: 'Spuntino Mattutino',
      recommendations: [
        { foodId: 'berries', amount: 100 },
        { foodId: 'avocado', amount: 25 },
      ]
    },
    lunch: {
      name: 'Pranzo',
      recommendations: [
        { foodId: 'brown_rice', amount: 70 },
        { foodId: 'salmon', amount: 130 },
        { foodId: 'carrot', amount: 150 },
        { foodId: 'olive_oil', amount: 10 },
      ]
    },
    afternoon_snack: {
      name: 'Spuntino Pomeridiano',
      recommendations: [
        { foodId: 'banana', amount: 120 },
        { foodId: 'nuts', amount: 10 },
      ]
    },
    dinner: {
      name: 'Cena',
      recommendations: [
        { foodId: 'turkey_breast', amount: 120 },
        { foodId: 'sweet_potato', amount: 150 },
        { foodId: 'spinach', amount: 100 },
        { foodId: 'cucumber', amount: 100 },
        { foodId: 'olive_oil', amount: 5 },
      ]
    }
  }
};