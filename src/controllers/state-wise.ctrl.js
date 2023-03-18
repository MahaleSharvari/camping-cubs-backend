const INDIAN_STATES_AND_UT_ARRAY = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
];

const STATES_OBJECT = [
  {
    label: "Andaman and Nicobar Islands",
    value: "Andaman and Nicobar Islands",
    name: "AndamanandNicobar",
  },
  { label: "Andhra Pradesh", value: "Andhra Pradesh", name: "AndhraPradesh" },
  {
    label: "Arunachal Pradesh",
    value: "Arunachal Pradesh",
    name: "ArunachalPradesh",
  },
  { label: "Assam", value: "Assam", name: "Assam" },
  { label: "Bihar", value: "Bihar", name: "Bihar" },
  { label: "Chandigarh", value: "Chandigarh", name: "Chandigarh" },
  { label: "Chhattisgarh", value: "Chhattisgarh", name: "Chhattisgarh" },
  {
    label: "Dadra and Nagar Haveli",
    value: "Dadra and Nagar Haveli",
    name: "DadraandNagarHaveli",
  },
  { label: "Daman and Diu", value: "Daman and Diu", name: "DamanandDiu" },
  { label: "Delhi", value: "Delhi", name: "Delhi" },
  { label: "Goa", value: "Goa", name: "Goa" },
  { label: "Gujarat", value: "Gujarat", name: "Gujarat" },
  { label: "Haryana", value: "Haryana", name: "Haryana" },
  {
    label: "Himachal Pradesh",
    value: "Himachal Pradesh",
    name: "HimachalPradesh",
  },
  {
    label: "Jammu and Kashmir",
    value: "Jammu and Kashmir",
    name: "JammuandKashmir",
  },
  { label: "Jharkhand", value: "Jharkhand", name: "Jharkhand" },
  { label: "Karnataka", value: "Karnataka", name: "Karnataka" },
  { label: "Kerala", value: "Kerala", name: "Kerala" },
  { label: "Ladakh", value: "Ladakh", name: "Ladakh" },
  { label: "Lakshadweep", value: "Lakshadweep", name: "Lakshadweep" },
  { label: "Madhya Pradesh", value: "Madhya Pradesh", name: "MadhyaPradesh" },
  { label: "Maharashtra", value: "Maharashtra", name: "Maharashtra" },
  { label: "Manipur", value: "Manipur", name: "Manipur" },
  { label: "Meghalaya", value: "Meghalaya", name: "Meghalaya" },
  { label: "Mizoram", value: "Mizoram", name: "Mizoram" },
  { label: "Nagaland", value: "Nagaland", name: "Nagaland" },
  { label: "Odisha", value: "Odisha", name: "Odisha" },
  { label: "Puducherry", value: "Puducherry", name: "Puducherry" },
  { label: "Punjab", value: "Punjab", name: "Punjab" },
  { label: "Rajasthan", value: "Rajasthan", name: "Rajasthan" },
  { label: "Sikkim", value: "Sikkim", name: "Sikkim" },
  { label: "Tamil Nadu", value: "Tamil Nadu", name: "TamilNadu" },
  { label: "Telangana", value: "Telangana", name: "Telangana" },
  { label: "Tripura", value: "Tripura", name: "Tripura" },
  { label: "Uttarakhand", value: "Uttarakhand", name: "Uttarakhand" },
  { label: "Uttar Pradesh", value: "Uttar Pradesh", name: "UttarPradesh" },
  { label: "West Bengal", value: "West Bengal", name: "WestBengal" },
];

