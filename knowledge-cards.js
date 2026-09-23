/* ============================================================
   Knowledge Cards — the retention core of each lesson.
   Each entry: f = the fact (what you teach)
               q = the question that elicits it
               a = the expected answer
               t = minimum tier (1 = K–1, 2 = gr 2–3, 3 = gr 4+)
   A learner is asked every fact at or below their tier, so
   tiering is by WHICH facts, not by rewording every fact
   three times. Recall questions (not multiple choice) are
   deliberate: free recall produces stronger retention than
   recognition.
   Lessons with no card here fall back to the story's own
   3 quiz items — nothing breaks, it's just less dense.
   ============================================================ */
window.KC = {

/* ---------- SCIENCE ---------- */

45: [ // Thinking Like a Scientist
 {f:"A scientist asks questions and then tests them.", q:"What does a scientist do?", a:"Asks questions and tests them", t:1},
 {f:"An observation is something you notice using your senses.", q:"What is an observation?", a:"Something you notice with your senses", t:1},
 {f:"A prediction is what you think will happen before you test.", q:"What is a prediction?", a:"A guess about what will happen", t:1},
 {f:"A hypothesis is a testable idea about why something happens.", q:"What is a hypothesis?", a:"A testable idea about why something happens", t:2},
 {f:"A fair test changes only one thing at a time.", q:"What makes a test fair?", a:"You change only one thing at a time", t:2},
 {f:"Scientists write down what happens so others can check it.", q:"Why do scientists record their results?", a:"So others can check the work", t:2},
 {f:"Evidence is what you actually observed, not what you hoped for.", q:"What is evidence?", a:"What you actually observed", t:2},
 {f:"Scientists repeat experiments because one result could be luck.", q:"Why repeat an experiment?", a:"One result could be luck or a mistake", t:3},
 {f:"When the evidence disagrees with the idea, the idea must change.", q:"What do scientists do when evidence contradicts their idea?", a:"Change the idea, not the evidence", t:3},
 {f:"The variable is the one thing you deliberately change.", q:"What is a variable?", a:"The one thing you change on purpose", t:3}
],

2: [ // The Tiny World Inside You
 {f:"Your body is built from tiny building blocks called cells.", q:"What tiny building blocks is your body made of?", a:"Cells", t:1},
 {f:"Red blood cells carry oxygen around your body.", q:"What do red blood cells carry?", a:"Oxygen", t:1},
 {f:"Blood travels through tubes called blood vessels.", q:"What are the tubes blood travels through called?", a:"Blood vessels", t:1},
 {f:"White blood cells fight germs.", q:"Which cells fight germs?", a:"White blood cells", t:2},
 {f:"Oxygen is picked up in the lungs and delivered to the whole body.", q:"Where does blood pick up oxygen?", a:"In the lungs", t:2},
 {f:"Cells are too small to see without a microscope.", q:"What do you need to see a cell?", a:"A microscope", t:2},
 {f:"Different cells do different jobs — muscle, nerve, skin.", q:"Do all cells do the same job?", a:"No — muscle, nerve and skin cells do different jobs", t:2},
 {f:"Red blood cells are disc-shaped with a dip, which helps them carry oxygen.", q:"What shape is a red blood cell, and why?", a:"A disc with a dip — more surface for carrying oxygen", t:3},
 {f:"The heart pumps blood so cells constantly get fresh oxygen.", q:"What keeps blood moving to your cells?", a:"The heart pumping", t:3},
 {f:"Your body constantly makes new cells to replace worn-out ones.", q:"What happens when cells wear out?", a:"The body makes new ones to replace them", t:3}
],

29: [ // How Plants Make Food
 {f:"Plants make their own food — they don't eat it.", q:"Where do plants get their food?", a:"They make it themselves", t:1},
 {f:"Leaves are where a plant makes its food.", q:"Which part of a plant makes the food?", a:"The leaves", t:1},
 {f:"Plants need sunlight, water and air to make food.", q:"What three things does a plant need to make food?", a:"Sunlight, water and air", t:1},
 {f:"The process is called photosynthesis.", q:"What is the name of the process plants use to make food?", a:"Photosynthesis", t:2},
 {f:"Roots take in water from the soil.", q:"Which part takes in water?", a:"The roots", t:2},
 {f:"Plants take carbon dioxide out of the air.", q:"What gas do plants take from the air?", a:"Carbon dioxide", t:2},
 {f:"Plants give off oxygen, which animals breathe.", q:"What gas do plants give off?", a:"Oxygen", t:2},
 {f:"Chlorophyll is the green substance that captures sunlight.", q:"What makes leaves green and catches the sunlight?", a:"Chlorophyll", t:3},
 {f:"Photosynthesis turns light energy into sugar — the plant's food.", q:"What does a plant turn sunlight into?", a:"Sugar, its food", t:3},
 {f:"Nearly every food chain starts with plants, because plants capture the sun's energy.", q:"Why do most food chains start with plants?", a:"Plants capture the sun's energy first", t:3}
],

30: [ // The Secret Life of Trees
 {f:"Trees are the largest plants on Earth.", q:"What is the largest kind of plant?", a:"A tree", t:1},
 {f:"Bark protects a tree the way skin protects you.", q:"What protects the outside of a tree?", a:"Its bark", t:1},
 {f:"Roots hold a tree in the ground and drink water.", q:"What do a tree's roots do?", a:"Hold it down and take in water", t:1},
 {f:"Tree rings show how many years a tree has grown.", q:"What do the rings inside a tree trunk tell you?", a:"How many years it has grown", t:2},
 {f:"A wide ring means a good growing year with plenty of water.", q:"What does a wide tree ring mean?", a:"A good year with lots of water", t:2},
 {f:"Deciduous trees drop their leaves in autumn; evergreens keep theirs.", q:"What is the difference between a deciduous and an evergreen tree?", a:"Deciduous drops its leaves, evergreen keeps them", t:2},
 {f:"Trees lose water through their leaves and pull more up from the roots.", q:"How does water get from the roots to the leaves?", a:"It's pulled up as water escapes from the leaves", t:3},
 {f:"Water travels up tubes inside the trunk.", q:"What carries water up inside a tree?", a:"Tiny tubes in the trunk", t:3},
 {f:"Forests store carbon and release oxygen, which helps cool the planet.", q:"Why are forests important for the whole planet?", a:"They store carbon and release oxygen", t:3},
 {f:"Trees can share nutrients through underground fungal networks.", q:"How can trees help each other underground?", a:"Through fungal networks connecting their roots", t:3}
],

31: [ // The World of Insects
 {f:"Insects have six legs.", q:"How many legs does an insect have?", a:"Six", t:1},
 {f:"An insect's body has three parts: head, thorax and abdomen.", q:"What are the three parts of an insect's body?", a:"Head, thorax, abdomen", t:1},
 {f:"Many insects have antennae for sensing the world.", q:"What do insects use their antennae for?", a:"To sense the world around them", t:1},
 {f:"Spiders are not insects — they have eight legs.", q:"Is a spider an insect? How do you know?", a:"No — it has eight legs, not six", t:2},
 {f:"Insects have a hard outer covering called an exoskeleton.", q:"What is an insect's hard outer covering called?", a:"An exoskeleton", t:2},
 {f:"Many insects change form completely as they grow — metamorphosis.", q:"What is it called when an insect changes form as it grows?", a:"Metamorphosis", t:2},
 {f:"Bees pollinate flowers, which lets plants make seeds and fruit.", q:"Why are bees important to plants?", a:"They pollinate flowers so plants can make seeds", t:2},
 {f:"Insects must shed their exoskeleton to grow bigger.", q:"Why does an insect shed its exoskeleton?", a:"Because the hard shell can't stretch as it grows", t:3},
 {f:"Insects are the most numerous group of animals on Earth.", q:"Which group of animals has the most species?", a:"Insects", t:3},
 {f:"Without pollinating insects, many of the foods we eat would disappear.", q:"What would happen to our food without pollinating insects?", a:"Many foods would disappear", t:3}
],

32: [ // Wonders of the Deep Sea
 {f:"The deep sea is completely dark because sunlight cannot reach it.", q:"Why is the deep sea dark?", a:"Sunlight can't reach that far down", t:1},
 {f:"The ocean is the largest habitat on Earth.", q:"What is the largest habitat on Earth?", a:"The ocean", t:1},
 {f:"Some deep-sea animals make their own light.", q:"How do some deep-sea animals see or attract prey?", a:"They make their own light", t:1},
 {f:"Making your own light is called bioluminescence.", q:"What is it called when an animal makes its own light?", a:"Bioluminescence", t:2},
 {f:"Deep water is very cold and the pressure is enormous.", q:"What are two things that make the deep sea hard to live in?", a:"It is very cold and the pressure is huge", t:2},
 {f:"Most deep-sea food drifts down from the sunlit water above.", q:"Where does most deep-sea food come from?", a:"It falls from the sunlit water above", t:2},
 {f:"Whales dive deep but must return to the surface to breathe air.", q:"Why must a whale return to the surface?", a:"To breathe air", t:2},
 {f:"Pressure increases with depth because of the weight of water above.", q:"Why does pressure increase as you go deeper?", a:"The weight of all the water above pushes down", t:3},
 {f:"At hydrothermal vents, life runs on chemicals instead of sunlight.", q:"How does life survive at deep-sea vents without sunlight?", a:"It uses chemicals from the vents for energy", t:3},
 {f:"More of the deep ocean is unmapped than the surface of Mars.", q:"Which do we have better maps of — the deep ocean or Mars?", a:"Mars", t:3}
],

/* ---------- HISTORY ---------- */

47: [ // Between Two Rivers — Mesopotamia
 {f:"Mesopotamia means 'the land between two rivers'.", q:"What does the word Mesopotamia mean?", a:"The land between two rivers", t:1},
 {f:"The two rivers are the Tigris and the Euphrates.", q:"Which two rivers is Mesopotamia between?", a:"The Tigris and the Euphrates", t:1},
 {f:"Mesopotamia is in the land we now call Iraq.", q:"Which modern country is Mesopotamia in?", a:"Iraq", t:1},
 {f:"Uruk was one of the world's first true cities.", q:"Name one of the world's first cities.", a:"Uruk", t:2},
 {f:"The people of southern Mesopotamia were called Sumerians.", q:"What were the people of early Mesopotamia called?", a:"Sumerians", t:2},
 {f:"Farming let people stay in one place instead of wandering.", q:"What changed when people learned to farm?", a:"They could settle instead of wandering", t:2},
 {f:"Cuneiform was the world's first writing system.", q:"What was the world's first writing system called?", a:"Cuneiform", t:2},
 {f:"Cuneiform was made by pressing a reed stylus into wet clay.", q:"How was cuneiform written?", a:"By pressing a reed into wet clay", t:3},
 {f:"Writing was invented for record-keeping — grain, sheep and taxes — not for stories.", q:"Why was writing invented?", a:"To keep records of goods and taxes", t:3},
 {f:"Irrigation canals let farmers control river water and grow extra food.", q:"How did canals help Mesopotamian farmers?", a:"They carried water to fields so more food could grow", t:3},
 {f:"Extra food meant not everyone had to farm, so people specialised in other jobs.", q:"Why did surplus food matter?", a:"People could do other jobs instead of all farming", t:3}
],

46: [ // The River That Built a Kingdom — Egypt
 {f:"Ancient Egypt grew along the Nile River.", q:"Which river was ancient Egypt built along?", a:"The Nile", t:1},
 {f:"Egyptian kings were called pharaohs.", q:"What were Egyptian kings called?", a:"Pharaohs", t:1},
 {f:"The pyramids were built as tombs.", q:"What were the pyramids built for?", a:"As tombs", t:1},
 {f:"The Nile flooded every year and left rich soil behind for farming.", q:"Why was the Nile's yearly flood a good thing?", a:"It left rich soil for growing crops", t:2},
 {f:"Egyptians wrote using pictures called hieroglyphs.", q:"What was Egyptian picture-writing called?", a:"Hieroglyphs", t:2},
 {f:"Egyptians preserved bodies as mummies because they believed in a life after death.", q:"Why did Egyptians make mummies?", a:"They believed in an afterlife", t:2},
 {f:"Egypt is mostly desert, so nearly everyone lived close to the river.", q:"Why did Egyptians live so close to the Nile?", a:"The rest of Egypt is desert", t:2},
 {f:"The Rosetta Stone let scholars finally read hieroglyphs again.", q:"What object helped scholars decode hieroglyphs?", a:"The Rosetta Stone", t:3},
 {f:"The Nile flows north, so 'Upper Egypt' is in the south.", q:"Why is Upper Egypt in the south?", a:"The Nile flows north, so upriver is southward", t:3},
 {f:"Building pyramids required organisation, mathematics and a huge workforce.", q:"What did pyramid-building show about Egyptian society?", a:"It was organised, skilled at maths, and could manage many workers", t:3}
],

51: [ // Cities by the River — Indus Valley
 {f:"This civilization grew along the Indus River.", q:"Which river was this civilization built along?", a:"The Indus", t:1},
 {f:"It was in the land we now call Pakistan and north-west India.", q:"Which modern countries was the Indus civilization in?", a:"Pakistan and north-west India", t:1},
 {f:"Two of its greatest cities were Harappa and Mohenjo-daro.", q:"Name one great Indus city.", a:"Harappa or Mohenjo-daro", t:1},
 {f:"Its cities were laid out on a grid with straight streets.", q:"What was unusual about how Indus cities were planned?", a:"Straight streets laid out in a grid", t:2},
 {f:"They built covered drains and indoor plumbing.", q:"What did Indus cities have that most ancient cities didn't?", a:"Covered drains and indoor plumbing", t:2},
 {f:"They traded with Mesopotamia.", q:"Who did the Indus people trade with?", a:"Mesopotamia", t:2},
 {f:"They used standard weights so trade would be fair.", q:"How did they make trade fair?", a:"They used standard weights", t:2},
 {f:"Their writing has never been deciphered.", q:"What don't we know about the Indus people?", a:"We still can't read their writing", t:3},
 {f:"Their cities show little sign of kings, palaces or grand tombs.", q:"What's surprising about Indus cities compared with Egypt?", a:"No kings' palaces or huge tombs", t:3},
 {f:"The civilization declined around 1900 BC, possibly as rivers and climate changed.", q:"What may have caused the Indus civilization to decline?", a:"Changing rivers and climate", t:3}
],

48: [ // The Great Wall and the Silk Road — China
 {f:"The Great Wall was built to defend China's northern border.", q:"Why was the Great Wall built?", a:"To defend China's northern border", t:1},
 {f:"The Silk Road was a trade route linking China to lands far to the west.", q:"What was the Silk Road?", a:"A trade route from China to the west", t:1},
 {f:"Silk is made by silkworms.", q:"Where does silk come from?", a:"Silkworms", t:1},
 {f:"China was ruled by families of rulers called dynasties.", q:"What is a dynasty?", a:"A ruling family", t:2},
 {f:"Chinese inventions include paper, printing, the compass and gunpowder.", q:"Name two things invented in ancient China.", a:"Any two of: paper, printing, compass, gunpowder", t:2},
 {f:"The Silk Road carried ideas and religions as well as goods.", q:"What travelled the Silk Road besides goods?", a:"Ideas and religions", t:2},
 {f:"The Great Wall is not one wall but many walls built over centuries.", q:"Was the Great Wall built all at once?", a:"No — many walls over many centuries", t:2},
 {f:"China kept the secret of making silk for centuries.", q:"Why was Chinese silk so valuable abroad?", a:"Only China knew how to make it", t:3},
 {f:"Two great rivers, the Yellow and the Yangtze, fed Chinese farming.", q:"Which two rivers were vital to China?", a:"The Yellow and the Yangtze", t:3},
 {f:"Goods usually passed between many traders rather than travelling the whole road with one merchant.", q:"Did one trader travel the whole Silk Road?", a:"No — goods passed between many traders", t:3}
],

/* ---------- BODY & LIFE SKILLS ---------- */

9: [ // Your Amazing Skeleton
 {f:"Bones give your body its shape.", q:"What gives your body its shape?", a:"Your bones", t:1},
 {f:"Your skeleton protects the soft parts inside you.", q:"What is one job of your skeleton?", a:"Protecting the soft parts inside", t:1},
 {f:"The skull protects your brain.", q:"Which bone protects your brain?", a:"The skull", t:1},
 {f:"An adult has 206 bones.", q:"How many bones does an adult have?", a:"206", t:2},
 {f:"Babies are born with about 300 bones, and some fuse together as they grow.", q:"Do babies have more or fewer bones than adults?", a:"More — about 300, and some fuse together", t:2},
 {f:"Your ribs protect your heart and lungs.", q:"What do your ribs protect?", a:"Heart and lungs", t:2},
 {f:"A joint is where two bones meet and lets you bend.", q:"What is a joint?", a:"Where two bones meet so you can move", t:2},
 {f:"Muscles pull on bones to move them — bones cannot move by themselves.", q:"How do bones move?", a:"Muscles pull on them", t:3},
 {f:"Bone marrow inside your bones makes blood cells.", q:"What is made inside your bones?", a:"Blood cells, in the marrow", t:3},
 {f:"The smallest bone is in your ear; the longest is the femur in your thigh.", q:"Where are your smallest and longest bones?", a:"Smallest in the ear, longest in the thigh", t:3}
],

10: [ // The Journey of Food
 {f:"Digestion begins in your mouth.", q:"Where does digestion start?", a:"In the mouth", t:1},
 {f:"Teeth break food into smaller pieces.", q:"What do your teeth do to food?", a:"Break it into smaller pieces", t:1},
 {f:"Food travels down a tube into your stomach.", q:"Where does food go after you swallow?", a:"Down a tube to the stomach", t:1},
 {f:"That tube is called the oesophagus.", q:"What is the food tube called?", a:"The oesophagus", t:2},
 {f:"The stomach mixes food with acid to break it down further.", q:"What does the stomach add to food?", a:"Acid, to break it down", t:2},
 {f:"Most nutrients are absorbed in the small intestine.", q:"Where are most nutrients absorbed?", a:"The small intestine", t:2},
 {f:"The large intestine absorbs water.", q:"What does the large intestine take out of food?", a:"Water", t:2},
 {f:"Saliva starts breaking food down chemically, not just making it wet.", q:"What does saliva actually do?", a:"Starts breaking food down chemically", t:3},
 {f:"Nutrients pass into the blood and travel to every cell in the body.", q:"How do nutrients reach your cells?", a:"Through the blood", t:3},
 {f:"The whole journey usually takes about a day or two.", q:"How long does food take to travel all the way through?", a:"About a day or two", t:3}
]

};
