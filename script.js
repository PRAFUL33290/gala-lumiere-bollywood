// script.js

/**
 * Map French colour names to hex codes.  
 * Additional combinations will be handled by splitting on '+' and returning an array of colours.
 */
const colourMap = {
  'violet': '#8a2be2',
  'rouge': '#ff2e2e',
  'jaune': '#ffd700',
  'orange': '#ffa500',
  'vert': '#32cd32',
  'bleu': '#0073e6',
  'blanc': '#ffffff'
};

// Utility function to extract colour names from the light description
function parseColours(lightDescription) {
  if (!lightDescription) return [];
  // Normalize accents and case
  const normalized = lightDescription
    .toLowerCase()
    .normalize('NFD')
    // Remove diacritic marks (accents)
    .replace(/[\u0300-\u036f]/g, '');
  // Extract after 'wash' or just parse all known colours
  // Split on '+' or '/' to handle combos
  const parts = normalized.split(/\s*\+\s*|\s*\/\s*/);
  const colours = [];
  parts.forEach(part => {
    // Remove keywords like 'wash', 'plein feu', 'fixe', 'flash', 'court'
    let token = part.replace(/wash|plein feu|flash|court|fixe|impact|stroboscope|effet|musical|major|majeur|passage|tempo|partie|orientale|explosive|finale|explosion|montee|en|pression|dynamique|energie|energetique|progressive|festive|ouverte|ouverture|tableau|final|maximum|sat'kali/g, '').trim();
    // If token contains a known colour, record it
    Object.keys(colourMap).forEach(colour => {
      if (token.includes(colour)) {
        colours.push(colourMap[colour]);
      }
    });
  });
  // Fallback: if no colours detected and description includes 'flash blanc', add white
  if (colours.length === 0 && normalized.includes('blanc')) {
    colours.push(colourMap['blanc']);
  }
  return colours;
}

// Function to create colour swatch element(s) for the light cell
function createColourSwatch(colours) {
  const container = document.createElement('div');
  container.className = 'light-cell';
  if (colours.length === 0) {
    // If no colour info, just return an empty span
    return container;
  }
  colours.forEach(colour => {
    const swatch = document.createElement('div');
    swatch.className = 'color-swatch';
    swatch.style.background = colour;
    container.appendChild(swatch);
  });
  return container;
}

// Main initialization

// Embedded lighting data.  
// This constant is automatically generated from the Excel file and contains metadata
// and cues for each partie. Do not edit manually unless updating the dataset.
const lightingData = {
  "P1.5": {
    "meta": {
      "DATE DE PRESENTATION:": "2026-05-24 00:00:00",
      "LIEU:": "LA COUPOLE ST LOUBES",
      "TITRE :": "1.5 Le rêve du présent",
      "CHOREGRAPHE :": "JULIEN",
      "INTERPRETES:": "16 danseurs adultes + JULIEN",
      "MUSIQUE:": "Boom Padi",
      "COSTUMES:": "Robe violette + legging",
      "DECORS/ ACCESSOIRES:": "PHOTO ECRAN"
    },
    "cues": [
      {
        "no": "1",
        "scene": "Intro",
        "dancers": "17 danseurs en placement",
        "light": "Wash violet fixe",
        "duration": "00:00 → 00:13"
      },
      {
        "no": "2",
        "scene": "Couplet 1",
        "dancers": "Formation principale",
        "light": "Wash violet fixe",
        "duration": "00:13 → 00:51"
      },
      {
        "no": "3",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "00:51:00"
      },
      {
        "no": "4",
        "scene": "Refrain 1",
        "dancers": "Ouverture chorégraphie",
        "light": "Wash violet fixe",
        "duration": "00:52 → 01:23"
      },
      {
        "no": "5",
        "scene": "Pont 1",
        "dancers": "Passage cinématographique",
        "light": "Wash violet fixe",
        "duration": "01:23 → 01:51"
      },
      {
        "no": "6",
        "scene": "Couplet 2",
        "dancers": "Retour formation principale",
        "light": "Wash violet fixe",
        "duration": "01:51 → 02:18"
      },
      {
        "no": "7",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "02:19:00"
      },
      {
        "no": "8",
        "scene": "Refrain 2",
        "dancers": "Partie festive",
        "light": "Wash violet fixe",
        "duration": "02:20 → 02:49"
      },
      {
        "no": "9",
        "scene": "Pont 2",
        "dancers": "Passage sombre cinéma",
        "light": "Wash violet fixe",
        "duration": "02:50 → 03:14"
      },
      {
        "no": "10",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "03:15:00"
      },
      {
        "no": "11",
        "scene": "Refrain 3",
        "dancers": "Final chorégraphique",
        "light": "Plein feu violet",
        "duration": "03:16 → 03:45"
      },
      {
        "no": "12",
        "scene": "Final",
        "dancers": "Tableau final",
        "light": "Plein feu violet",
        "duration": "03:45 → 04:05"
      }
    ]
  },
  "P1.9": {
    "meta": {
      "DATE DE PRESENTATION:": "2026-05-24 00:00:00",
      "LIEU:": "LA COUPOLE ST LOUBES",
      "TITRE :": "1.9 Le rêve de l'énergie",
      "CHOREGRAPHE :": "JULIEN",
      "INTERPRETES:": "21 danseurs adultes avec JULIEN",
      "MUSIQUE:": "Bollywood Masala",
      "COSTUMES:": "Pantalon voile rouge + débardeur doré",
      "DECORS/ ACCESSOIRES:": "PHOTO ECRAN"
    },
    "cues": [
      {
        "no": "1",
        "scene": "Intro sans rythme",
        "dancers": "22 danseurs en placement",
        "light": "Wash rouge fixe",
        "duration": "00:00 → 00:17"
      },
      {
        "no": "2",
        "scene": "Intro rythmée",
        "dancers": "Début énergie Bollywood",
        "light": "Wash rouge fixe",
        "duration": "00:17 → 00:24"
      },
      {
        "no": "3",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "00:26:00"
      },
      {
        "no": "4",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "00:29:00"
      },
      {
        "no": "5",
        "scene": "Intro rythmée",
        "dancers": "Montée énergie",
        "light": "Wash rouge fixe",
        "duration": "00:26 → 00:32"
      },
      {
        "no": "6",
        "scene": "Couplet 1",
        "dancers": "Formation principale",
        "light": "Wash rouge fixe",
        "duration": "00:32 → 00:54"
      },
      {
        "no": "7",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "00:55:00"
      },
      {
        "no": "8",
        "scene": "Refrain 1",
        "dancers": "Ouverture chorégraphique",
        "light": "Wash rouge fixe",
        "duration": "00:56 → 01:19"
      },
      {
        "no": "9",
        "scene": "Instrumental",
        "dancers": "Passage rythmique",
        "light": "Wash rouge fixe",
        "duration": "01:20 → 01:31"
      },
      {
        "no": "10",
        "scene": "Couplet 2",
        "dancers": "Retour formation principale",
        "light": "Wash rouge fixe",
        "duration": "01:33 → 02:06"
      },
      {
        "no": "11",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "02:07:00"
      },
      {
        "no": "12",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "02:09:00"
      },
      {
        "no": "13",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "02:11:00"
      },
      {
        "no": "14",
        "scene": "Instrumental",
        "dancers": "Montée explosive",
        "light": "Wash rouge fixe",
        "duration": "02:12 → 02:20"
      }
    ]
  },
  "P2.7": {
    "meta": {
      "DATE DE PRESENTATION:": "2026-05-24 00:00:00",
      "LIEU:": "LA COUPOLE ST LOUBES",
      "TITRE :": "2.7 Le rêve du métissage INDE/AFRIQUE",
      "CHOREGRAPHE :": "JULIEN",
      "INTERPRETES:": "16 danseurs ados",
      "MUSIQUE:": "Oh Mama Tetema",
      "COSTUMES:": "Robe longue jaune",
      "DECORS/ ACCESSOIRES:": "PHOTO ECRAN"
    },
    "cues": [
      {
        "no": "1",
        "scene": "Intro",
        "dancers": "16 danseurs en placement",
        "light": "Wash jaune/orange fixe",
        "duration": "00:00 → 00:40"
      },
      {
        "no": "2",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "00:31:00"
      },
      {
        "no": "3",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "00:33:00"
      },
      {
        "no": "4",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "00:36:00"
      },
      {
        "no": "5",
        "scene": "Temps fort",
        "dancers": "Impact majeur",
        "light": "Flash blanc court",
        "duration": "00:38:00"
      },
      {
        "no": "6",
        "scene": "Refrain 1",
        "dancers": "Ouverture chorégraphique",
        "light": "Wash jaune/orange fixe",
        "duration": "00:40 → 00:59"
      },
      {
        "no": "7",
        "scene": "Couplet 1",
        "dancers": "Formation principale",
        "light": "Wash jaune/orange fixe",
        "duration": "01:00 → 01:28"
      },
      {
        "no": "8",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "01:16:00"
      },
      {
        "no": "9",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "01:19:00"
      },
      {
        "no": "10",
        "scene": "Temps fort",
        "dancers": "Impact majeur",
        "light": "Flash blanc court",
        "duration": "01:26:00"
      },
      {
        "no": "11",
        "scene": "Refrain 2",
        "dancers": "Partie festive",
        "light": "Wash jaune/orange fixe",
        "duration": "01:28 → 01:48"
      },
      {
        "no": "12",
        "scene": "Partie orientale",
        "dancers": "Passage oriental",
        "light": "Wash jaune/orange fixe",
        "duration": "01:48 → 02:06"
      },
      {
        "no": "13",
        "scene": "Couplet 2",
        "dancers": "Retour formation principale",
        "light": "Wash jaune/orange fixe",
        "duration": "02:06 → 02:26"
      },
      {
        "no": "14",
        "scene": "Pont",
        "dancers": "Passage cinématographique",
        "light": "Wash jaune/orange fixe",
        "duration": "02:26 → 02:35"
      }
    ]
  },
  "P2.9": {
    "meta": {
      "DATE DE PRESENTATION:": "2026-05-24 00:00:00",
      "LIEU:": "LA COUPOLE ST LOUBES",
      "TITRE :": "2.9 Le rêve des origines",
      "CHOREGRAPHE :": "JULIEN",
      "INTERPRETES:": "18 danseurs enfants",
      "MUSIQUE:": "Uyi Amma",
      "COSTUMES:": "Robe verte style arabe",
      "DECORS/ ACCESSOIRES:": "PHOTO ECRAN"
    },
    "cues": [
      {
        "no": "1",
        "scene": "Intro",
        "dancers": "18 danseurs en placement",
        "light": "Wash vert fixe",
        "duration": "00:00 → 00:21"
      },
      {
        "no": "2",
        "scene": "Instrumental",
        "dancers": "Montée énergétique",
        "light": "Wash vert fixe",
        "duration": "00:21 → 00:32"
      },
      {
        "no": "3",
        "scene": "Couplet 1",
        "dancers": "Formation principale",
        "light": "Wash vert fixe",
        "duration": "00:32 → 00:53"
      },
      {
        "no": "4",
        "scene": "Pré-refrain",
        "dancers": "Montée progressive",
        "light": "Wash vert fixe",
        "duration": "00:53 → 01:04"
      },
      {
        "no": "5",
        "scene": "Refrain 1",
        "dancers": "Ouverture chorégraphique",
        "light": "Wash vert fixe",
        "duration": "01:04 → 01:47"
      },
      {
        "no": "6",
        "scene": "Pré-refrain",
        "dancers": "Passage énergétique",
        "light": "Wash vert fixe",
        "duration": "01:17 → 01:57"
      },
      {
        "no": "7",
        "scene": "Refrain 2",
        "dancers": "Partie festive",
        "light": "Wash vert fixe",
        "duration": "01:57 → 02:08"
      },
      {
        "no": "8",
        "scene": "Instrumental",
        "dancers": "Passage rythmique",
        "light": "Wash vert fixe",
        "duration": "02:08 → 02:19"
      },
      {
        "no": "9",
        "scene": "Couplet 2",
        "dancers": "Retour formation principale",
        "light": "Wash vert fixe",
        "duration": "02:20 → 02:53"
      },
      {
        "no": "10",
        "scene": "Temps fort",
        "dancers": "Impact majeur",
        "light": "Flash blanc court",
        "duration": "02:53:00"
      },
      {
        "no": "11",
        "scene": "Pré-refrain",
        "dancers": "Montée énergétique",
        "light": "Wash vert fixe",
        "duration": "02:53 → 03:04"
      },
      {
        "no": "12",
        "scene": "Temps fort",
        "dancers": "Impact majeur",
        "light": "Flash blanc court",
        "duration": "02:56:00"
      },
      {
        "no": "13",
        "scene": "Refrain 3",
        "dancers": "Final chorégraphique",
        "light": "Wash vert fixe",
        "duration": "03:04 → 03:47"
      },
      {
        "no": "14",
        "scene": "Final",
        "dancers": "Tableau final",
        "light": "Plein feu vert",
        "duration": "03:47 → 04:09"
      }
    ]
  },
  "P2.14": {
    "meta": {
      "DATE DE PRESENTATION:": "2026-05-24 00:00:00",
      "LIEU:": "LA COUPOLE ST LOUBES",
      "TITRE :": "2.14 Le rêve du bonheur simple",
      "CHOREGRAPHE :": "JULIEN",
      "INTERPRETES:": "71 danseurs",
      "MUSIQUE:": "Medley Bollywood",
      "COSTUMES:": "Tenues Bollywood",
      "DECORS/ ACCESSOIRES:": "PHOTO ECRAN"
    },
    "cues": [
      {
        "no": "1",
        "scene": "Intro",
        "dancers": "71 danseurs en placement",
        "light": "Wash violet + vert",
        "duration": "00:00 → 00:25"
      },
      {
        "no": "2",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "00:25:00"
      },
      {
        "no": "3",
        "scene": "Satikali",
        "dancers": "Ouverture Bollywood",
        "light": "Wash violet + vert",
        "duration": "00:25 → 01:28"
      },
      {
        "no": "4",
        "scene": "Accent musical",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "00:32:00"
      },
      {
        "no": "5",
        "scene": "Montée en pression",
        "dancers": "Montée énergétique",
        "light": "Wash violet + vert",
        "duration": "01:00 → 01:07"
      },
      {
        "no": "6",
        "scene": "Montée en pression",
        "dancers": "Passage dynamique",
        "light": "Wash violet + vert",
        "duration": "01:20 → 01:28"
      },
      {
        "no": "7",
        "scene": "Bollywood Masala 1",
        "dancers": "Partie explosive",
        "light": "Wash rouge + jaune",
        "duration": "01:28 → 02:28"
      },
      {
        "no": "8",
        "scene": "Effet stroboscope",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "02:02 → 02:03"
      },
      {
        "no": "9",
        "scene": "Effet stroboscope",
        "dancers": "Impact musical",
        "light": "Flash blanc court",
        "duration": "02:08 → 02:09"
      },
      {
        "no": "10",
        "scene": "Transition Remix",
        "dancers": "Transition générale",
        "light": "Wash violet + vert",
        "duration": "02:28 → 02:44"
      },
      {
        "no": "11",
        "scene": "Bollywood Masala 2 Remix",
        "dancers": "Partie finale explosive",
        "light": "Wash rouge + jaune",
        "duration": "02:44 → 03:51"
      },
      {
        "no": "12",
        "scene": "Montée en pression",
        "dancers": "Montée maximale",
        "light": "Wash rouge + jaune",
        "duration": "02:57 → 03:10"
      },
      {
        "no": "13",
        "scene": "Impact violent",
        "dancers": "Impact majeur",
        "light": "Flash blanc court",
        "duration": "03:38:00"
      },
      {
        "no": "14",
        "scene": "Ambiance maximum",
        "dancers": "Explosion finale énergie",
        "light": "Wash rouge + jaune",
        "duration": "03:38 → 03:51"
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  try {
    const data = lightingData;
    const menu = document.getElementById('menu');
    const main = document.getElementById('main-content');

    // Create a section for each part
    Object.keys(data).forEach((key, index) => {
      const part = data[key];
      const section = document.createElement('section');
      section.className = 'section';
      section.id = `section-${key}`;
      // Title
      const title = document.createElement('h2');
      // Use sheet name or the Titre from meta if available
      const titre = part.meta['TITRE :'] || key;
      title.textContent = titre;
      section.appendChild(title);
      // Metadata
      const metadataDiv = document.createElement('div');
      metadataDiv.className = 'metadata';
      const dl = document.createElement('dl');
      // Show interesting meta fields
      Object.entries(part.meta).forEach(([field, value]) => {
        const dt = document.createElement('dt');
        dt.textContent = field.replace(/\s*:\s*$/, '');
        const dd = document.createElement('dd');
        dd.textContent = value;
        dl.appendChild(dt);
        dl.appendChild(dd);
      });
      metadataDiv.appendChild(dl);
      section.appendChild(metadataDiv);
      // Table
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const headRow = document.createElement('tr');
      ['N°', 'Scènes', 'Danseuses / Repères', 'Lumière', 'Durée'].forEach(label => {
        const th = document.createElement('th');
        th.textContent = label;
        headRow.appendChild(th);
      });
      thead.appendChild(headRow);
      table.appendChild(thead);
      const tbody = document.createElement('tbody');
      part.cues.forEach(cue => {
        const tr = document.createElement('tr');
        // N°
        const tdNo = document.createElement('td');
        tdNo.textContent = cue.no;
        tr.appendChild(tdNo);
        // Scenes
        const tdScene = document.createElement('td');
        tdScene.textContent = cue.scene;
        tr.appendChild(tdScene);
        // Dancers / Repères
        const tdDancers = document.createElement('td');
        tdDancers.textContent = cue.dancers;
        tr.appendChild(tdDancers);
        // Light (with colour swatch)
        const tdLight = document.createElement('td');
        const colours = parseColours(cue.light);
        const swatchContainer = createColourSwatch(colours);
        // Add description text after swatch
        const text = document.createElement('span');
        text.textContent = ' ' + cue.light;
        swatchContainer.appendChild(text);
        tdLight.appendChild(swatchContainer);
        tr.appendChild(tdLight);
        // Duration
        const tdDuration = document.createElement('td');
        tdDuration.textContent = cue.duration;
        tr.appendChild(tdDuration);
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      const tableWrapper = document.createElement('div');
      tableWrapper.className = 'table-wrapper';
      tableWrapper.appendChild(table);
      section.appendChild(tableWrapper);
      // Hide section by default except first
      if (index !== 0) {
        section.style.display = 'none';
      }
      main.appendChild(section);
      // Menu button
      const button = document.createElement('button');
      button.textContent = titre;
      if (index === 0) button.classList.add('active');
      button.addEventListener('click', () => {
        // Hide all sections
        document.querySelectorAll('.section').forEach(sec => {
          sec.style.display = 'none';
        });
        // Remove active class from buttons
        document.querySelectorAll('#menu button').forEach(btn => {
          btn.classList.remove('active');
        });
        // Show selected section
        section.style.display = '';
        button.classList.add('active');
      });
      menu.appendChild(button);
    });
  } catch (error) {
    console.error('Erreur lors du chargement des données :', error);
    document.getElementById('main-content').textContent = "Impossible de charger les données.";
  }
});