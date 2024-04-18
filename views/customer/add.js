const countryDropdown = document.getElementById('country');
const stateDropdown = document.getElementById('state');
const districtDropdown = document.getElementById('district');
const mandalDropdown = document.getElementById('mandal');
const villageDropdown = document.getElementById('village');
const couDropdown = document.getElementById('cou');
const stDropdown = document.getElementById('st');
const disDropdown = document.getElementById('dis');
const mDropdown = document.getElementById('m');
const vDropdown = document.getElementById('v');

const statesByCountry = {
  AF : ['Badakhshan','Badghis','Baghlan','Balkh','Bamyan','Daykundi','Farah','Faryab','Ghazni','Ghor','Helmand','Herat','Jowzjan','Kabul','Kandahar','Kapisa','Khost','Kunar','Kunduz','Laghman','Logar','Nangarhar','Nimroz','Nuristan','Paktia','Paktika','Panjshir','Parwan','Samangan','Sar-e Pol','Takhar','Urozgan','Wardak','Zabul'],
  AX : ['Mariehamn', 'Jomala', 'Finström', 'Sund', 'Lemland', 'Saltvik', 'Hammarland', 'Eckerö', 'Föglö', 'Geta', 'Brändö', 'Kumlinge', 'Vårdö'],
  AL : ['Berat', 'Dibër', 'Durrës', 'Elbasan', 'Fier', 'Gjirokastër', 'Korçë', 'Kukës', 'Lezhë', 'Shkodër', 'Tiranë', 'Vlorë'],
  DZ : ['Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa','Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma','Constantine', 'Médéa', 'Mostaganem', 'M-Sila', 'Mascara', 'Ouargla', 'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arréridj','Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma','Aïn Témouchent', 'Ghardaïa', 'Relizane'],
  AS : ['Eastern District', 'Manu‘a District', 'Rose Island', 'Swains Island', 'Western District'],
  Ad : ['Andorra la Vella', 'Canillo', 'Encamp', 'Escaldes-Engordany', 'La Massana', 'Ordino', 'Sant Julià de Lòria'],
  AO : ['Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cunene', 'Huambo', 'Huíla', 'Kuando Kubango', 'Kwanza Norte', 'Kwanza Sul', 'Luanda','Lunda Norte', 'Lunda Sul', 'Malanje', 'Moxico', 'Namibe', 'Uíge', 'Zaire'],
  AI : ['Anguilla'],
  AQ : ['Antarctica'],
  AG : ['Saint George', 'Saint John', 'Saint Mary', 'Saint Paul', 'Saint Peter', 'Saint Philip'],
  AR : ['Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja','Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego','Tucumán'],
  AM : ['Aragatsotn', 'Ararat', 'Armavir', 'Gegharkunik', 'Kotayk', 'Lori', 'Shirak', 'Syunik', 'Tavush', 'Vayots Dzor', 'Yerevan'],
  AW : ['Noord', 'Oranjestad', 'Paradera', 'San Nicolas', 'Santa Cruz', 'Savaneta'],
  AU : ['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia', 'Tasmania'],
  US : ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware','Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky','Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico','New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania','Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont','Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
  IN : ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'],

};
const districtsByState = {
Telangana: ['Adilabad','Bhadradri_Kothagudem','Hyderabad','Jagtial','Jangaon','Jayashankar Bhupalpally','Jogulamba Gadwal','Kamareddy','Karimnagar','Khammam','Kumram_Bheem','Mahabubabad','Mahabubnagar','Mancherial','Medak','Medchal_Malkajgiri','Mulugu','Nagarkurnool','Nalgonda','Narayanpet','Nirmal','Nizamabad' ,'Peddapalli','Rajanna_Sircilla','Rangareddy','Sangareddy','Siddipet','Suryapet', 'Vikarabad ','Wanaparthy' , 'Warangal_Rural' ,'Warangal_Urban', 'Yadadri Bhuvanagiri'],
}
const mandalByDistricts = {
Adilabad: ['Adilabad_Rural','Adilabad_Urban','Bazarhathnoor','Bela','Bheempoor','Boath','Gadiguda','Gudhathnur','Ichoda','Jainad','Mavala','Namoor','Neradigonda','Sirikonda','Talamadugu','Tamsi','Utnur'],
Bhadradri_Kothagudem : ['Allapalli','Annapureddypalli','	Aswaraopeta','	Aswapuram','Burgampahad','Cherla','Chunchupalli','Chandrugonda','Karakagudem','Pinapaka','Dummugudem','Manuguru','Gundala','Yellandu','Tekulapalle','Julurpad','Chunchupally','Sujathanagar','Kothagudem','Laxmidevipalli','Mulakalapalle','Dammapeta'],
Kumram_Bheem:['Jainoor','Sirpur_U','Lingapur','Tiryani','Rebbana','Asifabad','Kerameri','Wankdi','Kagaznagar','Sirpur_T','Kouthala','Chintalamanepally','Bejjur','Dahegaon'],
Mancherial:['Jannaram','Dandepalle','Luxettipet','Hajipur','Kasipet','Tandur','Bheemini','Bellampalle','Mandamarri',' Naspur','Bhimaram','Chennur','Kotapalle',],
Nirmal:['Kubeer','Tanur','Basar','Mudhole','Bhainsa','Kuntala','Narsapur_g','Lokeswaram','Dilawarpur','Sarangapur','Nirmal','Nirmal_Rural','Soan','Laxmanchanda','Mamda','Pembi','Khanpur','Kaddampeddur','Dastuarabad'],
Nizamabad:['Navipet','Nandipet','Armur','Mupkal','Yergatla','Kammarpalle','Mortad','Vailpur','Makloor','Nizamabad_North','Yeda_Palle','Ranjal','Bodhan','Kotgiri','Rudrur','Varni',' Nizamabad_Rural',' Nizamabad_South','Mugpal','Dichpalle','Indalwai','Dharpalle','Bheemgal','Sirkonda','Palawancha',''],
Jagtial:['Mallapur','Raikal','Beerpur','Sarangapur','Dharmapuri','Jagityal_Rural','Jagtial','Metpalle','Kodimial','Malial','Pegadapalle','Gollapalle','Velgatoor'],
Peddapalli:['Dharmaram','Palakurthy','Antargoan','Ramagundam','Ramagiri','Kamanpur','Peddapalle','Elgaid','Julapalle','Sultanabad','Srirampur','Mutharam_Manthani','Manthani','Odela',],
Jayashanker:['Mahadevpur','Palmela',' Mutharam_Mahadevpur','Kataram','Malharrao','Chityal','Tekumatla','Regonda','Mogullapalle','Ghanapur_Mulug','Bhupalpalle','Mulug','Govindaraopet','Tadvai','Eturunagaram','Kannaigudem','Wazeed','Venkatapuram','Mangapet'],
Mahabubabad:['Kothaguda','Ganagavaram','Bayyaram','Garla','Dornakal','Kuravi','Mahabubabad','Gudur','Kesamudram','Nellikudur','Narsimhulapet','Chinnagudur','Maripeda','Danthalapalle','Thorrur','Peddavangara',],
Warangal_Rural:['Parkal','Shayampet','Damera','Geesugonda','Atmakur','Nallabelly','Chennaraopeta','Khanapur','Sangem','Parvathagiri','Raiparthy','Wardhannapet','Nekkonda',],
Warangal_Urban:['Bheemadevarapalle','Velair','Elkathurthi','Kamalapur','Hasanparthy','Dharmasagar','Khazipet','Hanamkonda','Warangal','Khilla_Warangal','Inole'],
Karimnagar: ['Gangadhara','Ramadugu','Choppadandi','Karimnagar_Rural','Kothapalle','Gannervaram','Karimnagar','Manakondur','Thimmapur','Chigurumamidi','Saidapur_V','Shankarapatnam','Veenavanka','Huzurabad','Jammikunta','Ellandakunta',''],
Rajanna_Sircilla:['Rudrangi','Chandurthi','']
}
const villagesByMandal = {
Adilabad_Rural: ['Arli(Buzung)','AsodaBhurki','Ankoli','Anukunta','Ankapoor','Belluri','Bhuktapur','Bheemseri','Borenur','Chanda','Chinchughat','Chichadhari','Dimma','Ganehshpur','Hathigutta','Jamdapur','Jamuldhari','Kachakanti','kottur','khandala(u)','Khanapoor','Kumbhajheri','Landasangvi','Lohara','Mallapur(D)','Maleborgaon','Maregaon','Nishaghat','Pochara','Pippaldhari','Rampoor(royati)','Ramai','Tarada','Tontotoi','Tippa','Yapalguda',],
Adilabad_Urban: ['Adilabad(u)','Adilabad-2','Adilabad-3','Bhuktapur','Khanapur'],
Bazarhathnoor: ['Ananthapur','Bazarhathnoor','Bandrew','Bhutai Bueurg','Bhosra','Balanpur','Chintal sangvi','Dhabadi','Dingnoor','Dharampuri','Dehgaon','Dharampuri','dhegaon','Gangapur','Gokonda','Girjal','Gimur','Harkai','Jatarla','Kinnerpalle','Kolhari','Kandli','Kanladurga','Mohada','Mankapur(p)','Morjhandi','Pipri','Rampur','Tembi','Umerda Buzurg','Wathamanoor','Yesapur',],
Bela: ['Awalpur','Bhedoda','Bhodod(Kopsi)','Bela','Bhadi','Boregaon','Chandpalle','Chaparala','Datalpur','Dehegaon','Doptala','Donuna','Ekori','Guda','Kamgarpur','Khagdur','Koparuzana','Kobhai','Karoni(k)','Karoni(b)','Khadki','Manyapur','Mangrool','Mohabatpur','Masala(Buzurg)','Masala(Khurd)','Narayanpur','Patan','Ponnala','Pohar','Pitgaon','ramkam','Sonkhos','Sangvi','Sahej','Syedpur','Singapur','Sirsanna','Shamshabad','Sangdi','Takli','Toyaguda(Kora)','Warur'],
Bheempoor: ['Karanji(T)','Guledi','Gomutri','Antargaon','Arli(T)','Wadoor','Dhanora','Kamathwada','Gona','Gunjala','Gollaghat','Tamsi(K)','Nipani','Dabbakuchi','Bheempoor','BelsariRampur','Andarbandh','Wadgaon','Pippalkhoti'],
Boath : ['Wajar','Chintalabori','Ghanpur','Sonala','Kowtha Khurd','Dera (D)','Sangvi','Kowtha Buzurg','Sakhera','Tewti','Medi','Pardi Buzurg','Pardi Khurd','Gollapur','Babera','Kantegaon','Nigini','Marlapalle','Nakkalawada','Karathwada','Boath Buzurg','Kistapur','Kangutta','Demmi','Pochera','Venkatapur','Kuchalapur','Dhannur Buzurg','Pippaldhari','Boath(K)','Keslapur','Patnapur','Suradapur','Narayanpur','Anduru','Birlagondi','Dhannur Khurd','Bahrapur','Nagapur'],
Gadiguda : ['Kadodi','Kouthala','Kothapalle(G)','Rupapur','Warkwai','Ademeyon','Sawari','Pipri','Arjuni','Paraswada (K)','Lokari (K)','Jhari','Dhaba (K)','Dhaba(Buzurg)','Punaguda','Maregaon','Gadiguda','Kunikasa','Kolama','Paraswada (B)','Gouri','Pownur','Lokari (B)','Khadki','Sangvi'],
Gudhathnur: ['Vaijapur','Kamalapur','Seetagondi','Malkapur','Tosham','Lingapur','Gudihathinur','Machapur','Dhampur','Muthnur','Neradigonda','Mannur','Dongargaon','Kolhari','Umri(B)','Guruj','Gondharkapur','Rendls Bori','Shantapur','Belluri','Tejapur'],
Ichoda: ['AdegaonKhurd','Gubba','Junni','Babuldhole','Boregaon','Kamgir','Heerapur','DhobaBuzurg','Talamadri','Madapur','Jamidi','AdegaonBuzurg','Girjam','Chincholi','Navagaon','Dhaba Khurd','Salyada','Malyal','Mankapur','Dharmapuri','Jalda','Kokasmannar','MokhraBuzurg','Mokhra Khurd','Gundi','KeshaPatnam','Narsapur','Gundala','Lingapur','Gaidpalle','Gandiwagu','Babjepet','Jogipet','Sirichalma','Ichoda'],
Jainad :['Hathighat','Guda','Rampur Taraf','Gimma Buzurg','Korta','Kedarpur','Akoli','Gimma Khurd','Sirsonna','Mirzapur','Bhoraj','Fouzpur','Poosai','Pipparwada','Sekapoor','Mandagada','Kamai','Dollara','Pendalwada','Karanwadi','Lekarwadi','Dadapoor','Savapur','Hashampur','Tarada Buzurg','Awalpur','Nizampur','Nirala','Balapur','Akurla','Sangvi (K)','Deepaiguda','Kowtha','Hariyali','Bahadurpur','Kuthompur','Kura','Kodekotha','Karanji','Khapri','Umri','Belgaon','Ballori','Makoda','Jainad','Muktapur','Ada','Kamtha','Pardi Buzurg','Pardi Khurd','Pippalgaon','Laxmipur (Uligan)','Jamini'],
Mavala: ['Battisawargaon','Mavala','Waghapur'],
Namoor: ['Sungapur','Chorgaon','Manjari','Babjhari','Dhupapur','Empalle','Umri','Bhimpur','Kothapalli - H','Narnoor','Khairdatwa','Gundala','Mahdapur','Khanpur','Mahagaon','Mankapur','Gangapur','Gunjala','Tadihadpanur','Balanpur','Sonapur','Nagolkonda','Malepur','Malangi'],
Neradigonda: ['Gajli','Ghandari','Kupti(Buzurg)','Kupti (Khurd)','Kumari','Malkalpahad','Raipur','Tejapur','Chincholi','Tarnam (Khurd)','Tarnam(Buzurg)','Madhapur','Kuntala (Buzurg)','Venkatapur','Wagdhari','Jasnapur','Sowergaon','Lokhampur','Buddikonda','Waddur','Darba','Bondadi','Surdapur','Kishtapur','Shankarapur','Neradigonda','Rolmanda','Buggaram','Kuntala(Khurd)','Nagamalyal','Peechra','Boragaon','Bondemregod','Purushothampur','Rajura','Ispur','Narayanapur','Wankidi','Koratkal Buzurg','Dhonnora','Koratikal Khurd','Lingatla','Arepally'],
Sirikonda: ['Mallapur','Dharmasagar','Lakampur','Rampur(B)',' Kondapur','Pochampalle]','Lachimpur (K)',' Waipet','Lachimpur (B)','Ponna','Sunkidi','Sirikonda','Soanpalle','Neradigonda (G)','Narayanapur','Neradigonda (K)'],
Talamadugu: ['Kosai','Palasibuzurg','Palasikhurd','Kuchalapoor','Lingi','Sunkidi','Umadam','Khodad','Kajjarla','Ruyyadi','Kothur','Talamadugu','Dorli','Kappardevi','Dehegaon','Umrei','Ratnapur','Jhari','Saknapoor','ArliKhurd','Devapur','Pangadpipri','Lachampur','PalleBuzurg','Madnapoor','Bharampur','Nandigaon','Palle Khurd','Umerda Buzurg'],
Tamsi: ['Girgaon','Ambugaon','Palodi(Ramnagar)','Khapperla','Ghotkuri','Sanvergaon','Bandalnagapur','Jamdi','Tamsi(B)','Waddadi','Hasnapur','Ponnari'],
Utnur: ['Chintakarra','Narsapur (Buzurg)','Ghatti','Wadoni','Chandur','Hasnapur','Yenka','Umri','Narsapur (Khurd)','Sakhera','Andholi','Pulimadugu','Yenda','Shampur','Salewada Buzurg','Salewada Khurd','Kopergadh','Wadgalpur (Khurd)','Wadgalpur (Buzurg)','Tandara','Luxettipet','Nagapur','Heerapur - J','Ramlingampet','Durgapur','Rampur (Khurd)','Lakkaram','Gangampet','Gangapur','Kamnipet','Heerapur','Tejapur - J','Danthanpalle','Ghanpur','Narsapur (New)','Bhupet','Balampur','Birsaipet','Utnur'],
Allapalli: ['Adaviramavaram','Markode','Vulva Chalka','Pedda Venkatapuram','Allapalle','Appaipeta','Ramanujagudem','Ananthogu'],
Annapureddypalli: ['Abbugudem','Teligerla','Annadevam','Annapureddipalle','Pentlam','Namavaram','Narsapuram','Gumpena','Peddireddigudem','Vootupalli'],
Aswaraopeta:['Tirumalakunta','Durdapadu','Nandipadu','Gummadavalli','Bachuvarigudem','Kavadigundla','Kannaigudem','Anantharam','Narayanapuram','Khammampad','Guntimadugu','Asupaka','Ramannagudem','Lankalapalli','Vedanthapuram','Jammigudem','Maddikonda','Achuthapuram','Naramuvarigudem','Aswaraopeta'],
Aswapuram: ['Pamulapalli','Kummarigudem','Ammagaripalli','Amerla','Kesavapuram','Chintriyala','Aswapuram','Gandigudem','Mamillavai','Thummalacheruvu','Nellipaka'],
Burgampahad : ['Irvendi','Mothepattinagar','Nagineniprolu','Tekula (UI)','Krishna Sagar','Uppusaka','Pinapakapattinagar','Sampalle','Morampally','Nakirapeta','Burgampadu','Saarapaka','Bhadrachalam'],
Cherla: ['Subbampeta','Subbampeta (G)','Subbampeta (Z)','Ramanujapuram','C.Kathigudem','Gommupulli Boinapalle','Chimalapadu','Koyyuru (Z)','Regunta(G)','Regunta (Z)','Singasamudram (G)','Upperagudem (G)','Gannavaram (Z)','Kothuru','Chintakunta Z','Puliboinapally','Gompalle(Z)','Cherla (G)','Mogullapalle (G)','Lingapuram(Z)','Kothapally (Z)','Kothapally (G)','Dandupeta(G)','Dandupeta(Z)','Kesavapuram','Ricepeta','Bhumullanka','Cherla (Z)','Dosillapally','Unjupally','Vaddipeta','Pusuguppa (G)','Pusuguppa (Patch.II)','Pusuguppa(Patch.I)','Boinapalle (U.I)','Uyyalamadugu (G)','Uyyalamadugu (Z)','Tippapuram','Chelamala','Bathinapalle','Pedamidisileru (Z)','Peddamidisileru(Chalk-III)','Peddamidisileru(Chalk-II)','Peddamidisileru(Chalk-I)','Kurnapalle','Chinamidisileru (G)','Chinamidisileru (Z)','Jangalapalle','Bodanalli (G)','Bodanalli (Z)','Chintaguppa','Srinivasapuram(Z)','Kaliveru(Z)','Tegada (Z)','Tegada(G)','Gommugudem (Z)','Lingala (Z)','Lingala (G)','Peddipalle','Mummidaram (Z)','Jettigudem (Z)','Kothagudem (Z)','R.Kothagudem','Sarangapani (Z)','Katepalli','Sarangapani (G)','Kudunuru (Z)','Kudunuru(G)','Devarapalli (Z)','Mamidigudem (Z)','Gogubaka (Z)','Rallagudem (G)','Mamidigudem Chalk','Puligundala'],
Chunchupalli:['Penuballi','Penagadapa','Chunchupalle (U)','Garimella Padu'],
Chandrugonda:['Ganugapadu','Pokalagudem','Ravikampadu','Thungaram','Tippanpalle','Seethaigudem','Dameracharla','Chandrugonda','Gurramgudem','Maddukuru'],
Jainoor: ['Ashapalle','Jendaguda','Patnapur','Gudamamda','Addesar','Bhusimatta','Rasimatta','Dabdli','Lendiguda','Ushegaon','Jamgaom','Shivanur','Marlawai','Dubbaguda','Powerguda','Jamni','Polasa','Jainoor'],
Sirpur_U: ['Raghapur','Bhurnur','Phullara','Devadpalle','Seetagondi','Pangdi','Babjipet','Netnur','Pamulawada','Sirpur','Kohenur Buzurg','Kohenur Khurd','Shettihadapnur','Chapri','Dhanora','Mahagaon'],
Lingapur:['Chorpalle','Vankamaddi','Ghumnur Khurd','Ghumnur Buzurg','Kanchanpalle','Kothapalle','Mamidipalle','Lingapur','Yellapatar','Jamuldhara','Loddiguda'],
Tiryani: ['Goena','Dantanpalle','Pangidi Madra','Ullipitadorli','Lingiguda','Rudrapur','Mandrumeda','Devaiguda','Boardham','Pedakunta','Areguda','Chopidi','Jewni','Goyagaon','Dongargaon','KoyaTalandi','Talandi','Rallakamepalle','Godelpalle','Ginnedari','Sangapur','Maindagudipet','Tiryani','Gangapur','Gambhiraopet','Duggapur','Kannepalle','Sonapur','Edulpad','Dondla','Islampur','Irkapalle','Chintapalle','Korlanka','Mangi','Rompalle','Bheemapur','Gundala','Mankapur'],
Rebbana: ['Edavalli','Khairgaon','Mediguda','Navegaon','Venkulam','Rollapet','Rampur','Kondapalle','Nerpalle','Rebbena','Gangapur','Passigaon','Tungeda','Pothpalle','Dharmaram','Nambal','Gollet','Sonapur','Pultikunta','Fakeerpalle','Takkallapalle','Rajaram','Rollapahad','Seethanagar','Govindapur','Komarvelli','Rangapur','Narayanpur','Kistapur','Gudepalle','Jakkapalle'],
Asifabad: ['Wadiguda','Ada','Edas Gundi','Danapur','Ippalnavegaon','Saleguda','GudiGudi','Govindapur','Gundi','Cherpalle','Sankepalle','Nandupa','Rahapalle','Rajura','Mekalwada','Keslapur','Pippalgaon','Yellaram','Kommuguda','Dadpapur','Khapri','Nimbada','Babapur','Ankusapur','Buruguda','Motuguda','Appepalle','Kommuguda','Edulwada','Singaraopet','Chilatiguda','Samela','Tumpalle','Dagleshwar','Kosara','Itukyal','Balegaon','Demmidiguda','Wavudham','Mankapur','Kutoda','MalanGondi','Shakangondi','Ada- Dasnapur','Sirasgaon','Wadigondi','Mowad','SiryanMowad','Balhanpur','TemrianMovad','KowdianMowad','Sudda Ghat','Devadurgam','Chirrakunta','Padibonda','Danaboinapeta','Mondepalli','Routsankepalle','Parasnambal','Addaghat','Asifabad','Rajampet','Godvelli'],
Kerameri: ['Lakampur','Kotha','Parandol','Karanjiwada','Anthapur','Isapur','Gowri','Arekepalle','Arepalle','Devadpalle','Agarwada','Kali Buzurg(Pedda Keli)','Sangvi','Kali Khurd','Bholepathur','Sankaraguda','Paraswada','Anarpalle','Devapur','Kerameri','Sakada','Modi','Khairi','Surdapur','Swarkheda','Indapur','Nishani','Kothari','Pipri','Goyagaon','Bheemangondi','Dhanora','Narsapur','Parda','Jhari','Hatti','Mettapipri','Chintakarra','Tukyan Movad','Chalbordi','Patnapur','Babejheri','Murikilanka','Nagapur','Kallegaon','Jodaghat','Jankapur'],
Wankdi: ['Dhaba','Sawathi','Goagaon','Chichpalle','Gunjada','Arli','Bambara','Sonapur','Mahagaon','Devadpalle','Jambuldhari','Lanjanveera','Wankdi_Khurd','Neemgaon','Akini','Nukewada','Chavupanguda','Navegaon','Indhani','Narlapur','Wankdi_Kalan','Boranjiguda','Khamna','Sarandi','Khirdi','Chincholi','Ghat_Jangaon','Tejapur','Jaithpur','Bendera','Samela','Borda','Kanneragaon','Komatiguda','Khedegaon','Velgi','Sarkepalle'],
Kagaznagar: ['Malni','Metindhani','Marepalle','Regulguda','Kosni','Boregaon','Gondi','Narapur','Metpalle','Dubbaguda','Ankusapur','Mahajanguda','Nandiguda','Vanjiri','Bareguda','Chinthaguda','Easgaon','Nazrulnagar','Ankhoda','Mandva','Gannaram','Valakonda','Andavelli','Bhatpalle','Jagannathpur','Bodepalle','Boregaon','Seetanagar','Jambuga','Nagampet','Mosam','Raspalli','Sarsala','Kadamba','Jankapur','Lanjaguda','Kothapet','Kagaznagar-1','Kagaznagar-2'],
Sirpur_T: ['Makidi','Jakkapur','Hudkili','Navegaon','Venkatraopet','Laxmipur','Tonkini','Parigaon','Loanvelli','Dhorpalle','Rajaram','Bhupalapatnam','Sirpur','Rudraram','Cheelapalle','Medpalle','Garlapet','Vempalle','Achalli','Chunchupalle','Arepalle','Chintakunta','Heerapur','Bonki'],
Kouthala: ['Veervalli','sandgaon','Pardi','Tatiplle','Veerdand','Bhalepalle','Gundaipeta','Thumbadihatti','Gudlabori','Mogadagad','Chandaram','Kumbari','Muthampet','Kouthala','Talodi','Nagepalle','Gurudpeta','Kanki','Kannepalle','Chipurudubba'],
Chintalamanepally: ['Dabba','Adepalle','Ranvalli','Babapur','Ravindranagar','Babasagar','Chintalamanepalle','Balaji ankoda','Gangapur','Burepalle','Korisini','Bandepalle','Rudrapur','Karjavelli','Kethini','Dimda','Chittam','Gudem','Buruguda','Koyapalle','Shivapalle'],
Bejjur:['Rebbena','Munjampalle','Nagepalle','Mogavelly','Ambhaghat','Katepalle','Pothepalle','Marthadi','Kukuda','Rechini','Kushnepalle','Gabbai','Bejjur','Chinnasiddapur','Pedda_Siddapur','Out_Sarangipalle','Bhatpalle','Papanpet','Sushmeer','Somini','Tikkapalle','Talai'],
Penchikalpet:['Kondapalle','Lodpalle','Bombaiguda','Yelkapalle','Yellur','Penchikalpet','Gannaram','Koyachichal','Agarguda','Gundepalle','Telapalle','Muraliguda','Kammergaon','Nandigaon','Jilleda','Pothepalle','Guntlapet','Chedvai'],
Dahegaon:['Itial','Gorrigutta','Borlakunta','Kothmir','Beebra','Pesarkunta','Ainam','Polampalle','Hathni','Kalwada','Dahegaon','Pambapur','Kammarpalle','Laggaon','Bhogaram','Vodduguda','Brahmanchichal','Bhamanagar','Kunchavelli','Chandrapalle','Etapalle','Girvelli','Chinnaraspalle','Amargonda','Loha','Digida','Teepergaon','Rampur','Motlaguda','Dubbaguda','Ravalpalle'],
Jannaram:['Indhanpalle','Kothapet','Kawal','Kishtapur','Kamanpalle','Raindlaguda','Marriguda','Murimadugu','Venkatapuram','Narsingapur','Kalmadagu','Dharmaram','Badampalle','Puttiguda','Ponakal','Jannaram','Juviguda','Paidpalle','Dongapalle','Bommena','Papammaguda','Chintaguda','Malyal','Singaraipet','Thimmapur','Rampur'],
Dandepalle:['Gurrevu','Aliipur','Nagasamudram','Tallapet','Makulpet','Mamidipalle','Rollpahad','Kundelapahad','Tanimadugu','Dandepalle','Medaripet','Lingapur','Bikkanguda','Laxmikantapur','Dwaraka','Peddapet','Dharmaraopet','Narsapur','Venkatapur','Chintapalle','Kavvichelma','Mutyampet','Rebbenpalle','Andugulpet','Kondapur','Kasipet','Velganoor','Jaidapet','Nambal','Gudam','Kamepalle'],
Luxettipet:['Dowdepalle','Patha Kommugudem','Talamalla','Challampet','Balraopet','Jendavenkatapur','Rangapet','Chandram','Venkataraopet','Ellaram','Kothur','Utukur','Modela','Itkyal','Lingapur','Thimmapur','Laxmipur','Pothepalle','Gullakota','Mittapally','Luxettipet'],
Hajipur:['Ryali','Nagaram','Gadhpur','Pochammapad','Gudipet','Subbapalle','Hussainsagar','Peddampet','Kondapur','Donabanda','Padthenpalle','Karnamamidi','Kondepalle','Rapalle','Hajipur','Narsingapur','Namnur','Chandanapur','Mulkalla','Kothapalle','Vempalle'],
Kasipet:['Kurreghad','Sonapur','Venkatapur','Tirmalapur','Dharmaraopet','Malkepalle','Rottepalle','Peddapur','Ghatrapalli','Chintaguda','Kondapur','Konur','Pallamguda','Kankalapur','Kometichenu','Gurvapur','Muthempalle','Varipet','Peddampalle','Devapur','Kasipet'],
Tandur:['Abbapur','Narsapur','Madaram','Pegadapalle','Repallewada','Kothapalle','Balhanpur','Rechini','Annaram','Achalapur','Gampalpalle','Chandrapalle','Gopalnagar','Kistampet','Venkaipalli','Ankepalle','Choutpalle','Boyapalle','Tandur','Madnapur','Dwarakapur','Kasipet','Rampur','Katherla'],
Bheemini:['Karjibheempur','Akkalapalle','Laxmipur','Wadal','Pedda_Gudipet','Rajaram','Peddapeta','Bheemini','Kamalapur','Pothepalle','Bitturpalle','Mallidi','Venkatapur','Veegaon','Ramraopeta','Rampur','Keslapur','Thangallapalle','Chinnagudipet','Chinna_Thimmapur','Pedda_Thimmapur'],
Kannepalli:['Surjapur','Babapur','Lingapur','Motkupalle','Gollaghat','Polampalle','Shiknam','Tekulapalle','Jankapur','Yellaram','Dampur','Jajjarvelly','Kothapalle','Rebbena','Veerapur','Ankannapeta','Muthapur','Kannepalli','Metpalle','Madavelli','Saligaon','Nagepalle','Lingala','Chintapudi'],
Vemanpalle:['Bayyaram','Jilleda','Jakkepalle','Maddupalle','Upparlapahad','Nagaram','Suraram','Bommena','Chamanpalle','Baddampalle','Gudepalle','Dasnapur','Kothapalle','Vemanpalle','Rajaram','Godampet','Oddugudem','Sumputum','Jajulpet','Mukkidigudem','Kallampalle','Kalmalpet','Gorlapalle','Katepalle','Mamida','Neelwai','Kyathanpalle','Baddevelli','Mulkalpet','Racherla'],
Nennal:['Nennal','Manneguda','Puppulawanipet','Konampet','Kushenapalle','Jangalpet','Dammireddipet','Kharji','Gollapalle','Nandulapalle','Ghanpur','Sitanagar','Jogapur','Gundlasomaram','Metpalle','Khammampalle','Mailaram','Bhadrapur','Manakpur','Bodhapur','Avadam','Chittapur','Bhagirathipet','Gudipet','Janda venkatapur','Singapur','China venkatapur','Pottiyal','Kottur'],
Bellampalle:['Ankusam','Kannal','Chakepalle','Budhakalan','Budha khurd','Chandravelli','Rangapet','Dugnepalle','Gurjal','Akenipalle','Batwanpalle','Perkapalle','Bellampalle','Bellampally-2'],
Mandamarri:['Andgulapet','Chirrakunta','Sarangapalle','Thimmapur','Amerwadi','Venkatapur','Ponnaram','Mamidighat','Lemur','Kyethenpalle','Mandamarri','Mandamarri-2','Mancherial','Garmilla','Mancherial','Mancherial-3'],
Naspur:['Teegalpahad','Naspur','Thallapalle','Singapur','Seetaramapalle'],
Jaipur: ['Kankur','Mittapalle','Jaipur','Narva','Maddikunta','Ramaraopet','Kachanpalle','Indaram','Tekmatla','Shetpalle','Yelkanti','Pegdapalle','Gangipalle','Narasingapuram','Bejjal','Maddulapalle','Kundaram','Rommipur','Kistapur','Velal','Gopalpur','Pownur','Sivvaram'],
Bhimaram:['Reddipalle','Vellapalle','Dampur','Burugupalle','Pothanpalle','Arkepalle','Bhimaram','Ankushapur','Polampalle','Arepalle','Maddikal','Kothpalle'],
Chennur:['Buddaram','Sankaram','Kannepalle','Adiwarpet','Shivalingapur','Guddirampur','Akkapalle','Chintapalle','Yellakkapet','Kistampet','Khambojipet','Lingampalle','Suddal','Bhamraopet','Kathersala','Konampet','Narayanpur','Amudalpalle','Dugnepalle','Raipet','Angarajpalle','Kachanpalle','Gangaram','Asnad','Kommera','Sundersala','Narasakkapet','Pokkuru','Chakepalle','Ponnaram','Somanpalle','Nagapur','Beervelli','Chennur'],
Kotapalle:['Nakkalpalle','Brahmanpalle','Adkapalle','Mallampet','Shankarpur','Shetpalle','Pangadisomaram','Kotapalle','Vesonvai','Sarvaipet','Kondampet','Nagampet','Bopparam','Venchapalle','Supak','Jangaon','Algaon','Ayepalle','Pullagaon','Sirsa','EdulaBandam','Lingannapet','Chintakunta','Erragatta','Pinnaram','Parpalle','Yerripet','Borampalle','Kawarkothapalle','Annaram','Arjungutta','Rajaram','Rampur','Kollur','Rawalpalle','Dewalwada','Rapanpalle'],
Kubeer:['Palsi','Pardi khurd','Jamgaon','Ranjani','Sirpalle','Dodarna','Belgaon','Brahmeswar','Marlagonda','Nandapahad','Veeragohan','Halda','Shivani','Chata','Pardi (Buzurg)','Darkubeer','Rajura','Kubeer','Khasra','Chondi','Jumda','Sangvi','Kupti','Varni','Sonari','Hampli (Buzurg)','Godapur','Nighwa','Mola','Lingi','Wai','Sanwali','Antharni','Malegaon','Godsara','Pangra','Bakot','Saona'],
Tanur:['Jhari (Khurd)','Wadjhari','Beltaroda','Bhosi','Mahalingi','Bamni','Bondrat','Bolsa','Umri (Khurd)','Boregaon (Khurd)','Bember','Jhari (Buzurg)','Mugli','Masalga','Kupli','Wadgaon','Jewla (Khurd)','Kalyani','Kolur','Hipnally','Elvi','Hangirga','Dahgaon','Singangam','Doultabad','Nandgam','Tanur','JewlaBuzurg','Tondala','Kesarelly','Kharbala','Yellawat','Wadhone'],
Basar:['Kirgul (Khurd)','Takli','Dhondapur','Labdi','Bidralli','Ratnapur','Mailapur','Ravindapur','Mahadpur','Basar','Renukapur','Kirgul (Buzurg)','Voni','Kowtha','Surli','Salapur','Sawargaon'],
Mudhole:['Ramtek','Machkal','Mudgal','Taroda','Pipri','Edbid','Venkatapur','Chinchala','Vitholi','Chandapur','Govindapur','Gudur','Karegaon','Chintakunta','Wadthala','Boregaon','Jalalpur','Brahmangaon','Ganora','Riuvi','Shetpalle','Mudhole','Astha'],
Bhainsa:['Chinchod','Kumbi','Takli','Linga','Mirzapur','Siddur','Gundagaon','Mahagaon','Chintalabori','Kotalgaon','Bijjur','Sunkli','Thimmapur','Wanalpahad','Ekgaon','Pipri','Babalgaon','Pangri','Manjri','Sirala','Elegaon','Badgaon','Dahegaon','Walegaon','Kumsari','Khatgaon','Kamol','Hasgul','Mategaon','Hampoli Khurd','Boregaon (Buzurg)','Watoli','Pendapalle','Bhainsa','Bhainsa(Ward No.1)','Bhainsa(Ward No.2)','Bhainsa(Ward No.3)','Bhainsa(Ward No.4','Bhainsa(Ward No.5)','Bhainsa(Ward No.6)','Bhainsa(Ward No.7)','Bhainsa(Ward No.8)','Bhainsa(Ward No.9)','Bhainsa(Ward No.10)','Bhainsa(Ward No.11)','Bhainsa(Ward No.12)','Bhainsa(Ward No.13)','Bhainsa(Ward No.14)','Bhainsa(Ward No.15)','Bhainsa(Ward No.16)','Bhainsa(Ward No.17)','Bhainsa(Ward No.18)','Bhainsa(Ward No.19)','Bhainsa(Ward No.20)','Bhainsa(Ward No.21)','Bhainsa(Ward No.22)','Bhainsa(Ward No.23)'],
Kuntala:['Limba (Buzurg)','Medanpur','Ambagaon','Suryapur','Rajapur','Downelle','Raipahad','Ambakanti','Kuntala','Oala','Limba(Khurd)','Vittapur','Venkur','Penchikalpahad','Andhur','Kallur'],
Narsapur_g: ['Tekulpahad','Burugupalle','Velgudhari','Gulmadaga','Bamini (Buzurg)','Nandan','Turati','Mutakapalle','Burgupalle','Arly (Khurd)','Dongargaon','Chakepalle','Anjani','Kurli','Daryapur','Shakapur','Narsapur','Naseerabad','Rampur','Cherlapalle','Temborni','Arli (Buzurg)'],
Lokeswaram: ['Potpalle (M)','Hadgaon','Sathgaon','Biloli','Hawarga','Manmad','Potpalle (B)','Yeddur','Savargaon','Rajura','Raipur (K)','Gadchanda','Nagar','Bhagapur','Kistapur','Malkapur','Puspur','Lohesra','New Raipur (K) R.C','Joharpur','Kankapur','Abdullapur','Brahmeswar','Wastapur','Watoli','Dharmara','Panchgudi','Mohalla','Godesra','Pipri','Bamni(K)'],
Dilawarpur: ['Kadili','Malegaon','Kalva','New Lolam(R.C.)','Samanderpalle','Chintalkunta','Gundampalle','Dilawarpur','Sirgapur','Mayapur','Banaspalle','Lingampalle','Kothur','Kanjar','Ratnapur (K)','Sangvi','Mallapur','Potpalle(Khurd)','Mujgi','Siddankunta','Kondli'],
Sarangapur: ['Potia','Kupti','Ponkur','Pendaldhari','Kharji','Adelli','Nagapur','Jam','Sarangapur','Kowtla (Buzurg)','Jewly','Chincholi (Malak)','Kankati','vaikuntapur','Tandra','Piyarampur','Beervelli','Vanjar','Godsera','Yakarpalle','Boregaon','Dhani','Alur','Lakshmipur','Chincholi (Buzurg)','Gopalpet','Bagirathipur'],
Nirmal: ['Siddapur','Viswanathpet','Gajulpet','Nirmal(Ward.No.1)','Nirmal(Ward.No.2)','Nirmal(Ward.No.3)','Nirmal(Ward.No.4)','Nirmal(Ward.No.5)','Nirmal(Ward.No.6)','Nirmal(Ward.No.7)','Nirmal(Ward.No.8)','Nirmal(Ward.No.9)','Nirmal(Ward.No.10)','Nirmal(Ward.No.11)','Nirmal(Ward.No.12)','Nirmal(Ward.No.13)','Nirmal(Ward.No.14)','Nirmal(Ward.No.15)','Nirmal(Ward.No.16)','Nirmal(Ward.No.17)','Nirmal(Ward.No.18)','Nirmal(Ward.No.19)','Nirmal(Ward.No.20)','Nirmal(Ward.No.21)','Nirmal(Ward.No.22)','Nirmal(Ward.No.23)','Nirmal(Ward.No.24)','Nirmal(Ward.No.25)','Nirmal(Ward.No.26)','Nirmal(Ward.No.27)','Nirmal(Ward.No.28)','Nirmal(Ward.No.29)','Nirmal(Ward.No.30)','Nirmal(Ward.No.31)','Nirmal(Ward.No.32)','Nirmal(Ward.No.33)','Nirmal(Ward.No.34)','Nirmal(Ward.No.35)','Nirmal(Ward.No.36)'],
Nirmal_Rural:['Ranapur','Vengvapeta','Dyangapur','Yellareddipet','Medpalle','Neelaipet','Ananthpet','Mambapur','Kamlapur','Yedlapur','Nagnaipet','Lingdapur','Talwada','Manjlapu','Chityal','New Mujgi','Thamsa','Thimmapur','Yellapalle','Bhagyanagar','New Pochamphad','Ratnapur Kondali','Kondapur','Akkapur','Muktapur','Venkatapur','Koutla(K)'],
Soan:['Velmel','Shakari','Kadthal','Siddan Kunta(New)','Bopparam','Lolam','Old Pochampad','Pakpatla','Madhapur','Jafrapur','Ganjal','Soan','New Velmal','Sangampet','New Bopparam','Kuchanpalle'],
Laxmanchanda:['Waddyal','Kankapur','Narsapur(B)','Boregaon','Kanjar','Babapur','Potapalle (K)','Thiripalle','LaxmanChanda','Peechara','Dharmaram','Parpalle','Potpalle (B)','Mallapur','Machapur','Munipalle','Chamanpalle','Chintalchanda'],
Mamda:['Pulimadugu','Tandra','Vasthapur','Rampur','Rasimatla','Gayadpalle','Burugupalle','Kishanraopet','Parimandal','Arepalle','Lingapur','Raidhari','Lonkapad','Kappanpalle','Dimmadurthy','Lachampur','Danthampally','Kothasangvi(RC)','Mamda','Mondepalle','Kothalingampalle','Kortikal','Chandaram','Bandal Khanapur','Potharam','Ananthpet','Kotha Timbareni (R.C)','Adarsanagar(R.C)Kothur@','Kamalkot','Ponkal','Naldurthi','Devathapur','Venkatapur'],
Pembi:['Paspula','Itikyal','Gummanuyenglapur','Dhomdari','Vaspalle','Shetpalle','Kosagutta','Pembi','Venkampochampad','Burugupalle','Mandapalle','Nagpur'],
Khanpur:['Singapur','Bevapur(R)','Rajura','Ervachintal','Chamanpalle','Beernandi','Advisarangapur','Iqbalpur','Tarlapad','Sathnapalle','Patha Yellapur','Kothapet','Dilwarpur','Bavapur(K)','Khanapur','Badankurthy','Maskapur','Gangaipet','Surjapur','Medampalle','Thimmapur'],
Kaddampeddur:['Gangapur','Allampally','Rampur','Gandigopalpur','Istampur','Udumpur','Maisampet','Dharmajipet','Kalleda','Laxmipur','Ravajipet(old)','Peddur','Pandwapur','Nawabpet','Ambaripet','Kondkuru','Kannapur','Dharmaipet','Narsapur','Nachan Yellapur','Maddipadga','Laxmisagar','Yelagadapa','Masaipet','Lingapur','Sarangapur','Dildarnagar','Chittial','Bellal'],
Dastuarabad:['Mallapur','Bhuttapur','Revojipet(New)','Dastuarabad','Bhuthkur','Munnial','Chennur','Gondserial'],
Navipet:['Yamcha','Alzapur','Nandigaon','Binola','Tungini','Naleshwar','Ankampalle','Nizampur','Lingapur','haikhapur','Shiranpalle','Jannipalle','Pothangal','Abbapur (B)','Khadrabad','Maddepalle','Kandepalle','Mittapur','Kosli','Nagepur','Fathenagar','Rampur','Navipet','Kamalapur','Narayanpur','Mokanpalle','Mahantham','Abhangapatnam','Dharyapur','Abbapur (M)','Dharmaram','Ananthagiri'], 
Nandipet:['Ummeda','Badgoni','Nikalpur','Donkeshwar','Annaram','Sirpur','Narkodh','Gadepalle','Kushtapur','Srirampur','Noothpalle','Gangasamundar','Marampalle','Dattapur','Shahpur','Komatpalle','Mayapur','C.H.Kondoor','Talveda','Kamtam','Ailapur','Mallaram','Chimrajpalle','Lakkampalle','Bazarkothur','Nandipet','Velmal','Joorpur','Khudavandapur','Tondakur','Vannel(Khurd)','Siddapur'],
Armur:['Macherla','Degaon','Amdapur','Magidi','Bardipur','Komanpalle','Khanapur','Surabiryal','Fathepur','Pipri','Manthani','Merdhapalle','Aloor','Gaggupalle','Rampur','Issapalle','Ankapur','Chepur','Kothaarmur','Govindpet','Mamidipalle','Perkit','Armur','Armur(Ward No.1)','Armur(Ward No.2)','Armur(Ward No.3)','Armur(Ward No.4)','Armur(Ward No.5)','Armur(Ward No.6)','Armur(Ward No.7)','Armur(Ward No.8)','Armur(Ward No.9)','Armur(Ward No.10)','Armur(Ward No.11)','Armur(Ward No.12)','Armur(Ward No.13)','Armur(Ward No.14)','Armur(Ward No.15)','Armur(Ward No.16)','Armur(Ward No.17)','Armur(Ward No.18)','Armur(Ward No.19)'],
Balkonda:['Ratnapur','Keshapur','Kojan Kothur','Jalalpur','Sangam','Nagapoor','Kisannagar','Balkonda','Chittapur','Bodepalle','Vannel_Bashirabad'],
Mupkal:['Nallur','Mukpal','Kothapalle','Venchariyal','Renjarla','Nagampet','Vempalle'],
Mendora:['Doodgaon','Chakeriyal','Kodecherla','Savel','Mendora','Bussapur','Velgatur','Soanpet -Pochampad'],
Yergatla:['Tadpakal','Domchanda','Gumeriyal','Tadla Rampur','Yergatla','Battapur','Thurat'],
Kammarpalle:['Uploor','Dammannapet','Nagapur','Kammar Palle','Hasakothur','Choutupalle','Basheerabad','Konasamandar','Lakshmapur','Dammanpet (Ameernagar)','Narsapur','Inayat Nagar','Konapur','Gunte Palle','Belur','Gudilingapur','Reachpalle'],
Mortad:['Shetpalle','Dharmora','Donkal','Palem','Thimmapur','Mortad','Sunkat','Donpal','Vaddiyat'],
Vailpur:['Ramannapet','Lakhora','Padgal','Pochampalle','Anksapur','Kuknur','Komanpalle','Venkatapur','Mothe','Velpur','Ameenapur','Sahebpet','Janakampeta','Narkhoda','Wadi','Kothapalle','Aklur'],
Jakranpalle:['Munpalle','Lakshmapur','Narayanpet','Argul','Brahmanpalle','Thorlikonda','Kolipaka','Jakranpalle','Madhapur','Poppalpalle','Sikindrapur','Padkal','Keshpalle','Manoharabad','Kaligote','Chintalur'],
Makloor:['Gunjali','Dharmora','Chikli','Vallabhapur','Metpalle','Mamdapur','Lakhmapur','Venkatapur','Gottimukkala','Bonkanpalle','Mullangi (Binala)','Makloor','Kalladi','Gutpa','Mamidipalle','Chinnapur','Singampalle','Borgaon (Kalan)','Manik Bhandar','Amrad','Vaddatipalle','Madanpalle'],
Nizamabad_North:['Kanteshwar','Arsapalle','Nizamabad (Division-1)','Nizamabad (Division-2)','Nizamabad (Division-3)','Nizamabad (Division-4)','Nizamabad (Division-5)','Nizamabad (Division-6)','Nizamabad (Division-7)','Nizamabad (Division-8)','Nizamabad (Division-9)','Nizamabad (Division-10)','Nizamabad (Division-27)','Nizamabad (Division-37)','Nizamabad (Division-38)','Nizamabad (Division-39)','Nizamabad (Division-40)','Nizamabad (Division-41)','Nizamabad (Division-42)','Nizamabad (Division-43)','Nizamabad (Division-44)','Nizamabad (Division-45)','Nizamabad (Division-46)','Nizamabad (Division-47)','Nizamabad (Division-48)','Nizamabad (Division-49)','Nizamabad (Division-50)'],
Yeda_Palle: ['Ambam','Brahammanpalle','Jaithapur','Pocharam','Jankampet','Thanekalan','Jamlam','Yedpalle','Ibrahimpur','Mangalpahad','Mallepahad','Kurnapalle'],
Ranjal:['Neela','Kandakurthi','Boregaon','Satapur','Ranjal','Tadbiloli','Bhagepalle','Kunepalle','Kalyapur','Dupalle'],
Bodhan:['Bhiknalli','Hangerga','Kopperga','Khandgaon','Siddapur','Kaldurthi','Mavandi (Khurd)','Pegadapalle','Penta Kalan','Langadapur','Mavandi(Kalan)','Rampur','Fathepur','Taggelli','Mandharna','Hunsa','Khajapur','Saloora','Jadijamalpur','Machapur','Bandarupalle','Bardipur','Narsapur','Erajpalle','Mittapur','Amdapur','Achampalle RURAL','Bodhan (Rural)','Naganpalle','Lakmapur','Komanpalle','Salampad','Penta Khurd','Nagora','Ladmavandi','Minarpalle','Bhavanipet','Sangam','Ootpalle','Bodhan (Ward No.1)','Bodhan (Ward No.2)','Bodhan (Ward No.3)','Bodhan (Ward No.4)','Bodhan (Ward No.5)','Bodhan (Ward No.6)','Bodhan (Ward No.7)','Bodhan (Ward No.8)','Bodhan (Ward No.9)','Bodhan (Ward No.10)','Bodhan (Ward No.11)','Bodhan (Ward No.12)','Bodhan (Ward No.13)','Bodhan (Ward No.14)','Bodhan (Ward No.15)','Bodhan (Ward No.16)','Bodhan (Ward No.17)','Bodhan (Ward No.18)','Bodhan (Ward No.19)','Bodhan (Ward No.20)','Bodhan (Ward No.21)','Bodhan (Ward No.22)','Bodhan (Ward No.23)','Bodhan (Ward No.24)','Bodhan (Ward No.25)','Bodhan (Ward No.26)','Bodhan (Ward No.27)','Bodhan (Ward No.28)','Bodhan (Ward No.29)','Bodhan (Ward No.30)','Bodhan (Ward No.31)','Bodhan (Ward No.32)','Bodhan (Ward No.33)','Bodhan (Ward No.34)','Bodhan (Ward No.35)'],
Kotgiri:['Sunkini','Sompur','Takli','Vallabhapur','Domaledgi','Kollur','Humnapur','Hegdoli','Yadgarpur','Ethonda','Sailampur','Amrapur','Kotgiri','Zainpur','Karegoan','Hangerga','Tirmalapur','Pothangal','Malkapur','Mirzapur','Eklaspur','Rozapur','Rampur','Fakeerabad','Kothapalle','Jallapalle','Kodcherla','Kallur','Gannavaram','Lingapur','Baswapur','Bareedpur','Adkas Palle','Sudlam'],
Rudrur:['Siddapur','Raikur','Lingampalle','Ramanpalle','Chikatpalle','Rudrur','Akbar Nagar','Boppapur','Ambam','Kondapur'],
Varni:['Humnapur','Ghanpur','Govoor','Mosra','Chintakunta','Moulalipur','Bajidapur','Thimmapur','Karegaon','Laxmapur','Rajpet','Chandur','Shankaoora','Varni','Taglepalle','Mallaram','Jakhora','Khunipur','Jalalpur','Sayeedpur','Medpalle','Siddapur','Pedmal'],
Nizamabad_Rural:['Malkapur','Gundaram','Laxmapur','Jalalpur','Palda','Tirmanpalle','Kondur','Kalur','Mubaraknagar','Khanapur','Sarangapur','Seripur','Gopanpalle','Keshapur','Pangra','Dharmaram','Mallaram','Muthakunta','Malkapur (J)','Malkapur (T)'],
Nizamabad_South:['Arsapalle -Part','Nizamabad (Division-11)','Nizamabad (Division-12)','Nizamabad (Division-13)','Nizamabad (Division-14)','Nizamabad (Division-15)','Nizamabad (Division-16)','Nizamabad (Division-17)','Nizamabad (Division-18)','Nizamabad (Division-19)','Nizamabad (Division-20)','Nizamabad (Division-21)','Nizamabad (Division-22)','Nizamabad (Division-23)','Nizamabad (Division-24)','Nizamabad (Division-25)','Nizamabad (Division-26)','Nizamabad (Division-28)','Nizamabad (Division-29)','Nizamabad (Division-30)','Nizamabad (Division-31)','Nizamabad (Division-32)','Nizamabad (Division-33)','Nizamabad (Division-34)','Nizamabad (Division-35)','Nizamabad (Division-36)'],
Mugpal:['Borgaon (P)','Thana Khurd','Mugpal','Nyalkal','Sirpur','Kanjar','Kulaspur','Chinnapur','Badsi','Mudakpalle','Kalpole','Bhairapur','Manchippa','Amrabad','Yellamkunta'],
Dichpalle:['Mullangi','Arepalle','Bardipur','Mentrajpalle','Amruthapur','Nadepalle','Suddepalle','Yanampalle','Suddulam','Koratpalle','Mittapalle','Rampur','Kamalapur','Bibipur','Dichpalle','Doosgaon','Ghanpur'],
Indalwai:['Indalwai','Thriambakpeta','Gannaram','Mallapur','Lolam','Gouraram','Vengalpad','Nallavally','Sirnapalle','Donkal'],
Dharpalle:['Mailaram','Challagarga','Dubbak','Dammannapet','Kasaram','Ramadugu','Konaipalle','Govindpalle','Dharpalle','Rekulapalle','Honnajipet','Kotalapalle'],
Bheemgal:['Changal','Pedda Bheemgal','Babapur','Jagrial','Kupkal','Mendhora','Babanagar','Puranipet','Bheemgal','Lingapurchouth','Bejjora','Sikandrapur','Gongoppul','Salampur','Muchkur','Pipri','Bachenpalle','Pallikonda','Devan Palle','Karepalle','Rahathnagar','Gangarai','Thallapalle','Devakkapet'],
Sirkonda:['Pedda Walgot','Pothnur','Chinna Walgot','Nyavanandi','Ravutla','Thatpalle','Chimanpalle','Pandimadugu','Mailaram','Sirkonda','Kondur','Ramadugu','Kondapur','Musheernagar','Gadkole','Hussainnagar','Pakhal','Thumpalle','Gargepahad'],
Mallapur:['Obblapur','Sangem','Sri Rampur','Damarajapalle','Valgonda','Vempalli Venkata Raopeta','Gorrepalle','Mallapur','Mogalpet','Nadukuda','Sirpur','Indira Nagar','Adavimadhapur','Regunta','Gundampalle','Ramdaspeta','Laxmipur','Raghavapeta','Muthampet','Chittapur','Sataram'],
Raikal:['Bornapalle','Devanpalle','Katkapur','Tatlavai','Vasthapur','Chintalur','Mootapalle','Oddelingapur','Dharmajipet','Alur','Veerapur','Bhoopathipur','Ramajipet','Raikal','Itkyal','Mahitapur','Kummaripalle','Uppumadige','Allipur','Kistampet'],
Beerpur:['Rangasagar','Mangela','Kammunur','Thalladharmaram','Rekulapalle','Kolvai','Komanpalle','Mothinagar','Thungur','Kandlapalle','Cherlapalle','Narsimlapalle','Beerpur'],
Sarangapur:['Potharam','Sarangapur','Ganeshpalle','Rechapalle','Rangapet','Nagunur','Latchakkapet','Konapur','Pembetla','Laxmidevipalle','Arpapalle','Battapalle'],
Dharmapuri:['Arepalle','Donthapur','Maggidi','Theegala Dharmaram','Jaina','Rajaram','Donoor','Nerella','Thummenala','Dharmapuri','Timmapur','Kamalapur','Nagaram','Raipatnam'],
Buggaram:['Velgonda','Chinnapur','Buggaram','Sirivanchakota','Gopulapur','Sirikonda','Beersani','Madnoor','Gangapuram','Yeshwanthraopet','Shakalla'],
Jagityal_Rural:['Kannapur','Porandla','Polasa','Gullapeta','Thakkallapalle','Habsipur','Somanpalle','Kalleda','Anantharam','Lakshmipuram','Thimmapur','Kadlapalle','Chelgal','Morapalle','Tatipalle','Anthargaon','Narsingapur','Eldurthi','Jabithapur','Dharmaram'],
Jagtial:['Thippannapeta','Jagityal','Dharur','Mothe','Jagityal (M)','Jagityal-2'],
Medipalle:['Katlakunta','Pormalla','Thombarao Peta','Medipalle','Kondapur','Vallampalle','Machapur','Dammannapeta','Kalvakota','Rangapur','Kacharam','Venkataraopeta','Raghojipeta','Bheemaram','Mannnegudem','Lingampeta','Govindaram','Pasnoor','Voddedu'],
Koratla:['Dharmaram','Yousufnagar','Ailapur','Kallur','Paidimadugu','Joganpalle','Chinnametpalle','Madhapur','Yakeenpur','Nagulpeta','Sangem','Gumlapur','Venkatapur','Mohanrao Peta','Koratla','Koratla-3'],
Metpalle:['Rajeswara Rao Pet','Bandalingapur','Maidpalle (W)','Peddapur','Venkatraopet','Vempet','Choulamaddi','Vellulla','Masaipeta','Ramchandrampeta','Vittampeta','Metlachittapur','Jaggasagar','Ramlachakkapeta','Rangarao Peta','Athmakur','Kondrikarla','Metpalle','Regunta','Metpally-2'],
Kathlapur:['Sirkonda','Thakkallapalle','Bommena','Dulur','Nagamallappakunta','Kathlapur','Peggerla','Ootpalle','Bhushanrao Peta','Chinthakunta','Dumpeta','Posanipeta','Gambhirpur','Thandriyal','Ippapalle','Potharam','Kalikota','Ambaripet','Thurthi'],
Kodimial:['Surampeta','Konapur','Potharam','Thiramalapur','Sanivarampeta','Ramsagar','Nachupalle','Kodimial','Kondapur','Nallagonda','Thippaipalle','Cheppial','Pudur','Gourapur','Namilikonda'],
Malial:['Rampur','Obulapur','Gorregundam','Maddutla','Potharam','Rajaram','Nookapalle','Mallial','Manala','Myadampalle','Thakkallapalle','Thatipalle','Sarvapur','Muthyampeta','Balwanthapur'],
Pegadapalle:['Lingapur','Devikonda','Legalamarri','Yellapur','Nancherla','Vengalaipet','Bathkepalle','Aravelli','Aithupalle','Nandagiri','Pegadapalle','Keesulatapalle','Namapur','Narsimhunipeta'],
Gollapalle:['Israjpalle','Vengumatla','Bonkur','Lothunur','Datnur','Abbapuram G','Chilvakodur','Gollapalle','Rapalle','Vengalapuram','Thirmalapuram','Ibrahim Nagar','Bhattubutamrajapalle','Raghavapatnam','Aggimalla','Gunjapadugu','Bheemrajpalle','Chendoli','Athmakur','Thirmalapuram','Laxmipur'],
Velgatoor:['Stambampalle','Jagdevpeta','Velgatoor','Kapparaopeta','Mukktraopet','Muthunur','Ramnoor','Kishanraopeta','Sakapuram','Kondapur','Gullakota','Ambaripeta','Sankenapalle','Paidipalle','Cheggaon','Sanabanda','Godiselapet','Padkal','Kothapet','Endapalle','Pathagudur','Suraram'],
Dharmaram:['Narsingapur','Pathipaka','Bommareddipalle','Myadaram','Sayampeta','Khanampalle','Paidichinthala Palle','Rachapalle','Dongathurthy','Botlavanaparthy','Khilavanaparthy','Chamanpalle','Kothur','Katkanpalle','Mallapur','Kammarikhanpeta'],
Palakurthy:['Undeda','Munjampalle','Maredupalle','Kukkalagudur','Vemnoor','Putnoor','Gudipalle','Jayyaram','Esalatakkallapalle','Elkalpalle','Palakurthy','Kannala','Ranapur'],
Antargoan:['Maddiriyala','Potial','Somanapalle','Murmoor','Yellampalle','Goelwada','Antargoan','Brahmanapalle','Akenpalle','Eklaspur','Mogalpahad N E','Raidandi','Kundanpalle','Lingapur'],
Ramagundam:['Ramagundam(Ward No.1)','Paratpalle','Jangoam','Maidipalle','Malkapur','Mallialpalli','Maredpaka','Allur','Ramagundam(Ward No.2)','Ramagundam(Ward No.3)','Ramagundam(Ward No.4)','Ramagundam(Ward No.5)','Ramagundam (Ward No.6)','Ramagundam (Ward No.7)','Ramagundam (Ward No.8)','Ramagundam (Ward No.9)','Ramagundam (Ward No.10)','Ramagundam (Ward No.11)','Ramagundam (Ward No.12)','Ramagundam (Ward No.13)','Ramagundam (Ward No.14)','Ramagundam (Ward No.15)','Ramagundam (Ward No.16)','Ramagundam (Ward No.17)','Ramagundam (Ward No.18)','Ramagundam (Ward No.19)','Ramagundam (Ward No.20)','Ramagundam (Ward No.21)','Ramagundam (Ward No.22)','Ramagundam (Ward No.23)','Ramagundam (Ward No.24)','Ramagundam (Ward No.25)','Ramagundam (Ward No.26)','Ramagundam (Ward No.27)','Ramagundam (Ward No.28)','Ramagundam (Ward No.29)','Ramagundam (Ward No.30)','Ramagundam (Ward No.31)','Ramagundam (Ward No.32)','Ramagundam (Ward No.33)','Ramagundam (Ward No.34)','Ramagundam (Ward No.35)','Ramagundam (Ward No.36)','Ramagundam (Ward No.37)','Ramagundam (Ward No.38)','Ramagundam (Ward No.39)','Ramagundam (Ward No.40)','Ramagundam (Ward No.41)','Ramagundam (Ward No.42)','Ramagundam (Ward No.43)','Ramagundam (Ward No.44)','Ramagundam (Ward No.45)','Ramagundam (Ward No.46)','Ramagundam (Ward No.47)','Ramagundam (Ward No.48)','Ramagundam (Ward No.49)','Ramagundam (Ward No.50)','Ramagundam(Ward No.4-1)','Ramagundam(Ward No.1-1)','Ramagundam(Ward No.2-1)'],
Ramagiri:['Ramagundam(Ward No.2-1)','Mustial','Upparlakesaram','Lankakesaram','Kalwacherla','Nagepalle','Pannur','Medapallebechrag','Begumpet','Velgalpahad','Jallaram','Ratnapur','Sundilla','Adivarampeta','Ladnapur','Budhavarampeta @ Ramaiahpalle'],
Kamanpur:['Nagaram','Lingala','Jallipalle','Julapalle','Kamanpur','Rompikunta','Perapalle','Gundaram','Rajapur','Mulkalapalle','Penchikalpet'],
Peddapalle:['Palthem','Turkalamaddi Kunta','Appannapet','Kanagarthi','Ragineedu','Brahmanpalle(PS)','Raghavapur','Rangapur','Sabitham','Gattusingaram','Gowreddipeta','Nittur','Nimmanapalle','Peddakalvala','Rangampalle','Rampalle','Cheekurai','Peddabonkur','Kothapalle','Bhojannapet','Mulasala','Maredugonda','Peddapally'],
Julapalle:['Peddapur','Julapalle','Kummarikunta','Kachapur','Wadkapur','Telukunta','Abbapuram'],
Elgaid:['Lokapeta','Muppirithota','Doolikatta','Elgaid','Sultanpur','Burhanmiyapet','Sivapalle','Narsapur','Raikaldevapalle'],
Sultanabad:['Ithrajpalle','Bhoopathipuram','Dubbapet','Gollapalle','Garrepalle','Neerukulla','Katnepalle','Poosala','Sultanabad','Kodurupaka','Chinnakalvala','Rebbaldevipalle','Chinnabonkur','Miyapur','Regadimaddikunta','Suddala','Gattepalle','Kadambapur','Thogarrai','Mancharami','Kanukula'],
Odela:['Kolanoor','Namsanipalle','Komera','Odela','Kangarthi','Madaka','Pathkapalle','Sanagonda','Indurthi','Gudem','Gumpula'],
Srirampur:['Madipalle','Mangapet','Vennampalle','Jafarkhanpet','Edulapuram','Kunaram','Pegadapalle','Gangaram','Peddampet','Pandilla','Srirampur','Rathupalle','Motlapalle','Tharupalle','Mallial','Mirzampet','Kistampet'],
Mutharam_Manthani:['Ippalapalle','Khammampalle','Dharyapur','Mydambanda','Matchupeta','Sukravarampeta','Lakkaram','Sarvaram','Potharam','Kesanapalle','Parupalle','Mutharam','Shatharajpalle','Odedu','Adavisrirampur'],
Manthani:['Kasipet','Gunjapaduga','Uppatla','Nagaram','Pandulapalle','Adrial','Siripuram','Rachepalle','Akkepalle','Kannala','Mallepalle','Angulur','Vilochavaram','Khanapur','Khansaibpeta','Ammagaripalle','Arenda','Mallaram','Venkatapur','Sarnepalle','Nagepalle','Adavisomanpalle','Bhatpalle','Eklaspur','Bitpalle (K)','Manthani','Gumnoor','Kuchirajpalle','Puttapaka','Lakkapur','Maidipalle','Gaddalapalle','Gopalpur','Peddaodela','Chinnaodela'],
Mahadevpur:['Tallagadda','Annaram','Chindrapalle','Nagepalle','Muddulapalle','Palgula','Kuntlam','Balijapur','Puskupalle','Majeedpalle','Kaleswaram','Kannepalle','Metpalle','Beersagar','Kudurpalle','Edapalle','Kothapet','Kancherlapalle','Mahadevpur','Brahmanpalle','Bommapur','Elkeswaram','Beglur','Muktipalle','Limapur','Rapallekota','Yenkepalle','Kishtaraopet','Suraram','Ambatpalle','Peddampet','Medigadda'],
Palmela:['Medigadda','Lenkalagadda','Garkepalle','Pankena','Moded','Bheemanpalle','Kamanpalle','Palmela','Sarvaipet','Boipalmela','Dammur','Burgugudem','Neelampalle','Venchepalle','Kisthatapur','Muknur','Timmatigudem'],
Mutharam_Mahadevpur:['Mulugupalle','Polaram','Stambhampalle (PP)','Korlakunta','Madharam','Jeelapalle','Nimmagude','Yamanpalle','Mutharam (Mahadevpur)','Vajnepalle','Nallagunta (Meenajipeta)','Regula Gudem','Borlagudem','Pegdapalle','Yetnaram','Singampalle','Gaddalapalle','Kankunoor','Reddipalle','Stambhampalle (P.K.)','Gandikamaram','Singaram'],
Kataram:['Damerakunta','Gundrathpalle','Mallaram','Raghupalle','Veerapoor','Jadaraopet','Gudoor','Vilasagar','Dharmasagar','Odipilavancha','Gummallapalle','Regulagudem','Devarampalle','Dhanwada','Adivarampet','Nasthur Palle','Pochampalle','Morepalle','Bopparam','Chidnepalle','Nallagunta','Garepalle','Kataram','Kambalpad','Kothapalle','Sunderajpet','Medipalle','Bayyaram','Pothulvai','Chinthakani','Prathapagiri'],
Malharrao:['Vallamkunta','Kondampet','Yedlapalle','Rudraram','Chigurupalle','Domalamandaram','Mothkupalle','Dubbagattu','Dubbapeta','Chinna Thoondla','Mallaram','Tadicherla','Kapuram','Shatrajpalle','Nacharam','Ansanpalle','Tadwai','Gandharla','Pedda Thoondla','Ankanpalle','Korlakunta','Mallampalle'],
Chityal:['Kalvapalle','Giddemutharam','Vencharni','Chainapaka','Navabpeta','Kailapur','Nainapaka','Vodthala','Jadalapet','Thirmalapur','Chityal','Jokkal','Challagarige','Muchiniparthi','Gopalpur','Dhoothpalle'],
Tekumatla:['Dubyala','Raghavareddipet','Venkatraopalle','Kalikota','Ragavapur','Garimillapalle','Borna Palle','Emped','Vellampalle','Valchal','Kundanpalle','Gummadavelli','Ramakistapur_V','Pangidipalle','Tekumatla','Ramakistapur_T','Ankushapur','Somanpalle'],
Mogullapalle:['Akinepalle','Pothugal','Kurikishala','Peddakomatipalle','Parlapalle','Motlapalle','Metpalle','Gundlakarthi','Vemulapalle','Gudipahad','Pidisilla','Mulkalpalle','Mogullapalle','Issipet','Ankushapur','Medaramatla','Rangapuram'],
Regonda:['Ponugondla','Madathapalli','Kodavatacha','Bhagirthipet','Ramannagudem','Tirumalagiri','Regonda','Lingala','Repaka','Kanaparthy','Dammannapet','Chennapur','Chinnakodepaka','Jaggaipet','Sulthanpur','Jamshedbeigpet','Kotapallegori','Konaraopet'],
Ghanapur_Mulug:['Chelpur','Dharmaraopet','Karakapalle','Burrakayalagudem','Mylaram','Budharam','Ghanpur','Thupuram','Kondapur'],
Bhupalpalle:['Neredpalle','Vajinepalle','Gorlavedu','Kothapalle','Gudadpalle','Kompalle','Jangedu','Kamalapur','Rampur','Chikinepalle','Pambapur','Bheemghanpur','Nagaram','Azamnagar','Nandigama','Deekshakunta','Golla Buddharam','Dudekulapalle','Pandipampula','Bhupalpalle','Peddapur'],
Venkatapur:['Bandlapahad','Advi_Rangapur','Thimmapur','Lakshmidevipet','Ramanathapalle','Nallagunta','Ramanujapur','Narasapuram','Palampet','Venkatapuram'],
Mulug:['Bandarupalle','Incherla','Kasimdevipeta','Annampale','Mulugu','Madanapalle','Jakara','Abbapuram','Mallampalli','Ramchandrapur','Jaggannapeta','Pathepalle','Potlapur','Kothur','Kannaigudem','Pegadapalle','Sarvapur','Ankannagudem','Ranabandala (D)'],
Govindaraopet:['Machchapur','Venkatapuram','Dammakkapalle','Chalwai','Bussapur','Rangapur','Motlagudem','Medaram(Pattichalvai)','Muthapur','Kannaigudem','Pasranagaram','Laknavaram','Karlapalle','Rampur'],
Tadvai:['Kalwapalle','Kothuru','MedaramSammakkajatra','Madharam_D','Ooratam','Durgaram_','Jampangavai','Kanneboinapalle','Adharvai _D','Budigavanipahad_UI','Takkelagudem','Bayyakkapet','Narlapur','Gonepalle','Vengalapuram','Padigapur_PP','Elbaka','Nimmakayalagudem','Kondaparthi','Maredigudem_UI','Immadigudem','Uppukunta','Gouraram','Padigapuram_PA','Lakshmipuram_T','Kothaguda','Vaddagudem_PL','Bitpalle','Waddegudem_PR','Bondala','Tadvai','Kamarampattitadvai','Bodigudem','Channapur','Banjarellapur','Kondalanagaram','Somguda','Kistapur_T','Serigaram','Bhupathipuram','Ramannagudem_T','Gangaram_PA','Gopaigudem_PA','Annaram','Dameravai','Katapuram','Pambapur','Narsapur_PA','Katnarsapur','Chowled','Lawal','Pochapur','Chintalakatapur','Lingala','Bollepalle','Kondaiguda','Narsapur_PL','Motlagudem (U.I)','Aligudem','Thimmanatogu','Sataram','Kousettivai','Kesvapoor_D','Rampur_PA','Amkampalle','Ashannaguda_Yellapur','Veerapur','Nimmagudem','Kamaram_PA','Venkannagudem','Beereli','Kamisettigudem_D','Rangapuram_PA'],
Eturunagaram:['Rampur_Agrahar','Mallakatta','Shankarajplle','Roheer','Allamvari Ghanapuram','Raigudem','Maredupaka','Chalpaka','Banaji Bandham','Elishettipalle','Kondred','Kondai','Mallyal','Dodla','Gundenguvai','Oddugudem','Manaspalle','Butaram','Ekkela','Allamvari Ghanapuram','Eturnagaram','Ramannagudem','Ramnagar_kaoyaguda','Yellapuram','Papkapur','Alugubelle','Teegalvai','Chintagudem (U.I)','Shapalle','Koratpally','Medaram','Kothagudem','Chirragudem','Chinaboinapalle','Shivapur','Gogubelle','Peddavenkatapur','Chinna Venkatapuram','Lingapur'],
Kannaigudem:['Marepalle','Bhupathipuram','Paredu','Rajannapeta','Andukpalle','Gangaram_PG','Thupakulagudem','Devadhumula','Laxmipuram_PG','Kothur_PG','Rampur','Gangugudem','Gurrevula','Padigapur_Pattigorrevul','Malkatpalle','Chityal','Muppanapalle','Kannaigudem','Buttaigudem','Sarvai','Chinthagudem','Singaram','Etur','Kanthanpalle','Ailapur'],
Wazeed:['Tekulagudem Chalk I','Tekulagudem','Tekulagudem Chalk II','Peddagangaram (Z)','Chandrupatla (Z)','Krishnapuram (G)','Kadekal','Kadekal (Z)','Peruru (G)','Peruru','Ghattuveerapuram (Z)','Chinnagollagudem (Z)','Rampuram','Ayyavaripeta','Bhuvanapalli','Ayyavaripeta(Z)','Karakal(Z)','Dharmavaram','Lakshmipuram','Lingapeta','Arlagudem(G)','Arlagudem(Z)','Chintoor(Z)','Chintoor(G)','Cherukur(Z)','Cherukur(G)','Mulkanapalli(G)','Penugolu(G)','Koyaveerapuram(G)','Padigapuram(Z)','Peddagollagudem(G)','Peddagollagudem(Z)','Cheekupalli(Z)','Gummadidoddi(Z)','Gummadidoddi(G)Chalka','Jangalaplli(G)','Ippagudem(G)','Dolapuram(G)','Nagaram(G)','Wazeed(G)','Pusur Patch-II','Pusuru Patch-I','Kongala(G)','Arunachalapuram','Ghanapuraml(Z)','Koppusuru','Kacharam(G)','Pusur Patch-(Z)','Lalpeta(G)','Bommanapalli(G)','Annavaram(G)','Morumuru(Z)','Morumuru(G)','Pragallapalle(Z)','Edjarlapalle(G)','Edjarlapalle(Z)','Mutharam(Chowk)','Aruguntapalli(G)','Aruguntapalli(Z)','Bijenepalli','Bollaram(Z)'],
Venkatapuram:['Punem Veerapuram (Z)','Punem Veerapuram (G)','Sudibaka (G)','Sudibaka (Z)','Marikala (Z)','Marikala (G','Bandagudem (G)','Desarajupalle (G)','Barlagudem (G)','Barlagudem (Z)','Desirajupalli(Z)','Chirtapalli (G)','Ramavaram(Z)','Ramavaram (G)','China Gangaram (G)','Mahitapuram (Z)','Mahitapuram(G)','Kothagudem (G)','Bandarupally(G)','Pamunoor','Zella (G)','Doli(G)','Tadapala(G)','Chalamala(G)','Mukunuru','Alligudem(G)','Rachapalli(G)','Mallapuram (G)','Mallapuram (Z)','Nuguru (Z)','Nuguru (G)','Chirtapalli (Z)','Wadagudem','Wadagudem (Z)','Marrigudem (Z)','Venkatapuram (Z)','Venkatapuram (G)','Uppedu Veerapuram (Z)','Koya Bestagudem(G)','Palem (G)','Uppedu (Z)','Veerapuram(z)','Narsireddygudem(Z)','Burugudem (Z)','Narsireddygudem (G)','Sarakalanka','Palem (Z)','Barlagattugudem (Z)','Veerabhadraram (Z)','Ippagudem (Z)','Ankannagudem (Z)','Pujarigudem (Z)','Ippagudem (G)','Chinneda (G)','Chinneda (Z)','Morram Vanigudem (G)','A.Kathigudem','Ramannagudem (Z)','Nallaguntapalli(Z)','Alubaka (Z)','Alubaka (G)','Ippapuram (G)','Kalipaka','Bodapuram(G)','Taniparthy(G)','Kondapuram','KothaKondapuram','Suraveedu(Z)','Suraveedu(G)','Bandarugudem','Edhira (G)','Ontichintalagudem(G)'],
Mangapet:['Mangapet','ThondyalLaxmipur','Narsapur','Komatipalle','Cherupalle','Thimmampet','Mallur','Chunchupalle','Ramanakkapeta','Wadagudem_PR','Narsimhasagar','Rajupet','Gollagudem','Kathigudem','Brahmanapalle','Ramachandrunipeta','Poredupalle','Barlagudem_D','Lodukgudem_D','Domeda','Bandarugudem','Akinepalle_mallaram','Kamalapur'],
Karakagudem:['Anantharam','Samath Mothe','Mote(Patti Mallur)','Regalla','Samathbhatupalli','Bhattupalle','Karakagudem','Kalvalanagaram','Chirramalla','Veerapuram'],
Pinapaka:['Potlapalle','Dugineypalli','Chegarsala','Sunnanvaripalle','Veerapuram','Bheemavaram','Sarjathpalli','Janampeta','Singireddypalli','Venkatraopeta','Elchireddipalli','Allampalli','Gaddampalli','Pinapaka','Uppaka','E.Bayyaram','Seetharampuram','Bommarajupalli'],
Dummugudem:['Narayanapuram','Parnasala','Sitanagaram','Govindapuram','Pedabandirevu','Mulakanapalli','Lingapuram','Paidagudem','Gouravaram','Sangam','Chinnabandirevu','Lakshminarasimharaopeta','Suravaram','S.Kothagudem','Kotipallepadu','Pedanallaballi','Laxmipuram','Paidakulamadugu','Kothajinnelagudem','Sughnapuram','Chintaguppa','Patajinnelagudem','Khalsa Veerabhadrapuram','Z.Veerabhadrapuram','Chinna Nallaballi','Tailorpeta','Kasinagaram','Kesavapatnam','Ramachandrapuram','Pragallapally','Byragulapadu','Manguvai','Anjubaka','Katayagudem','Dummugudem','Laxminagaram','Kannapuram','Achuthapuram','Mahadevapuram','Dabbanuthula','Kothuru','Rajupeta','Chinna Kamalapuram','Pedda Kamalapuram','Yerraboru','Adavi Ramavaram','Arlagudem','Dharmapuram','Subbaraopeta','Gangolu','Burra Vemula','Kothad Dummugudem','Nadikudi','Work Land Reguballe','Zamandari Reguballe','Khalsa Regubally','Ramarao Peta','Patha Maredubaka','Seetharampuram','Venkata Ramapuram','Dantenam','Narsapuram','Turubaka','Bandarugudem','Kothagudem','Maredubaka (Z)','Whitenagaram','Singavaram','Laxmipuram','Gangavaram','Fowlerpeta','Narayanrao Peta','Gurralabayalu','Lachigudem','Ramachandruni Peta','Bojjiguppa','Koya Narsapuram','Bheemavaram','Cherupalli','Marayagudem','Jinnegattu','Kothapalli','Kommanapalli'],
Manuguru:['Ramanujavaram','Thirumalapuram','Peddipalli','Samathsingaram','Mallaram','Gundlasingaram','Anantharam','Chinnaravigudem','Manuguru (PT)','Annaram','Manuguru Ward-1','Manuguru Ward-2','Manuguru Ward-3','Manuguru Ward-4','Manuguru Ward-5','Manuguru Ward-6','Manuguru Ward-7','Manuguru Ward-8','Manuguru Ward-9','Manuguru Ward-10','Manuguru Ward-11','Manuguru Ward-12','Manuguru Ward-13','Manuguru Ward-14','Manuguru Ward-15','Manuguru Ward-16','Manuguru Ward-17','Manuguru Ward-18','Manuguru Ward-19','Manuguru Ward-20','Manuguru Ward-21','Manuguru Ward-22','Manuguru Ward-23'],
Gundala:['Lingagudem','Sayanpalle','Chinna Venkatapur','Damarathogu','Mamakannu','Muthapuram','Konavarigudem','Gundala','Galaba','Settipalli','Rudrapaka','Padigapur','Kanchanpalli'],
Yellandu:['Mamidigundala','Challa Samudram','Rompaid','Komararam','Sudimala','Raghaboingudem','Yellandu','Yellandu Ward-1','Yellandu Ward-2','Yellandu Ward-3','Yellandu Ward-4','Yellandu Ward-5','Yellandu Ward-6','Yellandu Ward-7','Yellandu Ward-8','Yellandu Ward-9','Yellandu Ward-10','Yellandu Ward-11','Yellandu Ward-12','Yellandu Ward-13','Yellandu Ward-14','Yellandu Ward-15','Yellandu Ward-16','Yellandu Ward-17','Yellandu Ward-18','Yellandu Ward-19','Yellandu Ward-20','Yellandu Ward-21','Yellandu Ward-22','Yellandu Ward-23','Yellandu Ward-24'],
Tekulapalle:['Bodu','Koppurai','Gangaram','Bethampudi','Pegallapadu','Gollapalle'],
Julurpad:['Papakollu','Julurpad','Padamata Narsapuram','Karivarigudem','Machinenipeta','Kakarla','Gundepudi','Nallabandabodu'],
Chunchupally:['Penuballi','Penagadapa','Chunchupalle (U)','Garimella Padu'],
Sujathanagar:['Singabhupalam','Sarvaram','Sujathanagar','Raghavapuram','Seethampeta','Gareebpeta'],
Kothagudem:['Kothagudem','Ramavaram','Kothagudem Ward No.1','Kothagudem Ward-2','Kothagudem Ward-3','Kothagudem Ward-4','Kothagudem Ward-5','Kothagudem Ward-6','Kothagudem Ward-7','Kothagudem Ward-8','Kothagudem Ward-9','Kothagudem Ward-10','Kothagudem Ward-11','Kothagudem Ward-12','Kothagudem Ward-13','Kothagudem Ward-14','Kothagudem Ward-15','Kothagudem Ward-16','Kothagudem Ward-17','Kothagudem Ward-18','Kothagudem Ward-19','Kothagudem Ward-20','Kothagudem Ward-21','Kothagudem Ward-22','Kothagudem Ward-23','Kothagudem Ward-24','Kothagudem Ward-25','Kothagudem Ward-26','Kothagudem Ward-27','Kothagudem Ward-28','Kothagudem Ward-29','Kothagudem Ward-30','Kothagudem Ward-31','Kothagudem Ward-32','Kothagudem Ward-33'],
Laxmidevipalli:['Punukuduchelka','Bangaru Chelka','Gollagudem','Gattumalla','Regalla','Kunaram','Chatakonda (R)','Karukonda','Laxmidevipalle'],
Palawancha:['Chandralagudem','Vulavanoor','Karegattu','Yanambailu','Sarekal','Pandurangapuram','Suraram','Payakari Yanambylu','Laxmidevipalle','Somulagudem','Rangapuram','Nagaram','Thogugudem','Repallewada','Koyagutta','Narayanarao peta','Sangam','Danthelabora','Gangadeviguppa','Palvoncha Ward-1','Palvoncha Ward-2','Palvoncha Ward-3','Palvoncha Ward-4','Palvoncha Ward-5','Palvoncha Ward-6','Palvoncha Ward-7','Palvoncha Ward-8','Palvoncha Ward-9','Palvoncha Ward-10','Palvoncha Ward-11','Palvoncha Ward-12','Palvoncha Ward-13','Palvoncha Ward-14','Palvoncha Ward-15','Palvoncha Ward-16','Palvoncha Ward-17','Palvoncha Ward-18','Palvoncha Ward-19','Palvoncha Ward-20','Palvoncha Ward-21','Palvoncha Ward-22','Palvoncha Ward-23','Palvoncha Ward-24','Palvoncha Ward-25','Palvoncha Ward-26','Palvoncha Ward-27','Palvoncha Ward-28','Palvoncha Ward-29','Palvoncha Ward-30','Palvoncha Ward-31','Palvoncha Ward-32','Palvoncha Ward-33','Palvoncha Ward-34','Palvoncha Ward-35','Palvoncha Ward-36','Palvoncha Ward-37','Palvoncha Ward-38','Palvoncha Ward-39'],
Mulakalapalle:['Kistaram','Annaram','Pusugudem','Chaparalapalli','Madharam','Mulakalapalle','Kamalapuram','Jagannathapuram','Kapugangaram','Mookamamidi','Gopalaraopet','Pagallapalli','Thimmampeta','Rachannagudem'],
Dammapeta:['Katkuru','Ankampalem','Jaggaram','Balarajugudem','Patwarigudem','Peddagollagudem','Lachapuram','Malkaram','Amudalapadu','Dammapeta','Nagupalli','Nacharam','GANESHPADU','Gunnepalli','Naidupeta','Moddulagudem','Mustibanda','Mallaram','Sayanaraopalem','Mandlapally','Vadlagudem','Akinepalli'],
Kothaguda:['Thimmapur','Konapur','Ankannagudem','Rampur D','Ippalapegadapur_D','Devavaram_D','Rangappagudem','Yedullapalle','Yerravaram','Jangamvanigudem','Kundanpalle','Ootai','Sadireddipalle','Enchagudem','Marrigudem','Gundam','Mokallapalle','Pogallapalle','Vojjavanigudem_D','Neelampalle','Rudravaram D','Machanpalle','Govindapur','Mylaram','Kothapalle','Jangalpally(D)','Kothagudem','Pegadapalle','Gundrepalle','Durgaram','Karnegandi','Doravarivempalle','Bothavanigudem','Musimi','Velubelly','Routhugudem','Polaram','Bakkachinthalapadu','Upparagudem(D)','Kishtapur','Gopalapur','Gunjed','Thativarivempalle','Eshwaragudem','Bathupalle','Irukulakunta_D','Karlai'],
Ganagavaram:['Kamaram','Ponugonda','Ramavaram','Mamidigudem','Dubbagudem','Marrigudem','Mahadevunigudem','Peddayellapur','Jangalpalle','Chinthagudem','Narsugudem','Katrenam','Komtlagudem','Bourugonda','Oorabaka','Puttalabhupathy','Thirmalgandi','Madagudem','Ganagavaram','Bhupalapatnam','Kodishalamitta','Pandem'],
Bayyaram:['Gurimella','Motlathimmapuram','Jagathraopet','Venkatapuram','Kommavaram','Kambalapalli','Kachanapalli','Lingagiri','Irsulapuram','Ramchandrapuram','Gowravaram','Uppalapadu','Bayyaram','Singaram','Gandhampalli','Kothapeta','Dharmapuram'],
Garla:['Mulkanoor','Maddi Vancha','Chandragiri','Rampuram','Buddharam','Garla','Kannaigudem','Seripuram','Gopalapuram','Pocharam','Pulluru'],
Dornakal:['Chilkodu','Gollacherla','Uyyalawada','Burgupahad','Perumandlasankeesa','Mannegudem','Mulkalapllle','Ravigudem','Kannegundla','Vennarram','Gurralakunta','Ammapalem','Dornakal'],
Kuravi:['Nerada','Thattupalle','Sudanpalle','Kandikonda','Ayyagaripalle','Kuravi','Moglicherla','Narayanapur','Gundrathimadugu','Rajole','Kuncharlagudem','Thirumalapuram','Modugulagudem','Chinthapalle','Kampalle','Seerole','Upparagudem','Thallasankeesa','Nallella','Balapa'],
Mahabubabad:['Vemunur','Laxmipur','Reddial','Khambhalpalle','Nadiwad','Edulapusapalle','Gudumuru','Mudupugal','Shanigapuram','Ammangal','Singaram','V.S.Laxmipur','Jangligonda','Parvathagiri','Mallala','Madhavapur','Bethole','Jamanndlapalle','Anantharamu','Mahabubabad','Mahabubabad Ward-1','Mahabubabad Ward-2','Mahabubabad Ward-3','Mahabubabad Ward-4','Mahabubabad Ward-5','Mahabubabad Ward-6','Mahabubabad Ward-7','Mahabubabad Ward-8','Mahabubabad Ward-9','Mahabubabad Ward-10','Mahabubabad Ward-11','Mahabubabad Ward-12','Mahabubabad Ward-13','Mahabubabad Ward-14','Mahabubabad Ward-15','Mahabubabad Ward-16','Mahabubabad Ward-17','Mahabubabad Ward-18','Mahabubabad Ward-19','Mahabubabad Ward-20','Mahabubabad Ward-21','Mahabubabad Ward-22','Mahabubabad Ward-23','Mahabubabad Ward-24','Mahabubabad Ward-25','Mahabubabad Ward-26','Mahabubabad Ward-27','Mahabubabad Ward-28'],
Gudur:['Gundeng','Madanapur','Gajulaghat','Ayodhyapur','Ponugudu','Keshavapatnam','Vangapet','Bupathipet','Adivarmpet','Chinnayellapur','Seethanagaram','Veerampet','Ootla','Macharla','Gudur','Bollepally','Rajanpally','Naikapalle','Teegalaveni','Govindapuram','Dameravancha','Apparajpalle','Boddugonda','Kollapur','Kangaragidda','Matwada','Neelavancha','Timmapur'],
Kesamudram:['Korukondapalle','Intikanne','Katrepalle','Arpanapalli','Upparapalle','Kesamudram','Mahamoodpatanam','Inugurthy','Komatipalli','Kalwala','Dhanasari','Penugonda','Beriwada','Rangapuram','Tallapusapally','Annaram','Narayanpur H/O Chinnamupparam'],
Nellikudur:['Macharajpalle','Yerrabelligudem','Ramanujapuram','Kachikal','Chinnanagaram','Rajulakothapalle','Chinnamupparam','Alair','Vavilala','Sriramgiri','Ravirala','Nainala','Nellikudur','Brahmanakothapalle','Madanthurthy','Munugalvedu','Narasimhulagudem'],
Narsimhulapet:['Vanthadupula','Narsimhulapet','Kommulavancha','Jayapuram','Akkirala','Bojjannapeta','Kowsalyadevipalle','Mungimadugu','Peddanagaram'],
Chinnagudur:['Gundamarajupalle','Uggampalle','Chinnagudur','Jayyaram','Veesumpalle'],
Maripeda:['Yellampet','Anepur','Neelakurthy','Chillamcherla','Rampuram','Thallaorkal','Tanamcherla','Burhanpur','Gundepudi','Giripuram','Maripeda','Veeraram','Ullepalle','Erjerla','Dharmaram','Bechharajpalle','Purushothamaigudem','Abbaipalem','Galivarigudem'],
Danthalapalle:['Bodlada','Peddamupparam','Kalvapalle','Ramavaram','Agapet','Danthalapalle','Gunnapalle','Kummarikuntla','Vemulapalle','Reponi','Datla'],
Thorrur:['Nancharimadur','Velikatte','Kommanapalli','Ammapuram','Khanapur','Gurthur','Somaram','Jamasthanpur','Kantaipalem','Chinthalapalle','Madipalle','Fathepur','Gopalagiri','Venkatapuram','Karkal','Haripiryala','Chikataipalem','Cherlapalem','Bonthupalle','Matedu','Polepalle','Thorrur'],
Peddavangara:['Gantlakunta','Pochampalle','Authapuram','Peddavangara','Koripalle','Waddekothapalle','Pocharam','Chinnavangara','Chityal','Bommakal'],
Parkal:['Narlapur','Varikole','Venkatapur','Laxmipur','Nagaram','Paidipalle','Malakpet','Raiparthy','Pulligilla','Cherlapalle','Mustyalpalle','Choutuparthi','Nadikuda','Dharmaram','Pocharam','Vellampalle','Rajipet','Madharam','Parkal','Kamareddipalle'],
Shayampet:['Peddakodepaka','Koppula','Vasanthapur','Mylaram','Taharapur','Gatlakaniparthy','Singaram_Kothagattu','Shayampet','Hussainpalle','Singaram_Dongala','Pathipaka','Neredpalle','Katrapalle'],
Damera:['Kantathmakur','Kowkonda','Sarvapur','Kogilvai','Pulkurthi','Singarajupalle','Venkatapur','Lyadalla','Pasargonda','Oorugonda','Damera','Oblapur','Mustyalapalle'],
Geesugonda:['Mogilicherla','Bodduchinthalpalle','Manugonda','Elkurthy','Ramchandrapur','Anatharam','Geesugonda','Potharajupalle','Vanchangiri','Shayampet_H','Ookal_H','Machapur','Viswanathpur','Kommala','Gorrekunta','Dharmaram'],
Atmakur:['Malakpet','Kothagattu','Agrampahad','Peddapur','Choudlapalle','Kamaram','Penchikalapeta','Atmakur','Brahamanpalle','House_Buzurg','Katakshapur','Neerukulla'],
Duggondi:['Laxmipur','Keshwapur','Polaram','Muddunoor','Duggondi','Mallampalle','Mahmadapur','Venkatapur','Reballe','Ponakal','Nachinepalli','Adavi_Rangapur','Madhira Mandapalle','Mandapalle','Thogarrai','Rekampalle','Chalparthi','Thummampet'],
Nallabelly:['Nandigama','Relakunta','Rangapuram','Arshanpalli','Kannaraopet','Govindapuram','Kondapur','Ramapuram','Nagarajpalle','Shanigaram','Ramtheertham','Muchimpula','Lenkalpalle','Nallabelly','Narakkapeta','Rudragudem','Gundlapahad','Medapalle','Asaravelli','Kammepalle','Bhanjipet','Itikalpalle','Muthojipeta','Madannapeta','Madhira','Ramavaram','Laknepally','Maheshwaram','Paspunur','Sarwapur','Rajupet','Narasampet','Gurijal','Makdumpur'],
Khanapur:['Dabberpet','Pakhal_Ashoknagar','Jalubanda_D','Khanapur','Thungabandam_D','Kothur','Matuveeraram_D','Rangapur','Ragampet','Ainepalle','Dharmaraopet','Budharaopet','Pocharam','Mangalavaripett'],
Chennaraopeta:['Lingapur','Akkalched','Chennaraopeta','Konapur','Upparapalle','Jhalli','Ameenabad','Lingagiri','Yellaigudem','Thimmarainipahad','Papaiahpeta'],
Sangem:['Venkatapur_Haveli','Katrepale_Haveli','Kapulakanaparthy','Gavicherla','Ramachandrapur','Lohitha','Shapur','Theegarajupalle','Thimmapur','Sangem','Chinthapalle','Pallaruguda','Mondrai','Narlavai','Mummadivaram','Elugur Rangampet','Nallabelle'],
Wardhannapet:['Chennaram','Upparapalle','Nallabelle','Katryal','Yellandu','Bandauthapur','Dammannapeta','Divitipalle','Ramavaram','Wardhannapet','Kothapalle_PR','Liaberthy'],
Raiparthy:['Keshavapur','Kolanupalle','Konduru','Gannaram','Thirmalayapalle','Raiparthy','Kothur','Perikaid','Mylaram','Muripirala','Burahanpalle','Katrapalle','Pothireddipalle','Sannur','Jagannadhapalle','Gattikal','Kondapur_PR','Ookal_PR'],
Parvathagiri:['Gopanpalli','Konkapaka','Enugallu','Chintha Nekkonda','Choutapalle','Vadlakonda','Rollakal','Somaram','Parvathagiri','Kalleda','Ravoor','Annaram','Burugumadla'],
Nekkonda:['Surpalle','Mudigonda','Deekshakunta','Chundrukonda','Panikera','Gundrepalle','Nekkonda','Pathipaka','Redlawada','Gotlakonda','Bollikonda','Alamkhanipet','Thopan palle','Venkatapur','Appalarao Peta','Peddakorpolu','Chinna Korpolu','Nagaram','Ameenpet H/O Ameenabad'],
Bheemadevarapalle: ['Vangara','Bheemadevarpalle','Ratnagiri','Manikyapur','Koppur','Kothapalle','Mulkanoor','Mutharam (P.K)','Mustafapur','Gatlanarsingapur','Kothakonda','Mallaram'],
Velair:['Kannaram','Erraballe','Velair','Peechara','Gundlasagar','Sodeshapalle','Mallikudurla','Shalapally H/O Velair','Maddelagudem H/O Peechara'],
Elkathurthi:['Penchakalpeta','Jeelgul','Gopalpur','Damera','Elkathurthi','Suraram','Vallabhapur','Kothulnaduma','Veeranarayanapur','Dandepalle','Baopet','Thimmapur','Keshwapur'],
Kamalapur:['Bhimpalle','Kannur','Gunded','Marripalligudem','Jujnoor','Sanigaram','Vangapalle','Kamalapur','Uppal','Desharajpall','Kaniparthi','Gudur','Ambala','Nerella','Madannapeta','Guniparthi','Venkateshwarlapally H/O Narlapur'],
Hasanparthy:['Ananthasagar','Madipalle','Yellapur','Laknavaram','Jaigiri','Devannapeta','Pembarthy','Mucherla','Nagaram','Sudanpalle','Mallareddipalle','Arvapalle','Siddapur','Vangapahad','Bhimaram','Hasanparthy','Pegadapalle','Chinthagattu'],
Dharmasagar:['Narayanagiri','Mupparam','Devunoor','Somadevarapalle','Dharmasagar','Yelkurthi','Janakipuram','Kyathampalle','Thatikayala','Peddapendyala','Dharmapur','Malakapalle','Unikicherla'],
Khazipet:['Rampur','Bhatupalle','Kothapalle','Tharalapalle','Ammavaripeta','Kadipikonda','Madikionda','Khazipet','Somidi','Sayampet_J'],
Hanamkonda:['Kumarapalle','Waddepalle','Palvelpula','Gopalpur','Hanamkonda-1','Laskar Singaram','Hanmakonda-2','Hanmakonda-3','Hanmakonda-4','Hanmakonda-5','Hanmakonda-6','Hanmakonda-7','Waddepalle-2'],
Warangal:['Paidipalle','Kothapet','Yanumamula','Ramannapeta','Girmajipeta','Laxmipur-1','Desaipeta','Mattewada','Warangal-1','Warangal-2','Warangal-3','Warangal-4','Warangal-5','Laxmipur-2'],
Khilla_Warangal:['Allipur','Mamnoor','Stambampalle','Thimmapur_Haveli','Nakkalapalle','Bollikunta','Gadepalle','Vesanthpur','Rangasaipet','Warangal','Urus'],
Inole:['Vanamalakanaparthi','Kondaparthy','Venkatapur','Garimillapalle','Inole','Singaram','Punnelu','Panthini','Kakkiralapalle','Nandanam'],
Gangadhara:['Venkataipalle','Ryalapalle','Kachireddipalle','Kondaipalle','Burgupalle','Narasimhulapalle','Sarvareddipalle','Nagireddipur','Gangadhara','Narayanpur','Islampur','Mallapur','Uppara Mallial','Kurikial','Nayalakonda Palle','Gattuboothkur','Garsekurthi','Achampalle','Vaddyaram'],
Ramadugu:['Thirmalapur','Sriramulapalle','Chippakurthi','Gundi','Lakshmipur','Dathojipet','Ramadugu','Shanagar','Fakeerpet','Gopalraopet','Koratpalle','Rudraram','Mothe','Kistapur','Vedira','Velichal','Deshrajpalle','Kokkerakunta','Vannaram'],
Choppadandi:['Ragampeta','Chityalpalle','Arnakonda','Bhupalapatnam','Choppadandi','Gumlapur','Katnepalle','Konerupalle','Rukmapur','Kolimikunta','Chakunta','Vedurughattu'],
Karimnagar_Rural:['Nagunur','Jublinagar','Fakeerpet','Chamanpalle','Taharakondapur','Cherlabuthkur','Maqdumpur','Irukulla','Elbotharam','Wallampahad','Arepalle','Durshed','Chegurti','Bommakal'],
Kothapalle:['Nagulamalial','Khazipur','Asifnagar','Elgandal','Baddipalle','Kamanpur','Malkapur','Kothapalle(Haveli)','Lakshmipur','Chintakunta','Rekurthi','Sitarampur'],
Gannervaram:['Gannervaram','Yaswada','Panthulukondapur','Cherlapur','Gopalpur','Sangam','Mylaram','Madhapur','Khasimpet','Parvella','Jangapalle','Gunkulkondapur'],
Karimnagar:['Hasnapur','Pothgal','Karimnagar-1','Karimnagar-2','Karimnagar-3','Karimnagar-4','Karimnagar-5','Karimnagar-6'],
Manakondur:['Lingapur','Veldi','Vegurupalle','Utoor','Pachchunur','Maddikunta','Kalledu','Devampalle','Lalithapur','Annaram','Manakondur','Munjampalle','Edulagattepalle','Chengerla','Gattududdenapalle','Vannaram','Gangipalle','Kondapalkala'],
Thimmapur:['Vachunur','Thimmapur','Porandla','Mannenpalle','Nustulapur','Nedunur','Renikunta','Kothapalle (P.N)','Nallagonda','Mallapur','Polampalle','Parlapalle','Mogilipalem','Alugunur'],
Chigurumamidi:['Mudimanikyam','Ramancha','Mulkanoor','Chigurumamidi','Rekonda','Bommanapalle','Sundaragiri','Indurthi','Nawabpeta','Kondapur','Ullampalle'],
Saidapur_v:['Eklaspur','Somaram','Vennampalle','Ramchandrapur','Elabotharam','Godisala','Saidapur','Venkepalle','Duddenapalle','Akunur','Ghanpur','Raikal','Bommakal','Ammanagurthi'],
Shankarapatnam:['Yeradpalle','Arkandla','Gaddapaka','Kalavala','Kachapur','Rajapur','Dharmaram','Kannapur','Mutharam','Thadikal','Ambalpur','Kareempet','Kesavapatnam','Kothaghat','Molangur','Amudalapalle','Metpalle'],
Veenavanka:['Mamidalapalle','Elbak','Bonthupalle','Challoor','Ghanmukla','Korkal(Jangampalle)','Kondapaka','Pothireddipalle','Reddipalle','Brahmanpalle','Veenavanka','Kanparthi','Bethgal','Valbapur'],
Huzurabad:['Singapur','Sirsapalle','Pothareddipeta','Chelpur','Jupak','Huzurabad','Thummanapalle','Bornapalle','Katrepalle','Kandugula','Kanukulagidda','Dharmarajupalli','Huzurabad-2'],
Jammikunta:['Vilasagar','Thangula','Vavilala','Bijigirsharief','Korepalle','Saidabad','Jammikunta','Madipalle','Dharmaram P B'],
Ellandakunta:['Vanthadupula','Rachapalle','Kanagarthi','Mallial','Ellanthakunta','Chinnakomatipalle','Tekurthi','Bujunoor','Sirsedu','Patharlapalle'],
Rudrangi:['Manal','Rudrangi'],
Chandurthi:['Mallial','Chandurthi','Thimmapuram(PN)','Ananthapalle(PK)','Marrigadda','Jogapuram','Lingampeta','Sangula','Bandapalle','Yangal','Moodepalle'],
Veernapally:['Adavipadira','Garjanapally','Kancharla','Maddimalla','Vanapally','Veernapally'],


};
// Function to populate dropdown options
countryDropdown.addEventListener('change', function () {
  const selectedCountry = this.value;
const states = statesByCountry[selectedCountry] || [];

stateDropdown.disabled = !selectedCountry;

stateDropdown.innerHTML = '<option value="">Select a state</option>';


states.forEach(state => {
  const option = document.createElement('option');
  option.value = state;
  option.textContent = state;
  stateDropdown.appendChild(option);
});
});

