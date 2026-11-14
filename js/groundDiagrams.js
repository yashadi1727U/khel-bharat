/**
 * KhelBharat - Ground & Court SVG Diagrams
 * Renders precise, high-contrast, labeled architectural SVG diagrams for each sport.
 */

const groundDiagrams = {
  cricket: function() {
    return `
      <svg viewBox="0 0 700 500" class="w-full h-auto max-h-[460px] mx-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="grassGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#15803d" />
            <stop offset="70%" stop-color="#166534" />
            <stop offset="100%" stop-color="#14532d" />
          </radialGradient>
          <pattern id="grassStripes" width="30" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="15" height="30" fill="rgba(255,255,255,0.03)" />
          </pattern>
        </defs>

        <!-- Outfield Oval -->
        <ellipse cx="350" cy="250" rx="330" ry="230" fill="url(#grassGrad)" stroke="#22c55e" stroke-width="3" />
        <ellipse cx="350" cy="250" rx="330" ry="230" fill="url(#grassStripes)" />
        <ellipse cx="350" cy="250" rx="322" ry="222" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="6,4" />

        <!-- 30-Yard Circle (Inner Circle) -->
        <ellipse cx="350" cy="250" rx="190" ry="140" fill="none" stroke="#facc15" stroke-width="2.5" stroke-dasharray="8,6" />
        <text x="350" y="125" text-anchor="middle" fill="#fef08a" font-size="12" font-weight="600">30-Yard Fielding Circle (27.4 m radius)</text>

        <!-- Pitch Rectangle (22 Yards) -->
        <rect x="315" y="160" width="70" height="180" rx="3" fill="#d97706" stroke="#fbbf24" stroke-width="2" />
        
        <!-- Pitch Markings -->
        <!-- Popping Creases -->
        <line x1="305" y1="190" x2="395" y2="190" stroke="#ffffff" stroke-width="2.5" />
        <line x1="305" y1="310" x2="395" y2="310" stroke="#ffffff" stroke-width="2.5" />
        <!-- Bowling Creases -->
        <line x1="315" y1="175" x2="385" y2="175" stroke="#ffffff" stroke-width="2" />
        <line x1="315" y1="325" x2="385" y2="325" stroke="#ffffff" stroke-width="2" />

        <!-- Stumps / Wickets -->
        <circle cx="340" cy="175" r="3" fill="#ffffff" />
        <circle cx="350" cy="175" r="3" fill="#ffffff" />
        <circle cx="360" cy="175" r="3" fill="#ffffff" />
        <circle cx="340" cy="325" r="3" fill="#ffffff" />
        <circle cx="350" cy="325" r="3" fill="#ffffff" />
        <circle cx="360" cy="325" r="3" fill="#ffffff" />

        <!-- Dimension Callouts -->
        <!-- Pitch Length (22 Yards) -->
        <line x1="290" y1="175" x2="290" y2="325" stroke="#f8fafc" stroke-width="1.5" marker-start="url(#dot)" marker-end="url(#dot)" />
        <text x="245" y="255" fill="#f8fafc" font-size="12" font-weight="700">22 Yards</text>
        <text x="245" y="270" fill="#cbd5e1" font-size="10">(20.12 m)</text>

        <!-- Pitch Width -->
        <line x1="315" y1="145" x2="385" y2="145" stroke="#f8fafc" stroke-width="1.5" />
        <text x="350" y="140" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="600">10 ft (3.05 m)</text>

        <!-- Boundary Radius -->
        <line x1="350" y1="250" x2="670" y2="250" stroke="#f8fafc" stroke-width="1.5" stroke-dasharray="4,4" />
        <text x="510" y="242" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="600">Boundary: 65 - 85 m (70 - 90 yds)</text>

        <!-- Crease Labels -->
        <text x="405" y="194" fill="#ffffff" font-size="10">Popping Crease (4 ft)</text>
        <text x="405" y="314" fill="#ffffff" font-size="10">Popping Crease (4 ft)</text>
        <text x="350" y="345" text-anchor="middle" fill="#fef08a" font-size="10">Stumps (28 in high)</text>

        <!-- Key Indicators -->
        <rect x="25" y="25" width="160" height="60" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="#334155" />
        <text x="35" y="45" fill="#38bdf8" font-size="12" font-weight="700">CRICKET OVAL</text>
        <text x="35" y="60" fill="#94a3b8" font-size="10">Pitch: 22 Yards × 10 Feet</text>
        <text x="35" y="74" fill="#94a3b8" font-size="10">Radius: 65–85 m boundary</text>
      </svg>
    `;
  },

  kabaddi: function() {
    return `
      <svg viewBox="0 0 700 500" class="w-full h-auto max-h-[460px] mx-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <!-- Floor / Surrounding Area -->
        <rect width="700" height="500" fill="#1e293b" />

        <!-- Main Court (13m x 10m) scaled: 520px x 400px -->
        <rect x="90" y="50" width="520" height="400" fill="#c2410c" rx="4" stroke="#f97316" stroke-width="3" />

        <!-- Lobbies (1m strips on top & bottom) -->
        <rect x="90" y="50" width="520" height="40" fill="#9a3412" stroke="#ea580c" stroke-width="1.5" />
        <rect x="90" y="410" width="520" height="40" fill="#9a3412" stroke="#ea580c" stroke-width="1.5" />
        <text x="350" y="75" text-anchor="middle" fill="#fed7aa" font-size="11" font-weight="600">LOBBY (1.0 Meter wide)</text>
        <text x="350" y="435" text-anchor="middle" fill="#fed7aa" font-size="11" font-weight="600">LOBBY (1.0 Meter wide)</text>

        <!-- Mid-Line (Divides into two 6.5m halves) -->
        <line x1="350" y1="50" x2="350" y2="450" stroke="#ffffff" stroke-width="4" />
        <text x="350" y="38" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">MID-LINE (Centre Line)</text>

        <!-- Left Half Markings -->
        <!-- Baulk Line (3.75m from mid-line = 150px) -> 350 - 150 = 200 -->
        <line x1="200" y1="90" x2="200" y2="410" stroke="#ffffff" stroke-width="3" stroke-dasharray="8,4" />
        <text x="200" y="115" text-anchor="middle" fill="#fef08a" font-size="11" font-weight="700">BAULK LINE</text>
        <text x="200" y="130" text-anchor="middle" fill="#ffffff" font-size="10">3.75 m from mid-line</text>

        <!-- Bonus Line (4.75m from mid-line = 190px) -> 350 - 190 = 160 -->
        <line x1="150" y1="90" x2="150" y2="410" stroke="#f59e0b" stroke-width="3" />
        <text x="150" y="270" text-anchor="middle" fill="#fef08a" font-size="11" font-weight="700">BONUS LINE</text>
        <text x="150" y="285" text-anchor="middle" fill="#ffffff" font-size="10">4.75 m</text>

        <!-- Right Half Markings -->
        <!-- Baulk Line (3.75m from mid-line = 150px) -> 350 + 150 = 500 -->
        <line x1="500" y1="90" x2="500" y2="410" stroke="#ffffff" stroke-width="3" stroke-dasharray="8,4" />
        <text x="500" y="115" text-anchor="middle" fill="#fef08a" font-size="11" font-weight="700">BAULK LINE</text>
        <text x="500" y="130" text-anchor="middle" fill="#ffffff" font-size="10">3.75 m from mid-line</text>

        <!-- Bonus Line (4.75m from mid-line) -> 350 + 190 = 540 -->
        <line x1="550" y1="90" x2="550" y2="410" stroke="#f59e0b" stroke-width="3" />
        <text x="550" y="270" text-anchor="middle" fill="#fef08a" font-size="11" font-weight="700">BONUS LINE</text>
        <text x="550" y="285" text-anchor="middle" fill="#ffffff" font-size="10">4.75 m</text>

        <!-- Raider Attack Flow Indicator -->
        <path d="M 320 250 Q 250 200 180 250" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6,4" marker-end="url(#arrow)" />
        <text x="250" y="215" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">RAIDER RAID PATH</text>

        <!-- Dimension Brackets -->
        <!-- Length: 13 Meters -->
        <line x1="90" y1="475" x2="610" y2="475" stroke="#f8fafc" stroke-width="1.5" />
        <text x="350" y="492" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">Length: 13.00 Meters (42.6 ft)</text>

        <!-- Width: 10 Meters -->
        <line x1="60" y1="50" x2="60" y2="450" stroke="#f8fafc" stroke-width="1.5" />
        <text x="50" y="255" text-anchor="end" fill="#f8fafc" font-size="12" font-weight="700" transform="rotate(-90 50 255)">Width: 10.00 Meters</text>

        <!-- Sitting Block Callout -->
        <rect x="625" y="150" width="30" height="200" fill="#334155" stroke="#64748b" rx="3" />
        <text x="640" y="250" text-anchor="middle" fill="#cbd5e1" font-size="10" font-weight="600" transform="rotate(90 640 250)">SITTING BLOCK (Out Players)</text>
      </svg>
    `;
  },

  badminton: function() {
    return `
      <svg viewBox="0 0 700 500" class="w-full h-auto max-h-[460px] mx-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <!-- Floor / Surrounding Mat -->
        <rect width="700" height="500" fill="#0f172a" />

        <!-- Main Badminton Court (13.4m x 6.1m) scaled: 536px x 244px -->
        <rect x="82" y="128" width="536" height="244" fill="#047857" stroke="#10b981" stroke-width="3" rx="4" />

        <!-- Doubles Tramlines (Singles side boundary lines: 0.46m inside = 18px from edges) -->
        <line x1="82" y1="146" x2="618" y2="146" stroke="#ffffff" stroke-width="2" />
        <line x1="82" y1="354" x2="618" y2="354" stroke="#ffffff" stroke-width="2" />
        <text x="350" y="141" text-anchor="middle" fill="#d1fae5" font-size="9">Doubles Side Tramline (0.46 m)</text>
        <text x="350" y="367" text-anchor="middle" fill="#d1fae5" font-size="9">Doubles Side Tramline (0.46 m)</text>

        <!-- Net in the Center -->
        <line x1="350" y1="110" x2="350" y2="390" stroke="#f8fafc" stroke-width="4" stroke-dasharray="4,2" />
        <!-- Net Posts -->
        <circle cx="350" cy="120" r="5" fill="#f59e0b" />
        <circle cx="350" cy="380" r="5" fill="#f59e0b" />
        <text x="350" y="100" text-anchor="middle" fill="#fef08a" font-size="12" font-weight="700">NET (1.55 m / 5 ft 1 in at posts)</text>

        <!-- Short Service Lines (1.98m from net = 79px) -->
        <!-- Left Short Service Line (350 - 79 = 271) -->
        <line x1="271" y1="128" x2="271" y2="372" stroke="#ffffff" stroke-width="2.5" />
        <text x="271" y="250" text-anchor="middle" fill="#fef08a" font-size="10" font-weight="600" transform="rotate(-90 271 250)">Short Service Line (1.98 m)</text>

        <!-- Right Short Service Line (350 + 79 = 429) -->
        <line x1="429" y1="128" x2="429" y2="372" stroke="#ffffff" stroke-width="2.5" />
        <text x="429" y="250" text-anchor="middle" fill="#fef08a" font-size="10" font-weight="600" transform="rotate(90 429 250)">Short Service Line (1.98 m)</text>

        <!-- Doubles Long Service Lines (0.76m inside backline = 30px from ends) -->
        <!-- Left (82 + 30 = 112) -->
        <line x1="112" y1="128" x2="112" y2="372" stroke="#ffffff" stroke-width="2" stroke-dasharray="6,3" />
        <text x="116" y="250" text-anchor="middle" fill="#cbd5e1" font-size="9" transform="rotate(-90 116 250)">Doubles Long Service Line</text>

        <!-- Right (618 - 30 = 588) -->
        <line x1="588" y1="128" x2="588" y2="372" stroke="#ffffff" stroke-width="2" stroke-dasharray="6,3" />
        <text x="584" y="250" text-anchor="middle" fill="#cbd5e1" font-size="9" transform="rotate(90 584 250)">Doubles Long Service Line</text>

        <!-- Center Service Lines -->
        <line x1="82" y1="250" x2="271" y2="250" stroke="#ffffff" stroke-width="2" />
        <line x1="429" y1="250" x2="618" y2="250" stroke="#ffffff" stroke-width="2" />
        <text x="175" y="200" text-anchor="middle" fill="#a7f3d0" font-size="11" font-weight="600">Left Service Court</text>
        <text x="175" y="305" text-anchor="middle" fill="#a7f3d0" font-size="11" font-weight="600">Right Service Court</text>
        <text x="525" y="200" text-anchor="middle" fill="#a7f3d0" font-size="11" font-weight="600">Right Service Court</text>
        <text x="525" y="305" text-anchor="middle" fill="#a7f3d0" font-size="11" font-weight="600">Left Service Court</text>

        <!-- Overall Dimensions -->
        <line x1="82" y1="420" x2="618" y2="420" stroke="#f8fafc" stroke-width="1.5" />
        <text x="350" y="440" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">Length: 13.40 Meters (44 Feet)</text>

        <!-- Width Labels -->
        <line x1="45" y1="128" x2="45" y2="372" stroke="#f8fafc" stroke-width="1.5" />
        <text x="35" y="250" text-anchor="end" fill="#f8fafc" font-size="11" font-weight="600" transform="rotate(-90 35 250)">Doubles: 6.10 m (20 ft)</text>
        <text x="640" y="250" text-anchor="start" fill="#34d399" font-size="11" font-weight="600" transform="rotate(90 640 250)">Singles: 5.18 m (17 ft)</text>
      </svg>
    `;
  },

  "field-hockey": function() {
    return `
      <svg viewBox="0 0 700 500" class="w-full h-auto max-h-[460px] mx-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <!-- Stadium Background -->
        <rect width="700" height="500" fill="#0f172a" />

        <!-- Astroturf Pitch (91.4m x 55m) scaled: 548px x 330px -->
        <rect x="76" y="85" width="548" height="330" fill="#0284c7" stroke="#38bdf8" stroke-width="3" rx="4" />

        <!-- Center Line & Center Spot -->
        <line x1="350" y1="85" x2="350" y2="415" stroke="#ffffff" stroke-width="3" />
        <circle cx="350" cy="250" r="4" fill="#ffffff" />
        <text x="350" y="70" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700">CENTER LINE (Halfway)</text>

        <!-- 23-Meter Lines (Quarter Lines: 138px from goal lines) -->
        <!-- Left 23m Line (76 + 138 = 214) -->
        <line x1="214" y1="85" x2="214" y2="415" stroke="#ffffff" stroke-width="2" stroke-dasharray="6,4" />
        <text x="214" y="250" text-anchor="middle" fill="#bae6fd" font-size="10" font-weight="600" transform="rotate(-90 214 250)">23-Meter Line (25 Yards)</text>

        <!-- Right 23m Line (624 - 138 = 486) -->
        <line x1="486" y1="85" x2="486" y2="415" stroke="#ffffff" stroke-width="2" stroke-dasharray="6,4" />
        <text x="486" y="250" text-anchor="middle" fill="#bae6fd" font-size="10" font-weight="600" transform="rotate(90 486 250)">23-Meter Line (25 Yards)</text>

        <!-- Left Striking Circle ("D" - 14.63m radius = 88px) -->
        <path d="M 76 162 L 120 162 A 88 88 0 0 1 120 338 L 76 338" fill="none" stroke="#ffffff" stroke-width="3" />
        <!-- Left Penalty Spot (6.4m = 38px from goal) -->
        <circle cx="114" cy="250" r="3.5" fill="#facc15" />
        <text x="114" y="270" text-anchor="middle" fill="#fef08a" font-size="9" font-weight="600">Penalty Spot (6.4m)</text>

        <!-- Right Striking Circle ("D") -->
        <path d="M 624 162 L 580 162 A 88 88 0 0 0 580 338 L 624 338" fill="none" stroke="#ffffff" stroke-width="3" />
        <!-- Right Penalty Spot -->
        <circle cx="586" cy="250" r="3.5" fill="#facc15" />
        <text x="586" y="270" text-anchor="middle" fill="#fef08a" font-size="9" font-weight="600">Penalty Spot (6.4m)</text>

        <!-- Goal Cages (3.66m wide x 2.14m deep) -->
        <rect x="52" y="230" width="24" height="40" fill="#334155" stroke="#ffffff" stroke-width="2" />
        <rect x="624" y="230" width="24" height="40" fill="#334155" stroke="#ffffff" stroke-width="2" />

        <!-- Penalty Corner Injection Marks -->
        <line x1="76" y1="190" x2="84" y2="190" stroke="#facc15" stroke-width="3" />
        <line x1="76" y1="310" x2="84" y2="310" stroke="#facc15" stroke-width="3" />
        <text x="145" y="180" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">Striking Circle ("D" Area)</text>
        <text x="145" y="195" text-anchor="middle" fill="#93c5fd" font-size="9">Goals must be scored inside D</text>

        <!-- Overall Pitch Dimensions -->
        <line x1="76" y1="440" x2="624" y2="440" stroke="#f8fafc" stroke-width="1.5" />
        <text x="350" y="460" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">Length: 91.40 Meters (100 Yards)</text>

        <line x1="40" y1="85" x2="40" y2="415" stroke="#f8fafc" stroke-width="1.5" />
        <text x="30" y="250" text-anchor="end" fill="#f8fafc" font-size="12" font-weight="700" transform="rotate(-90 30 250)">Width: 55.00 Meters (60 Yards)</text>
      </svg>
    `;
  },

  football: function() {
    return `
      <svg viewBox="0 0 700 500" class="w-full h-auto max-h-[460px] mx-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="lawnStripes" width="60" height="340" patternUnits="userSpaceOnUse">
            <rect width="30" height="340" fill="#15803d" />
            <rect x="30" width="30" height="340" fill="#166534" />
          </pattern>
        </defs>

        <rect width="700" height="500" fill="#0f172a" />

        <!-- Football Pitch (105m x 68m) scaled: 560px x 340px -->
        <rect x="70" y="80" width="560" height="340" fill="url(#lawnStripes)" stroke="#4ade80" stroke-width="3" rx="4" />

        <!-- Halfway Line & Center Circle (9.15m radius = 48px) -->
        <line x1="350" y1="80" x2="350" y2="420" stroke="#ffffff" stroke-width="2.5" />
        <circle cx="350" cy="250" r="48" fill="none" stroke="#ffffff" stroke-width="2.5" />
        <circle cx="350" cy="250" r="3.5" fill="#ffffff" />
        <text x="350" y="190" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="600">Center Circle (9.15 m radius)</text>

        <!-- Left Penalty Area (18-yard box: 16.5m x 40.3m = 88px x 215px) -->
        <rect x="70" y="142" width="88" height="216" fill="none" stroke="#ffffff" stroke-width="2.5" />
        <!-- Left Goal Area (6-yard box: 5.5m x 18.3m = 29px x 98px) -->
        <rect x="70" y="201" width="29" height="98" fill="none" stroke="#ffffff" stroke-width="2" />
        <!-- Left Penalty Spot (11m = 58px) -->
        <circle cx="128" cy="250" r="3.5" fill="#ffffff" />
        <!-- Left Penalty Arc -->
        <path d="M 158 218 A 48 48 0 0 1 158 282" fill="none" stroke="#ffffff" stroke-width="2" />

        <!-- Right Penalty Area (18-yard box) -->
        <rect x="542" y="142" width="88" height="216" fill="none" stroke="#ffffff" stroke-width="2.5" />
        <!-- Right Goal Area (6-yard box) -->
        <rect x="601" y="201" width="29" height="98" fill="none" stroke="#ffffff" stroke-width="2" />
        <!-- Right Penalty Spot -->
        <circle cx="572" cy="250" r="3.5" fill="#ffffff" />
        <!-- Right Penalty Arc -->
        <path d="M 542 218 A 48 48 0 0 0 542 282" fill="none" stroke="#ffffff" stroke-width="2" />

        <!-- Goals (7.32m x 2.44m) -->
        <rect x="52" y="228" width="18" height="44" fill="#334155" stroke="#ffffff" stroke-width="2" />
        <rect x="630" y="228" width="18" height="44" fill="#334155" stroke="#ffffff" stroke-width="2" />

        <!-- Corner Arcs (1m radius = 10px) -->
        <path d="M 80 80 A 10 10 0 0 1 70 90" fill="none" stroke="#ffffff" stroke-width="2" />
        <path d="M 620 80 A 10 10 0 0 0 630 90" fill="none" stroke="#ffffff" stroke-width="2" />
        <path d="M 80 420 A 10 10 0 0 0 70 410" fill="none" stroke="#ffffff" stroke-width="2" />
        <path d="M 620 420 A 10 10 0 0 1 630 410" fill="none" stroke="#ffffff" stroke-width="2" />

        <!-- Dimension Labels -->
        <line x1="70" y1="445" x2="630" y2="445" stroke="#f8fafc" stroke-width="1.5" />
        <text x="350" y="465" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">Length: 100 - 110 Meters (110 - 120 Yards)</text>

        <line x1="35" y1="80" x2="35" y2="420" stroke="#f8fafc" stroke-width="1.5" />
        <text x="25" y="250" text-anchor="end" fill="#f8fafc" font-size="12" font-weight="700" transform="rotate(-90 25 250)">Width: 64 - 75 Meters</text>

        <text x="128" y="275" text-anchor="middle" fill="#fef08a" font-size="9" font-weight="600">Penalty: 11 m (12 yds)</text>
      </svg>
    `;
  },

  chess: function() {
    return `
      <svg viewBox="0 0 700 500" class="w-full h-auto max-h-[460px] mx-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="700" height="500" fill="#0f172a" />

        <!-- Board Border -->
        <rect x="170" y="70" width="360" height="360" fill="#78350f" stroke="#b45309" stroke-width="6" rx="6" />

        <!-- 64 Squares (8x8 grid) -->
        <g transform="translate(180, 80)">
          ${(() => {
            let squares = '';
            const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            for (let r = 0; r < 8; r++) {
              for (let f = 0; f < 8; f++) {
                const isLight = (r + f) % 2 === 0;
                const fill = isLight ? '#fde68a' : '#b45309';
                squares += `<rect x="${f * 42.5}" y="${r * 42.5}" width="42.5" height="42.5" fill="${fill}" />`;
              }
            }
            return squares;
          })()}

          <!-- Coordinate Notations -->
          <!-- Files: a to h -->
          <text x="21" y="355" text-anchor="middle" fill="#d97706" font-size="11" font-weight="700">a</text>
          <text x="63" y="355" text-anchor="middle" fill="#d97706" font-size="11" font-weight="700">b</text>
          <text x="106" y="355" text-anchor="middle" fill="#d97706" font-size="11" font-weight="700">c</text>
          <text x="148" y="355" text-anchor="middle" fill="#d97706" font-size="11" font-weight="700">d</text>
          <text x="191" y="355" text-anchor="middle" fill="#d97706" font-size="11" font-weight="700">e</text>
          <text x="233" y="355" text-anchor="middle" fill="#d97706" font-size="11" font-weight="700">f</text>
          <text x="276" y="355" text-anchor="middle" fill="#d97706" font-size="11" font-weight="700">g</text>
          <text x="318" y="355" text-anchor="middle" fill="#d97706" font-size="11" font-weight="700">h</text>

          <!-- Highlight Key Squares (e4, d4, e5, d5 - The Golden Center) -->
          <rect x="127.5" y="127.5" width="85" height="85" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,2" />
          <text x="170" y="174" text-anchor="middle" fill="#1e3a8a" font-size="12" font-weight="800">CENTRAL SQUARES</text>
        </g>

        <!-- Info Badges -->
        <rect x="25" y="120" width="130" height="100" rx="6" fill="#1e293b" stroke="#334155" />
        <text x="35" y="145" fill="#38bdf8" font-size="11" font-weight="700">PIECES SETUP</text>
        <text x="35" y="165" fill="#cbd5e1" font-size="10">32 Total Pieces</text>
        <text x="35" y="180" fill="#cbd5e1" font-size="10">16 White / 16 Black</text>
        <text x="35" y="195" fill="#facc15" font-size="10">King Height: 9.5 cm</text>

        <rect x="545" y="120" width="130" height="100" rx="6" fill="#1e293b" stroke="#334155" />
        <text x="555" y="145" fill="#38bdf8" font-size="11" font-weight="700">SQUARE SPECS</text>
        <text x="555" y="165" fill="#cbd5e1" font-size="10">64 Total Squares</text>
        <text x="555" y="180" fill="#cbd5e1" font-size="10">5.0 - 6.0 cm / square</text>
        <text x="555" y="195" fill="#4ade80" font-size="10">White on right corner</text>

        <text x="350" y="470" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">Official 8×8 FIDE Tournament Board Specification</text>
      </svg>
    `;
  },

  "kho-kho": function() {
    return `
      <svg viewBox="0 0 700 500" class="w-full h-auto max-h-[460px] mx-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="700" height="500" fill="#1e293b" />

        <!-- Main Court (27m x 16m) scaled: 540px x 320px -->
        <rect x="80" y="90" width="540" height="320" fill="#b45309" stroke="#f59e0b" stroke-width="3" rx="4" />

        <!-- Free Zones (1.5m behind each pole = 30px from ends) -->
        <rect x="80" y="90" width="30" height="320" fill="#78350f" stroke="#d97706" stroke-width="1.5" />
        <rect x="590" y="90" width="30" height="320" fill="#78350f" stroke="#d97706" stroke-width="1.5" />
        <text x="95" y="250" text-anchor="middle" fill="#fef08a" font-size="10" font-weight="600" transform="rotate(-90 95 250)">FREE ZONE (1.5 m)</text>
        <text x="605" y="250" text-anchor="middle" fill="#fef08a" font-size="10" font-weight="600" transform="rotate(90 605 250)">FREE ZONE (1.5 m)</text>

        <!-- Two Wooden Poles at ends of Central Lane -->
        <circle cx="110" cy="250" r="7" fill="#fbbf24" stroke="#ffffff" stroke-width="2" />
        <circle cx="590" cy="250" r="7" fill="#fbbf24" stroke="#ffffff" stroke-width="2" />
        <text x="110" y="235" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">POLE 1</text>
        <text x="590" y="235" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">POLE 2</text>

        <!-- Central Lane (24m long connecting poles) -->
        <line x1="110" y1="250" x2="590" y2="250" stroke="#ffffff" stroke-width="4" />
        <text x="350" y="240" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">CENTRAL LANE (30 cm wide - Chasers cannot cross)</text>

        <!-- 8 Cross Lanes and 8 Sitting Squares -->
        ${(() => {
          let lanes = '';
          const startX = 145;
          const gap = 55;
          for (let i = 0; i < 8; i++) {
            const x = startX + (i * gap);
            const arrowDir = i % 2 === 0 ? '▲' : '▼';
            lanes += `
              <line x1="${x}" y1="90" x2="${x}" y2="410" stroke="#fcd34d" stroke-width="2" />
              <rect x="${x - 12}" y="238" width="24" height="24" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5" rx="2" />
              <text x="${x}" y="254" text-anchor="middle" fill="#ffffff" font-size="11">${arrowDir}</text>
            `;
          }
          return lanes;
        })()}

        <!-- Legend Note for Alternating Direction -->
        <text x="350" y="275" text-anchor="middle" fill="#fde68a" font-size="10">8 Chasers sit facing opposite directions alternately (▲ / ▼)</text>

        <!-- Dimensions -->
        <line x1="80" y1="435" x2="620" y2="435" stroke="#f8fafc" stroke-width="1.5" />
        <text x="350" y="455" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">Total Length: 27.00 Meters</text>

        <line x1="45" y1="90" x2="45" y2="410" stroke="#f8fafc" stroke-width="1.5" />
        <text x="35" y="250" text-anchor="end" fill="#f8fafc" font-size="12" font-weight="700" transform="rotate(-90 35 250)">Width: 16.00 Meters</text>
      </svg>
    `;
  },

  wrestling: function() {
    return `
      <svg viewBox="0 0 700 500" class="w-full h-auto max-h-[460px] mx-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="700" height="500" fill="#0f172a" />

        <!-- Modern UWW Mat (12m x 12m square) scaled: 380px x 380px -->
        <rect x="160" y="60" width="380" height="380" fill="#1e3a8a" stroke="#3b82f6" stroke-width="3" rx="6" />

        <!-- 9m Contest Area (Circular) -->
        <circle cx="350" cy="250" r="170" fill="#2563eb" stroke="#ea580c" stroke-width="6" />

        <!-- 1m Passivity Red Zone (Edge of 9m circle) -->
        <circle cx="350" cy="250" r="150" fill="#1d4ed8" stroke="#f97316" stroke-width="3" stroke-dasharray="6,4" />

        <!-- 7m Inner Central Action Area -->
        <circle cx="350" cy="250" r="120" fill="#1e40af" />

        <!-- 1m Central Circle -->
        <circle cx="350" cy="250" r="25" fill="#ef4444" stroke="#ffffff" stroke-width="2" />
        <circle cx="350" cy="250" r="4" fill="#ffffff" />

        <!-- Labels -->
        <text x="350" y="215" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">CENTRAL ACTION AREA</text>
        <text x="350" y="230" text-anchor="middle" fill="#93c5fd" font-size="10">7.0 m Diameter</text>

        <text x="350" y="380" text-anchor="middle" fill="#fed7aa" font-size="11" font-weight="700">PASSIVITY ZONE (1.0 m Orange Ring)</text>

        <!-- Outer Protection Border -->
        <text x="210" y="90" fill="#93c5fd" font-size="10" font-weight="600">Protection Border (1.5 m)</text>

        <!-- Red / Blue Starting Corners -->
        <rect x="170" y="70" width="40" height="40" fill="#dc2626" rx="4" />
        <text x="190" y="95" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800">RED</text>

        <rect x="490" y="390" width="40" height="40" fill="#2563eb" rx="4" />
        <text x="510" y="415" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800">BLUE</text>

        <!-- Mat Dimensions -->
        <line x1="160" y1="460" x2="540" y2="460" stroke="#f8fafc" stroke-width="1.5" />
        <text x="350" y="480" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">Official Olympic Mat: 12.00 m × 12.00 m (Contest Ring 9.0 m)</text>
      </svg>
    `;
  },

  "table-tennis": function() {
    return `
      <svg viewBox="0 0 700 500" class="w-full h-auto max-h-[460px] mx-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="700" height="500" fill="#0f172a" />

        <!-- Playing Arena (14m x 7m perimeter) -->
        <rect x="80" y="70" width="540" height="360" fill="#1e293b" stroke="#334155" stroke-width="2" rx="6" />
        <text x="350" y="95" text-anchor="middle" fill="#64748b" font-size="11" font-weight="600">INTERNATIONAL PLAYING ARENA (14.0 m × 7.0 m)</text>

        <!-- TT Table (2.74m x 1.525m) scaled: 380px x 210px -->
        <rect x="160" y="145" width="380" height="210" fill="#0369a1" stroke="#ffffff" stroke-width="3" rx="2" />

        <!-- Center Line for Doubles (Runs along length) -->
        <line x1="160" y1="250" x2="540" y2="250" stroke="#ffffff" stroke-width="2" />
        <text x="230" y="200" text-anchor="middle" fill="#bae6fd" font-size="10">Left Half-Court</text>
        <text x="230" y="300" text-anchor="middle" fill="#bae6fd" font-size="10">Right Half-Court</text>
        <text x="470" y="200" text-anchor="middle" fill="#bae6fd" font-size="10">Right Half-Court</text>
        <text x="470" y="300" text-anchor="middle" fill="#bae6fd" font-size="10">Left Half-Court</text>

        <!-- Net in Center (Runs across width) -->
        <line x1="350" y1="130" x2="350" y2="370" stroke="#f8fafc" stroke-width="4" stroke-dasharray="4,2" />
        <circle cx="350" cy="135" r="4" fill="#f59e0b" />
        <circle cx="350" cy="365" r="4" fill="#f59e0b" />
        <text x="350" y="125" text-anchor="middle" fill="#fef08a" font-size="11" font-weight="700">NET (15.25 cm / 6 inches high)</text>

        <!-- Table Dimensions -->
        <line x1="160" y1="380" x2="540" y2="380" stroke="#f8fafc" stroke-width="1.5" />
        <text x="350" y="400" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">Table Length: 2.74 Meters (9.0 Feet)</text>

        <line x1="130" y1="145" x2="130" y2="355" stroke="#f8fafc" stroke-width="1.5" />
        <text x="120" y="250" text-anchor="end" fill="#f8fafc" font-size="11" font-weight="600" transform="rotate(-90 120 250)">Width: 1.525 m (5.0 ft)</text>

        <!-- Height Callout -->
        <rect x="560" y="225" width="105" height="50" rx="4" fill="#0f172a" stroke="#38bdf8" />
        <text x="612" y="245" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">TABLE HEIGHT</text>
        <text x="612" y="262" text-anchor="middle" fill="#ffffff" font-size="10">76.0 cm (30 inches)</text>
      </svg>
    `;
  },

  athletics: function() {
    return `
      <svg viewBox="0 0 700 500" class="w-full h-auto max-h-[460px] mx-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="700" height="500" fill="#0f172a" />

        <!-- 400m Synthetic Oval Track -->
        <!-- Outer Track Bend -->
        <path d="M 230 70 L 470 70 A 180 180 0 0 1 470 430 L 230 430 A 180 180 0 0 1 230 70 Z" fill="#b91c1c" stroke="#dc2626" stroke-width="2" />
        
        <!-- Track Lanes Lines -->
        <path d="M 230 90 L 470 90 A 160 160 0 0 1 470 410 L 230 410 A 160 160 0 0 1 230 90 Z" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1" />
        <path d="M 230 110 L 470 110 A 140 140 0 0 1 470 390 L 230 390 A 140 140 0 0 1 230 110 Z" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1" />
        
        <!-- Infield Green Turf -->
        <path d="M 230 130 L 470 130 A 120 120 0 0 1 470 370 L 230 370 A 120 120 0 0 1 230 130 Z" fill="#15803d" stroke="#22c55e" stroke-width="2" />

        <!-- Javelin Throw Runway & Sector inside Infield -->
        <!-- Runway (30 - 36.5m) -->
        <rect x="230" y="242" width="90" height="16" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5" />
        <text x="275" y="235" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="700">RUNWAY (36.5 m × 4 m)</text>

        <!-- Throwing Arc (Radius 8m) -->
        <path d="M 320 234 A 30 30 0 0 1 320 266" fill="none" stroke="#ffffff" stroke-width="3" />
        <circle cx="320" cy="250" r="2" fill="#facc15" />

        <!-- 28.96 Degree Javelin Landing Sector -->
        <path d="M 320 250 L 480 200 L 480 300 Z" fill="rgba(250, 204, 21, 0.2)" stroke="#facc15" stroke-width="2" stroke-dasharray="4,2" />

        <!-- Distance Sector Arcs -->
        <path d="M 380 231 A 60 60 0 0 1 380 269" fill="none" stroke="#ffffff" stroke-width="1.5" />
        <text x="385" y="253" fill="#ffffff" font-size="8" font-weight="700">70m</text>

        <path d="M 430 216 A 110 110 0 0 1 430 284" fill="none" stroke="#ffffff" stroke-width="1.5" />
        <text x="435" y="253" fill="#ffffff" font-size="8" font-weight="700">80m</text>

        <path d="M 470 203 A 150 150 0 0 1 470 297" fill="none" stroke="#ffffff" stroke-width="2" />
        <text x="475" y="253" fill="#fef08a" font-size="9" font-weight="800">90m (Olympic Gold Range)</text>

        <!-- Sector Angle Label -->
        <text x="410" y="195" text-anchor="middle" fill="#facc15" font-size="10" font-weight="700">28.96° Landing Sector</text>

        <!-- Track Labels -->
        <text x="350" y="55" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">STANDARD 400-METER OVAL TRACK (8 Lanes × 1.22 m)</text>
        <text x="350" y="465" text-anchor="middle" fill="#94a3b8" font-size="11">Straight: 84.39m | Bend Radius: 36.50m | Javelin Spear: 800g (Men) / 600g (Women)</text>
      </svg>
    `;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = groundDiagrams;
}
