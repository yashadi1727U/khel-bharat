/**
 * KhelBharat - Data for Top 10 Sports Played in India
 * Accurate, thoroughly researched information on players, rules, ground dimensions, and Indian context.
 */

const sportsData = [
  {
    id: "cricket",
    name: "Cricket",
    hindiName: "क्रिकेट",
    rank: 1,
    category: "Team Field Sport",
    tagline: "India's Secular Religion & Cultural Obsession",
    badge: "Most Popular",
    themeColor: "from-blue-600 to-indigo-800",
    accentColor: "#2563eb",
    icon: "🏏",
    summary: "Cricket is far more than a sport in India; it is an emotion uniting 1.4 billion people. From buzzing urban stadiums to rural dusty alleys (Gully Cricket), India is the undisputed financial and passion epicenter of global cricket.",
    teamSize: {
      onField: "11 players per team",
      squad: "15 to 16 players in squad (with Impact Player rule in IPL)",
      roles: "Batsmen, Fast/Spin Bowlers, All-rounders, Wicketkeeper"
    },
    groundSpecs: {
      title: "Cricket Ground & Pitch Specifications",
      surface: "Natural grass outfield with a central prepared rolled clay/soil pitch",
      overallSize: "Circular or oval field; boundary distance ranges between 65 to 85 meters (70 to 90 yards) from the pitch center",
      pitchDimensions: "22 yards (20.12 meters / 66 ft) long between wickets; 10 feet (3.05 meters) wide",
      stumps: "3 wooden stumps at each end; 28 inches (71.1 cm) high with 2 wooden bails spanning 9 inches (22.9 cm)",
      creases: [
        "Popping Crease: 4 feet (1.22 m) in front of the bowling crease (batter's safe zone)",
        "Bowling Crease: Runs through the stumps, 8 feet 8 inches (2.64 m) wide",
        "Return Creases: Perpendicular to bowling crease, 4 feet 4 inches on either side of center"
      ],
      fieldCircles: "Inner Circle: 30-yard (27.4 m) radius from both pitch centers (governs fielding restrictions/powerplays)"
    },
    rules: {
      objective: "Score more runs than the opposing team while batting, and dismiss all 10 opposing batters or limit their runs while bowling/fielding.",
      formats: [
        "T20: 20 overs (120 balls) per side, explosive 3-hour match (e.g. IPL, T20 World Cup)",
        "ODI: 50 overs (300 balls) per side, 8-hour tactical battle (e.g. ICC Cricket World Cup)",
        "Test Cricket: 5 days, up to 90 overs per day, two innings per side, the purest test of endurance"
      ],
      scoringSystem: "Runs are scored by running between wickets (1, 2, 3), hitting the boundary along the ground (4 runs), or clearing the boundary in the air (6 runs). Extras include Wides, No-Balls, Byes, and Leg Byes.",
      dismissalMethods: [
        "Bowled: Ball knocks the bails off the stumps",
        "Caught: Fielder catches ball hit by bat before it touches the ground",
        "LBW (Leg Before Wicket): Ball hits pad/body in line with stumps without bat contact",
        "Run Out: Fielder breaks stumps with ball while batter is out of crease attempting a run",
        "Stumped: Wicketkeeper breaks stumps when batter is out of crease after missing the ball",
        "Others: Hit Wicket, Obstructing the Field, Timed Out"
      ],
      keyRules: [
        "Over: A legal over consists of 6 fair deliveries from one end; bowling ends alternate each over.",
        "No-Ball & Free Hit: Overstepping the popping crease awards 1 extra run and gives the batter a Free Hit next ball in limited-overs formats.",
        "DRS (Decision Review System): Teams can review umpire decisions using UltraEdge, Ball-Tracking, and Hawk-Eye technology."
      ]
    },
    famousPlayers: [
      {
        name: "Sachin Tendulkar",
        alias: "The Master Blaster / God of Cricket",
        role: "Right-Hand Batter",
        era: "1989 - 2013",
        stats: "100 International Centuries, 34,357 International Runs, 2011 World Cup Winner, Bharat Ratna",
        bio: "Widely regarded as one of the greatest batsmen in cricket history. For two decades, a nation held its breath whenever he walked to the crease."
      },
      {
        name: "Virat Kohli",
        alias: "King Kohli / Run Machine",
        role: "Top-Order Batter",
        era: "2008 - Present",
        stats: "80+ International Centuries, 2011 ODI & 2024 T20 World Cup Champion, Highest run-scorer in T20 World Cups",
        bio: "The modern chase-master known for supreme fitness, fierce aggression, and unmatched consistency across all formats."
      },
      {
        name: "MS Dhoni",
        alias: "Captain Cool / Thala",
        role: "Wicketkeeper-Batter & Captain",
        era: "2004 - 2020",
        stats: "Only captain to win all 3 ICC White-Ball Trophies (T20 WC 2007, ODI WC 2011, Champions Trophy 2013), 5 IPL Titles",
        bio: "Renowned for ice-cold nerve in crisis moments, lightning stumping speed, and iconic helicopter shot finishes."
      },
      {
        name: "Rohit Sharma",
        alias: "The Hitman",
        role: "Opening Batter & Captain",
        era: "2007 - Present",
        stats: "Record 3 ODI Double Centuries, Highest individual score (264 runs), Led India to 2024 T20 World Cup title",
        bio: "Effortless pull-shot artist with unmatched timing and captain of the ICC T20 World Cup 2024 championship squad."
      },
      {
        name: "Kapil Dev",
        alias: "The Haryana Hurricane",
        role: "Pace All-rounder & Captain",
        era: "1978 - 1994",
        stats: "Led India to legendary 1983 World Cup victory, 434 Test Wickets & 5,248 Test Runs",
        bio: "The pioneering all-rounder who transformed Indian cricket forever by bringing home the 1983 Prudential World Cup from Lord's."
      }
    ],
    tournaments: [
      { name: "Indian Premier League (IPL)", type: "Domestic Franchise T20 League (World's richest cricket league)" },
      { name: "Ranji Trophy", type: "Premier First-Class Domestic Tournament since 1934" },
      { name: "ICC Cricket World Cup", type: "Global 50-over Championship (India won in 1983 & 2011)" },
      { name: "ICC T20 World Cup", type: "Global 20-over Championship (India won in 2007 & 2024)" }
    ],
    governingBody: {
      name: "Board of Control for Cricket in India (BCCI)",
      headquarters: "Cricket Centre, Wankhede Stadium, Mumbai",
      international: "International Cricket Council (ICC)"
    },
    equipment: ["Cricket Bat (English/Kashmir Willow)", "Leather Ball (Cork & Leather)", "Pads & Gloves", "Helmet with Grille", "Wicketkeeping Gear"],
    grassrootsCulture: "Played in every nook and cranny as 'Gully Cricket' with tennis balls, plastic bats, and makeshift wickets like wooden crates or painted wall bricks. Local tournaments draw entire villages and neighborhoods."
  },

  {
    id: "kabaddi",
    name: "Kabaddi",
    hindiName: "कबड्डी",
    rank: 2,
    category: "Indigenous Contact Sport",
    tagline: "India's Ancient High-Octane Martial Tag Sport",
    badge: "Indigenous Pride",
    themeColor: "from-amber-600 to-orange-700",
    accentColor: "#ea580c",
    icon: "🤼",
    summary: "Born in ancient India and rooted in the Mahabharata, Kabaddi combines agility, wrestling, breath control, and raw tactical bravery. The Pro Kabaddi League (PKL) transformed this soil sport into India's second most-watched televised sports phenomenon.",
    teamSize: {
      onField: "7 active players per side",
      squad: "10 to 12 players in squad; up to 5 substitutions permitted",
      roles: "Raiders, Corners, Covers, All-rounders"
    },
    groundSpecs: {
      title: "Kabaddi Court Dimensions & Markings",
      surface: "Professional synthetic EVA foam mat (or traditional soft red clay/soil in rural Akhadas)",
      overallSize: "Men: 13.0 m × 10.0 m (42.6 ft × 32.8 ft); Women / Juniors: 12.0 m × 8.0 m",
      midLine: "Divides court into two equal halves (6.5 m × 10 m each for men)",
      baulkLine: "3.75 meters from the mid-line; a raider must cross this line to make the raid valid",
      bonusLine: "4.75 meters from the mid-line (1 meter past the baulk line); crossing gives 1 bonus point if 6+ defenders present",
      lobbies: "1.0 meter wide strips along both outer boundaries (activated only after touch contact)",
      sittingBlock: "Located 2 meters behind the end lines (8 m × 1 m) for dismissed players awaiting revival"
    },
    rules: {
      objective: "A raider enters the opponent's half, tags one or more defenders, and returns safely across the mid-line without being tackled, all within 30 seconds.",
      cantRule: "The raider must repeatedly and audibly chant the word 'Kabaddi' without breaking breath (the traditional 'Cant'). In modern PKL, a 30-second digital shot clock enforces timing.",
      scoringSystem: "1 touch point per tagged defender safely returned. Defenders score 1 tackle point if they stop the raider. Bonus point (1 pt) awarded if raider crosses bonus line with trailing foot in the air against 6+ defenders.",
      specialRules: [
        "Do-or-Die Raid: If a team produces two consecutive empty raids (no points scored), the 3rd raid is mandatory 'Do-or-Die'; raider must score or be declared out.",
        "Super Tackle: When a defending team has 3 or fewer players on mat and successfully tackles the raider, they are awarded 2 points instead of 1.",
        "All-Out (Lona): Eliminating all 7 opposing players gives 2 bonus points, after which the eliminated team is revived in full.",
        "Revival System: Scoring a point revives an out teammate in the exact order they were eliminated."
      ],
      matchDuration: "40 minutes split into two 20-minute halves, with a 5-minute half-time interval."
    },
    famousPlayers: [
      {
        name: "Pardeep Narwal",
        alias: "The Record-Breaker / Dubki King",
        role: "Raider",
        era: "2015 - Present",
        stats: "First player to cross 1,600+ PKL Raid Points, 3-time PKL Champion with Patna Pirates, Record 8-point single raid",
        bio: "Master of the signature 'Dubki' move where he ducks beneath crouching defenders and bursts past them to cross the mid-line."
      },
      {
        name: "Pawan Sehrawat",
        alias: "The Hi-Flyer",
        role: "Raider",
        era: "2016 - Present",
        stats: "Record 39 raid points in a single match, Asian Games Gold Medallist, PKL Most Valuable Player",
        bio: "Known for superhuman leaps over defender chains and explosive pace along the baulk line."
      },
      {
        name: "Anup Kumar",
        alias: "Captain Cool / Bonus Ka Badshah",
        role: "Raider & Captain",
        era: "2006 - 2018",
        stats: "Led India to 2016 Kabaddi World Cup gold, 2010 & 2014 Asian Games Gold, Arjuna Awardee",
        bio: "Mastermind tactician renowned for his uncanny ability to sneak bonus points under the nose of alert corners."
      },
      {
        name: "Manjeet Chhillar",
        alias: "One-Man Army",
        role: "All-Rounder / Cover Defender",
        era: "2010 - 2022",
        stats: "Most tackle points in PKL history, World Cup Gold, Arjuna Awardee",
        bio: "The fiercest defender in Indian kabaddi history, famous for bone-crushing blocks and thigh holds."
      }
    ],
    tournaments: [
      { name: "Pro Kabaddi League (PKL)", type: "Top professional franchise league with massive global viewership" },
      { name: "Asian Games Kabaddi", type: "India has won 8 Men's Gold and 3 Women's Gold medals" },
      { name: "Kabaddi World Cup", type: "Standard international format, India undefeated champion" },
      { name: "Senior National Kabaddi Championship", type: "Historic domestic state tournament" }
    ],
    governingBody: {
      name: "Amateur Kabaddi Federation of India (AKFI)",
      headquarters: "Jaipur / New Delhi",
      international: "International Kabaddi Federation (IKF)"
    },
    equipment: ["Grip Shoes / Barefoot on clay", "Knee and Ankle Support Sleeves", "Synthetic EVA interlocking mats", "Jerseys with traction grips"],
    grassrootsCulture: "In Punjab (Circle Style), Haryana, Tamil Nadu (Sadugudu), and Maharashtra (Hu-Tu-Tu), kabaddi tournaments are grand village festivals with winners receiving tractors, motorcycles, and pure ghee as prizes."
  },

  {
    id: "badminton",
    name: "Badminton",
    hindiName: "बैडमिंटन",
    rank: 3,
    category: "Racket Sport",
    tagline: "India's Olympic Medal Machine & Racket Phenomenon",
    badge: "Olympic Glory",
    themeColor: "from-emerald-600 to-teal-800",
    accentColor: "#059669",
    icon: "🏸",
    summary: "Modern badminton was formulated in Pune, India during the British Raj (originally called 'Poona'). Today, India is a premier badminton superpower boasting multiple Olympic medals, World Championships, and historic Thomas Cup supremacy.",
    teamSize: {
      onField: "1 player (Singles) or 2 players (Doubles / Mixed Doubles)",
      squad: "Individual or pairs representing clubs/states/nation",
      roles: "Front-court net player, Back-court smasher (in doubles)"
    },
    groundSpecs: {
      title: "Badminton Court Dimensions & Net Standards",
      surface: "Wooden flooring or BWF-approved synthetic rubberized mats (green/blue)",
      overallSize: "Rectangular court: 13.40 meters (44 feet) long",
      singlesWidth: "5.18 meters (17.0 feet) wide",
      doublesWidth: "6.10 meters (20.0 feet) wide (full court including outer side tramlines)",
      netSpecs: "Net height: 1.55 meters (5 ft 1 in) at edges; 1.524 meters (5 ft) at center",
      shortServiceLine: "1.98 meters (6.5 feet) from the net on both sides",
      longServiceLine: "Singles: Back boundary line (13.4 m); Doubles: 0.76 meters (2.5 ft) inside the back boundary",
      centerLine: "Divides court from short service line to back boundary into left and right service courts"
    },
    rules: {
      objective: "Hit the shuttlecock across the net with a racket and land it within the opponent's court boundary, or force the opponent into hitting wide/into net.",
      scoringSystem: "Rally Point System: Best of 3 games to 21 points. A point is scored on every rally regardless of who served. At 20-20, a side must lead by 2 clear points to win (capped at 30-29).",
      serviceRules: [
        "Diagonal Service: Server serves diagonally into opponent's service court.",
        "Right vs Left: Serve from right court when server's score is even (0, 2, 4...), and left court when score is odd (1, 3, 5...).",
        "Fixed Height Rule: Shuttle must be struck below 1.15 meters from the court surface at the moment of contact."
      ],
      faults: [
        "Shuttle lands outside the designated boundary line.",
        "Shuttle passes through or under the net, or touches player's body/clothing.",
        "Racket touches the net or invades opponent's airspace before shuttle has crossed.",
        "Shuttle is caught and slung instead of cleanly hit, or struck twice consecutively."
      ],
      matchDuration: "Variable, typically 35 to 80 minutes depending on rally lengths."
    },
    famousPlayers: [
      {
        name: "PV Sindhu",
        alias: "India's Badminton Queen",
        role: "Women's Singles",
        era: "2011 - Present",
        stats: "2x Olympic Medallist (Silver Rio 2016, Bronze Tokyo 2020), BWF World Champion 2019, Commonwealth Gold",
        bio: "First Indian woman to win two individual Olympic medals and World Championship Gold, known for explosive downward cross-court smashes."
      },
      {
        name: "Saina Nehwal",
        alias: "The Trailblazer",
        role: "Women's Singles",
        era: "2006 - 2022",
        stats: "Olympic Bronze (London 2012), Former World #1, 24 International Titles, 2x Commonwealth Games Gold",
        bio: "The icon who sparked India's modern badminton revolution, breaking the Chinese monopoly in world badminton."
      },
      {
        name: "Prakash Padukone",
        alias: "The Pioneer",
        role: "Men's Singles",
        era: "1970 - 1989",
        stats: "First Indian to win All England Championship (1980), World #1 in 1980, World Cup Gold 1981",
        bio: "The gentleman artist of touch and deceit at the net who placed Indian badminton on the global map."
      },
      {
        name: "Satwiksairaj Rankireddy & Chirag Shetty",
        alias: "Sat-Chi",
        role: "Men's Doubles",
        era: "2016 - Present",
        stats: "World #1 BWF Doubles Ranking, Asian Games Gold 2023, Thomas Cup Champions 2022, Indonesia Open Super 1000",
        bio: "The dynamic pair that turned India into a doubles powerhouse with Satwik's world-record 565 km/h smash and Chirag's predatory net kills."
      },
      {
        name: "Pullela Gopichand",
        alias: "The Master Coach",
        role: "Men's Singles & National Chief Coach",
        era: "1991 - Present",
        stats: "All England Champion 2001, Dronacharya Award, Architect of India's Olympic badminton medals",
        bio: "Legendary player turned super-mentor whose Hyderabad academy produced Saina, Sindhu, Srikanth, and Sai Praneeth."
      }
    ],
    tournaments: [
      { name: "Thomas & Uber Cup", type: "Historic Thomas Cup World Team Championship won by India in 2022" },
      { name: "India Open", type: "BWF World Tour Super 750 flagship event held at K.D. Jadhav Stadium, New Delhi" },
      { name: "Premier Badminton League (PBL)", type: "Franchise league featuring top global Olympic stars" },
      { name: "All England Open Badminton Championships", type: "World's oldest and most prestigious annual tournament" }
    ],
    governingBody: {
      name: "Badminton Association of India (BAI)",
      headquarters: "New Delhi",
      international: "Badminton World Federation (BWF)"
    },
    equipment: ["Graphite Carbon Badminton Racket (80-88g)", "Feather (Goose) or Nylon Shuttlecock", "Non-marking gum rubber court shoes", "Grip wraps"],
    grassrootsCulture: "Played outdoor across parks, residential societies, and colony lanes every winter evening with inexpensive nylon shuttles, alongside world-class indoor academies in Hyderabad, Bengaluru, and Pune."
  },

  {
    id: "field-hockey",
    name: "Field Hockey",
    hindiName: "हॉकी",
    rank: 4,
    category: "Team Field Sport",
    tagline: "India's Golden Legacy & Resurgent Olympic Powerhouse",
    badge: "National Heritage",
    themeColor: "from-blue-700 to-cyan-900",
    accentColor: "#0284c7",
    icon: "🏑",
    summary: "Historically India's greatest sporting glory, Indian hockey produced 8 Olympic Gold medals including six consecutive golds between 1928 and 1956. With back-to-back Olympic bronze medals in Tokyo 2020 and Paris 2024, hockey is soaring in a spectacular renaissance.",
    teamSize: {
      onField: "11 players per side (1 Goalkeeper, 10 Outfielders)",
      squad: "16 to 18 players in match squad; rolling substitutions permitted anytime",
      roles: "Goalkeeper, Fullbacks (Defenders), Halfbacks (Midfielders), Forwards (Strikers)"
    },
    groundSpecs: {
      title: "Field Hockey Pitch & Striking Circle Specs",
      surface: "Modern water-based synthetic Astroturf (blue/green turf with yellow ball)",
      overallSize: "Rectangular pitch: 91.40 meters (100 yards) long × 55.00 meters (60 yards) wide",
      strikingCircle: "D-shaped area: 14.63-meter (16-yard) radius drawn from the center of each goalpost",
      penaltySpot: "6.40 meters (7 yards) directly in front of the center of each goal line",
      penaltyCornerMarks: "Marked on the back line: 10 meters and 5 meters on either side of the goalposts",
      goals: "3.66 meters (12.0 feet) wide × 2.14 meters (7.0 feet) high with backboards and sideboards",
      quarterLines: "Lines 22.90 meters (25 yards) from each backline and a solid center line"
    },
    rules: {
      objective: "Maneuver the ball into the opponent's goal using only the flat side of the hockey stick from within the striking circle ('D').",
      scoringCircleRule: "A goal can ONLY be scored if the ball touches the stick of an attacking player inside the opponent's striking circle ('D').",
      matchDuration: "60 minutes divided into 4 quarters of 15 minutes each. Clock stops for penalty corners and goals.",
      penaltyCorner: "Awarded for accidental defensive fouls inside the circle or intentional fouls outside the circle within the 23m area. 1 attacker injects ball from baseline, 4 defenders + goalie defend, attackers execute push-stop-dragflick.",
      stickFouls: [
        "Players can only touch the ball with the flat face of the stick; rounded edge is illegal.",
        "Outfield players cannot touch the ball with their feet, legs, or any body part.",
        "Stick obstruction or dangerous lifted balls above knee height in crowded areas is penalized."
      ],
      penaltyCards: [
        "Green Card: 2-minute temporary player suspension",
        "Yellow Card: 5 or 10-minute temporary suspension based on severity",
        "Red Card: Permanent ejection from match; team plays a man down"
      ]
    },
    famousPlayers: [
      {
        name: "Major Dhyan Chand",
        alias: "The Wizard / Magician of Hockey",
        role: "Center Forward",
        era: "1926 - 1948",
        stats: "3 Olympic Golds (1928 Amsterdam, 1932 Los Angeles, 1936 Berlin), 570+ International Goals",
        bio: "The greatest hockey player the world has ever seen. His stick control was so magical that German authorities broke his stick to check if there was a magnet inside."
      },
      {
        name: "Balbir Singh Senior",
        alias: "The Golden Olympian",
        role: "Center Forward",
        era: "1947 - 1958",
        stats: "3 Olympic Golds (1948 London, 1952 Helsinki, 1956 Melbourne), Record 5 goals in Olympic Final 1952",
        bio: "Key spearhead of independent India's dominance, holding the unbroken record for most goals scored in an Olympic hockey final."
      },
      {
        name: "PR Sreejesh",
        alias: "The Great Wall of India",
        role: "Goalkeeper",
        era: "2006 - 2024",
        stats: "2x Olympic Bronze (Tokyo 2020, Paris 2024), World Games Athlete of the Year, Khel Ratna",
        bio: "Legendary goalkeeper whose miraculous penalty shootout saves against Germany, Britain, and Spain ended India's 41-year Olympic medal drought."
      },
      {
        name: "Harmanpreet Singh",
        alias: "The Sarpanch / Drag-Flick King",
        role: "Defender & Drag-Flicker (Captain)",
        era: "2015 - Present",
        stats: "Top scorer of Paris Olympics 2024 (10 goals), 2x Olympic Bronze, FIH Player of the Year",
        bio: "India's captain and the most lethal penalty corner specialist in modern world hockey."
      },
      {
        name: "Rani Rampal",
        alias: "Queen of Indian Women's Hockey",
        role: "Striker & Captain",
        era: "2009 - 2023",
        stats: "Led India to historic 4th place at Tokyo 2020 Olympics, World Games Athlete of the Year 2019, Khel Ratna",
        bio: "From modest beginnings in Shahabad, Haryana, she rose to become the youngest player to debut for India at age 14 and an inspirational national icon."
      }
    ],
    tournaments: [
      { name: "Olympic Games", type: "India holds all-time world record: 8 Gold, 1 Silver, 4 Bronze medals" },
      { name: "FIH Hockey World Cup", type: "India hosted 2018 and 2023 cups in Odisha's world-class stadiums" },
      { name: "Hockey India League (HIL)", type: "Revitalized high-profile franchise league for men and women" },
      { name: "Asian Games Hockey", type: "India won Gold at 2023 Hangzhou Asian Games" }
    ],
    governingBody: {
      name: "Hockey India",
      headquarters: "New Delhi",
      international: "International Hockey Federation (FIH)"
    },
    equipment: ["Composite Hockey Stick (Carbon fiber / fiberglass)", "Hard Dimpled Hockey Ball (156-163g)", "Turf Cleats", "Mouthguard & Shin Guards", "Goalkeeping Kickers, Legguards, and Helmet"],
    grassrootsCulture: "A religion in Odisha's Sundargarh tribal belt, Punjab's Sansarpur ('The Olympic Nursery'), and Coorg (Kodagu) in Karnataka where annual family tournaments feature over 200 family teams playing against each other."
  },

  {
    id: "football",
    name: "Football (Soccer)",
    hindiName: "फ़ुटबॉल",
    rank: 5,
    category: "Team Field Sport",
    tagline: "The World's Beautiful Game with Deep Indian Roots",
    badge: "Massive Fanbase",
    themeColor: "from-rose-600 to-red-800",
    accentColor: "#e11d48",
    icon: "⚽",
    summary: "Football holds immense historical and regional passion in India, particularly across West Bengal, Kerala, Goa, and the North-Eastern states. Today, the Indian Super League (ISL) and vibrant local rivalries like the Kolkata Derby draw passionate, stadium-filling crowds.",
    teamSize: {
      onField: "11 players per side (1 Goalkeeper, 10 Outfielders)",
      squad: "Up to 23 players on matchday; 5 substitutions allowed across 3 windows",
      roles: "Goalkeeper, Center Backs, Fullbacks, Central Midfielders, Wingers, Strikers"
    },
    groundSpecs: {
      title: "Football Pitch Dimensions & Markings",
      surface: "Natural grass or FIFA Quality Pro certified artificial turf",
      overallSize: "Length: 100 to 110 meters (110 to 120 yards); Width: 64 to 75 meters (70 to 80 yards)",
      penaltyArea: "16.5 meters (18 yards) from each goalpost and 16.5 meters into the pitch",
      goalArea: "5.5 meters (6 yards) from each goalpost and 5.5 meters into the pitch",
      penaltySpot: "11.0 meters (12 yards) from the center of the goal line",
      centerCircle: "9.15-meter (10-yard) radius centered at midpoint of pitch",
      goalposts: "7.32 meters (24.0 feet) wide × 2.44 meters (8.0 feet) high"
    },
    rules: {
      objective: "Kick or head the ball into the opponent's goal net without using hands or arms.",
      matchDuration: "90 minutes divided into two 45-minute halves, plus additional stoppage / injury time.",
      offsideRule: "A player is in an offside position if they are nearer to the opponent's goal line than both the ball and the second-last opponent (including goalkeeper) at the exact moment the ball is passed to them.",
      foulsAndCards: [
        "Direct Free Kick: Awarded for tripping, kicking, pushing, or handball. Can result in a penalty kick if inside the 18-yard box.",
        "Yellow Card: Formal caution for reckless tackles, persistent infringement, or unsporting behavior.",
        "Red Card: Ejection for violent conduct, denying an obvious goalscoring opportunity, or two yellow cards."
      ],
      throwInAndCorners: "Ball out on side = throw-in taken with two hands overhead and both feet on ground. Ball out on goal-line off defense = corner kick."
    },
    famousPlayers: [
      {
        name: "Sunil Chhetri",
        alias: "Captain, Leader, Legend",
        role: "Forward / Striker",
        era: "2005 - 2024",
        stats: "94 International Goals (4th highest international goalscorer in football history), 151 Caps, 7x AIFF Player of the Year, Khel Ratna",
        bio: "The defining face of 21st-century Indian football whose clinical finishing and leadership earned him global acclaim alongside Cristiano Ronaldo and Lionel Messi in international goal charts."
      },
      {
        name: "Bhaichung Bhutia",
        alias: "The Sikkimese Sniper",
        role: "Striker",
        era: "1995 - 2011",
        stats: "First Indian footballer to sign a professional contract with a European club (Bury FC, England), 40+ International Goals",
        bio: "Pioneered Indian football's professional era with electrifying pace, athletic headers, and leadership of the 2008 AFC Challenge Cup triumph."
      },
      {
        name: "P.K. Banerjee & Chuni Goswami",
        alias: "The Golden Era Titans",
        role: "Forwards",
        era: "1950s - 1960s",
        stats: "1962 Jakarta Asian Games Gold Medallists, 1960 Rome Olympics heroes",
        bio: "Spearheaded India's golden generation that placed 4th at the 1956 Melbourne Olympics and conquered Asia in 1962."
      },
      {
        name: "Gurpreet Singh Sandhu",
        alias: "The Wall in Goal",
        role: "Goalkeeper",
        era: "2011 - Present",
        stats: "First Indian to play in UEFA Europa League (Stabæk, Norway), ISL Golden Glove Winner",
        bio: "Towering 6 ft 6 in goalkeeper who led memorable clean sheets against Asian champions Qatar in Doha."
      },
      {
        name: "Ngangom Bala Devi",
        alias: "The Trailblazer of Women's Football",
        role: "Striker",
        era: "2005 - Present",
        stats: "First Indian woman to sign a professional contract in Europe (Rangers FC, Scotland), 50+ International Goals",
        bio: "Manipuri scoring sensation who shattered barriers by scoring in the Scottish Women's Premier League."
      }
    ],
    tournaments: [
      { name: "Indian Super League (ISL)", type: "Top-tier franchise league featuring AFC Champions League spots" },
      { name: "Durand Cup", type: "Asia's oldest football tournament and world's third oldest (founded 1888)" },
      { name: "I-League", type: "India's premier promotion-relegation national championship" },
      { name: "Santosh Trophy", type: "Premier historic inter-state championship founded in 1941" },
      { name: "Kolkata Derby", type: "Mohun Bagan vs East Bengal - 100+ year rivalry drawing 70,000+ fans at Salt Lake Stadium" }
    ],
    governingBody: {
      name: "All India Football Federation (AIFF)",
      headquarters: "Football House, Dwarka, New Delhi",
      international: "FIFA & Asian Football Confederation (AFC)"
    },
    equipment: ["Standard Size 5 Football", "Studded Cleats / Boots", "Shin Guards", "Team Kit"],
    grassrootsCulture: "Kerala's 'Sevens Football' tournaments played under floodlights, Kolkata's century-old Maidan culture, and the passionate youth hotbeds of Mizoram, Manipur, and Meghalaya."
  },

  {
    id: "chess",
    name: "Chess",
    hindiName: "शतरंज / चतुरंग",
    rank: 6,
    category: "Mind Sport",
    tagline: "India's Ancient Gift to the World & Modern Chess Superpower",
    badge: "Double Olympiad Gold",
    themeColor: "from-slate-700 to-zinc-900",
    accentColor: "#475569",
    icon: "♟️",
    summary: "Chess originated in 6th-century India as 'Chaturanga' (Four Divisions of the Military: Infantry, Cavalry, Elephants, Chariots). Today, India is the reigning double gold champion of the Chess Olympiad and boasts the youngest world title challenger in human history.",
    teamSize: {
      onField: "1 player vs 1 player (Individual) or 4-player team matches (Olympiad)",
      squad: "Squad of 5 in Olympiad (4 boards + 1 reserve)",
      roles: "Opening specialist, Endgame virtuoso, Tactical calculator"
    },
    groundSpecs: {
      title: "Chess Board & Piece Specifications",
      surface: "Wooden, vinyl, or digital sensory tournament board",
      overallSize: "Square board: 64 equal squares in an 8×8 grid",
      squareSize: "Tournament standard: 5.0 to 6.0 cm (2.0 to 2.36 inches) per square",
      boardSetup: "'White on right' bottom corner square; Queen on her own color (White Queen on white, Black Queen on black)",
      pieces: "32 total pieces (16 White, 16 Black): 1 King, 1 Queen, 2 Rooks, 2 Bishops, 2 Knights, 8 Pawns",
      kingHeight: "Tournament standard King height: 9.5 cm (3.75 inches)"
    },
    rules: {
      objective: "Deliver 'Checkmate' to the opponent's King, placing it under inevitable attack with no legal moves to escape, block, or capture.",
      pieceMovements: [
        "Pawn: Moves 1 square forward (option of 2 squares on initial move); captures 1 square diagonally forward. Special: En Passant and Promotion to Queen upon reaching 8th rank.",
        "Knight: Unique 'L' shape (2 squares in one direction, 1 square perpendicular); can jump over pieces.",
        "Bishop: Moves diagonally any number of squares on its original square color.",
        "Rook: Moves horizontally or vertically along ranks and files any number of squares.",
        "Queen: The most powerful piece; combines movement of Rook and Bishop.",
        "King: Moves 1 square in any direction. Can execute 'Castling' with an unmoved Rook for safety."
      ],
      drawConditions: [
        "Stalemate: Player whose turn it is has no legal move and their King is NOT in check.",
        "Threefold Repetition: The exact same board position occurs 3 times with same player to move.",
        "50-Move Rule: 50 consecutive moves completed by both players with no pawn move and no capture.",
        "Insufficient Material: Neither player has enough pieces to force a mate (e.g. King + Bishop vs King)."
      ],
      timeControls: "Classical (90 min + 30 sec increment), Rapid (15 min + 10 sec increment), Blitz (3 min + 2 sec increment)."
    },
    famousPlayers: [
      {
        name: "Viswanathan Anand",
        alias: "The Tiger of Madras / Vishy",
        role: "Grandmaster (India's 1st GM in 1988)",
        era: "1988 - Present",
        stats: "5-time Undisputed World Champion (2000, 2007, 2008, 2010, 2012), India's 1st Rajiv Gandhi Khel Ratna awardee",
        bio: "The foundational icon who inspired an entire subcontinent of chess prodigies with lightning calculation speed and gentlemanly sportsmanship."
      },
      {
        name: "D Gukesh",
        alias: "The Historic Challenger",
        role: "Grandmaster",
        era: "2019 - Present",
        stats: "Youngest FIDE Candidates Champion in history (age 17), 2024 Chess Olympiad Individual & Team Gold, 2800+ Live Rating",
        bio: "Prodigious Chennai grandmaster who qualified to challenge for the World Chess Championship title in 2024 at just 17 years old."
      },
      {
        name: "R Praggnanandhaa",
        alias: "Pragg",
        role: "Grandmaster",
        era: "2018 - Present",
        stats: "FIDE World Cup 2023 Finalist, Defeated Magnus Carlsen multiple times, 2024 Olympiad Gold Medallist",
        bio: "Phenomenal talent whose poise and creative calculation made him an international sensation alongside his sister, GM Vaishali Rameshbabu."
      },
      {
        name: "Arjun Erigaisi",
        alias: "The 2800 Rating Crusher",
        role: "Grandmaster",
        era: "2018 - Present",
        stats: "Crossed 2800 Elo rating barrier (World #3 in 2024), 2024 Olympiad Individual Gold on Board 3",
        bio: "Telangana marvel known for fearless tactical complications and relentless fighting spirit in every tournament."
      },
      {
        name: "Koneru Humpy",
        alias: "The Pioneer of Indian Women's Chess",
        role: "Grandmaster",
        era: "2002 - Present",
        stats: "World Rapid Champion 2019, Former World #2 Women's rating, Arjuna Award & Padma Shri",
        bio: "Became the youngest woman in history to achieve the full Men's Grandmaster title at age 15 in 2002."
      }
    ],
    tournaments: [
      { name: "FIDE Chess Olympiad", type: "India clinched historical Double Gold (Men & Women) at 45th Olympiad in Budapest 2024" },
      { name: "Global Chess League (GCL)", type: "World's premier franchise team rapid chess league created by Tech Mahindra" },
      { name: "Tata Steel Chess India", type: "Flagship super-tournament held annually in Kolkata" },
      { name: "FIDE World Championship", type: "Ultimate individual summit clash for the world crown" }
    ],
    governingBody: {
      name: "All India Chess Federation (AICF)",
      headquarters: "Chennai, Tamil Nadu (India's Chess Capital)",
      international: "International Chess Federation (FIDE)"
    },
    equipment: ["Staunton Chess Set (Triple-weighted wooden/plastic pieces)", "Digital DGT Chess Clock", "Scorebook (Scoresheet) & Pen"],
    grassrootsCulture: "Chennai is revered as the 'Chess Mecca of the World' with hundreds of neighborhood academies, chess cafes, and schools where chess is a mandatory curriculum subject."
  },

  {
    id: "kho-kho",
    name: "Kho-Kho",
    hindiName: "खो-खो",
    rank: 7,
    category: "Indigenous Tag & Pursuit Sport",
    tagline: "India's Lightning-Fast Tag & Agility Phenomenon",
    badge: "Traditional Speed",
    themeColor: "from-yellow-600 to-amber-800",
    accentColor: "#d97706",
    icon: "🏃",
    summary: "Originating in Maharashtra and historically played on chariots called 'Rathera', Kho-Kho is an intensely fast-paced indigenous pursuit game testing cardiovascular endurance, acrobatic dodging, and split-second tactical reflexes.",
    teamSize: {
      onField: "9 active players on the court per side (Chasing or Defending)",
      squad: "12 to 15 players in match squad; defenders enter in batches of 3",
      roles: "Active Chaser, Sitting Chasers, Defenders (Dodgers / Runners)"
    },
    groundSpecs: {
      title: "Kho-Kho Court Dimensions & Pole Setup",
      surface: "Even clay / red mud court or synthetic indoor rubberized taraflex mat",
      overallSize: "Senior Men & Women Court: 27.0 meters long × 16.0 meters wide",
      centralLane: "24.0 meters long × 30 cm wide connecting the two wooden poles",
      poles: "Two cylindrical wooden poles fixed at ends of central lane; 1.20 to 1.25 meters high above ground",
      crossLanes: "8 cross lanes (16.0 m long × 35 cm wide) cutting perpendicular through central lane",
      chaserSquares: "8 rectangular boxes (35 cm × 30 cm) where chasers sit facing alternate directions",
      freeZone: "Rectangle behind each pole: 1.50 meters × 16.0 meters where active chaser can change directions freely"
    },
    rules: {
      objective: "The chasing team aims to touch and eliminate all 9 defending players in the shortest possible time, while defenders aim to stay not-out across their turn.",
      matchStructure: "Match consists of 2 innings. Each inning consists of 1 Chasing turn and 1 Defending turn (9 minutes each for seniors, with a 3-minute break between turns).",
      givingKho: "An active chaser passes pursuit authority to a seated teammate by firmly touching them on the back and uttering 'KHO!' loudly. The seated player immediately stands and pursues.",
      strictRules: [
        "No Crossing the Center Line: An active chaser cannot step over or cross the central lane divider.",
        "Direction Rule: Once a chaser begins running in one direction along the lane, they MUST continue in that direction until they reach the pole or give Kho.",
        "Pole Turning: Chasers can circle around the pole in the Free Zone to switch directions.",
        "Defender Entry: 9 defenders divide into 3 batches of 3 players each; next batch enters court only when previous batch is dismissed."
      ],
      dismissals: "A defender is declared OUT when touched with a hand by an active chaser, when stepping out of bounds, or entering late."
    },
    famousPlayers: [
      {
        name: "Sarika Kale",
        alias: "The Arjuna Awardee Trailblazer",
        role: "All-Rounder / Defender",
        era: "2010 - Present",
        stats: "Arjuna Award 2020 (First Kho-Kho player in 22 years), Led India to South Asian Games Gold",
        bio: "Overcame extreme poverty in Osmanabad to captain the Indian National Women's team and revive national prestige for the sport."
      },
      {
        name: "Praveen Kumar & Ramji Kashyap",
        alias: "Ultimate Kho Kho Superstars",
        role: "All-Rounders & Wazir",
        era: "2022 - Present",
        stats: "Defenders of the Season in Ultimate Kho Kho (UKK), Record Sky-Dives and Pole-Dives",
        bio: "Pioneered high-flying acrobatic dives on synthetic mats, clocking over 4 minutes of dodging against elite chasing packs."
      },
      {
        name: "Pratik Waikar",
        alias: "The Tactical General",
        role: "Chaser & Captain",
        era: "2014 - Present",
        stats: "Champion Captain of Telugu Yoddhas / UKK, National Gold Medallist",
        bio: "Master of fake shoulder drops and split-second 'Pole Dives' to tag defenders before they reach the free zone."
      }
    ],
    tournaments: [
      { name: "Ultimate Kho Kho (UKK)", type: "Televised franchise revolution featuring 'Wazir' dynamic and bonus points" },
      { name: "National Kho Kho Championship", type: "Senior, Junior, and Sub-Junior national tournaments organized by KKFI" },
      { name: "Asian Kho Kho Championship", type: "Continental championship where India has remained dominant" }
    ],
    governingBody: {
      name: "Kho Kho Federation of India (KKFI)",
      headquarters: "New Delhi",
      international: "Asian Kho Kho Federation & International Kho Kho Federation"
    },
    equipment: ["Padded Knee & Elbow Sleeves", "Traction Court Shoes", "Cotton headbands / wristbands", "Two wooden target poles"],
    grassrootsCulture: "An absolute staple in Indian schools, physical education drills, and rural sports meets across Maharashtra, Karnataka, Gujarat, and Andhra Pradesh."
  },

  {
    id: "wrestling",
    name: "Wrestling (Kushti & Freestyle)",
    hindiName: "कुश्ती / दंगल",
    rank: 8,
    category: "Combat & Traditional Sport",
    tagline: "India's Soil of Warriors & Continuous Olympic Podiums",
    badge: "Warrior Heritage",
    themeColor: "from-stone-700 to-amber-950",
    accentColor: "#b45309",
    icon: "🤼‍♂️",
    summary: "Rooted in India's ancient epics (Malla-yuddha) and popularized through muddy village Akhadas, Indian wrestling has produced continuous Olympic medals since 2008. From village Dangals to international mats, Kushti is a disciplined way of life.",
    teamSize: {
      onField: "1 vs 1 in weight categories",
      squad: "Weight categories: Men's Freestyle (57kg, 65kg, 74kg, 86kg, 97kg, 125kg), Women's Freestyle (50kg, 53kg, 57kg, 62kg, 68kg, 76kg)",
      roles: "Wrestler (Pehlwan), Coach (Ustad / Guru)"
    },
    groundSpecs: {
      title: "Wrestling Mat & Traditional Akhada Specifications",
      surface: "Modern: UWW-approved high-density shock-absorbing vinyl mat; Traditional: Mud pit (Mitti ka Akhada) prepared with mustard oil, buttermilk, turmeric, and camphor",
      matDimensions: "12.0 meters × 12.0 meters square mat",
      contestArea: "Circular ring 9.0 meters in diameter",
      centralCircle: "1.0 meter diameter in center of the mat",
      passivityZone: "1.0 meter wide red/orange band marking edge of contest circle",
      protectionArea: "1.50 meters border around the contest circle to prevent injury on falls"
    },
    rules: {
      objective: "Pin both of the opponent's shoulder blades firmly to the mat (Victory by Fall / Touche), or accumulate more technical points during the bout.",
      boutDuration: "Two periods of 3 minutes each, separated by a 30-second interval.",
      pointScoring: [
        "Takedown (2 points): Bringing opponent to the mat and establishing control behind their back.",
        "Reversal (1 point): Escaping from an inferior position on the mat to control on top.",
        "Exposure (2-4 points): Turning opponent's shoulders past 90 degrees towards the mat.",
        "Grand Amplitude Throw (4 or 5 points): High throwing maneuvers launching opponent through the air directly into danger."
      ],
      victoryConditions: [
        "Fall (Pin): Immediate victory at any moment if shoulders held to mat.",
        "Technical Superiority: An athlete builds a 10-point lead over the opponent.",
        "Points: Highest points at the end of regulation time."
      ],
      illegalMoves: "No striking, biting, eye gouging, twisting fingers, attacking the groin, or grabbing singlet."
    },
    famousPlayers: [
      {
        name: "K.D. Jadhav",
        alias: "The Pocket Dynamo",
        role: "Bantamweight Freestyle",
        era: "1948 - 1952",
        stats: "Independent India's 1st Individual Olympic Medallist (Bronze at Helsinki 1952)",
        bio: "The Maharashtra legend who etched independent India's name on the individual Olympic honours board."
      },
      {
        name: "Sushil Kumar",
        alias: "Two-Time Olympic Medallist",
        role: "66kg Freestyle",
        era: "2003 - 2014",
        stats: "Bronze at Beijing 2008, Silver at London 2012, World Champion 2010",
        bio: "The iconic pehlwan whose back-to-back Olympic medals ignited the modern Indian Olympic combat revolution."
      },
      {
        name: "Bajrang Punia",
        alias: "The Tank",
        role: "65kg Freestyle",
        era: "2013 - Present",
        stats: "Olympic Bronze (Tokyo 2020), 4-time World Championship Medallist, Asian Games Gold",
        bio: "Relentless stamina machine who fought through injuries to capture Olympic and world championship podiums."
      },
      {
        name: "Sakshi Malik & Vinesh Phogat",
        alias: "The Trailblazing Sisters of Indian Mat",
        role: "58kg / 50kg Freestyle",
        era: "2014 - Present",
        stats: "Sakshi: India's 1st Female Olympic Wrestling Medallist (Rio 2016 Bronze); Vinesh: 2x World Medallist, Asian Games Champion, Paris 2024 Finalist",
        bio: "Broke deeply entrenched patriarchal barriers in rural Haryana to conquer the world stage and inspire millions of young girls."
      },
      {
        name: "Aman Sehrawat",
        alias: "The Young Gun",
        role: "57kg Freestyle",
        era: "2021 - Present",
        stats: "Olympic Bronze Medal at Paris 2024 (Age 21 - India's youngest individual Olympic medallist)",
        bio: "Chhatrasal Stadium prodigy who continued India's proud 57kg freestyle Olympic wrestling medal tradition."
      }
    ],
    tournaments: [
      { name: "Olympic Games", type: "India has won 8 Olympic wrestling medals (continuous since 2008)" },
      { name: "World Wrestling Championships", type: "Annual global summit conducted by United World Wrestling (UWW)" },
      { name: "Bharat Kesari Dangal", type: "Grand traditional soil dangal awarding cash prizes, silver maces (Gada), and title" },
      { name: "Pro Wrestling League (PWL)", type: "Franchise league featuring Olympic and world champions" }
    ],
    governingBody: {
      name: "Wrestling Federation of India (WFI)",
      headquarters: "New Delhi",
      international: "United World Wrestling (UWW)"
    },
    equipment: ["Wrestling Singlet (Red or Blue)", "Specialist flexible wrestling shoes with rubber traction", "Langot (traditional cotton supporter in Akhada)", "Knee protectors"],
    grassrootsCulture: "Akhadas of Haryana (Chhatrasal, Rohtak) and Maharashtra (Kolhapur) follow strict Brahmacharya routines: 5 AM runs, hundreds of Dand-Baithaks (hindu pushups and squats), rope climbs, and a diet of milk, almonds, and desi ghee."
  },

  {
    id: "table-tennis",
    name: "Table Tennis",
    hindiName: "टेबल टेनिस",
    rank: 9,
    category: "Racket & Precision Sport",
    tagline: "India's Lightning Reflexes & Rapidly Rising Global Power",
    badge: "Rising Force",
    themeColor: "from-cyan-700 to-sky-950",
    accentColor: "#0891b2",
    icon: "🏓",
    summary: "Known recreationally as Ping Pong, Table Tennis has surged from a recreational clubhouse pastime into an elite sport for India. Indian paddlers regularly beat Chinese, Japanese, and European top-10 players and reach Olympic knockout rounds.",
    teamSize: {
      onField: "1 player (Singles) or 2 players (Doubles / Mixed Doubles)",
      squad: "Team event consists of 3 players per tie (3 singles + 1 doubles format)",
      roles: "Attacking looper, Close-to-table blocker, Defensive chopper"
    },
    groundSpecs: {
      title: "Table Tennis Table & Arena Dimensions",
      surface: "Engineered hardboard or composite matte surface (blue or green)",
      tableLength: "2.74 meters (9.0 feet) long",
      tableWidth: "1.525 meters (5.0 feet) wide",
      tableHeight: "76.0 cm (2.5 feet / 30 inches) above the floor",
      netSpecs: "Net height: 15.25 cm (6 inches) along entire width; overhangs sides by 15.25 cm",
      arenaSize: "International match arena: Minimum 14.0 m long × 7.0 m wide with 5.0 m vertical clearance"
    },
    rules: {
      objective: "Hit the ball over the net onto the opponent's side of the table such that they cannot return it legally.",
      scoringSystem: "Best of 5 or 7 games. Each game played to 11 points. A player must win by at least 2 clear points (e.g. 12-10, 13-11).",
      serviceRules: [
        "Toss: Ball must rest freely on open flat palm, thrown vertically at least 16 cm (6 inches) into the air without spin.",
        "Strike: Must be struck as it falls, behind the end line and above table level.",
        "Bounce: Must bounce once on server's side, pass over the net, and bounce on receiver's side.",
        "Rotation: Service alternates every 2 points (every 1 point during deuce)."
      ],
      doublesSpecifics: "Service must be diagonal from right half-court to right half-court. Partners must alternate hitting the ball sequentially.",
      letCall: "If a legal serve touches the net assembly and lands in the receiver's court, a 'Let' is called and the serve is replayed."
    },
    famousPlayers: [
      {
        name: "Achanta Sharath Kamal",
        alias: "The Ageless Legend",
        role: "Offensive Right-Hand Paddler",
        era: "2002 - Present",
        stats: "13 Commonwealth Games Medals (7 Gold), 5-time Olympian, India's Olympic Flagbearer Paris 2024, Khel Ratna",
        bio: "The towering patriarch of Indian table tennis who competed across two decades at the highest international level with lethal forehand drives."
      },
      {
        name: "Manika Batra",
        alias: "India's TT Queen",
        role: "Long-Pimples Tactician",
        era: "2011 - Present",
        stats: "First Indian to reach Round of 16 in Olympic Singles (Paris 2024), 2018 Commonwealth Games 4 Medals (2 Gold), World Top 25",
        bio: "Renowned for twiddling her racket mid-rally to confound opponents with tricky long-pimpled rubber spins."
      },
      {
        name: "Sathiyan Gnanasekaran",
        alias: "The Master Strategist",
        role: "Speed & Counter-Attack Specialist",
        era: "2012 - Present",
        stats: "First Indian paddler to break into the World Top 25, ITTF Pro Tour Titles",
        bio: "An engineering graduate whose analytical calculation of ball angles and rapid-fire blocking elevated Indian men's table tennis."
      },
      {
        name: "Sreeja Akula",
        alias: "The National Dynamo",
        role: "Offensive All-Rounder",
        era: "2018 - Present",
        stats: "Commonwealth Games Mixed Doubles Gold (with Sharath), Historic Paris 2024 Round of 16, World Top 25",
        bio: "Hyderabad sensation who defeated world top-10 players with lightning fast short-pimpled forehand attacks."
      }
    ],
    tournaments: [
      { name: "Ultimate Table Tennis (UTT)", type: "Franchise league drawing top European and Asian Olympic paddlers to India" },
      { name: "WTT Star Contender Goa", type: "Prestigious World Table Tennis marquee tournament hosted in India" },
      { name: "Commonwealth Games", type: "India has dominated TT medals across recent 2018 and 2022 editions" },
      { name: "World Table Tennis Championships", type: "Global team and individual world crown" }
    ],
    governingBody: {
      name: "Table Tennis Federation of India (TTFI)",
      headquarters: "New Delhi",
      international: "International Table Tennis Federation (ITTF)"
    },
    equipment: ["Custom Laminated Blade (Wood + Carbon layers)", "Inverted or Pimpled Rubber Sheets with sponge backing", "40mm 3-Star Celluloid-Free Plastic Poly Balls (2.7g)"],
    grassrootsCulture: "Widely played in every college common room, corporate campus, residential club, and community recreation center across Chennai, Kolkata, Mumbai, and Delhi."
  },

  {
    id: "athletics",
    name: "Athletics (Javelin Throw & Track)",
    hindiName: "एथलेटिक्स / भाला फेंक",
    rank: 10,
    category: "Track & Field",
    tagline: "India's Golden Era in Global Track & Field",
    badge: "Golden Era",
    themeColor: "from-amber-500 to-yellow-800",
    accentColor: "#ca8a04",
    icon: "🏃‍♂️",
    summary: "With Neeraj Chopra's historic Olympic Gold at Tokyo 2020, World Championship title, and Paris 2024 Silver, athletics in India has witnessed a seismic cultural transformation. Track and field is now inspiring millions of youth across rural and urban India.",
    teamSize: {
      onField: "Individual competitors or 4-member relay teams (4×400m)",
      squad: "Athletes compete in specific disciplines (Sprints, Hurdles, Javelin, Steeplechase, Triple Jump)",
      roles: "Sprinter, Middle-distance runner, Thrower, Jumper"
    },
    groundSpecs: {
      title: "Standard 400m Track & Javelin Sector Specs",
      surface: "World Athletics certified synthetic polyurethane / tartan track (Mondo or Polytan)",
      trackOval: "400-meter oval track with two 84.39m straights and two bends (radius 36.50m); 8 or 9 lanes (1.22m width each)",
      javelinRunway: "30.0 to 36.5 meters long × 4.0 meters wide synthetic runway",
      throwingArc: "White wooden or metal curved strip (radius 8.0 meters) at end of runway",
      landingSector: "Cinder or grass sector fanning out at a 28.96-degree angle from center of throwing arc",
      javelinSpecs: "Men: 800 grams weight, 2.60 to 2.70 meters long; Women: 600 grams weight, 2.20 to 2.30 meters long"
    },
    rules: {
      objective: "Run faster, jump higher, or throw further than any competitor under standardized technical conditions.",
      javelinRules: [
        "Grip: Javelin must be held at the cord grip with one hand only.",
        "Throwing Motion: Must be thrown over the shoulder or upper part of the throwing arm; cannot be slung.",
        "Foul Arc: Athlete must not touch or cross the boundary lines of the runway or the foul arc until the javelin lands.",
        "Valid Landing: Point (tip) of the javelin must pierce or mark the turf inside the 28.96° landing sector first.",
        "Attempts: 3 qualifying rounds; top 8 throwers get 3 additional final throws. Longest legal throw wins."
      ],
      trackRules: [
        "False Start Rule: Any athlete responsible for a false start is immediately disqualified (zero tolerance).",
        "Lane Discipline: Runners in 100m, 200m, 400m must remain entirely within their allocated lanes.",
        "Finish Line: Timing stops when the athlete's torso (not head, arms, or legs) crosses the vertical plane of the finish line."
      ]
    },
    famousPlayers: [
      {
        name: "Neeraj Chopra",
        alias: "The Golden Boy of Indian Sport",
        role: "Men's Javelin Throw",
        era: "2016 - Present",
        stats: "Olympic Gold (Tokyo 2020), Olympic Silver (Paris 2024), World Athletics Champion 2023, Diamond League Champion, Personal Best: 89.94m",
        bio: "Independent India's first-ever Olympic Track and Field champion who transformed a country's sporting self-belief with ice-cool swagger and historic 88m+ throws."
      },
      {
        name: "Milkha Singh",
        alias: "The Flying Sikh",
        role: "400m / 200m Sprint",
        era: "1956 - 1964",
        stats: "1958 Commonwealth Games Gold (Cardiff), 4 Asian Games Golds, 4th place at Rome 1960 Olympics (45.73s)",
        bio: "The legendary sprinter who escaped partition trauma to become independent India's first global track superstar."
      },
      {
        name: "P.T. Usha",
        alias: "The Payyoli Express / Queen of Indian Track",
        role: "400m Hurdles / Sprints",
        era: "1980 - 2000",
        stats: "4 Gold medals at 1986 Seoul Asian Games, 4th place at 1984 Los Angeles Olympics (missed bronze by 1/100th second), Current IOA President",
        bio: "The trailblazer of women's athletics in India whose speed inspired two generations of female sprinters."
      },
      {
        name: "Anju Bobby George",
        alias: "The Pioneer Jumper",
        role: "Long Jump",
        era: "1998 - 2008",
        stats: "World Athletics Championship Bronze Medallist (Paris 2003 - India's 1st Senior World Championship medal), Asian Games Gold",
        bio: "Broke through at the highest world athletics level with a historic 6.70m leap in Paris."
      },
      {
        name: "Avinash Sable",
        alias: "The Steeplechase Dynamo",
        role: "3000m Steeplechase",
        era: "2018 - Present",
        stats: "Commonwealth Games Silver Medallist (broke 28-year Kenyan monopoly), Asian Games Gold, Paris 2024 Finalist",
        bio: "Indian Army soldier from Beed, Maharashtra who single-handedly brought India into world elite middle-distance running."
      }
    ],
    tournaments: [
      { name: "Olympic Games Athletics", type: "Summit of world track and field competitions" },
      { name: "World Athletics Championships", type: "Biennial world championships" },
      { name: "Diamond League", type: "Elite global series featuring the world's top-ranked athletes" },
      { name: "National Inter-State Senior Athletics", type: "Flagship national trials for Olympic and Asian Games selection" }
    ],
    governingBody: {
      name: "Athletics Federation of India (AFI)",
      headquarters: "New Delhi",
      international: "World Athletics"
    },
    equipment: ["Competition Javelins (Nordic / Nemeth carbon spears)", "Track Spikes with interchangeable 6-9mm metal pins", "Starting blocks", "Measuring laser telemetry systems"],
    grassrootsCulture: "Traditional rural athletics like bullock cart racing and tug-of-war are being elevated into modern athletic training centers in Patiala (NIS), Bengaluru (SAI), and military sport institutes."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = sportsData;
}
