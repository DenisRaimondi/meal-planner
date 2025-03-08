# 🍽️ Piano Alimentare

Un'applicazione React per la pianificazione dei pasti personalizzata, con focus su diete specifiche per persone con gastrite e obiettivi di tonificazione muscolare.

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-NETLIFY-APP-ID/deploy-status)](https://app.netlify.com/sites/YOUR-NETLIFY-SITE-NAME/deploys)

## 📱 Demo

L'applicazione è disponibile online su [meal-planner.netlify.app](https://meal-planner.netlify.app) (sostituisci con il tuo URL Netlify quando disponibile)

## ✨ Caratteristiche

- **Piano alimentare diversificato** per ogni giorno della settimana
- **Indicazioni dettagliate sulla preparazione** di ogni alimento
- **Consigli specifici per la gastrite** e per l'aumento della massa muscolare
- **Lista della spesa automatica** basata sui pasti pianificati
- **Interfaccia ottimizzata per iPhone** con design mobile-first
- **Salvataggio locale dei dati** tramite localStorage

## 🥗 Funzionalità Principali

- Visualizzazione giornaliera dei pasti consigliati
- Navigazione settimanale per pianificare in anticipo
- Istruzioni di preparazione per ciascun alimento
- Monitoraggio del completamento dei pasti
- Statistiche nutrizionali e consigli alimentari

## 🚀 Tecnologie Utilizzate

- React 19
- CSS3 con approccio mobile-first
- date-fns per la gestione delle date
- react-icons per le icone
- Chart.js e react-chartjs-2 per i grafici
- LocalStorage per la persistenza dei dati

## 🛠️ Installazione e Avvio Locale

```bash
# Clona il repository
git clone https://github.com/DenisRaimondi/meal-planner.git

# Entra nella directory del progetto
cd meal-planner

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm start
```

L'applicazione sarà disponibile all'indirizzo [http://localhost:3000](http://localhost:3000)

## 📦 Build e Deploy

### Build Locale

```bash
npm run build
```

### Deploy su Netlify

Questo repository è configurato per il deploy automatico su Netlify.

1. Collegati a [Netlify](https://www.netlify.com/)
2. Crea un nuovo sito da Git
3. Seleziona questo repository GitHub
4. Usa le seguenti impostazioni:
   - Branch da deployare: `master`
   - Comando di build: `npm run build`
   - Directory di pubblicazione: `build`

Le configurazioni necessarie sono già presenti nel file `netlify.toml` alla radice del progetto.

## 📝 Licenza

MIT