stateDropdown.addEventListener('change', function () {
const selectedCountry = countryDropdown.value;
const selectedState = this.value;
const districts =  districtsByState[selectedState] || [];

districtDropdown.disabled = !selectedState;

districtDropdown.innerHTML = '<option value="">Select a district</option>';

districts.forEach(district => {
  const option = document.createElement('option');
  option.value = district;
  option.textContent = district;
  districtDropdown.appendChild(option);
});
});
districtDropdown.addEventListener('change', function () {
const selectedCountry = countryDropdown.value;
const selectedState = this.value;
const selectedDistrict = this.value;
const mandals =  mandalByDistricts[selectedDistrict] || [];

mandalDropdown.disabled = !selectedDistrict;

mandalDropdown.innerHTML = '<option value="">Select a mandal</option>';

mandals.forEach(mandal => {
  const option = document.createElement('option');
  option.value = mandal;
  option.textContent = mandal;
  mandalDropdown.appendChild(option);
});
});
mandalDropdown.addEventListener('change', function () {
const selectedCountry = countryDropdown.value;
const selectedState = this.value;
const selectedDistrict = this.value;
const selectedMandal = this.value;
const villages =  villagesByMandal[selectedMandal] || [];

villageDropdown.disabled = !selectedMandal;

villageDropdown.innerHTML = '<option value="">Select a village</option>';

villages.forEach(village => {
  const option = document.createElement('option');
  option.value = village;
  option.textContent = village;
  villageDropdown.appendChild(option);
});
});
couDropdown.addEventListener('change', function () {
const selectedCountry = this.value;
const st = statesByCountry[selectedCountry] || [];

stDropdown.disabled = !selectedCountry;


stDropdown.innerHTML = '<option value="">Select a state</option>';

st.forEach(st => {
  const option = document.createElement('option');
  option.value = st;
  option.textContent = st;
  stDropdown.appendChild(option);
});
});

