// Guida alla preparazione degli alimenti, con attenzione particolare per chi soffre di gastrite

export const foodPreparations = {
  // Cereali e carboidrati
  oats: {
    title: 'Avena',
    preparation: `
      **Porridge d'avena delicato:**
      1. Metti 50g di fiocchi d'avena in una pentola con 200ml di acqua o latte vegetale (mandorla o riso)
      2. Cuoci a fuoco medio-basso per 5-7 minuti, mescolando regolarmente
      3. Aggiungi un pizzico di cannella (facoltativo) e la frutta prevista nel piano
      4. Per migliorare la digeribilità, lascia i fiocchi in ammollo la sera prima
      
      **Overnight oats (Alternativa fredda):**
      1. La sera prima, mescola 50g di fiocchi d'avena con 120ml di latte vegetale
      2. Lascia riposare in frigorifero tutta la notte in un contenitore chiuso
      3. Al mattino aggiungi la frutta prevista nel piano
      
      **Consigli per la gastrite:**
      - Evita di aggiungere zuccheri raffinati o miele in grandi quantità
      - Consuma il porridge tiepido, non bollente
      - Mastica lentamente per facilitare la digestione
    `,
  },
  
  brown_rice: {
    title: 'Riso integrale',
    preparation: `
      1. Sciacqua il riso sotto acqua corrente fredda prima della cottura
      2. Cuoci in abbondante acqua (rapporto 1:3 riso/acqua) per circa 30 minuti
      3. Scolalo bene e lascialo riposare coperto per 5 minuti
      
      **Consigli per la gastrite:**
      - Assicurati che sia ben cotto, il riso al dente può essere più difficile da digerire
      - Puoi cuocerlo in brodo vegetale leggero per un sapore più ricco senza irritare
    `,
  },
  
  whole_wheat_pasta: {
    title: 'Pasta integrale',
    preparation: `
      1. Cuoci la pasta in abbondante acqua salata leggermente, seguendo i tempi indicati sulla confezione
      2. Scolala quando è ben cotta (evita la cottura al dente se soffri di gastrite)
      
      **Consigli per la gastrite:**
      - Condisci con olio d'oliva a crudo e spezie delicate
      - Evita sughi a base di pomodoro, aglio o cipolle che possono irritare lo stomaco
    `,
  },
  
  sweet_potato: {
    title: 'Patata dolce',
    preparation: `
      **Al forno:**
      1. Preriscalda il forno a 180°C
      2. Lava e sbuccia la patata dolce, tagliala a cubetti
      3. Condisci con un filo d'olio e un pizzico di rosmarino
      4. Cuoci per 25-30 minuti fino a quando sono morbide
      
      **Bollita:**
      1. Sbuccia e taglia a cubetti la patata dolce
      2. Falla bollire in acqua per 15-20 minuti fino a quando diventa morbida
      
      **Consigli per la gastrite:**
      - La cottura al vapore è particolarmente delicata per lo stomaco
      - Evita di friggerla o di aggiungere spezie piccanti
    `,
  },
  
  // Proteine
  eggs: {
    title: 'Uova',
    preparation: `
      **Uova sode (ideali per gastrite):**
      1. Immergi le uova in acqua fredda
      2. Porta a ebollizione e cuoci per 7 minuti per uova con tuorlo morbido, 9 minuti per uova sode
      3. Raffreddare sotto acqua fredda prima di sbucciare
      
      **Uova strapazzate delicate:**
      1. Sbatti le uova in una ciotola
      2. Cuoci a fuoco basso in una padella antiaderente con poco olio
      3. Mescola delicatamente fino a quando sono appena rapprese
      
      **Consigli per la gastrite:**
      - Evita le uova fritte o all'occhio di bue dove il tuorlo rimane liquido
      - Le uova strapazzate ben cotte o sode sono più facili da digerire
    `,
  },
  
  chicken_breast: {
    title: 'Petto di pollo',
    preparation: `
      **Al vapore (ottimo per gastrite):**
      1. Taglia il petto di pollo a fette di medio spessore
      2. Cuoci al vapore per 15-20 minuti fino a completa cottura
      3. Aggiungi erbe aromatiche delicate a fine cottura
      
      **Al forno:**
      1. Preriscalda il forno a 180°C
      2. Condisci il petto di pollo con olio d'oliva, rosmarino e un pizzico di sale
      3. Cuoci per 20-25 minuti fino a quando è completamente cotto
      
      **Consigli per la gastrite:**
      - Evita marinature acide o piccanti
      - Rimuovi la pelle del pollo prima della cottura
      - Assicurati che sia ben cotto per facilitare la digestione
    `,
  },
  
  tofu: {
    title: 'Tofu',
    preparation: `
      **Preparazione base:**
      1. Rimuovi il tofu dalla confezione e sciacqualo sotto acqua corrente fredda
      2. Avvolgilo in un canovaccio pulito o carta assorbente e premi delicatamente per eliminare l'acqua in eccesso
      3. Taglialo a cubetti o a fette a seconda dell'uso
      
      **Alla piastra (metodo semplice):**
      1. Taglia il tofu a fette spesse circa 1 cm
      2. Asciugalo bene con carta assorbente
      3. Scalda una padella antiaderente con pochissimo olio
      4. Cuoci il tofu 3-4 minuti per lato, fino a doratura
      5. Aggiungi un pizzico di sale e erbe a piacere
      
      **Al forno:**
      1. Preriscalda il forno a 180°C
      2. Taglia il tofu a cubetti e mettili su una teglia foderata con carta da forno
      3. Condisci con un filo d'olio e un pizzico di sale
      4. Cuoci per circa 25-30 minuti, girandoli a metà cottura
      
      **Consigli per la gastrite:**
      - Il tofu naturale è molto delicato per lo stomaco
      - Evita condimenti piccanti o acidi come limone o aceto
      - Puoi marimare il tofu in un po' di olio d'oliva e erbe aromatiche delicate per insaporirlo
      - È particolarmente digeribile se cotto al vapore o bollito leggermente
      
      **Suggerimento per lo spuntino:**
      Per lo spuntino pomeridiano, puoi consumare il tofu tagliato a cubetti e condito semplicemente con un pizzico di sale e erbe, insieme a verdure crude o leggermente cotte.
    `,
  },
  
  white_fish: {
    title: 'Pesce bianco',
    preparation: `
      **Al vapore (ideale per gastrite):**
      1. Condisci il pesce con un filo d'olio, prezzemolo e un pizzico di sale
      2. Cuoci al vapore per 10-12 minuti fino a quando la carne diventa opaca e si sfalda facilmente
      
      **Al cartoccio:**
      1. Preriscalda il forno a 180°C
      2. Adagia il pesce su un foglio di carta da forno
      3. Aggiungi un filo d'olio e erbe aromatiche
      4. Chiudi il cartoccio e cuoci per 15-18 minuti
      
      **Consigli per la gastrite:**
      - Evita condimenti acidi come limone o pomodoro
      - Il pesce al vapore o al cartoccio mantiene l'umidità ed è più digeribile
      - Scegli pesci a basso contenuto di grassi come branzino, orata o merluzzo
    `,
  },
  
  // Frutta e verdura
  spinach: {
    title: 'Spinaci',
    preparation: `
      **Cottura al vapore:**
      1. Lava bene gli spinaci
      2. Cuoci al vapore per 3-5 minuti fino a quando sono appassiti
      3. Condisci con un filo d'olio a crudo
      
      **In padella:**
      1. Scalda leggermente una padella con un cucchiaino d'olio
      2. Aggiungi gli spinaci e cuoci a fuoco medio per 3-4 minuti mescolando
      
      **Consigli per la gastrite:**
      - Gli spinaci cotti sono più facili da digerire rispetto a quelli crudi
      - Evita l'aggiunta di aglio o cipolla nella preparazione
    `,
  },
  
  avocado: {
    title: 'Avocado',
    preparation: `
      **Preparazione base:**
      1. Taglia l'avocado a metà e rimuovi il nocciolo
      2. Raccogli la polpa con un cucchiaio
      3. Schiacciala leggermente con una forchetta e aggiungi un pizzico di sale
      
      **Su pane tostato:**
      1. Spalma l'avocado schiacciato su una fetta di pane tostato integrale
      
      **Consigli per la gastrite:**
      - Consuma avocado ben maturo, è più digeribile
      - Evita di aggiungerci limone o spezie piccanti
      - Consumalo in piccole quantità se noti che causa fastidio
    `,
  },
  
  // Grassi sani
  olive_oil: {
    title: 'Olio d\'oliva',
    preparation: `
      **Uso corretto:**
      1. Utilizza sempre olio extravergine d'oliva di buona qualità
      2. Aggiungilo a crudo sui piatti già pronti quando possibile
      3. Per condire le verdure o la pasta, usa circa 5-10ml (1-2 cucchiaini)
      
      **Consigli per la gastrite:**
      - L'olio a crudo è generalmente ben tollerato in piccole quantità
      - Evita di soffriggere o di usare olio ad alte temperature
      - Inizia con piccole quantità e aumenta gradualmente se non causa disturbi
    `,
  },
};