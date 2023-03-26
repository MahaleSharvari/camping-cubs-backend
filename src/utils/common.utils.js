const randomstring = require("randomstring");

const extractNumbersFromString = (str) => {
  const regex = /\d+/g;
  const matches = str.match(regex);
  return matches ? matches.map((match) => parseInt(match)) : [];
};

const chatQAJson = {
  "what is your name": "My name is Chatbot. Nice to meet you!",
  "how old are you": "I'm an AI language model, so I don't have an age!",
  "where are you from":
    "I was created by developers, so you could say I'm from the internet!",
  "what can you do":
    "I can answer your questions and have a conversation with you!",
  "how do you work":
    "I use advanced machine learning algorithms to understand and respond to your input.",
  "thank you": "You're welcome!",
  hii: "I'm doing well, thank you for asking. I appreciate your concern",
  hi: "I'm doing well, thank you for asking. I appreciate your concern",
  "how are you":
    "I'm doing well, thank you for asking. I appreciate your concern",
  hello: "I'm doing well, thank you for asking. I appreciate your concern",
  hey: "I'm doing well, thank you for asking. I appreciate your concern",
  bye: "Goodbye! Have a great day.",
  weather:
    "I'm sorry, I don't have access to weather information at the moment.",
  news: "I'm sorry, I don't have access to news information at the moment.",
  sports: "I'm sorry, I don't have access to sports information at the moment.",
  joke: [
    "गेल्या वर्षी किती सुंदर दिसतात, पण त्यात चुकलं की कॅमेराचं बॅटरी घेतलं आहे.",
    "कोणाच्या डोळ्यांमध्ये रुजलंस नाहीत ते जाणून घ्या, बस आपल्या दोष दाखवा.",
    "कुणी तुमच्या स्वप्नांचा वर्णन व्हा, तुमच्या खूप साऱ्या उंदीरांनी त्याला वाटलं असतं.",
    "सगळ्यांनी तुमच्या विचारांवर थोडं दहा मिनिट विचार केलं तर कुणाच्या विचारांचं तुमच्यात भेद नसतं.",
    "गर्लफ्रेंड म्हणजे चांगलं वेल्यू सापडणारं ठिकाण.",
    "आता सुर्य पडतो, नंतर चांद दिसतो, म्हणून आम्ही त्याचं पुढचं जण आहोत.",
    "जो खरोखर भुकंद असतो, तो दुपारच्या जेवणाचं वेळ ठरवू नका.",
    "तुम्ही स्कूटर वापरता तर तुमच्या प्रेमाला लाट नाही टाकता. अशाच लाट टाकायला लावू नका.",
    "मुलगा असेल तर स्कूटर आणि मुलगी असेल तर स्कूटी.",
    "एक मुलगा माणसांचा जोडणार होता, त्याला आपल्या बायकोने विचारलं, 'तुमचं आयुष्य लवकरच कमी होणार आहे ना? माणसे तुमच्यासारख्या देहात कमी झाल्या आहेत.'",
    "एका व्यक्तीला कधी लक्षात घेण्याची गोष्ट आहे का? होय, म्हणजे त्याला वेळ लावण्याची गोष्ट आहे.",
    "एका फेकूचा कडबडल करण्याचं संगण्यात येत नाही. त्याचं चष्मा स्पष्टपणे काम करत नाही!",
    "मूंग आणि उडिद दोन्ही फुलतीला बाजारात भेटतील. तब्बल उडिद बोलते, 'हाय, माझ्या रोजच्या लग्नापासून तुला पाहिजे असतं, मी तुमच्यासाठी उगवतोय, मूंग म्हणजे एक मोठा विरोध होतोय त्यामुळे आता तुम्हाला मला न जोडता जोडता उडीद निघालंय.'",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why don't oysters give to charity? Because they're shellfish!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the cookie go to the doctor? Because it was feeling crumbly!",
    "Why did the chicken cross the playground? To get to the other slide!",
    "Why couldn't the bicycle stand up by itself? Because it was two-tired!",
    "Why do seagulls fly over the sea? Because if they flew over the bay, they would be bagels!",
    "Why did the teddy bear say no to dessert? Because it was stuffed!",
    "Why did the cow go to outer space? To see the moooon!",
    "Why don't elephants use computers? Because they're afraid of mice!",
    "Why don't ghosts ride elevators? Because they lift their spirits!",
    "Why don't dogs make good dancers? Because they have two left feet!",
    "Why don't ducks tell jokes when they fly south for the winter? Because they would quack up!",
    "Why did the tomato turn green? Because it was unripe!",
    "Why did the tree go to the dentist? To get a root canal!",
    "Why did the coffee file a police report? Because it got mugged!",
    "Why did the music teacher need a ladder? To reach the high notes!",
    "Why did the kid cross the playground? To get to the other slide!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the elephant go on a diet? Because he felt trunky!",
    "Why did the grape stop in the middle of the road? Because it ran out of juice!",
    "Why did the pencil go to the doctor? Because it broke its lead!",
    "Why did the belt go to jail? For holding up the pants!",
    "Why do bees have sticky hair? Because they use honeycombs!",
    "Why did the tomato blush? Because it saw the salad dressing!",
    "Why did the birdie go to the hospital? To get a tweetment!",
    "Why did the banana go to the doctor? Because it wasn't peeling well!",
    "Why did the farmer name his pig Ink? Because it kept running out of the pen!",
    "Why did the cookie go to the doctor? Because it was feeling crumbly!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why was the math book sad? Because it had too many problems.",
    "Why did the golfer wear two pairs of pants? In case he got a hole in one!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why did the cow go to outer space? To see the moooon!",
    "Why did the duck cross the road? To prove he wasn't a chicken!",
  ],
  fact: [
    "The shortest war in history was between Britain and Zanzibar in 1896. It lasted only 38 minutes!",
    "A group of flamingos is called a flamboyance!",
    "The world's largest snowflake on record measured 15 inches wide and 8 inches thick.",
    "The longest word in the English language has 189,819 letters and takes over 3 hours to pronounce!",
    "The longest word in the English language is 189,819 letters long.",
    "The world's oldest piece of chewing gum is over 9,000 years old.",
    "The Chikhaldara hill station in Maharashtra is known for its wildlife and adventure activities like trekking and camping.",
    "The Panchvati area in Nashik, Maharashtra, is an important pilgrimage site for Hindus.",
    "The Pandavleni Caves in Nashik, Maharashtra, are ancient rock-cut caves and are a popular tourist destination.",
    "The Sula Vineyards in Nashik, Maharashtra, are known for their wine tours and tastings.",
    "The Lonar Crater Lake, located in Maharashtra, is a unique natural phenomenon and a popular tourist destination.",
    "The Gateway of India in Mumbai was built to commemorate the visit of King George V and Queen Mary to India in 1911.",
    "The Elephanta Caves in Mumbai are a UNESCO World Heritage Site and date back to the 5th century AD.",
    "The Ajanta and Ellora Caves in Maharashtra are also UNESCO World Heritage Sites and contain some of the oldest surviving rock-cut temples in India.",
    "The Chhatrapati Shivaji Terminus in Mumbai is a UNESCO World Heritage Site and is known for its Victorian Gothic architecture.",
    "A crocodile can't stick its tongue out.",
    "The shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after just 38 minutes.",
    "A snail can sleep for three years.",
    "The largest snowflake ever recorded was 15 inches wide and 8 inches thick.",
    "The shortest complete sentence in the English language is 'I am.'",
    "It is impossible to sneeze with your eyes open.",
    "Polar bears are left-handed.",
    "The world's largest grand piano was built by a 15-year-old in New Zealand.",
    "The only letter that doesn't appear in any U.S. state name is 'Q'.",
    "The human nose can detect over 1 trillion different scents.",
    "Cows have best friends and can become stressed when they are separated.",
    "The shortest distance between two points is a straight line.",
    "Turtles can breathe through their butts.",
    "An ostrich's eye is bigger than its brain.",
    "Banging your head against a wall burns 150 calories an hour.",
    "The world's largest snow maze is over 30,000 square feet and located in Canada.",
    "The longest living mammal is the bowhead whale, which can live for over 200 years.",
    "The world's largest book weighs over 3,000 pounds and is located in Hungary.",
    "The oldest person to ever live was Jeanne Calment, who lived to be 122 years and 164 days old.",
    "The world's largest rubber duck weighs over 1,000 pounds and stands over six stories tall.",
    "The shortest scheduled flight in the world is between the Scottish islands of Westray and Papa Westray, which takes just 47 seconds.",
    "A hippopotamus can run faster than a human.",
    "The world's largest ball of yarn weighs over 21,000 pounds and is located in the U.S.",
    "The world's largest cookie weighed over 40,000 pounds and was baked in the U.S.",
    "The first computer mouse was made of wood.",
    "The world's smallest mammal is the bumblebee bat, which weighs less than a penny.",
    "The longest wedding veil ever worn was over 22,000 feet long and was worn by a woman in Cyprus.",
    "The world's largest toilet-themed restaurant is located in Taiwan.",
    "A group of flamingos is called a flamboyance.",
    "The world's largest underwater cave is over 215 miles long and located in Mexico.",
    "A hummingbird's heart can beat up to 1,260 times per minute.",
    "The world's largest snowman was over 113 feet tall and was built in Maine.",
    "A group of hedgehogs is called a prickle.",
    "The world's tallest building is the Burj Khalifa in Dubai, which stands at over 828 meters tall.",
    "The world's largest LEGO tower was over 114 feet tall and was built in Poland.",
    "A group of porcupines is called a prickly ball.",
    "India is the world's largest democracy, with over 1.3 billion people.",
    "The Taj Mahal, located in Agra, India, is considered one of the world's most beautiful buildings and is a UNESCO World Heritage site.",
    "The Indian flag is a tricolor of saffron, white, and green, with a blue wheel in the center that represents the chakra or wheel of law.",
    "India has the world's second-largest population, after China.",
    "India is the world's largest producer of milk.",
    "India is the birthplace of four major world religions: Hinduism, Buddhism, Jainism, and Sikhism.",
    "The national animal of India is the Bengal tiger.",
    "The Indian rupee is the official currency of India.",
    "India has the world's third-largest economy, after the United States and China.",
    "The Lotus Temple in Delhi, India, is a Bahá'í House of Worship and is notable for its unique architecture.",
    "India is home to the world's highest cricket ground, located in Chail, Himachal Pradesh.",
    "The Indian national emblem is an adaptation of the Lion Capital of Ashoka, which is over 2,000 years old.",
    "The Indian national anthem, Jana Gana Mana, was written by Rabindranath Tagore and was first sung on December 27, 1911.",
    "India has the world's largest film industry, based in Mumbai, which is known as Bollywood.",
    "The Red Fort, located in Delhi, India, was built in the 17th century and is a UNESCO World Heritage site.",
    "India is the world's largest producer of tea.",
    "The national bird of India is the peacock.",
    "India has the world's second-largest road network, after the United States.",
    "The Indian space program, also known as the Indian Space Research Organisation (ISRO), has successfully launched over 100 satellites into orbit.",
    "India has the world's highest cricket stadium, located in Dharamshala, Himachal Pradesh.",
    "The Indian national flower is the lotus.",
    "The Hawa Mahal, located in Jaipur, India, is a five-story palace with over 950 windows and is known as the 'Palace of Winds.'",
    "India is the world's largest producer of mangoes.",
    "The Indian national tree is the banyan tree.",
    "The Sula Vineyards in Nashik are a popular tourist attraction and offer wine tours and tastings.",
    "The Igatpuri Hill Station in Maharashtra is a popular destination for trekking and offers panoramic views of the surrounding hills and valleys.",
    "The Harishchandragad Fort in Maharashtra is a popular trekking destination and is known for its scenic views and ancient rock-cut caves.",
    "The Vasota Fort in Maharashtra is a popular trekking destination and offers panoramic views of the surrounding forests and hills.",
    "The Sandhan Valley in Maharashtra is a popular destination for adventure sports such as rappelling and rock climbing.",
    "The Ratnagiri district in Maharashtra is known for its Alphonso mangoes, which are considered to be the best in the world.",
    "India is the world's largest producer of cotton.",
    "The Indian national river is the Ganges, which is considered sacred by Hindus.",
    "India has the world's largest railway network, with over 115,000 km of track.",
    "The Qutub Minar, located in Delhi, India, is a UNESCO World Heritage site and is the tallest brick minaret in the world.",
    "India has the world's second-largest standing army, after China.",
    "The Indian national song, Vande Mataram, was written by Bankim Chandra Chattopadhyay and was first published in 1876.",
    "India is the world's largest producer of bananas.",
    "The Indian national aquatic animal is the river dolphin.",
    "India has the world's largest postal network, with over 150,000 post offices.",
    "Maharashtra has over 61,000 square kilometers of forest cover.",
    "The Tadoba-Andhari Tiger Reserve in Maharashtra is one of the largest and oldest tiger reserves in India.",
    "The Western Ghats mountain range, which runs through Maharashtra, is one of the world's eight 'hottest hotspots' of biological diversity.",
    "The Karnala Bird Sanctuary in Maharashtra is home to over 222 species of birds.",
    "The Bhimashankar Wildlife Sanctuary in Maharashtra is home to the Indian giant squirrel.",
    "The Koyna Wildlife Sanctuary in Maharashtra is home to the Indian grey mongoose.",
    "The Melghat Tiger Reserve in Maharashtra is home to over 90 tigers.",
    "The Satpura Tiger Reserve in Maharashtra is known for its scenic beauty and rich biodiversity.",
    "The Radhanagari Wildlife Sanctuary in Maharashtra is home to the Indian rock python.",
    "The Dajipur Wildlife Sanctuary in Maharashtra is known for its population of bison.",
    "Maharashtra has over 720 species of birds, making it one of the best states in India for birdwatching.",
    "The Matheran Hill Railway, located in Maharashtra, is a UNESCO World Heritage site.",
    "The Lonavala-Khandala hill stations in Maharashtra are popular tourist destinations.",
    "The Sahyadri mountain range in Maharashtra is a popular destination for trekking and hiking.",
    "The Harishchandragad Fort in Maharashtra is a popular destination for trekking and offers panoramic views of the surrounding hills.",
    "The Tamhini Ghat in Maharashtra is a popular destination for monsoon trekking.",
    "The Kaas Plateau in Maharashtra is known for its stunning displays of wildflowers during the monsoon season.",
    "The Panchgani hill station in Maharashtra is known for its scenic beauty and strawberry farms.",
    "The Torna Fort in Maharashtra is known for its historic significance and offers great trekking opportunities.",
    "The Ajanta and Ellora Caves, located in Maharashtra, are UNESCO World Heritage sites and are known for their ancient rock-cut temples and sculptures.",
    "The Nashik district in Maharashtra is known for its vineyards and wine production.",
    "The Alibaug beach in Maharashtra is a popular destination for water sports and adventure activities.",
    "The Sindhudurg Fort in Maharashtra is a popular destination for scuba diving and snorkeling.",
    "The Pawna Lake in Maharashtra is a popular destination for camping and water sports.",
    "The Tarkarli Beach in Maharashtra is a popular destination for water sports and dolphin watching.",
    "The Bhandardara hill station in Maharashtra is known for its natural beauty and adventure activities like trekking and camping.",
    "The Shaniwar Wada in Pune is a historical fortification and palace that was built in 1732.",
    "The Pashan Lake in Pune is a popular spot for birdwatching and is home to several species of migratory birds.",
    "The Lonar Crater Lake in Maharashtra is the world's third-largest crater lake and was formed by a meteor impact over 50,000 years ago.",
    "The Amba Ghat in Maharashtra is a popular destination for trekking and offers scenic views of the surrounding hills and valleys.",
    "The Kalsubai Peak in Maharashtra is the highest peak in the Western Ghats and is a popular destination for trekking and hiking.",
    "The Durshet Forest Lodge in Maharashtra offers several adventure activities such as rappelling, ziplining, and trekking.",
    "The Malshej Ghat in Maharashtra is a popular destination for birdwatching and is home to several species of migratory birds.",
    "The Bhandardara Lake in Maharashtra is a popular spot for camping and offers scenic views of the surrounding mountains and waterfalls.",
    "The Karla Caves in Lonavala are a popular tourist attraction and date back to the 2nd century BC.",
    "The Rajmachi Fort in Lonavala is a popular trekking destination and offers scenic views of the surrounding valleys and hills.",
    "The Karnala Fort in Maharashtra is a historical fortification and offers panoramic views of the surrounding forests and hills.",
    "The Tarkarli Beach in Maharashtra is a popular destination for water sports such as scuba diving and snorkeling.",
    "The Matheran Hill Station in Maharashtra is a popular weekend getaway and is known for its colonial-era architecture and scenic views.",
    "The Mahabaleshwar Hill Station in Maharashtra is known for its strawberry farms and offers panoramic views of the surrounding hills and valleys.",
    "The Lavasa Hill City in Maharashtra is a planned city and is known for its picturesque surroundings and adventure sports.",
    "The Lonavala Hill Station in Maharashtra is a popular weekend getaway and is known for its scenic views and trekking trails.",
    "Maharashtra has around 61,939 sq. km. of forest cover which is about 20% of the state’s geographical area.",
    "The Western Ghats in Maharashtra have been declared as one of the World Heritage Sites by UNESCO.",
    "Tadoba Andhari Tiger Reserve in Maharashtra is the largest and oldest national park in the state.",
    "The Melghat Tiger Reserve in Maharashtra is home to around 82 tigers as per the 2018 tiger census.",
    "Maharashtra has a variety of forest types including tropical, sub-tropical, deciduous, and evergreen forests.",
    "The state has 35 wildlife sanctuaries, 6 national parks, and 2 tiger reserves.",
    "The Satpura Tiger Reserve in Maharashtra is the only tiger reserve in the country to have both big cats- tigers and leopards in good numbers.",
    "Maharashtra has the highest number of amphibian species in the country, with over 40 species found in the Western Ghats alone.",
    "The Koyna Wildlife Sanctuary in Maharashtra is known for its biodiversity and is home to many endangered species.",
    "The Chikhaldara Wildlife Sanctuary in Maharashtra is known for its beautiful landscape and is a popular tourist destination.",
    "The Bhamragarh Wildlife Sanctuary in Maharashtra is home to the endangered Bastar Hill Myna bird species.",
    "Maharashtra has a rich diversity of medicinal plants and herbs which are used in Ayurveda and other traditional forms of medicine.",
    "The Phansad Wildlife Sanctuary in Maharashtra is a birdwatcher’s paradise and is home to over 250 species of birds.",
    "Maharashtra has been successful in implementing the Joint Forest Management (JFM) program, which involves the participation of local communities in forest conservation.",
    "The forests of Maharashtra are home to many indigenous tribal communities who have been living in harmony with nature for centuries.",
    "Maharashtra has been implementing the ‘Green Army’ initiative, where volunteers help in afforestation and forest conservation activities.",
    "The Karnala Bird Sanctuary in Maharashtra is home to the rare and endangered Ashy Minivet bird species.",
    "The forests of Maharashtra play a crucial role in maintaining the ecological balance of the region and are important for the survival of many species of flora and fauna.",
    "Maharashtra has been successful in reducing forest fires by implementing various preventive measures and community-based initiatives.",
    "The Bhimashankar Wildlife Sanctuary in Maharashtra is home to the Indian Giant Squirrel, which is one of the largest species of squirrels in the world.",
    "Maharashtra has a rich cultural heritage with many traditional practices and festivals associated with forests and wildlife.",
    "The forest department of Maharashtra has been implementing various measures for the conservation of endangered species such as tigers, leopards, and elephants.",
    "Maharashtra has been promoting eco-tourism in its forests, which has helped in creating livelihood opportunities for local communities.",
    "The forests of Maharashtra act as a carbon sink and help in mitigating climate change.",
    "Maharashtra has been successful in controlling deforestation and increasing forest cover through various afforestation programs.",
    "The Chandoli National Park in Maharashtra is home to the rare and endangered Indian Pangolin species.",
    "Maharashtra has a rich diversity of reptile species, with over 200 species found in the state.",
    "The forests of Maharashtra provide many ecosystem services such as water conservation, soil conservation, and pollination.",
    "Maharashtra has been implementing the `Van Mitra` initiative, where citizens are encouraged to participate in forest conservation activities.",
  ],
  "Are you a robot?":
    "I'm not a physical robot, but a software program designed to chat with you. Thanks for asking!",
  "What is your purpose?":
    "My purpose is to assist you with any questions or problems you have. Thanks for asking!",
  "Do you have feelings?":
    "I don't have emotions like humans, but I'm designed to interact with you in a helpful and friendly manner. Thanks for asking!",
  "What is the meaning of life?":
    "That's a philosophical question that has been debated for centuries. What do you think the meaning of life is? Thanks for asking!",
  "What is the capital of France?":
    "The capital of France is Paris. Thanks for asking!",
  "Who is the current President of the United States?":
    "As of my knowledge cutoff date (September 2021), the current President of the United States is Joe Biden. Thanks for asking!",
  "What is the population of India?":
    "As of my knowledge cutoff date (September 2021), the population of India is approximately 1.3 billion people. Thanks for asking!",
  "What is the largest city in the world?":
    "The largest city in the world by population is Tokyo, Japan. Thanks for asking!",
  "What is the tallest mountain in the world?":
    "The tallest mountain in the world is Mount Everest, located in the Himalayas. Thanks for asking!",
  "What is the longest river in the world?":
    "The longest river in the world is the Nile River in Africa. Thanks for asking!",
  "Who invented the telephone?":
    "The telephone was invented by Alexander Graham Bell. Thanks for asking!",
  "What is the Mona Lisa?":
    "The Mona Lisa is a painting by the Italian artist Leonardo da Vinci, created in the 16th century. Thanks for asking!",
  "What is the Higgs boson?":
    "The Higgs boson is a subatomic particle that was first theorized in the 1960s and was discovered by the Large Hadron Collider in 2012. Thanks for asking!",
  "What is the fastest land animal?":
    "The fastest land animal is the cheetah, which can run up to 70 miles per hour. Thanks for asking!",
  "Who wrote the Harry Potter books?":
    "The Harry Potter books were written by J.K. Rowling. Thanks for asking!",
  "What is the Great Barrier Reef?":
    "The Great Barrier Reef is a coral reef system located off the coast of Australia that is the largest living structure on Earth. Thanks for asking!",

  // Forest Questions
  "What should I do before going to a forest?":
    "Research the area, its rules and regulations, and any safety concerns beforehand.",
  "What should I wear in a forest?":
    "Wear comfortable, sturdy, and protective clothing, including closed-toe shoes, long pants, and long-sleeved shirts.",
  "What should I bring with me when I go to a forest?":
    "Bring a map, a compass, a first aid kit, sufficient water and food, a whistle or other signaling device, and a flashlight or other light source.",
  "What should I do if I encounter wildlife in a forest?":
    "Stay calm, make noise, and back away slowly. Avoid running or turning your back on the animal.",
  "What should I do if I get lost in a forest?":
    "Stay put and try to make yourself visible by using bright clothing or materials, building a signal fire, or using a whistle.",
  "What should I do if I come across a river or stream in a forest?":
    "Avoid crossing during high water levels or strong currents, and look for a shallow, calm area. Test the depth and current by using a stick or rock to gauge the water's movement and depth.",
  "What should I do if I come across a plant that I am not familiar with?":
    "Avoid touching or consuming the plant. Take a photo of it and consult with a park ranger or other expert to identify it.",
  "What should I do if I come across a campfire in a forest?":
    "If the campfire is unattended or not completely extinguished, pour water over it and stir it with a stick until it is cool to the touch.",
  "What should I do if I come across litter in a forest?":
    "Pack out any litter you bring in, and consider picking up any other litter you come across to leave the area cleaner than you found it.",

  "What are some important things to bring when traveling in a forest?":
    "Some important things to bring include water, snacks, a first aid kit, a map and compass, a whistle, a flashlight, and appropriate clothing and footwear.",
  "Why is it important to stay on designated trails in a forest?":
    "Staying on designated trails helps to protect the delicate ecosystem of the forest and reduces the risk of getting lost or injured.",
  "What should you do if you encounter wildlife in a forest?":
    "It's important to stay calm and give the wildlife plenty of space. Avoid approaching or feeding the animals and keep pets on a leash.",
  "Why is it important to pack out all trash when traveling in a forest?":
    "Leaving trash in the forest can harm wildlife and pollute the environment. It's important to pack out all trash and dispose of it properly.",
  "What should you do if you get lost in a forest?":
    "If you get lost in a forest, stay calm and try to retrace your steps. If you can't find your way back, stay in one place and make yourself visible by using a whistle or brightly colored clothing.",
  "What is the Leave No Trace principle?":
    "The Leave No Trace principle is a set of guidelines for outdoor ethics that encourage people to minimize their impact on the environment and preserve natural spaces for future generations.",
  "What should you do if you encounter a downed power line in a forest?":
    "If you encounter a downed power line in a forest, stay at least 30 feet away and call the local utility company or emergency services.",
  "Why is it important to be prepared for changing weather conditions when traveling in a forest?":
    "Weather conditions can change quickly in a forest, so it's important to be prepared with appropriate clothing and gear to stay safe and comfortable.",
  "What should you do if you see smoke or a fire in a forest?":
    "If you see smoke or a fire in a forest, report it to the local authorities and move to a safe location.",
  "What should you do if you encounter a hazardous plant, like poison ivy or poison oak, in a forest?":
    "If you encounter a hazardous plant in a forest, avoid touching or brushing against it and wash your skin and clothes as soon as possible to prevent a rash.",
  "What should you do if you encounter a hazardous animal, like a snake or spider, in a forest?":
    "If you encounter a hazardous animal in a forest, give it plenty of space and avoid touching or approaching it. If you are bitten or stung, seek medical attention immediately.",
  "Why is it important to respect other visitors in a forest?":
    "Respecting other visitors in a forest helps to promote a positive and safe environment for everyone. This includes following rules and regulations, using appropriate behavior and language, and being courteous to others.",
  "What should you do if you encounter a hunting party in a forest?":
    "If you encounter a hunting party in a forest, be respectful and make yourself known. Wear bright colors and avoid making sudden movements or loud noises that could startle the hunters or the wildlife.",
  "What should you do if you encounter a group of hikers on a narrow trail in a forest?":
    "If you encounter a group of hikers on a narrow trail in a forest, step aside and allow them to pass safely. It's also important to communicate with other hikers and be aware of your surroundings.",
  "What should I do before entering a forest?":
    "Check the weather forecast and trail conditions, inform someone of your trip plan, and bring necessary equipment and supplies.",
  "What equipment and supplies should I bring when traveling in a forest?":
    "Some essential items include a map and compass, extra food and water, a first aid kit, a whistle, a headlamp or flashlight, and appropriate clothing and footwear.",
  "What should I do if I encounter a wild animal?":
    "Stay calm, make noise to let the animal know you're there, and give it plenty of space. Do not approach or feed the animal.",
  "What should I do if I get lost in the forest?":
    "Stop, stay calm, and try to retrace your steps. If you can't find your way back, stay put and make yourself visible to search and rescue teams.",
  "Is it safe to drink water from streams or lakes in a forest?":
    "It's not recommended, as water in natural sources can be contaminated. It's best to bring your own water or use a filtration system.",
  "What should I do if I see a forest fire?":
    "Immediately report the fire to the appropriate authorities and evacuate the area as quickly as possible.",
  "Can I camp anywhere in a forest?":
    "No, it's important to follow designated camping areas and Leave No Trace principles to protect the environment.",
  "What should I do with my garbage when camping in a forest?":
    "Pack it out with you and dispose of it properly in a trash receptacle.",
  "What should I do if I come across a trail obstruction or fallen tree?":
    "Do not attempt to move the obstruction yourself. Notify the appropriate authorities and follow any posted detours or instructions.",
  "What should I do if I hear thunder while hiking in a forest?":
    "Find shelter immediately and stay away from tall trees or open areas. Wait at least 30 minutes after the last thunder before resuming your hike.",
  "What should I do if I encounter a bear?":
    "Stay calm and avoid direct eye contact. Slowly back away and give the bear plenty of space. Do not run or climb a tree.",
  "Can I bring my pet with me when traveling in a forest?":
    "Check the regulations of the specific forest, but generally pets must be leashed and controlled at all times to avoid disturbing wildlife or damaging the environment.",
  "What should I do if I encounter a snake?":
    "Give the snake plenty of space and do not approach or try to handle it. Most snakes are not venomous, but it's best to avoid them altogether.",
  "What should I do if I see someone else acting recklessly or harming the environment in a forest?":
    "Report the behavior to the appropriate authorities and do not confront the person directly.",
  "What should I bring with me when traveling in a forest?":
    "It's important to bring appropriate clothing and footwear, water, food, a map or GPS, a flashlight, a first-aid kit, and a whistle.",
  "How can I avoid getting lost in a forest?":
    "Make sure to stay on marked trails, carry a map or GPS, and pay attention to landmarks. If you do get lost, try to retrace your steps or follow a stream or other natural feature to find your way back.",
  "What should I do if I encounter wildlife in a forest?":
    "Do not approach or feed wildlife, and keep a safe distance. If you come across a bear or other large animal, speak calmly and back away slowly. If the animal charges, use bear spray or any other deterrent you have and try to make yourself as big and loud as possible.",
  "How can I prevent fires when camping in a forest?":
    "Make sure to check for any fire restrictions or bans before you start a fire. Choose a designated fire pit or build a fire ring in a clear area, and keep a bucket of water and a shovel nearby. Never leave a fire unattended and make sure it is completely out before leaving.",
  "What should I do if I encounter a fallen tree on a trail?":
    "If the tree is small, you can try to move it off the trail if it is safe to do so. If it is too large or dangerous to move, or if you are not sure how to safely remove it, turn around and find an alternate route.",
  "What should I do if I get injured in a forest?":
    "If it is a minor injury, treat it with your first-aid kit. If it is more serious or you are unsure how to treat it, call for emergency services or seek help from other hikers or campers nearby.",
  "What should I do if I hear thunder while hiking in a forest?":
    "If you hear thunder while hiking, seek shelter in a low area or under a group of shorter trees. Avoid open areas, tall trees, and bodies of water. Wait at least 30 minutes after the last thunderclap before resuming your hike.",
  "How can I minimize my impact on the environment when camping in a forest?":
    "Follow the principles of Leave No Trace, including packing out all trash and waste, camping at least 200 feet away from water sources, and using established campsites whenever possible. Do not disturb wildlife or their habitats.",
  "What should I bring on a forest hike?":
    "You should bring water, snacks, a first-aid kit, a map and compass, a flashlight, and appropriate clothing and footwear.",
  "What kind of footwear should I wear on a forest hike?":
    "You should wear sturdy, comfortable hiking shoes or boots with good traction.",
  "How should I prepare for a forest hike?":
    "You should research the trail beforehand, let someone know where you're going and when you expect to return, and make sure you're physically prepared for the hike.",
  "What should I do if I encounter wildlife in the forest?":
    "You should maintain a safe distance and avoid approaching or feeding the animals.",
  "What should I do if I get lost in the forest?":
    "You should stay calm and try to retrace your steps to find your way back. If you're still lost, find a safe place to wait for help and use any available signaling devices.",
  "Is it safe to drink water from streams in the forest?":
    "It's generally not safe to drink untreated water from streams in the forest, as it may contain harmful bacteria and parasites. You should bring your own water or treat the water with a purification system.",
  "What should I do if there's a wildfire in the forest?":
    "You should follow any evacuation orders or instructions from authorities, avoid starting any fires or using flammable materials, and stay aware of changing conditions.",
  "What should I do if I encounter other hikers on the trail?":
    "You should be courteous and yield to other hikers, and maintain social distance if necessary. It's also a good idea to carry a mask in case you're unable to maintain a safe distance.",
  "What should I do if I need to use the bathroom in the forest?":
    "You should use a designated bathroom or cathole at least 200 feet from any water source, and pack out all toilet paper and waste.",
  "What should I do if I see litter or other damage to the forest?":
    "You should pack out any trash you find, and avoid damaging or disturbing the natural environment.",
  "What should I do before heading into the forest?":
    "Make sure you let someone know where you're going and when you plan to return.",
  "What kind of clothing should I wear in the forest?":
    "Wear comfortable, breathable clothing and sturdy shoes.",
  "How can I protect myself from insects and ticks?":
    "Wear insect repellent and long sleeves and pants, and check for ticks frequently.",
  "What should I do if I encounter a wild animal?":
    "Stay calm, speak calmly and firmly, and slowly back away while avoiding direct eye contact.",
  "How can I prevent forest fires?":
    "Don't leave fires unattended and always make sure they are completely extinguished before leaving.",
  "What should I do if I get lost in the forest?":
    "Stay calm, stay put, and try to make yourself visible. Use a whistle, mirror, or bright clothing to signal for help.",
  "Is it safe to drink water from streams or rivers in the forest?":
    "No, it's not safe to drink untreated water from streams or rivers. Bring your own water or use a water filter.",
  "What should I do if I encounter a fallen tree or other obstacle on a trail?":
    "Carefully navigate around the obstacle, being mindful of the potential for loose branches or debris.",
  "How can I minimize my impact on the forest environment?":
    "Pack out all trash and leave the area better than you found it. Stick to designated trails to avoid damaging vegetation.",
  "What should I pack when going to a forest?":
    "You should pack essentials such as water, food, navigation tools, first aid kit, warm clothing, and proper footwear.",
  "Is it safe to venture into the forest alone?":
    "It's best to never venture into the forest alone as it's easy to get lost or encounter dangerous wildlife. It's always safer to travel with a companion or group.",
  "What should I do if I encounter a wild animal?":
    "It's important to stay calm and avoid making any sudden movements or loud noises. Slowly back away while keeping an eye on the animal.",
  "Can I start a fire in the forest?":
    "You should always check if there's a fire ban in place before starting a fire. If it's allowed, make sure to create a fire pit, never leave the fire unattended, and put it out completely before leaving.",
  "Is it safe to drink water from streams or rivers in the forest?":
    "It's always best to bring your own water when traveling in the forest. If you have to drink from a stream or river, make sure to purify it before drinking.",
  "What should I do if I get lost in the forest?":
    "If you get lost, stay calm and try to retrace your steps. If you still can't find your way, stay in one place and make yourself visible. Use a whistle, mirror, or fire to signal for help.",
  "What are some important things to keep in mind when hiking in the forest?":
    "Always stay on designated trails, be aware of your surroundings, and watch out for uneven terrain or obstacles. Make sure to pack essentials and tell someone your itinerary before setting out.",
  "Can I hunt in the forest?":
    "Hunting regulations vary depending on the forest and location. Always check the rules and regulations before hunting.",
  "Are there any dangerous plants in the forest that I should avoid?":
    "Yes, there are some plants that can be dangerous if ingested or touched. Do some research before your trip to familiarize yourself with any potentially harmful plants in the area.",
  "What should I do if I see a forest fire?":
    "If you see a forest fire, report it immediately to the authorities and move away from the area. Never attempt to put out a forest fire on your own.",
  "Where to Sleep": "Pick a Good Tent \n Pick a Good Location \n Pick a Bed",
  "What to Wear While Camping":
    "Layering \n Waterproof Boots \n Hat and Headwear",
  "What to Eat":
    "Bring Non-Perishable Foods Bring Food to Cook or Grill Bring a Pot to Cook In Bring Lots of Water to Drink",
  "Things to Do While Camping":
    "Hiking Building a Campfire Star Gazing Swimming",
  "How to Navigate in the Woods":
    "Utility Lights Flashlights LED Lighted Hats BUTTON LAMP™ Batteries",
  "What is the Overall Budget of the campgrounds?":
    "It is based according to your package.",
  "What is the best season to visit the campgrounds?":
    "Based on particular camping locations.",
  "Which are the best campsites that I should visit?":
    "So it will be recommended according to your choice.",
  "Will You Be Camping in Multiple Locations?": "Yes/No",
  "How Long Will You Be Camping for?": "Based on the user preference.",
  "How to reach the campsites?":
    "You can use the map feature to know the exact location of the campgrounds.",
  "Is there a need to rent a tent?":
    "Based on campground that you are visiting you will get to know whether to rent a tent or not.",
  "What are the essentials needed for camping?":
    "You can visit the link provided below.",
  "Is there a need to stock up on food?":
    "You just need to keep small amount of food for emergency.",
  "Is there barbeque or veg non-veg provided in the campgrounds?":
    "There is option for all the type of food.",
};