stDropdown.addEventListener('change', function () {
const selectedCountry = this.value;
const selectedState = this.value;
const dis =  districtsByState[selectedState] || [];


disDropdown.disabled = !selectedState;

disDropdown.innerHTML = '<option value="">Select a district</option>';

dis.forEach(dis => {
  const option = document.createElement('option');
  option.value = dis;
  option.textContent = dis;
  disDropdown.appendChild(option);
});
});
disDropdown.addEventListener('change', function () {
const selectedCountry = this.value;
const selectedState = this.value;
const selectedDistrict = this.value;
const m =  mandalByDistricts[selectedDistrict] || [];

mDropdown.disabled = !selectedDistrict;


mDropdown.innerHTML = '<option value="">Select a mandal</option>';

m.forEach(m => {
  const option = document.createElement('option');
  option.value = m;
  option.textContent = m;
  mDropdown.appendChild(option);
});
});
mDropdown.addEventListener('change', function () {
const selectedCountry = this.value;
const selectedState = this.value;
const selectedDistrict = this.value;
const selectedMandal = this.value;
const v =  villagesByMandal[selectedMandal] || [];

stDropdown.disabled = !selectedMandal;


vDropdown.innerHTML = '<option value="">Select a village</option>';

v.forEach(v => {
  const option = document.createElement('option');
  option.value = v;
  option.textContent = v;
  vDropdown.appendChild(option);
});
});


function showDiv(select) {
      var selectedOption = select.value;
      var div1 = document.getElementById('div1');
      var div2 = document.getElementById('div2');

      if (selectedOption === "Internal") {
          div1.style.display = "block";
          div2.style.display = "none";
      } else if (selectedOption === "External") {
          div1.style.display = "none";
          div2.style.display = "block";
      } else {
          div1.style.display = "none";
          div2.style.display = "none";
      }
  }