const STATE_WISE_CITIES = {
  AndamanandNicobar: [
    { value: "Nicobar", label: "Nicobar" },
    { value: "North and Middle Andaman", label: "North and Middle Andaman" },
    { value: "South Andaman", label: "South Andaman" },
  ],
  AndhraPradesh: [
    { value: "Anantapur", label: "Anantapur" },
    { value: "Chittoor", label: "Chittoor" },
    { value: "East Godavari", label: "East Godavari" },
    { value: "Guntur", label: "Guntur" },
    { value: "Dr. Y.S.Rajasekhara Reddy", label: "Dr. Y.S.Rajasekhara Reddy" },
    { value: "Krishna", label: "Krishna" },
    { value: "Kurnool", label: "Kurnool" },
    { value: "Pottisriramulu Nellore", label: "Pottisriramulu Nellore" },
    { value: "Prakasam", label: "Prakasam" },
    { value: "Srikakulam", label: "Srikakulam" },
    { value: "Visakhapatnam", label: "Visakhapatnam" },
    { value: "Vizianagaram", label: "Vizianagaram" },
    { value: "West Godavari", label: "West Godavari" },
  ],
  ArunachalPradesh: [
    { value: "Tirap", label: "Tirap" },
    { value: "West Kameng", label: "West Kameng" },
    { value: "East Kameng", label: "East Kameng" },
    { value: "East Siang", label: "East Siang" },
    { value: "Lower Subansiri", label: "Lower Subansiri" },
    { value: "Upper Subansiri", label: "Upper Subansiri" },
    { value: "West Siang", label: "West Siang" },
    { value: "Lohit", label: "Lohit" },
    { value: "Tawang", label: "Tawang" },
    { value: "Changlang", label: "Changlang" },
    { value: "Papum Pare", label: "Papum Pare" },
    { value: "Upper Siang", label: "Upper Siang" },
    { value: "Lower Dibang Valley", label: "Lower Dibang Valley" },
    { value: "Dibang Valley", label: "Dibang Valley" },
    { value: "Kurung Kumey", label: "Kurung Kumey" },
    { value: "Anjaw", label: "Anjaw" },
    { value: "Longding", label: "Longding" },
    { value: "Namsai", label: "Namsai" },
    { value: "Kra Daadi", label: "Kra Daadi" },
    { value: "Siang", label: "Siang" },
    { value: "Lower Siang", label: "Lower Siang" },
    { value: "Kamle", label: "Kamle" },
    { value: "Shi-Yomi", label: "Shi-Yomi" },
    { value: "Lepa-Rada", label: "Lepa-Rada" },
    { value: "Pakke-Kessang", label: "Pakke-Kessang" },
  ],

  Assam: [
    { value: "Baksa", label: "Baksa" },
    { value: "Barpeta", label: "Barpeta" },
    { value: "Biswanath", label: "Biswanath" },
    { value: "Bongaigaon", label: "Bongaigaon" },
    { value: "Cachar", label: "Cachar" },
    { value: "Charaideo", label: "Charaideo" },
    { value: "Chirang", label: "Chirang" },
    { value: "Darrang", label: "Darrang" },
    { value: "Dhemaji", label: "Dhemaji" },
    { value: "Dhubri", label: "Dhubri" },
    { value: "Dibrugarh", label: "Dibrugarh" },
    { value: "Dima Hasao", label: "Dima Hasao" },
    { value: "Goalpara", label: "Goalpara" },
    { value: "Golaghat", label: "Golaghat" },
    { value: "Hailakandi", label: "Hailakandi" },
    { value: "Hojai", label: "Hojai" },
    { value: "Jorhat", label: "Jorhat" },
    { value: "Kamrup Metropolitan", label: "Kamrup Metropolitan" },
    { value: "Kamrup", label: "Kamrup" },
    { value: "Karbi Anglong", label: "Karbi Anglong" },
    { value: "Karimganj", label: "Karimganj" },
    { value: "Kokrajhar", label: "Kokrajhar" },
    { value: "Lakhimpur", label: "Lakhimpur" },
    { value: "Majuli", label: "Majuli" },
    { value: "Morigaon", label: "Morigaon" },
    { value: "Nagaon", label: "Nagaon" },
    { value: "Nalbari", label: "Nalbari" },
    { value: "Sivasagar", label: "Sivasagar" },
    { value: "Sonitpur", label: "Sonitpur" },
    { value: "South Salmara-Mankachar", label: "South Salmara-Mankachar" },
    { value: "Tinsukia", label: "Tinsukia" },
    { value: "Udalguri", label: "Udalguri" },
    { value: "West Karbi Anglong", label: "West Karbi Anglong" },
  ],
  Bihar: [
    { value: "Araria", label: "Araria" },
    { value: "Arwal", label: "Arwal" },
    { value: "Aurangabad", label: "Aurangabad" },
    { value: "Banka", label: "Banka" },
    { value: "Begusarai", label: "Begusarai" },
    { value: "Bhagalpur", label: "Bhagalpur" },
    { value: "Bhojpur", label: "Bhojpur" },
    { value: "Buxar", label: "Buxar" },
    { value: "Darbhanga", label: "Darbhanga" },
    { value: "East Champaran", label: "East Champaran" },
    { value: "Gaya", label: "Gaya" },
    { value: "Gopalganj", label: "Gopalganj" },
    { value: "Jamui", label: "Jamui" },
    { value: "Jehanabad", label: "Jehanabad" },
    { value: "Khagaria", label: "Khagaria" },
    { value: "Kishanganj", label: "Kishanganj" },
    { value: "Kaimur", label: "Kaimur" },
    { value: "Katihar", label: "Katihar" },
    { value: "Lakhisarai", label: "Lakhisarai" },
    { value: "Madhubani", label: "Madhubani" },
    { value: "Munger", label: "Munger" },
    { value: "Madhepura", label: "Madhepura" },
    { value: "Muzaffarpur", label: "Muzaffarpur" },
    { value: "Nalanda", label: "Nalanda" },
    { value: "Nawada", label: "Nawada" },
    { value: "Patna", label: "Patna" },
    { value: "Purnia", label: "Purnia" },
    { value: "Rohtas", label: "Rohtas" },
    { value: "Saharsa", label: "Saharsa" },
    { value: "Samastipur", label: "Samastipur" },
    { value: "Sheohar", label: "Sheohar" },
    { value: "Sheikhpura", label: "Sheikhpura" },
    { value: "Saran", label: "Saran" },
    { value: "Sitamarhi", label: "Sitamarhi" },
    { value: "Supaul", label: "Supaul" },
    { value: "Siwan", label: "Siwan" },
    { value: "Vaishali", label: "Vaishali" },
    { value: "West Champaran", label: "West Champaran" },
  ],
  Chandigarh: [{ value: "Chandigarh", label: "Chandigarh" }],

  Chhattisgarh: [
    { value: "Balod", label: "Balod" },
    { value: "Baloda Bazar", label: "Baloda Bazar" },
    { value: "Balrampur", label: "Balrampur" },
    { value: "Bastar", label: "Bastar" },
    { value: "Bemetara", label: "Bemetara" },
    { value: "Bijapur", label: "Bijapur" },
    { value: "Bilaspur", label: "Bilaspur" },
    { value: "Dantewada", label: "Dantewada" },
    { value: "Dhamtari", label: "Dhamtari" },
    { value: "Durg", label: "Durg" },
    { value: "Gariaband", label: "Gariaband" },
    { value: "Gaurella-Pendra-Marwahi", label: "Gaurella-Pendra-Marwahi" },
    { value: "Janjgir-Champa", label: "Janjgir-Champa" },
    { value: "Jashpur", label: "Jashpur" },
    { value: "Kabirdham", label: "Kabirdham" },
    { value: "Kanker", label: "Kanker" },
    { value: "Kondagaon", label: "Kondagaon" },
    { value: "Korba", label: "Korba" },
    { value: "Koriya", label: "Koriya" },
    { value: "Mahasamund", label: "Mahasamund" },
    { value: "Mungeli", label: "Mungeli" },
    { value: "Narayanpur", label: "Narayanpur" },
    { value: "Raigarh", label: "Raigarh" },
    { value: "Raipur", label: "Raipur" },
    { value: "Rajnandgaon", label: "Rajnandgaon" },
    { value: "Sukma", label: "Sukma" },
    { value: "Surajpur", label: "Surajpur" },
    { value: "Surguja", label: "Surguja" },
    { value: "Manendragarh", label: "Manendragarh" },
    { value: "Mohla-Manpur-Chowki", label: "Mohla-Manpur-Chowki" },
    { value: "Sarangarh-Bilaigarh", label: "Sarangarh-Bilaigarh" },
    { value: "Shakti", label: "Shakti" },
  ],

  DadraandNagarHaveli: [
    { value: "Dadra and Nagar Haveli", label: "Dadra and Nagar Haveli" },
  ],
  DamanandDiu: [
    { value: "Daman", label: "Daman" },
    { value: "Diu", label: "Diu" },
  ],
  Delhi: [
    { value: "New Delhi", label: "New Delhi" },
    { value: "Central Delhi", label: "Central Delhi" },
    { value: "East Delhi", label: "East Delhi" },
    { value: "North Delhi", label: "North Delhi" },
    { value: "North East Delhi", label: "North East Delhi" },
    { value: "North West Delhi", label: "North West Delhi" },
    { value: "Shahdara", label: "Shahdara" },
    { value: "South Delhi", label: "South Delhi" },
    { value: "South East Delhi", label: "South East Delhi" },
    { value: "South West Delhi", label: "South West Delhi" },
    { value: "West Delhi", label: "West Delhi" },
  ],

  Goa: [
    { value: "North Goa", label: "North Goa" },
    { value: "South Goa", label: "South Goa" },
  ],

  Gujarat: [
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Amreli", label: "	Amreli" },
    { value: "Anand", label: "Anand" },
    { value: "Aravalli", label: "Aravalli" },
    { value: "Banaskantha", label: "Banaskantha" },
    { value: "Bharuch", label: "Bharuch" },
    { value: "Bhavnagar", label: "Bhavnagar" },
    { value: "Botad", label: "Botad" },
    { value: "Chhota Udaipur", label: "Chhota Udaipur" },
    { value: "Dahod", label: "Dahod" },
    { value: "Dang", label: "Dang" },
    { value: "Devbhoomi Dwarka", label: "Devbhoomi Dwarka" },
    { value: "Gandhinagar", label: "Gandhinagar" },
    { value: "Gir Somnath", label: "Gir Somnath" },
    { value: "Jamnagar", label: "Jamnagar" },
    { value: "Junagadh", label: "Junagadh" },
    { value: "Kutch", label: "Kutch" },
    { value: "Kheda", label: "Kheda" },
    { value: "Mahisagar", label: "Mahisagar" },
    { value: "Mehsana", label: "Mehsana" },
    { value: "Morbi", label: "Morbi" },
    { value: "Narmada", label: "Narmada" },
    { value: "Navsari", label: "Navsari" },
    { value: "Panchmahal", label: "Panchmahal" },
    { value: "Patan", label: "Patan" },
    { value: "Porbandar", label: "Porbandar" },
    { value: "Rajkot", label: "Rajkot" },
    { value: "Sabarkantha", label: "Sabarkantha" },
    { value: "Surat", label: "Surat" },
    { value: "Surendranagar", label: "Surendranagar" },
    { value: "Tapi", label: "Tapi" },
    { value: "Vadodara", label: "Vadodara" },
    { value: "Valsad", label: "Valsad" },
  ],

  Haryana: [
    { value: "Ambala", label: "Ambala" },
    { value: "Bhiwani", label: "Bhiwani" },
    { value: "Charkhi Dadri", label: "Charkhi Dadri" },
    { value: "Faridabad", label: "Faridabad" },
    { value: "Fatehabad", label: "Fatehabad" },
    { value: "Gurugram", label: "Gurugram" },
    { value: "Hisar", label: "Hisar" },
    { value: "Jhajjar", label: "Jhajjar" },
    { value: "Jind", label: "Jind" },
    { value: "Kaithal", label: "Kaithal" },
    { value: "Karnal", label: "Karnal" },
    { value: "Kurukshetra", label: "Kurukshetra" },
    { value: "Mahendragarh", label: "Mahendragarh" },
    { value: "Nuh", label: "Nuh" },
    { value: "Palwal", label: "Palwal" },
    { value: "Panchkula", label: "Panchkula" },
    { value: "Panipat", label: "Panipat" },
    { value: "Rewari", label: "Rewari" },
    { value: "Rohtak", label: "Rohtak" },
    { value: "Sirsa", label: "Sirsa" },
    { value: "Sonipat", label: "Sonipat" },
    { value: "Yamunanagar", label: "Yamunanagar" },
  ],

  HimachalPradesh: [
    { value: "Bilaspur", label: "Bilaspur" },
    { value: "Chamba", label: "Chamba" },
    { value: "Hamirpur", label: "Hamirpur" },
    { value: "Kangra", label: "Kangra" },
    { value: "Kinnaur", label: "Kinnaur" },
    { value: "Kullu", label: "Kullu" },
    { value: "Lahaul & Spiti", label: "Lahaul & Spiti" },
    { value: "Mandi", label: "Mandi" },
    { value: "Shimla", label: "Shimla" },
    { value: "Sirmaur", label: "Sirmaur" },
    { value: "Solan", label: "Solan" },
    { value: "Una", label: "Una" },
  ],

  JammuandKashmir: [
    { value: "Kathua district", label: "Kathua district" },
    { value: "Jammu district", label: "Jammu district" },
    { value: "Samba district", label: "Samba district" },
    { value: "Udhampur district", label: "Udhampur district" },
    { value: "Reasi district", label: "Reasi district" },
    { value: "Rajouri district", label: "Rajouri district" },
    { value: "Poonch district", label: "Poonch district" },
    { value: "Doda district", label: "Doda district" },
    { value: "Ramban district", label: "Ramban district" },
    { value: "Kishtwar district", label: "Kishtwar district" },
    { value: "Anantnag district", label: "Anantnag district" },
    { value: "Kulgam district", label: "Kulgam district" },
    { value: "Pulwama district", label: "Pulwama district" },
    { value: "Shopian district", label: "Shopian district" },
    { value: "Budgam district", label: "Budgam district" },
    { value: "Srinagar district", label: "Srinagar district" },
    { value: "Ganderbal district", label: "Ganderbal district" },
    { value: "Bandipora district", label: "Bandipora district" },
    { value: "Baramulla district", label: "Baramulla district" },
    { value: "Kupwara district", label: "Kupwara district" },
  ],

  Jharkhand: [
    { value: "Bokaro", label: "Bokaro" },
    { value: "Chatra", label: "Chatra" },
    { value: "Deoghar", label: "Deoghar" },
    { value: "Dhanbad", label: "Dhanbad" },
    { value: "Dumka", label: "Dumka" },
    { value: "East-Singhbhum", label: "East-Singhbhum" },
    { value: "Garhwa", label: "Garhwa" },
    { value: "Giridih", label: "Giridih" },
    { value: "Godda", label: "Godda" },
    { value: "Gumla", label: "Gumla" },
    { value: "Hazaribagh", label: "Hazaribagh" },
    { value: "Jamtara", label: "Jamtara" },
    { value: "Khunti", label: "Khunti" },
    { value: "Koderma", label: "Koderma" },
    { value: "Latehar", label: "Latehar" },
    { value: "Lohardaga", label: "Lohardaga" },
    { value: "Pakur", label: "Pakur" },
    { value: "Palamu", label: "Palamu" },
    { value: "Ramgarh", label: "Ramgarh" },
    { value: "Ranchi", label: "Ranchi" },
    { value: "Sahibganj", label: "Sahibganj" },
    { value: "Saraikela-Kharsawan", label: "Saraikela-Kharsawan" },
    { value: "Simdega", label: "Simdega" },
    { value: "West-Singhbhum", label: "West-Singhbhum" },
  ],

  Karnataka: [
    { value: "Bagalkot", label: "Bagalkot" },
    { value: "Bangalore Urban", label: "Bangalore Urban" },
    { value: "Bangalore Rural", label: "Bangalore Rural" },
    { value: "Belagavi", label: "Belagavi" },
    { value: "Bellary", label: "Bellary" },
    { value: "Bidar", label: "Bidar" },
    { value: "Vijayapura", label: "Vijayapura" },
    { value: "Chamarajanagar", label: "Chamarajanagar" },
    { value: "Chikballapur", label: "Chikballapur" },
    { value: "Chikmagalur", label: "Chikmagalur" },
    { value: "Chitradurga", label: "Chitradurga" },
    { value: "Dakshina Kannada", label: "Dakshina Kannada" },
    { value: "Davanagere", label: "Davanagere" },
    { value: "Dharwad", label: "Dharwad" },
    { value: "Gadag", label: "Gadag" },
    { value: "Gulbarga", label: "Gulbarga" },
    { value: "Hassan", label: "Hassan" },
    { value: "Haveri", label: "Haveri" },
    { value: "Kodagu", label: "Kodagu" },
    { value: "Kolar", label: "Kolar" },
    { value: "Koppal", label: "	Koppal" },
    { value: "Mandya", label: "Mandya" },
    { value: "Mysore", label: "Mysore" },
    { value: "Raichur", label: "Raichur" },
    { value: "Ramanagara", label: "Ramanagara" },
    { value: "Shimoga", label: "Shimoga" },
    { value: "Tumkur", label: "Tumkur" },
    { value: "Udupi", label: "Udupi" },
    { value: "Uttara Kannada", label: "Uttara Kannada" },
    { value: "Vijayanagara", label: "Vijayanagara" },
    { value: "Yadgir", label: "Yadgir" },
  ],

  Kerala: [
    { value: "Alappuzha", label: "Alappuzha" },
    { value: "Ernakulam", label: "Ernakulam" },
    { value: "Idukki", label: "Idukki" },
    { value: "Kannur", label: "Kannur" },
    { value: "Kasaragod", label: "Kasaragod" },
    { value: "Kollam", label: "Kollam" },
    { value: "Kottayam", label: "Kottayam" },
    { value: "Kozhokode", label: "Kozhokode" },
    { value: "Malappuram", label: "Malappuram" },
    { value: "Palakkad", label: "Palakkad" },
    { value: "Pathanamthitta", label: "Pathanamthitta" },
    { value: "Thiruvananthapuram", label: "Thiruvananthapuram" },
    { value: "Thrissur", label: "Thrissur" },
    { value: "Wayanad", label: "Wayanad" },
  ],

  Ladakh: [
    { value: "Kargil district", label: "Kargil district" },
    { value: "Leh district", label: "Leh district" },
  ],

  Lakshadweep: [{ value: "Lakshadweep", label: "Lakshadweep" }],

  MadhyaPradesh: [
    { value: "Alirajpur", label: "Alirajpur" },
    { value: "Anuppur", label: "Anuppur" },
    { value: "Ashoknagar", label: "Ashoknagar" },
    { value: "Balaghat", label: "Balaghat" },
    { value: "Barwani", label: "Barwani" },
    { value: "Betul", label: "Betul" },
    { value: "Bhind", label: "Bhind" },
    { value: "Bhopal", label: "Bhopal" },
    { value: "Burhanpur", label: "Burhanpur" },
    { value: "Chhatarpur", label: "Chhatarpur" },
    { value: "Chhindwara", label: "Chhindwara" },
    { value: "Damoh", label: "Damoh" },
    { value: "Datia", label: "Datia" },
    { value: "Dewas", label: "Dewas" },
    { value: "Dhar", label: "Dhar" },
    { value: "Dindori", label: "Dindori" },
    { value: "Guna", label: "Guna" },
    { value: "Gwalior", label: "Gwalior" },
    { value: "Harda", label: "Harda" },
    { value: "Hoshangabad", label: "Hoshangabad" },
    { value: "Indore", label: "Indore" },
    { value: "Jabalpur", label: "Jabalpur" },
    { value: "Jhabua", label: "Jhabua" },
    { value: "Katni", label: "Katni" },
    { value: "Khandwa", label: "Khandwa" },
    { value: "Khargone", label: "Khargone" },
    { value: "Mandla", label: "Mandla" },
    { value: "Mandsaur", label: "Mandsaur" },
    { value: "Morena", label: "Morena" },
    { value: "Narsinghpur", label: "Narsinghpur" },
    { value: "Neemuch", label: "Neemuch" },
    { value: "Panna", label: "Panna" },
    { value: "Raisen", label: "Raisen" },
    { value: "Rajgarh", label: "Rajgarh" },
    { value: "Ratlam", label: "Ratlam" },
    { value: "Rewa", label: "Rewa" },
    { value: "Sagar", label: "Sagar" },
    { value: "Satna", label: "Satna" },
    { value: "Sehore", label: "Sehore" },
    { value: "Seoni", label: "Seoni" },
    { value: "Shahdol", label: "Shahdol" },
    { value: "Shajapur", label: "Shajapur" },
    { value: "Sheopur", label: "Sheopur" },
    { value: "Shivpuri", label: "Shivpuri" },
    { value: "Sidhi", label: "Sidhi" },
    { value: "Singroli", label: "Singroli" },
    { value: "Tikamgarh", label: "Tikamgarh" },
    { value: "Ujjain", label: "Ujjain" },
    { value: "Umaria", label: "Umaria" },
    { value: "Vidisha", label: "Vidisha" },
  ],

  Maharashtra: [
    { value: "Ahmednagar", label: "Ahmednagar" },
    { value: "Akola", label: "Akola" },
    { value: "Amravati", label: "Amravati" },
    { value: "Aurangabad", label: "Aurangabad" },
    { value: "Beed", label: "Beed" },
    { value: "Bhandara", label: "Bhandara" },
    { value: "Buldhana", label: "Buldhana" },
    { value: "Chandrapur", label: "Chandrapur" },
    { value: "Dhule", label: "Dhule" },
    { value: "Gadchiroli", label: "Gadchiroli" },
    { value: "Gondia", label: "Gondia" },
    { value: "Hingoli", label: "Hingoli" },
    { value: "Jalgaon", label: "Jalgaon" },
    { value: "Jalna", label: "Jalna" },
    { value: "Kolhapur", label: "Kolhapur" },
    { value: "Latur", label: "Latur" },
    { value: "Mumbai City", label: "Mumbai City" },
    { value: "Mumbai Suburban", label: "Mumbai Suburban" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Nanded", label: "Nanded" },
    { value: "Nandurbar", label: "Nandurbar" },
    { value: "Nashik", label: "Nashik" },
    { value: "Osmanabad", label: "Osmanabad" },
    { value: "Palghar", label: "Palghar" },
    { value: "Parbhani", label: "Parbhani" },
    { value: "Pune", label: "Pune" },
    { value: "Raigad", label: "Raigad" },
    { value: "Ratnagiri", label: "Ratnagiri" },
    { value: "Sangli", label: "Sangli" },
    { value: "Satara	", label: "Satara	" },
    { value: "Sindhudurg", label: "Sindhudurg" },
    { value: "Solapur", label: "Solapur" },
    { value: "Thane", label: "Thane" },
    { value: "Wardha", label: "Wardha" },
    { value: "Washim", label: "Washim" },
    { value: "Yavatmal", label: "Yavatmal" },
  ],

  Manipur: [
    { value: "Bishnupur", label: "Bishnupur" },
    { value: "Chandel", label: "Chandel" },
    { value: "Churachandpur", label: "Churachandpur" },
    { value: "Imphal East", label: "Imphal East" },
    { value: "Imphal West", label: "Imphal West" },
    { value: "Jiribam", label: "Jiribam" },
    { value: "Kakching", label: "Kakching" },
    { value: "Kamjong", label: "Kamjong" },
    { value: "Kangpokpi", label: "Kangpokpi" },
    { value: "Noney", label: "Noney" },
    { value: "Pherzawl", label: "Pherzawl" },
    { value: "Senapati", label: "Senapati" },
    { value: "Tamenglong", label: "Tamenglong" },
    { value: "Tengnoupal", label: "Tengnoupal" },
    { value: "Thoubal", label: "Thoubal" },
    { value: "Ukhrul", label: "Ukhrul" },
  ],

  Meghalaya: [
    { value: "East Khasi Hills", label: "East Khasi Hills" },
    { value: "West Garo Hills", label: "West Garo Hills" },
    { value: "West Jaintia Hills", label: "West Jaintia Hills" },
    { value: "West Khasi Hills", label: "West Khasi Hills" },
    { value: "East Garo Hills", label: "East Garo Hills" },
    { value: "Ri Bhoi", label: "Ri Bhoi" },
    { value: "South Garo Hills", label: "South Garo Hills" },
    { value: "South West Garo Hills", label: "South West Garo Hills" },
    { value: "South West Khasi Hills", label: "South West Khasi Hills" },
    { value: "East Jaintia Hills", label: "East Jaintia Hills" },
    { value: "North Garo Hills", label: "North Garo Hills" },
  ],

  Mizoram: [
    { value: "Aizawl", label: "Aizawl" },
    { value: "Champhai", label: "Champhai" },
    { value: "Hnahthial", label: "Hnahthial" },
    { value: "Khawzawl", label: "Khawzawl" },
    { value: "Kolasib", label: "Kolasib" },
    { value: "Lawngtlai", label: "Lawngtlai" },
    { value: "Lunglei", label: "Lunglei" },
    { value: "Mamit", label: "Mamit" },
    { value: "Saiha", label: "Saiha" },
    { value: "Saitual", label: "Saitual" },
    { value: "Serchhip", label: "Serchhip" },
  ],

  Nagaland: [
    { value: "Dimapur", label: "Dimapur" },
    { value: "Kiphire", label: "Kiphire" },
    { value: "Kohima", label: "Kohima" },
    { value: "Longleng", label: "Longleng" },
    { value: "Mokokchung", label: "Mokokchung" },
    { value: "Mon", label: "Mon" },
    { value: "Peren", label: "Peren" },
    { value: "Phek", label: "Phek" },
    { value: "Tuensang", label: "Tuensang" },
    { value: "Wokha", label: "Wokha" },
    { value: "Zunheboto", label: "Zunheboto" },
  ],

  Odisha: [
    { value: "Angul", label: "Angul" },
    { value: "Boudh", label: "Boudh" },
    { value: "Balangir", label: "Balangir" },
    { value: "Bargarh", label: "Bargarh" },
    { value: "Balasore(Baleswar)", label: "Balasore (Baleswar)" },
    { value: "Bhadrak", label: "Bhadrak" },
    { value: "Cuttack", label: "Cuttack" },
    { value: "Deogarh (Debagarh)", label: "Deogarh (Debagarh)" },
    { value: "Dhenkanal", label: "Dhenkanal" },
    { value: "Ganjam", label: "Ganjam" },
    { value: "Gajapati", label: "Gajapati" },
    { value: "Jharsuguda", label: "Jharsuguda" },
    { value: "Jajpur", label: "Jajpur" },
    { value: "Jagatsinghapur", label: "Jagatsinghapur" },
    { value: "Khordha", label: "Khordha" },
    { value: "Keonjhar (Kendujhar)", label: "Keonjhar (Kendujhar)" },
    { value: "Kalahandi", label: "Kalahandi" },
    { value: "Kandhamal", label: "Kandhamal" },
    { value: "Koraput", label: "Koraput" },
    { value: "Kendrapara", label: "Kendrapara" },
    { value: "Malkangiri", label: "Malkangiri" },
    { value: "Mayurbhanj", label: "Mayurbhanj" },
    { value: "Nabarangpur", label: "Nabarangpur" },
    { value: "Nuapada", label: "Nuapada" },
    { value: "Nayagarh", label: "Nayagarh" },
    { value: "Puri", label: "Puri" },
    { value: "Rayagada", label: "Rayagada" },
    { value: "Sambalpur", label: "Sambalpur" },
    { value: "Subarnapur (Sonepur)", label: "Subarnapur (Sonepur)" },
    { value: "Sundargarh", label: "Sundargarh" },
  ],

  Puducherry: [
    { value: "Karaikal", label: "Karaikal" },
    { value: "Mahe", label: "Mahe" },
    { value: "Pondicherry", label: "Pondicherry" },
    { value: "Yanam", label: "Yanam" },
  ],

  Punjab: [
    { value: "Amritsar", label: "Amritsar" },
    { value: "Gurdaspur", label: "Gurdaspur" },
    { value: "Pathankot", label: "Pathankot" },
    { value: "Tarn Taran", label: "Tarn Taran" },
    { value: "Jalandhar", label: "Jalandhar" },
    { value: "Kapurthala", label: "Kapurthala" },
    { value: "Hoshiarpur", label: "Hoshiarpur" },
    { value: "Nawan Shehar", label: "Nawan Shehar" },
    { value: "Ludhiana", label: "Ludhiana" },
    { value: "Roop Nagar", label: "Roop Nagar" },
    { value: "Fatehgarh Sahib", label: "Fatehgarh Sahib" },
    { value: "Patiala", label: "Patiala" },
    { value: "Sangrur", label: "Sangrur" },
    { value: "Barnala", label: "Barnala" },
    { value: "SAS Nagar(Mohali)", label: "SAS Nagar(Mohali)" },
    { value: "Bathinda", label: "Bathinda" },
    { value: "Mansa", label: "Mansa" },
    { value: "Muktsar", label: "Muktsar" },
    { value: "Ferozepur", label: "Ferozepur" },
    { value: "Fazilka", label: "Fazilka" },
    { value: "Faridkot", label: "Faridkot" },
    { value: "Moga", label: "Moga" },
    { value: "Malerkotla", label: "Malerkotla" },
  ],

  Rajasthan: [
    { value: "Ajmer", label: "Ajmer" },
    { value: "Alwar", label: "Alwar" },
    { value: "Banswara", label: "Banswara" },
    { value: "Baran", label: "Baran" },
    { value: "Barmer", label: "Barmer" },
    { value: "Bharatpur", label: "Bharatpur" },
    { value: "Bhilwara", label: "Bhilwara" },
    { value: "Bikaner", label: "Bikaner" },
    { value: "Bundi", label: "Bundi" },
    { value: "Chittorgarh", label: "Chittorgarh" },
    { value: "Churu", label: "Churu" },
    { value: "Dausa", label: "Dausa" },
    { value: "Dholpur", label: "Dholpur" },
    { value: "Dungarpur", label: "Dungarpur" },
    { value: "Hanumangarh", label: "Hanumangarh" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Jaisalmer", label: "Jaisalmer" },
    { value: "Jalore", label: "Jalore" },
    { value: "Jhalawar", label: "Jhalawar" },
    { value: "Jhunjhunu", label: "Jhunjhunu" },
    { value: "Jodhpur", label: "Jodhpur" },
    { value: "Karauli", label: "Karauli" },
    { value: "Kota", label: "Kota" },
    { value: "Nagaur", label: "Nagaur" },
    { value: "Pali", label: "Pali" },
    { value: "Pratapgarh", label: "Pratapgarh" },
    { value: "Rajsamand", label: "Rajsamand" },
    { value: "Sawai Madhopur", label: "Sawai Madhopur" },
    { value: "Sikar", label: "Sikar" },
    { value: "Sirohi", label: "Sirohi" },
    { value: "Sri Ganganagar", label: "Sri Ganganagar" },
    { value: "Tonk", label: "Tonk" },
    { value: "Udaipur", label: "Udaipur" },
  ],

  Sikkim: [
    { value: "East Sikkim district", label: "East Sikkim district" },
    { value: "North Sikkim district", label: "North Sikkim district" },
    { value: "South Sikkim district", label: "South Sikkim district" },
    { value: "West Sikkim district", label: "West Sikkim district" },
  ],

  TamilNadu: [
    { value: "Ariyalur", label: "Ariyalur" },
    { value: "Chengalpet", label: "Chengalpet" },
    { value: "Chennai", label: "Chennai" },
    { value: "Coimbatore", label: "Coimbatore" },
    { value: "Cuddalore", label: "Cuddalore" },
    { value: "Dharmapuri", label: "Dharmapuri" },
    { value: "Dindigul", label: "Dindigul" },
    { value: "Erode", label: "Erode" },
    { value: "Kallakurichi", label: "Kallakurichi" },
    { value: "Kancheepuram", label: "Kancheepuram" },
    { value: "Karur", label: "Karur" },
    { value: "Krishnagiri", label: "Krishnagiri" },
    { value: "Kanyakumari", label: "Kanyakumari" },
    { value: "Madurai", label: "Madurai" },
    { value: "Mayiladuthurai", label: "Mayiladuthurai" },
    { value: "Nagapattinam", label: "Nagapattinam" },
    { value: "Namakkal", label: "Namakkal" },
    { value: "Perambalur", label: "Perambalur" },
    { value: "Pudukottai", label: "Pudukottai" },
    { value: "Ramanathapuram", label: "Ramanathapuram" },
    { value: "Ranipet", label: "Ranipet" },
    { value: "Salem", label: "Salem" },
    { value: "Sivagangai", label: "Sivagangai" },
    { value: "Tenkasi", label: "Tenkasi" },
    { value: "Thanjavur", label: "Thanjavur" },
    { value: "Theni", label: "Theni" },
    { value: "Thiruvallur", label: "Thiruvallur" },
    { value: "Thiruvarur", label: "Thiruvarur" },
    { value: "Tuticorin", label: "Tuticorin" },
    { value: "Trichirappalli", label: "Trichirappalli" },
    { value: "Thirunelveli", label: "Thirunelveli" },
    { value: "Tirupathur", label: "Tirupathur" },
    { value: "Tiruppur", label: "Tiruppur" },
    { value: "Tiruvannamalai", label: "Tiruvannamalai" },
    { value: "The Nilgiris", label: "The Nilgiris" },
    { value: "Vellore", label: "Vellore" },
    { value: "Viluppuram", label: "Viluppuram" },
    { value: "Virudhunagar", label: "Virudhunagar" },
  ],
  Telangana: [
    { value: "ADILABAD", label: "ADILABAD" },
    { value: "BHADRADRI KOTHAGUDEM", label: "BHADRADRI KOTHAGUDEM" },
    { value: "HANUMAKONDA", label: "HANUMAKONDA" },
    { value: "HYDERABAD", label: "HYDERABAD" },
    { value: "JAGTIAL", label: "JAGTIAL" },
    { value: "JANGOAN", label: "JANGOAN" },
    { value: "JAYASHANKAR BHOOPALPALLY", label: "JAYASHANKAR BHOOPALPALLY" },
    { value: "JOGULAMBA GADWAL", label: "JOGULAMBA GADWAL" },
    { value: "KAMAREDDY", label: "KAMAREDDY" },
    { value: "KARIMNAGAR", label: "KARIMNAGAR" },
    { value: "KHAMMAM", label: "KHAMMAM" },
    { value: "KOMARAM BHEEM ASIFABAD", label: "KOMARAM BHEEM ASIFABAD" },
    { value: "MAHABUBABAD", label: "MAHABUBABAD" },
    { value: "MAHABUBNAGAR", label: "MAHABUBNAGAR" },
    { value: "MANCHERIAL", label: "MANCHERIAL" },
    { value: "MEDAK", label: "MEDAK" },
    { value: "MEDCHAL-MALKAJGIRI", label: "MEDCHAL-MALKAJGIRI" },
    { value: "MULUG", label: "MULUG" },
    { value: "NAGARKURNOOL", label: "NAGARKURNOOL" },
    { value: "NALGONDA", label: "NALGONDA" },
    { value: "NARAYANPET", label: "NARAYANPET" },
    { value: "NIRMAL", label: "NIRMAL" },
    { value: "NIZAMABAD", label: "NIZAMABAD" },
    { value: "PEDDAPALLI", label: "PEDDAPALLI" },
    { value: "RAJANNA SIRCILLA", label: "RAJANNA SIRCILLA" },
    { value: "RANGAREDDY", label: "RANGAREDDY" },
    { value: "SANGAREDDY", label: "SANGAREDDY" },
    { value: "SIDDIPET", label: "SIDDIPET" },
    { value: "SURYAPET", label: "SURYAPET" },
    { value: "VIKARABAD", label: "VIKARABAD" },
    { value: "WANAPARTHY", label: "WANAPARTHY" },
    { value: "WARANGAL", label: "WARANGAL" },
    { value: "YADADRI BHUVANAGIRI", label: "YADADRI BHUVANAGIRI" },
  ],

  Tripura: [
    { value: "West Tripura", label: "West Tripura" },
    { value: "Khowai", label: "Khowai" },
    { value: "Sepahijala", label: "Sepahijala" },
    { value: "Gomati ", label: "Gomati " },
    { value: "South Tripura ", label: "South Tripura " },
    { value: "Unakuti ", label: "Unakuti " },
    { value: "North Tripura", label: "North Tripura" },
    { value: "Dhalai", label: "Dhalai" },
  ],

  Uttarakhand: [
    { value: "Dehradun", label: "Dehradun" },
    { value: "Haridwar", label: "Haridwar" },
    { value: "Chamoli", label: "Chamoli" },
    { value: "Rudraprayag", label: "Rudraprayag" },
    { value: "Tehri Garhwal", label: "Tehri Garhwal" },
    { value: "Uttarkashi", label: "Uttarkashi" },
    { value: "Pauri Garhwal", label: "Pauri Garhwal" },
    { value: "Almora", label: "Almora" },
    { value: "Nainital", label: "Nainital" },
    { value: "Pithoragarh", label: "Pithoragarh" },
    { value: "U S Nagar", label: "U S Nagar" },
    { value: "Bageshwar", label: "Bageshwar" },
    { value: "Champawat", label: "Champawat" },
  ],

  UttarPradesh: [
    { value: "Agra", label: "Agra" },
    { value: "Aligarh", label: "Aligarh" },
    { value: "Allahabad", label: "Allahabad" },
    { value: "Ambedkar Nagar", label: "Ambedkar Nagar" },
    { value: "Amethi", label: "Amethi" },
    { value: "Amroha", label: "Amroha" },
    { value: "Auraiya", label: "Auraiya" },
    { value: "Azamgarh", label: "Azamgarh" },
    { value: "Baghpat", label: "Baghpat" },
    { value: "Baliya", label: "Baliya" },
    { value: "Balrampur", label: "Balrampur" },
    { value: "Banda", label: "Banda" },
    { value: "Barabanki", label: "Barabanki" },
    { value: "Bareilly", label: "Bareilly" },
    { value: "Basti", label: "Basti" },
    { value: "Bahraich", label: "Bahraich" },
    { value: "Bijnor", label: "Bijnor" },
    { value: "Budaun", label: "Budaun" },
    { value: "Bulandshahr", label: "Bulandshahr" },
    { value: "Chandauli", label: "Chandauli" },
    { value: "Chitrakoot", label: "Chitrakoot" },
    { value: "Deoria", label: "Deoria" },
    { value: "Eta", label: "Eta" },
    { value: "Etawah", label: "Etawah" },
    { value: "Faizabad", label: "Faizabad" },
    { value: "Farrukhabad", label: "Farrukhabad" },
    { value: "Fatehpur", label: "Fatehpur" },
    { value: "Firozabad", label: "Firozabad" },
    { value: "Gautam Budh Nagar(Noida)", label: "Gautam Budh Nagar(Noida)" },
    { value: "Ghaziabad", label: "Ghaziabad" },
    { value: "Ghazipur", label: "Ghazipur" },
    { value: "Gonda", label: "Gonda" },
    { value: "Gorakhpur", label: "Gorakhpur" },
    { value: "Hapur", label: "Hapur" },
    { value: "Hamirpur", label: "Hamirpur" },
    { value: "Hardoi", label: "Hardoi" },
    { value: "Jalaun", label: "Jalaun" },
    { value: "Jaunpur", label: "Jaunpur" },
    { value: "Jhansi", label: "Jhansi" },
    { value: "Kanpur Nagar", label: "Kanpur Nagar" },
    { value: "Kanpur Dehat", label: "Kanpur Dehat" },
    { value: "Kannauj", label: "Kannauj" },
    { value: "Kashiraam Nagar (Kasganj)", label: "Kashiraam Nagar (Kasganj)" },
    { value: "Kaushambi", label: "Kaushambi" },
    { value: "Kushinagar", label: "Kushinagar" },
    { value: "Lakhimpur Kheri", label: "Lakhimpur Kheri" },
    { value: "Lalitpur", label: "Lalitpur" },
    { value: "Lucknow", label: "Lucknow" },
    { value: "Hathras", label: "Hathras" },
    { value: "Mahrajganj", label: "Mahrajganj" },
    { value: "Mahoba", label: "Mahoba" },
    { value: "Mainpuri", label: "Mainpuri" },
    { value: "Mathura", label: "Mathura" },
    { value: "Mau", label: "Mau" },
    { value: "Meerut", label: "Meerut" },
    { value: "Mirzapur", label: "Mirzapur" },
    { value: "Moradabad", label: "Moradabad" },
    { value: "Muzaffarnagar", label: "Muzaffarnagar" },
    { value: "Pilibhit", label: "Pilibhit" },
    { value: "Pratapgarh", label: "Pratapgarh" },
    { value: "Raibareli", label: "Raibareli" },
    { value: "Rampur", label: "Rampur" },
    { value: "Saharanpur", label: "Saharanpur" },
    { value: "Sambhal", label: "Sambhal" },
    {
      value: "Sant Kabir Nagar (Khalilabad)",
      label: "Sant Kabir Nagar (Khalilabad)",
    },
    {
      value: "Sant Ravi Das Nagar (Bhadohi)",
      label: "Sant Ravi Das Nagar (Bhadohi)",
    },
    { value: "Shahjahanpur", label: "Shahjahanpur" },
    { value: "Shamli", label: "Shamli" },
    { value: "Shravasti", label: "Shravasti" },
    { value: "Siddharth Nagar", label: "Siddharth Nagar" },
    { value: "Sitapur", label: "Sitapur" },
    { value: "Sonbhadra", label: "Sonbhadra" },
    { value: "Sultanpur", label: "Sultanpur" },
    { value: "Unnao", label: "Unnao" },
    { value: "Varanasi", label: "Varanasi" },
  ],
  WestBengal: [
    { value: "North 24 Parganas", label: "North 24 Parganas" },
    { value: "South 24 Parganas", label: "South 24 Parganas" },
    { value: "Bankura", label: "Bankura" },
    { value: "Birbhum", label: "Birbhum" },
    { value: "CoochBihar", label: "CoochBihar" },
    { value: "Dakshin Dinajpur", label: "Dakshin Dinajpur" },
    { value: "Darjeeling", label: "Darjeeling" },
    { value: "Hooghly", label: "Hooghly" },
    { value: "Howrah", label: "Howrah" },
    { value: "Jalpaiguri", label: "Jalpaiguri" },
    { value: "Jhargram", label: "Jhargram" },
    { value: "Kalimpong", label: "Kalimpong" },
    { value: "Kolkata", label: "Kolkata" },
    { value: "Malda", label: "Malda" },
    { value: "Murshidabad", label: "Murshidabad" },
    { value: "Nadia", label: "Nadia" },
    { value: "Paschim Burdwan", label: "Paschim Burdwan" },
    { value: "Purba Burdwan", label: "Purba Burdwan" },
    { value: "Paschim Medinipur", label: "Paschim Medinipur" },
    { value: "Purba Medinipur", label: "Purba Medinipur" },
    { value: "Purulia", label: "Purulia" },
    { value: "Uttar Dinajpur", label: "Uttar Dinajpur" },
    { value: "Alipurduar", label: "Alipurduar" },
  ],
};

module.exports.STATE_WISE_CITIES = STATE_WISE_CITIES;

module.exports.STATES_OBJECT = STATES_OBJECT;

module.exports.INDIAN_STATES_AND_UT_ARRAY = INDIAN_STATES_AND_UT_ARRAY;