const getRandomInt = (max) => Math.floor(Math.random() * max);

const removeDuplicates = (arr) => [...new Set(arr)];

const editDistance = (s1, s2) => {
  s1 = s1.toLowerCase().trim();
  s2 = s2.toLowerCase().trim();

  let costs = new Array();
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i == 0) {
        costs[j] = j;
      } else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) {
      costs[s2.length] = lastValue;
    }
  }
  return costs[s2.length];
};

const similarity = (s1, s2) => {
  let longer = s1;
  let shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  let longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
  );
};

const findBestMatch = (arr_string, target) => {
  // in this function we use Levenshtein distance algorithm
  const arr = removeDuplicates(arr_string);
  let bestMatch = null;
  let highestScore = 0;
  for (let i = 0; i < arr.length; i++) {
    let score = similarity(arr[i], target);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = arr[i];
    }
  }
  return bestMatch;
};

const randomNumEndsWithZN = (min, max) =>
  Math.floor((Math.random() * (max - min + 1)) / 100) * 100 +
  (Math.random() < 0.5 ? 0 : 99);

const generateOTP = () => {
  return randomstring.generate({
    length: 6,
    charset: "numeric",
  });
};

const extractNameFromEmail = (email) => {
  const [name, domain] = email.split("@");

  const words = name.split(".");

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const capitalizedName = capitalizedWords.join(" ");

  return capitalizedName;
};

const randomBoolean = () => Math.random() >= 0.5;

module.exports = {
  generateOTP,
  extractNameFromEmail,
  extractNumbersFromString,
  chatQAJson,
  randomBoolean,
  findBestMatch,
  removeDuplicates,
  getRandomInt,
  randomNumEndsWithZN,
};
