var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-polynomial-functions-intro",
  "level": "1",
  "url": "sec-polynomial-functions-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Polynomial Functions Intro",
  "body": " Polynomial Functions Intro   Recall that previously, we considered constant functions, linear functions, and quadratic functions,   , whose graph is a horizontal line.  , whose graph is a (diagonal) line.  , whose graph is a parabola.   It turns out that we can also consider functions that are made up of higher powers of , like , and so on.    Power Functions    Consider , , , , , , etc. Observe that the function with even integer powers have a ``U-shape\" whereas the odd integer powers have an ``S-shape\".  Consider , , , , . These are a reflection over the -axis of the previous graphs.  Then, consider adding terms of lower degree. Observe that the rough of the graph is determined by the highest power of (called the degree of the polynomial).  Consider and , , . The rough shape of the graph is determined by the sign of the number in front of the highest power of (called the leading coefficient).      Polynomial Functions  Basically, a polynomial function is a function made of up powers of , combined with numbers through multiplication, addition, and subtraction. Sometimes, we refer to them simply as polynomials.   Polynomial Function  A polynomial function is a function of the form,   where are numbers, and . The coefficients of a polynomial function, are given using subscripted letters. In general, represents the coefficient of the term .   The degree of a polynomial function is the exponent on its highest power of . Here, this is a polynomial of degree .  The term with the highest power of , , is called the leading term , and its coefficient is called the leading coefficient .     A constant function is a polynomial function of degree 0.  A linear function, (where ), is a polynomial function of degree 1.  A quadratic function (where ), is a polynomial function of degree 2.   Roughly, the higher the degree, the more complicated the polynomial is.  The domain of a polynomial is all real numbers, or , because it only requires addition, subtraction, and multiplication of numbers, and these operations are always defined.   Example  The expression is a polynomial of degree 3.    Example  The expression is not a polynomial, as is not a non-negative integer.   Polynomials of degree 3 are sometimes called \\textbf{cubic}, degree 4 is \\textbf{quartic}, degree 5 is \\textbf{quintic}, and degree 6 is \\textbf{sextic} or \\textbf{hexic}.    Graph of a Polynomial Function  The graph of a polynomial function is both \\textbf{smooth} (in that it contains no sharp corners) and \\textbf{continuous} (it has no ``breaks\" and can be drawn without lifting your pencil off the page).  A polynomial has possibly multiple points where it turns around, going from increasing to decreasing, or vice versa. It turns out that a polynomial of degree has at most turning points.    End Behavior of Polynomial Functions  As we've seen, sometimes polynomial functions go right and up, and sometimes they go right and down, and sometimes left and up and other times left and down. Whether a polynomial goes up or down on the right or left is what we call its \\textit{end behavior}.   End Behavior  The \\textbf{end behavior} of a function is its behavior as becomes large in either the positive or negative direction. In other words, as , or the magnitude of , becomes large.   Graphically, end behavior is the behavior to the ``far right\" or ``far left\" side of the graph. The graph of a polynomial function may increase and decrease on different intervals, however it will ``eventually\" tend towards some behavior.  To describe end behavior, we often use a notation called \\textbf{arrow notation},   can be read as ``$x$ goes to infinity\".  is ``$x$ goes to negative infinity\".    If the polynomial increases without bound (goes up and up), we write .  If decreases without bound (goes down and down), we write .   Observe that the end behavior of a polynomial function is determined by the leading term. This is intuitively because when is large (either large positive or large negative), the leading term dominates the other terms, in the sense that it's size is much larger than the others, to where the others are insignificant.  This can be summarized in the \\textit{leading coefficient test}.   Leading coefficient test     For an odd function, the sign of the leading coefficient determines the overall trend, when it overall has ``positive\" or ``negative\" slope. Odd-degree polynomial functions have graphs with opposite end behavior at each end.  For an even function, the sign of the leading coefficient determines whether it ``opens up\" or ``opens down\". Even-degree polynomial functions have graphs with the same end behavior at each end.     y-Intercept of a Polynomial Function  Recall that the -intercept for linear and quadratic functions is simply the constant term,   More generally, the -intercept of a polynomial function is , the constant term, because .   Example  For , the -intercept is .     x-Intercepts of a Polynomial Function  The -intercept(s) of a polynomial function are the solutions to the equation .   Zero (Root) of a Function  A number is a \\textbf{zero} or (\\textbf{root}) of if .   The number is a zero if and only if is an -intercept of the graph of .    We will explore various techniques in order to solve an equation like this. In general, solving this equation by hand and exactly is very difficult, and sometimes impossible.    Remark  Technically, the zero polynomial is said to have degree , not 0 (for technical reasons that will become clear later).    Degree of a Product of Polynomials   Degree of a Product  The degree of a product of polynomials is the sum of the degrees. In particular, the product of linear factors is a polynomial of degree .    "
},
{
  "id": "polynomial-functions-3",
  "level": "2",
  "url": "sec-polynomial-functions-intro.html#polynomial-functions-3",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Polynomial Function.",
  "body": " Polynomial Function  A polynomial function is a function of the form,   where are numbers, and . The coefficients of a polynomial function, are given using subscripted letters. In general, represents the coefficient of the term .   The degree of a polynomial function is the exponent on its highest power of . Here, this is a polynomial of degree .  The term with the highest power of , , is called the leading term , and its coefficient is called the leading coefficient .   "
},
{
  "id": "polynomial-functions-7",
  "level": "2",
  "url": "sec-polynomial-functions-intro.html#polynomial-functions-7",
  "type": "Example",
  "number": "1.1.2",
  "title": "Example.",
  "body": " Example  The expression is a polynomial of degree 3.  "
},
{
  "id": "polynomial-functions-8",
  "level": "2",
  "url": "sec-polynomial-functions-intro.html#polynomial-functions-8",
  "type": "Example",
  "number": "1.1.3",
  "title": "Example.",
  "body": " Example  The expression is not a polynomial, as is not a non-negative integer.  "
},
{
  "id": "end-behavior-3",
  "level": "2",
  "url": "sec-polynomial-functions-intro.html#end-behavior-3",
  "type": "Definition",
  "number": "1.1.4",
  "title": "End Behavior.",
  "body": " End Behavior  The \\textbf{end behavior} of a function is its behavior as becomes large in either the positive or negative direction. In other words, as , or the magnitude of , becomes large.  "
},
{
  "id": "end-behavior-10",
  "level": "2",
  "url": "sec-polynomial-functions-intro.html#end-behavior-10",
  "type": "Theorem",
  "number": "1.1.5",
  "title": "Leading coefficient test.",
  "body": " Leading coefficient test   "
},
{
  "id": "y-intercept-5",
  "level": "2",
  "url": "sec-polynomial-functions-intro.html#y-intercept-5",
  "type": "Example",
  "number": "1.1.6",
  "title": "Example.",
  "body": " Example  For , the -intercept is .  "
},
{
  "id": "x-intercepts-3",
  "level": "2",
  "url": "sec-polynomial-functions-intro.html#x-intercepts-3",
  "type": "Definition",
  "number": "1.1.7",
  "title": "Zero (Root) of a Function.",
  "body": " Zero (Root) of a Function  A number is a \\textbf{zero} or (\\textbf{root}) of if .   The number is a zero if and only if is an -intercept of the graph of .   "
},
{
  "id": "degree-product-2",
  "level": "2",
  "url": "sec-polynomial-functions-intro.html#degree-product-2",
  "type": "Theorem",
  "number": "1.1.8",
  "title": "Degree of a Product.",
  "body": " Degree of a Product  The degree of a product of polynomials is the sum of the degrees. In particular, the product of linear factors is a polynomial of degree .  "
},
{
  "id": "sec-radian-measure",
  "level": "1",
  "url": "sec-radian-measure.html",
  "type": "Section",
  "number": "2.1",
  "title": "Radian Measure",
  "body": " Radian Measure   There is another unit for measuring angles, called a radian , which turns out to be more useful than degrees to use in calculus. First, it is helpful to step back and understand the idea of how angles can be measured.    Alternate Angular Units  Degrees are a unit such that 360 degrees make a full rotation. This makes sense for practical applications, and historically, for navigation, architecture, and astronomy. This is because you can divide 360 evenly into many numbers. However, if we were starting from scratch, we could also consider alternate useful units of measuring angles. For example:    The gradian , where a quarter rotation is defined to be 100 gradians. Then, a full rotation would be 400 gradians.  Or, 1 turn could be defined as a full rotation. Then, a half rotation is turns, or a quarter rotation is turns.  For units inspired by the fact that there are 8 slices in a pizza, a unit could be called a slice , defined to be th of a full rotation. Then, 8 slices would be a full rotation.  We could define 1 unit to be a quarter rotation. Then, 4 units is a full rotation.    Notice that ultimately, units are a convention, and what units are useful or most natural depends on the context.    Motivation for Radians  There is another unit of angle measure, called a radian . The idea is that we will measure angles based on how long the arc of the angle is.       The longer the arc is, the bigger the angle that is swept out. The amount you rotate is proportional to how far you travel along the circle.    Small rotation small distance traveled  Big rotation big distance traveled         However, just measuring the arc doesn't fully work, because the arc length depends on the size of the circle (basically, it depends on it's radius).    If you have a small circle, you won't have to walk very far to make a full loop.  If you have a big circle, the same angle will mean you walk a lot farther.         We want a measurement which purely measures rotation, that isn't affected by how big the circle is. The key idea is: even though the arc length changes when the circle gets bigger or smaller, it changes in a very predictable way. In particular, arc length is proportional to the radius.    If you double the radius, the arc length doubles .  If you triple the radius, the arc length triples .      For example, for this particular angle below, for cm, the arc is 8 cm, and for cm, the arc is 16 cm.       While the arc lengths are different, in both scenarios, the arc length is 2 radius lengths.    To measure arc length, instead of using meters or centimeters or any other unit of length, we use the radius itself as the unit. In other words, we ask:   For example:    If the radius is 4 m, and the arc length is 12 m, that is radius lengths of rotation.  If the radius is 3 m, and the arc length is 15 m, that is radius lengths of rotation.         In other words, to measure the angle, divide the arc length by the radius length.    Radians    One radian is defined to be the angle at the center of a circle such that the arc length associated with it is equal to the radius of the circle,       More generally, an angle with associated radius and arc length is given by,     The symbol for radians is rad , however the symbol is often omitted. So, if an angle has no unit, it should be assumed to be radians (and for degrees, use ).        In fancy math language, you can say that the angle  subtends the arc, or the arc is subtended by the angle .  Radians are technically ``dimensionless\", because they are the ratio of two lengths.      Converting Between Degrees and Radians  Degrees and radians are both units of angles, so we can convert between them. To find an equivalence between the two, first recall that corresponds to a full rotation. In radians, for a full rotation, its arc length is simply the circumference of the circle, which is given by . Then, . Therefore, a full rotation is radians. This implies that,   To be a bit more simple, we can divide both sides by 2, since it is a common factor, to get,   This is a conversion factor which allows us to convert between these two angle units, analogous to how 1 inch = 2.54 cm, or how 1 hour = 60 minutes.   Converting between degrees and radians        The ratio can be thought of as a conversion factor, a ratio used to convert between units.    Convert to degrees.      Sketching Radian Angles in Standard Position  To graph an angle in radians, it's easiest to think in terms of fractions of . To start,    is a full rotation ( )  is a half rotation ( )         Then,    (or half of ) is a quarter rotation (half of a half rotation), which is  (or a quarter of ) is half of a quarter rotation, which is .  is split into 6 equal pieces, which is .         For bigger angles, we can count multiples.    For example, for , first divide into 6 equal pieces, and then count 5 of them,           Special Angles in Radians    "
},
{
  "id": "motivation-for-radians-3",
  "level": "2",
  "url": "sec-radian-measure.html#motivation-for-radians-3",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "    "
},
{
  "id": "motivation-for-radians-6",
  "level": "2",
  "url": "sec-radian-measure.html#motivation-for-radians-6",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": "    "
},
{
  "id": "motivation-for-radians-9",
  "level": "2",
  "url": "sec-radian-measure.html#motivation-for-radians-9",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": "    "
},
{
  "id": "motivation-for-radians-12",
  "level": "2",
  "url": "sec-radian-measure.html#motivation-for-radians-12",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": "  For example, for this particular angle below, for cm, the arc is 8 cm, and for cm, the arc is 16 cm.       While the arc lengths are different, in both scenarios, the arc length is 2 radius lengths.   "
},
{
  "id": "motivation-for-radians-17",
  "level": "2",
  "url": "sec-radian-measure.html#motivation-for-radians-17",
  "type": "Figure",
  "number": "2.1.6",
  "title": "",
  "body": "    "
},
{
  "id": "radians-2",
  "level": "2",
  "url": "sec-radian-measure.html#radians-2",
  "type": "Definition",
  "number": "2.1.7",
  "title": "",
  "body": "  One radian is defined to be the angle at the center of a circle such that the arc length associated with it is equal to the radius of the circle,       More generally, an angle with associated radius and arc length is given by,     The symbol for radians is rad , however the symbol is often omitted. So, if an angle has no unit, it should be assumed to be radians (and for degrees, use ).     "
},
{
  "id": "converting-between-degrees-and-radians-7",
  "level": "2",
  "url": "sec-radian-measure.html#converting-between-degrees-and-radians-7",
  "type": "Theorem",
  "number": "2.1.9",
  "title": "Converting between degrees and radians.",
  "body": " Converting between degrees and radians       "
},
{
  "id": "converting-between-degrees-and-radians-9",
  "level": "2",
  "url": "sec-radian-measure.html#converting-between-degrees-and-radians-9",
  "type": "Checkpoint",
  "number": "2.1.11",
  "title": "",
  "body": "  Convert to degrees.   "
},
{
  "id": "sketching-radian-angles-in-standard-position-4",
  "level": "2",
  "url": "sec-radian-measure.html#sketching-radian-angles-in-standard-position-4",
  "type": "Figure",
  "number": "2.1.12",
  "title": "",
  "body": "    "
},
{
  "id": "sketching-radian-angles-in-standard-position-7",
  "level": "2",
  "url": "sec-radian-measure.html#sketching-radian-angles-in-standard-position-7",
  "type": "Figure",
  "number": "2.1.13",
  "title": "",
  "body": "    "
},
{
  "id": "sketching-radian-angles-in-standard-position-9",
  "level": "2",
  "url": "sec-radian-measure.html#sketching-radian-angles-in-standard-position-9",
  "type": "Example",
  "number": "2.1.14",
  "title": "",
  "body": "  For example, for , first divide into 6 equal pieces, and then count 5 of them,        "
},
{
  "id": "sec-ratios-of-non-acute-angles-reference-angles",
  "level": "1",
  "url": "sec-ratios-of-non-acute-angles-reference-angles.html",
  "type": "Section",
  "number": "2.2",
  "title": "Ratios of Non-Acute Angles, Reference Angles",
  "body": " Ratios of Non-Acute Angles, Reference Angles   Introduction     This is a subsection.    Exact Trig-Value Practice   Evaluate exactly.  Your answer:   For square roots, type \"sqrt\", not a decimal approximation (for example, type \"sqrt(3)\", or \"sqrt(2)\").    \/\/ === OPTIONS === const USE_RADIANS = true; const ALLOW_NEGATIVE = true; const ALLOW_WRAP = true; const USE_RECIPROCALS = true; \/\/ === Exact values for key angles === const exact = { sin: { 0: \"0\", 30: \"1\/2\", 45: \"sqrt(2)\/2\", 60: \"sqrt(3)\/2\", 90: \"1\", 120: \"sqrt(3)\/2\", 135: \"sqrt(2)\/2\", 150: \"1\/2\", 180: \"0\", 210: \"-1\/2\", 225: \"-sqrt(2)\/2\", 240: \"-sqrt(3)\/2\", 270: \"-1\", 300: \"-sqrt(3)\/2\", 315: \"-sqrt(2)\/2\", 330: \"-1\/2\" } }; \/\/ Generate cos, tan exact.cos = {}; exact.tan = {}; for (let deg in exact.sin) { const s = eval(exact.sin[deg].replace(\"sqrt\", \"Math.sqrt\")); const c = Math.cos(deg * Math.PI \/ 180); const cs = Math.abs(c) < 1e-10 ? \"0\" : Math.abs(c - 0.5) < 1e-10 ? \"1\/2\" : Math.abs(c - Math.sqrt(2)\/2) < 1e-10 ? \"sqrt(2)\/2\" : \"sqrt(3)\/2\"; exact.cos[deg] = c < 0 ? \"-\" + cs : cs; if (Math.abs(c) < 1e-10) { exact.tan[deg] = null; } else { const t = s \/ c; const abs = Math.abs(t); const ts = abs < 1e-10 ? \"0\" : Math.abs(abs - 1) < 1e-10 ? \"1\" : abs < 1 ? \"sqrt(3)\/3\" : \"sqrt(3)\"; exact.tan[deg] = t < 0 ? \"-\" + ts : ts; } } \/\/ Reciprocal functions function reciprocal(str) { if (!str || str === \"0\") return null; if (str === \"1\") return \"1\"; if (str === \"sqrt(3)\/3\") return \"sqrt(3)\"; if (str === \"sqrt(3)\") return \"sqrt(3)\/3\"; if (str === \"1\/2\") return \"2\"; if (str === \"sqrt(2)\/2\") return \"sqrt(2)\"; if (str === \"sqrt(3)\/2\") return \"2*sqrt(3)\/3\"; return str.startsWith(\"-\") ? \"-\" + reciprocal(str.slice(1)) : \"1\/(\" + str + \")\"; } exact.csc = Object.fromEntries(Object.entries(exact.sin).map(([d, s]) => [d, reciprocal(s)])); exact.sec = Object.fromEntries(Object.entries(exact.cos).map(([d, s]) => [d, reciprocal(s)])); exact.cot = Object.fromEntries(Object.entries(exact.tan).map(([d, s]) => [d, reciprocal(s)])); \/\/ === Choose function === let funcs = [\"sin\", \"cos\", \"tan\"]; if (USE_RECIPROCALS) funcs.push(\"csc\", \"sec\", \"cot\"); let func; let deg, k, thetaDeg; const baseAngles = Object.keys(exact.sin).map(Number); do { func = funcs[RNG.randInt(0, funcs.length - 1)]; deg = baseAngles[RNG.randInt(0, baseAngles.length - 1)]; k = ALLOW_WRAP ? RNG.randInt(-1, 1) : 0; if (!ALLOW_NEGATIVE && k < 0) k = 0; thetaDeg = deg + 360 * k; } while (exact[func][deg] === null); v.func = func; v.answerExpr = exact[func][deg]; \/\/ === TeX angle === function texForDegrees(d) { return d + \"^{\\\\circ}\"; } function texForRadians(d) { let frac = d \/ 180; const sign = frac < 0 ? \"-\" : \"\"; frac = Math.abs(frac); const denom = 12; let num = frac * denom; const gcf = (a, b) => b ? gcf(b, a % b) : a; const g = gcf(num, denom); num \/= g; const den = denom \/ g; return sign + (den === 1 ? num + \"\\\\pi\" : \"\\\\tfrac{\" + num + \"\\\\pi}{\" + den + \"}\"); } v.angleTeX = USE_RADIANS && RNG.randInt(0, 1) === 0 ? texForRadians(thetaDeg) : texForDegrees(thetaDeg);       Correct, great work 🎉    Not quite. Use an exact radical value like , not a decimal.      The exact value is \\ \\!\\bigl( \\bigr) = .      "
},
{
  "id": "trig-exact-practice",
  "level": "2",
  "url": "sec-ratios-of-non-acute-angles-reference-angles.html#trig-exact-practice",
  "type": "Exercise",
  "number": "2.2.1.1",
  "title": "Exact Trig-Value Practice.",
  "body": " Exact Trig-Value Practice   Evaluate exactly.  Your answer:   For square roots, type \"sqrt\", not a decimal approximation (for example, type \"sqrt(3)\", or \"sqrt(2)\").    \/\/ === OPTIONS === const USE_RADIANS = true; const ALLOW_NEGATIVE = true; const ALLOW_WRAP = true; const USE_RECIPROCALS = true; \/\/ === Exact values for key angles === const exact = { sin: { 0: \"0\", 30: \"1\/2\", 45: \"sqrt(2)\/2\", 60: \"sqrt(3)\/2\", 90: \"1\", 120: \"sqrt(3)\/2\", 135: \"sqrt(2)\/2\", 150: \"1\/2\", 180: \"0\", 210: \"-1\/2\", 225: \"-sqrt(2)\/2\", 240: \"-sqrt(3)\/2\", 270: \"-1\", 300: \"-sqrt(3)\/2\", 315: \"-sqrt(2)\/2\", 330: \"-1\/2\" } }; \/\/ Generate cos, tan exact.cos = {}; exact.tan = {}; for (let deg in exact.sin) { const s = eval(exact.sin[deg].replace(\"sqrt\", \"Math.sqrt\")); const c = Math.cos(deg * Math.PI \/ 180); const cs = Math.abs(c) < 1e-10 ? \"0\" : Math.abs(c - 0.5) < 1e-10 ? \"1\/2\" : Math.abs(c - Math.sqrt(2)\/2) < 1e-10 ? \"sqrt(2)\/2\" : \"sqrt(3)\/2\"; exact.cos[deg] = c < 0 ? \"-\" + cs : cs; if (Math.abs(c) < 1e-10) { exact.tan[deg] = null; } else { const t = s \/ c; const abs = Math.abs(t); const ts = abs < 1e-10 ? \"0\" : Math.abs(abs - 1) < 1e-10 ? \"1\" : abs < 1 ? \"sqrt(3)\/3\" : \"sqrt(3)\"; exact.tan[deg] = t < 0 ? \"-\" + ts : ts; } } \/\/ Reciprocal functions function reciprocal(str) { if (!str || str === \"0\") return null; if (str === \"1\") return \"1\"; if (str === \"sqrt(3)\/3\") return \"sqrt(3)\"; if (str === \"sqrt(3)\") return \"sqrt(3)\/3\"; if (str === \"1\/2\") return \"2\"; if (str === \"sqrt(2)\/2\") return \"sqrt(2)\"; if (str === \"sqrt(3)\/2\") return \"2*sqrt(3)\/3\"; return str.startsWith(\"-\") ? \"-\" + reciprocal(str.slice(1)) : \"1\/(\" + str + \")\"; } exact.csc = Object.fromEntries(Object.entries(exact.sin).map(([d, s]) => [d, reciprocal(s)])); exact.sec = Object.fromEntries(Object.entries(exact.cos).map(([d, s]) => [d, reciprocal(s)])); exact.cot = Object.fromEntries(Object.entries(exact.tan).map(([d, s]) => [d, reciprocal(s)])); \/\/ === Choose function === let funcs = [\"sin\", \"cos\", \"tan\"]; if (USE_RECIPROCALS) funcs.push(\"csc\", \"sec\", \"cot\"); let func; let deg, k, thetaDeg; const baseAngles = Object.keys(exact.sin).map(Number); do { func = funcs[RNG.randInt(0, funcs.length - 1)]; deg = baseAngles[RNG.randInt(0, baseAngles.length - 1)]; k = ALLOW_WRAP ? RNG.randInt(-1, 1) : 0; if (!ALLOW_NEGATIVE && k < 0) k = 0; thetaDeg = deg + 360 * k; } while (exact[func][deg] === null); v.func = func; v.answerExpr = exact[func][deg]; \/\/ === TeX angle === function texForDegrees(d) { return d + \"^{\\\\circ}\"; } function texForRadians(d) { let frac = d \/ 180; const sign = frac < 0 ? \"-\" : \"\"; frac = Math.abs(frac); const denom = 12; let num = frac * denom; const gcf = (a, b) => b ? gcf(b, a % b) : a; const g = gcf(num, denom); num \/= g; const den = denom \/ g; return sign + (den === 1 ? num + \"\\\\pi\" : \"\\\\tfrac{\" + num + \"\\\\pi}{\" + den + \"}\"); } v.angleTeX = USE_RADIANS && RNG.randInt(0, 1) === 0 ? texForRadians(thetaDeg) : texForDegrees(thetaDeg);       Correct, great work 🎉    Not quite. Use an exact radical value like , not a decimal.      The exact value is \\ \\!\\bigl( \\bigr) = .   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
