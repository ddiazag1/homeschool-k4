/* ============================================================
   Knowledge Cards, batch 2.
   Cards for the new original lessons (1001–2003), plus cards
   for existing bedtime stories that sit early in the BFSU
   sequence and were running on fallback quizzes.
   Merges into window.KC — load after knowledge-cards.js.
   ============================================================ */
Object.assign(window.KC, {

/* ---------- SOTW Ch. Intro — How Do We Know What Happened? ---------- */
1001: [
 {f:"History is the story of what happened to people in the past.", q:"What is history?", a:"The story of what happened in the past", t:1},
 {f:"We learn about the past from things people left behind.", q:"How do we find out about people who died long ago?", a:"From the things they left behind", t:1},
 {f:"An artifact is an object left behind by people — a pot, a coin, a toy.", q:"What is an artifact?", a:"An object left behind by people", t:1},
 {f:"A historian studies writing from the past.", q:"What does a historian study?", a:"Writing left from the past", t:2},
 {f:"An archaeologist digs up and studies objects from the past.", q:"What does an archaeologist do?", a:"Digs up and studies objects people left behind", t:2},
 {f:"A primary source was written at the time by someone who was there.", q:"What is a primary source?", a:"Something written at the time by someone who was there", t:2},
 {f:"Writing is only about 5,000 years old.", q:"How long have people been writing?", a:"About 5,000 years", t:2},
 {f:"For most of human history nobody wrote anything down.", q:"Why can't we read about most of human history?", a:"Writing hadn't been invented yet", t:3},
 {f:"Objects can prove things no one wrote down — shells far inland prove trade.", q:"How can a seashell found far from the sea tell us something?", a:"It shows those people traded with faraway places", t:3},
 {f:"A good historian says 'we think' when guessing and 'we know' only with evidence.", q:"What should a historian say when they aren't sure?", a:"'We think' — not 'we know'", t:3}
],

/* ---------- SOTW Ch. 1 — The Earliest People ---------- */
1002: [
 {f:"A nomad moves from place to place instead of settling down.", q:"What is a nomad?", a:"Someone who moves from place to place", t:1},
 {f:"The earliest people hunted animals and gathered wild plants.", q:"How did the earliest people get food?", a:"They hunted animals and gathered plants", t:1},
 {f:"People began farming about 10,000 years ago.", q:"About how long ago did farming begin?", a:"About 10,000 years ago", t:1},
 {f:"Farming means planting seeds on purpose to grow your own food.", q:"What is farming?", a:"Planting seeds on purpose to grow food", t:2},
 {f:"Nomads followed their food — when the herds moved, they moved.", q:"Why did nomads keep moving?", a:"They followed the animals and plants they ate", t:2},
 {f:"Farming let people stay in one place and build permanent homes.", q:"What could people do once they farmed?", a:"Stay in one place and build homes", t:2},
 {f:"People also began keeping animals — sheep, goats and cattle — instead of chasing them.", q:"What did people do with animals once they settled?", a:"Kept them nearby instead of hunting them", t:2},
 {f:"A surplus is extra food beyond what you need.", q:"What is a surplus?", a:"Extra food beyond what's needed", t:3},
 {f:"Surplus food freed people to do jobs other than farming.", q:"Why does surplus food matter so much?", a:"It lets people do other jobs — potter, builder, leader", t:3},
 {f:"Farming also brought harder work, narrower diets, and new diseases.", q:"Name one way farming made life worse.", a:"Harder work, poorer diet, or more disease", t:3}
],

/* ---------- BFSU A/B-1 — Organizing Things into Categories ---------- */
2001: [
 {f:"Sorting things into groups is how science begins.", q:"What is the first thing scientists do with a pile of things?", a:"Sort them into groups", t:1},
 {f:"A property is a feature you can sort by — colour, size, what it's made of.", q:"What is a property?", a:"A feature you can sort things by", t:1},
 {f:"Every group needs a rule that says what belongs in it.", q:"What does every group need?", a:"A rule", t:1},
 {f:"The same pile can be sorted in more than one correct way.", q:"Is there only one right way to sort a pile?", a:"No — it depends which property you choose", t:2},
 {f:"Whether a magnet sticks to something is a property you can sort by.", q:"Name a property you could test with a magnet.", a:"Whether the magnet sticks to it", t:2},
 {f:"Sorting makes patterns visible that were hidden in a jumble.", q:"Why is sorting useful?", a:"It makes patterns show up", t:2},
 {f:"Groups can be sorted again into smaller groups inside them.", q:"What can you do to a group that's still too big?", a:"Sort it again into smaller groups", t:2},
 {f:"Once you see a pattern, you can ask the better question: why?", q:"What question does a pattern let you ask?", a:"Why?", t:3},
 {f:"Scientists classify living things, substances, and diseases this way.", q:"Name two things scientists sort into groups.", a:"Any two of: living things, substances, diseases", t:3},
 {f:"'Things I like' is a weak rule because it changes from person to person.", q:"Why is 'things I like' a poor sorting rule?", a:"It isn't the same for everyone — you can't test it", t:3}
],

/* ---------- BFSU B-2 — Living, Natural, Human-Made ---------- */
2002: [
 {f:"Everything around us is living, natural but never alive, or human-made.", q:"What are the three groups everything fits into?", a:"Living, natural but never alive, human-made", t:1},
 {f:"A rock is natural but was never alive.", q:"Which group does a rock belong to?", a:"Natural, never alive", t:1},
 {f:"A chair is human-made because a person built it.", q:"Which group does a chair belong to?", a:"Human-made", t:1},
 {f:"Living things grow.", q:"Name one thing all living things do.", a:"Grow (or feed, respond, reproduce)", t:1},
 {f:"Living things need food and water.", q:"What do living things need to stay alive?", a:"Food and water", t:2},
 {f:"Living things make more of their own kind.", q:"What can living things do that a flame cannot?", a:"Make more of their own kind", t:2},
 {f:"Living things respond to the world around them.", q:"What does it mean that a plant turns toward light?", a:"It responds to the world around it", t:2},
 {f:"Something human-made can be made from material that was once alive — a wooden fence.", q:"A wooden fence: which group, and why is it confusing?", a:"Human-made, but built from wood that was once a living tree", t:3},
 {f:"A flame is not alive — it cannot make another flame of its own kind.", q:"A candle flame moves, grows and 'eats'. Why isn't it alive?", a:"It can't reproduce or grow from its own kind", t:3},
 {f:"Being alive has nothing to do with moving — a tree never moves and is fully alive.", q:"Does something have to move to be alive?", a:"No — a tree doesn't move and is alive", t:3}
],

/* ---------- BFSU C-1 — Making Things Go ---------- */
2003: [
 {f:"Things do not start moving by themselves.", q:"Will a ball on the floor ever start rolling on its own?", a:"No — something has to make it go", t:1},
 {f:"Energy is what makes things go.", q:"What do we call the ability to make something go?", a:"Energy", t:1},
 {f:"Everything that moves is either pushed or pulled.", q:"What are the only two ways something can be moved?", a:"Pushed or pulled", t:1},
 {f:"Gravity pulls things downward.", q:"What pulls an apple to the ground?", a:"Gravity", t:1},
 {f:"Your muscles pull on your bones to move you.", q:"What makes your body move?", a:"Muscles pulling on bones", t:2},
 {f:"Food gives your body the energy to move.", q:"Where does the energy to kick a ball come from?", a:"The food you ate", t:2},
 {f:"Plants get their energy from sunlight.", q:"Where do plants get energy?", a:"From sunlight", t:2},
 {f:"Energy isn't a thing you can hold — it's something a thing has.", q:"Can you put energy in a cup?", a:"No — it isn't a substance, it's a capacity", t:3},
 {f:"Follow almost any chain of 'what made it go?' backwards and you reach the Sun.", q:"Where does nearly all Earth's energy come from?", a:"The Sun", t:3},
 {f:"Something must also make a moving thing stop.", q:"A rolling ball slows and stops. Why?", a:"Something stopped it — friction and the floor pushing back", t:3}
],

/* ---------- BFSU D-1 / A-5A — bedtime lesson 5, gravity & magnetism ---------- */
5: [
 {f:"Gravity pulls everything toward the ground.", q:"What force keeps us on the ground?", a:"Gravity", t:1},
 {f:"You cannot see gravity — you can only see what it does.", q:"Can you see gravity?", a:"No, only what it does", t:1},
 {f:"A magnet pulls on some metals.", q:"What does a magnet do?", a:"Pulls on some metals", t:1},
 {f:"Every magnet has two ends called poles: north and south.", q:"What are the two ends of a magnet called?", a:"North and south poles", t:2},
 {f:"Opposite poles attract; like poles push apart.", q:"What happens when two north poles meet?", a:"They push each other away", t:2},
 {f:"Magnets only stick to some metals, not all of them.", q:"Does a magnet stick to every metal?", a:"No — only some, like iron and steel", t:2},
 {f:"The Earth itself acts like a giant magnet.", q:"Why does a compass needle point north?", a:"The Earth acts like a giant magnet", t:3},
 {f:"A magnet's pull reaches through the air without touching — its magnetic field.", q:"What is the space around a magnet where it pulls called?", a:"Its magnetic field", t:3},
 {f:"Gravity gets weaker the further apart two things are.", q:"What happens to gravity as things get further apart?", a:"It gets weaker", t:3},
 {f:"Gravity is what keeps the Moon circling the Earth.", q:"What holds the Moon in orbit?", a:"Earth's gravity", t:3}
],

/* ---------- BFSU A-2 — bedtime lesson 23, states of matter ---------- */
23: [
 {f:"Matter comes in three everyday forms: solid, liquid and gas.", q:"What are the three states of matter?", a:"Solid, liquid, gas", t:1},
 {f:"A solid keeps its own shape.", q:"What is special about a solid?", a:"It keeps its own shape", t:1},
 {f:"A liquid takes the shape of its container and can be poured.", q:"What does a liquid do in a container?", a:"Takes the container's shape", t:1},
 {f:"A gas spreads out to fill whatever it is in.", q:"What does a gas do?", a:"Spreads out to fill its container", t:1},
 {f:"Heating ice turns it into water; heating water turns it into steam.", q:"What happens to ice when you heat it?", a:"It melts into water", t:2},
 {f:"Cooling can turn a gas back into a liquid and a liquid into a solid.", q:"What does cooling do to a liquid?", a:"Can freeze it into a solid", t:2},
 {f:"Melting and freezing are the same change running in opposite directions.", q:"What is the opposite of melting?", a:"Freezing", t:2},
 {f:"Water is the same substance whether it is ice, water or steam.", q:"Is steam a different substance from ice?", a:"No — the same substance in a different state", t:3},
 {f:"Temperature decides which state a substance is in.", q:"What decides whether something is solid, liquid or gas?", a:"Its temperature", t:3},
 {f:"Different substances melt and boil at different temperatures.", q:"Do all substances melt at the same temperature?", a:"No — each has its own", t:3}
],

/* ---------- BFSU C-2 — bedtime lesson 26, sound ---------- */
26: [
 {f:"Sound is made when something vibrates.", q:"What makes a sound?", a:"Something vibrating", t:1},
 {f:"Vibrating means shaking back and forth very fast.", q:"What does vibrating mean?", a:"Shaking back and forth quickly", t:1},
 {f:"Sound travels through the air to reach your ears.", q:"How does sound get to you?", a:"It travels through the air", t:1},
 {f:"Your ears catch sound and your brain turns it into what you hear.", q:"What do your ears do?", a:"Catch sound for your brain to understand", t:2},
 {f:"Sound travels as waves.", q:"How does sound travel?", a:"As waves", t:2},
 {f:"Fast vibrations make high sounds; slow vibrations make low sounds.", q:"What makes a sound high instead of low?", a:"Faster vibrations", t:2},
 {f:"Bigger vibrations make louder sounds.", q:"What makes a sound louder?", a:"Bigger vibrations", t:2},
 {f:"Sound travels through solids and liquids too, not just air.", q:"Can sound travel through water?", a:"Yes — and through solids", t:3},
 {f:"Sound cannot travel through empty space, because there is nothing to carry it.", q:"Why is space silent?", a:"There's no air to carry the vibrations", t:3},
 {f:"Light travels much faster than sound — you see lightning before you hear thunder.", q:"Why do you see lightning before hearing thunder?", a:"Light travels much faster than sound", t:3}
]

});
