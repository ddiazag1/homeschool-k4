/* ============================================================
   SEQUENCE — Year 1 follows two published scope & sequences:

   HISTORY : Story of the World Vol. 1 (Bauer) — all 42 chapters,
             in order, verified against the publisher's contents.
   SCIENCE : Building Foundations of Scientific Understanding
             Vol. I, K–2 (Nebel) — four learning progressions
             taught in tandem, verified against Press for
             Learning's published Table of Contents.

   `src` is a CITATION for alignment only. All teaching text and
   every retrieval item in this program is written from scratch.
   No text, lab, or review question from either book is reproduced.

   l: [] with no bedtime lesson = a unit still to be authored.
   s: 1 = sensitive content, flagged in the UI before you start.
   ============================================================ */
window.SEQ = {

1: {
  /* ---------- STORY OF THE WORLD, VOL 1 — 42 chapters ---------- */
  history: [
    {u:"How Do We Know What Happened?", src:"SOTW Intro — history & archaeology", l:[1001]},
    {u:"The Earliest People", src:"SOTW Ch 1 — first nomads become farmers", l:[1002]},
    {u:"Egyptians Lived on the Nile", src:"SOTW Ch 2 — two kingdoms, gods of Egypt", l:[46]},
    {u:"The First Writing", src:"SOTW Ch 3 — hieroglyphs and cuneiform", l:[47]},
    {u:"The Old Kingdom of Egypt", src:"SOTW Ch 4 — mummies and pyramids", l:[46]},
    {u:"The First Sumerian Dictator", src:"SOTW Ch 5 — Sargon and the Akkadians", l:[1003]},
    {u:"The Jewish People", src:"SOTW Ch 6 — Abraham, Joseph", l:[1004], s:1},
    {u:"Hammurabi and the Babylonians", src:"SOTW Ch 7 — Hammurabi's Code", l:[1005]},
    {u:"The Assyrians", src:"SOTW Ch 8 — Shamshi-Adad, Gilgamesh", l:[1006]},
    {u:"The First Cities of India", src:"SOTW Ch 9 — the river-road, Mohenjo-Daro", l:[51]},
    {u:"The Far East: Ancient China", src:"SOTW Ch 10 — Lei Zu, pictograms, farming", l:[48]},
    {u:"Ancient Africa", src:"SOTW Ch 11 — West Africa, Anansi tales", l:[1007]},
    {u:"Life in Early Crete", src:"SOTW Ch 12 — bull-jumpers, Minos, the Minoans", l:[1008]},
    {u:"The Middle Kingdom of Egypt", src:"SOTW Ch 13 — Nubia, the Hyksos", l:[1009]},
    {u:"The New Kingdom of Egypt", src:"SOTW Ch 14 — Hatshepsut, Amenhotep, Tut", l:[1010]},
    {u:"The Israelites Leave Egypt", src:"SOTW Ch 15 — Moses, the Exodus", l:[1011], s:1},
    {u:"The Early Greeks", src:"SOTW Ch 16 — Mycenaeans, the Greek Dark Ages", l:[1012]},
    {u:"The Phoenicians", src:"SOTW Ch 17 — traders, the founding of Carthage", l:[52]},
    {u:"The Return of Assyria", src:"SOTW Ch 18 — Ashurbanipal, the Library of Nineveh", l:[]},
    {u:"Greece Gets Civilized Again", src:"SOTW Ch 19 — alphabet, Homer, first Olympics", l:[49]},
    {u:"Sparta and Athens", src:"SOTW Ch 20 — two ways to live; Draco and Solon", l:[]},
    {u:"The Greek Gods", src:"SOTW Ch 21 — the Golden Apple", l:[]},
    {u:"The Rise of Rome", src:"SOTW Ch 22 — Romulus and Remus", l:[50]},
    {u:"Babylon Takes Over Again", src:"SOTW Ch 23 — Nebuchadnezzar, Hanging Gardens", l:[]},
    {u:"The Medes and the Persians", src:"SOTW Ch 24 — Cyrus the Great", l:[53]},
    {u:"The Aryans of India", src:"SOTW Ch 25 — the Ganges, castes, Siddhartha", l:[], s:1},
    {u:"Writing, Fighting and Thinking in China", src:"SOTW Ch 26 — calligraphy, Confucius", l:[]},
    {u:"The Wars of the Greeks", src:"SOTW Ch 27 — Persia, then each other", l:[]},
    {u:"Alexander the Great", src:"SOTW Ch 28 — Philip, the invasions, the death", l:[54]},
    {u:"The Mauryan Empire of India", src:"SOTW Ch 29 — the empire united, Jataka tales", l:[]},
    {u:"The People of the Americas", src:"SOTW Ch 30 — Nazca lines, Olmec heads", l:[55]},
    {u:"The Roman Republic", src:"SOTW Ch 31 — builders, gods, gladiators", l:[50]},
    {u:"Rome's War with Carthage", src:"SOTW Ch 32 — the Punic Wars", l:[]},
    {u:"The First Dynasties of China", src:"SOTW Ch 33 — First Emperor, Great Wall, Silk Road", l:[48]},
    {u:"The Rise of Julius Caesar", src:"SOTW Ch 34 — kidnapped, the consuls, the Celts", l:[]},
    {u:"Caesar, Ruler of Rome", src:"SOTW Ch 35 — the Rubicon, Cleopatra, Augustus", l:[]},
    {u:"Israel Under Roman Rule", src:"SOTW Ch 36 — Herod, a prophet named Jesus", l:[], s:1},
    {u:"Rome and the Christians", src:"SOTW Ch 37 — Nero, the catacombs", l:[], s:1},
    {u:"Rome Begins to Weaken", src:"SOTW Ch 38 — Britain, division, a Christian emperor", l:[]},
    {u:"Troubles in China", src:"SOTW Ch 39 — the end of the Han, Three Kingdoms", l:[]},
    {u:"Lands East of China", src:"SOTW Ch 40 — Korea's three kingdoms, Yamato Japan", l:[]},
    {u:"The Attacking Barbarians", src:"SOTW Ch 41 — Stilicho, Visigoths, Attila", l:[]},
    {u:"The End of Rome", src:"SOTW Ch 42 — the last emperor, the gifts of Rome", l:[]}
  ],

  /* ---------- BFSU VOL I — four progressions, taught in tandem ----------
     Nebel's flowchart interleaves the threads rather than running one
     to completion. Order below is round-robin A→B→C→D, preserving each
     thread's own published order.                                      */
  science: [
    {u:"Organizing Things into Categories", src:"BFSU A/B-1", l:[2001]},
    {u:"Living, Natural, and Human-Made Things", src:"BFSU B-2", l:[2002]},
    {u:"Concepts of Energy I: Making Things Go", src:"BFSU C-1", l:[2003]},
    {u:"Gravity I: Horizontal and Vertical", src:"BFSU D-1", l:[5]},
    {u:"Solids, Liquids, Gases and Temperature", src:"BFSU A-2", l:[23]},
    {u:"The Plant and Animal Kingdoms", src:"BFSU B-3", l:[2004]},
    {u:"Sound, Vibrations, and Energy", src:"BFSU C-2", l:[26]},
    {u:"Day and Night and the Earth's Rotation", src:"BFSU D-2", l:[2005]},
    {u:"Air Is a Substance; the Atmosphere", src:"BFSU A-3", l:[]},
    {u:"Life Cycles", src:"BFSU B-4", l:[7]},
    {u:"Energy II: Kinetic and Potential", src:"BFSU C-3", l:[]},
    {u:"Reading and Drawing Maps", src:"BFSU D-3", l:[]},
    {u:"Matter I: Its Particulate Nature", src:"BFSU A-4", l:[22]},
    {u:"Why Plants and Animals Live Where They Do", src:"BFSU B-4A", l:[6]},
    {u:"Energy and Force", src:"BFSU C-3A", l:[]},
    {u:"North, East, South, and West", src:"BFSU D-3A", l:[]},
    {u:"Distinguishing Materials", src:"BFSU A-5", l:[]},
    {u:"What Is a Species?", src:"BFSU B-4B", l:[]},
    {u:"Energy III: Matter versus Energy", src:"BFSU C-4", l:[]},
    {u:"Land Forms and Major Biomes", src:"BFSU D-4", l:[35,36]},
    {u:"Magnets and Magnetic Fields", src:"BFSU A-5A", l:[5]},
    {u:"Adaptations, Food Chains, Energy Flow", src:"BFSU B-5", l:[8]},
    {u:"Inertia", src:"BFSU C-5", l:[]},
    {u:"Time and the Earth's Turning", src:"BFSU D-5", l:[]},
    {u:"Matter II: Air Pressure and Vacuums", src:"BFSU A-6", l:[]},
    {u:"Adaptations and Survival", src:"BFSU B-5A", l:[]},
    {u:"Friction", src:"BFSU C-6", l:[]},
    {u:"Seasonal Changes and the Earth's Orbit", src:"BFSU D-6", l:[16]},
    {u:"Air: A Mixture of Gases", src:"BFSU A-7", l:[]},
    {u:"How Animals Move I: Skeleton and Muscle", src:"BFSU B-6", l:[9]},
    {u:"Push Pushes Back", src:"BFSU C-7", l:[]},
    {u:"Gravity II: Rate of Fall; Mass versus Weight", src:"BFSU D-7", l:[]},
    {u:"Matter III: Evaporation and Condensation", src:"BFSU A-8", l:[3]},
    {u:"How Animals Move II: Body Designs and Phyla", src:"BFSU B-7", l:[31]},
    {u:"Rocks and Fossils", src:"BFSU D-8", l:[4,33], s:1},
    {u:"Matter IV: Dissolving and Crystallization", src:"BFSU A-9", l:[24]},
    {u:"How Animals Move III: The Nervous System", src:"BFSU B-8", l:[]},
    {u:"Rocks, Minerals, Crystals, Dirt and Soil", src:"BFSU A-10", l:[44]},
    {u:"How Animals Move IV: Energy to Run the Body", src:"BFSU B-9", l:[10,2]},
    {u:"Plant Science I: Structure and Reproduction", src:"BFSU B-10", l:[29]},
    {u:"Plant Science II: Germination and Growth", src:"BFSU B-11", l:[30]},
    {u:"Plants, Soil, Water and Erosion", src:"BFSU B-12", l:[]},
    {u:"Resources: Developing an Overview", src:"BFSU E-1", l:[]}
  ],

  /* ---------- Body, Health & Life Skills (original) ---------- */
  body: [
    {u:"Skeleton & Muscles", src:"original · NIH", l:[9]},
    {u:"Heart, Lungs & Blood", src:"original · NIH", l:[3001]},
    {u:"Food & Digestion", src:"original · CDC", l:[10]},
    {u:"The Five Senses", src:"original", l:[11]},
    {u:"Brain & Sleep", src:"original · NIH", l:[3002]},
    {u:"Safety & First Aid", src:"original · Red Cross", l:[3003]}
  ]
},

/* Years 2–4 keep the same pattern: SOTW Vols 2–4 chapter by chapter,
   BFSU Vol II (grades 3–5) progressions in tandem. Outline only until
   Year 1 is authored and proven. */
2: {
  history: [{u:"Story of the World Vol 2 — The Middle Ages", src:"SOTW Vol 2, 42 chapters", l:[58,59,60,61,62,63]}],
  science: [{u:"BFSU Vol II — grades 3–5 progressions", src:"BFSU Vol II", l:[1,12,13,14,15,17,18,19,20,21,37,39]}],
  body:    [{u:"Nervous system · immunity · fitness · emotions · cooking · digital life", src:"original", l:[]}]
},
3: {
  history: [{u:"Story of the World Vol 3 — Early Modern Times", src:"SOTW Vol 3, 42 chapters", l:[64,65,66,67,68,69,70,71,72,73]}],
  science: [{u:"BFSU Vol II continued — matter, energy, forces", src:"BFSU Vol II", l:[25,27,28,38,42]}],
  body:    [{u:"Growth · nutrition · sports science · risk · outdoor skills · money", src:"original", l:[]}]
},
4: {
  history: [{u:"Story of the World Vol 4 — The Modern Age", src:"SOTW Vol 4, 42 chapters", l:[74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]}],
  science: [{u:"BFSU Vol III — middle school progressions", src:"BFSU Vol III", l:[]}],
  body:    [{u:"Review & capstone", src:"original", l:[]}]
}

};
