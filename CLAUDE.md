# Algebra-Precalculus PreTeXt Project

## Build Commands

Build web version (use this PATH fix for MiKTeX):
```bash
cd /c/Users/CKG/Documents/pretext_math/algebra-precalculus
PATH=$(echo "$PATH" | tr ':' '\n' | grep -v "claude.exe" | tr '\n' ':') pretext build web
```

View locally:
```bash
pretext view web
```

Deploy to GitHub Pages:
```bash
pretext deploy
```

## File Locations

- Source files: `source/*.ptx`
- Main book structure: `source/main.ptx`
- Custom macros: `source/docinfo.ptx` (includes `\brac{}`, `\abs{}`, `\set{}`, etc.)
- Chapter includes: Each chapter file uses `<xi:include>` for sections

## PreTeXt Patterns

### Examples with solutions
```xml
<example>
  <title>Descriptive Title</title>
  <statement><p>Problem statement here.</p></statement>
  <solution>
    <md>
      <mrow>step 1 \amp= ...</mrow>
      <mrow>\amp= step 2 \amp\amp\text{explanation}</mrow>
    </md>
  </solution>
</example>
```

### Practice problems (projects with tasks)
```xml
<project xml:id="project-name">
  <title>Practice Set I</title>
  <task><statement><m>x^2 + 5x + 6</m></statement><answer><m>(x+2)(x+3)</m></answer></task>
  <task><statement><m>x^2 - 9</m></statement><answer><m>(x+3)(x-3)</m></answer></task>
</project>
```

### Two-column summary tables
```xml
<tabular halign="left">
  <col width="50%"/>
  <col width="50%"/>
  <row header="yes" bottom="minor">
    <cell><term>Steps</term></cell>
    <cell><term>Example</term></cell>
  </row>
  <row>
    <cell><p>1. First step</p></cell>
    <cell><p><m>x^2 + 6x = 5</m></p></cell>
  </row>
</tabular>
```

### TikZ diagrams
```xml
<figure xml:id="fig-name">
  <caption>Description</caption>
  <image width="100%">
    <latex-image>
      \begin{tikzpicture}[...]
      ...
      \end{tikzpicture}
    </latex-image>
  </image>
</figure>
```

## Teaching Style

1. **Motivate first**: Start with a problem that shows *why* the technique is needed
2. **Worked examples**: Show full algebraic steps with `<md>` and explanations
3. **Scaffolded practice**: Isolate key skills before combining (e.g., "find the number" before "complete the square")
4. **Projects progress**: I, II, III with increasing difficulty
5. **Summary tables**: Two-column (Steps | Example) at end of major topics
6. **Hints point to method**: "factor", "Pythagorean identity" — not answers

## Mathematical Writing Style

### Structure: Motivation-First Approach
- Always lead with "why" before "how"
- Open sections with a motivating example showing why the technique is needed
- Example titles often include "Motivation" explicitly (e.g., "Motivation for Completing the Square")
- Show the problem case first, then reveal the solution technique
- Pattern: concrete examples → pattern recognition → formal rule → worked examples → practice

### Tone: Conversational Yet Rigorous
Common phrases to use:
- "Observe that..." / "Notice that..." (directing attention to patterns)
- "In other words," (translation to accessible language)
- "However, in fact..." (addressing misconceptions)
- "At first glance..." / "At first, it seems..." (acknowledging student perspective)
- "This means..." (connecting steps to meaning)
- "Recall that..." (referencing prior knowledge)
- "The goal is to..." (stating objectives clearly)
- "Therefore," / "So," (concluding)
- "In simple terms," (clarifying)

Avoid:
- Overly formal academic language
- Skipping logical steps
- Assuming familiarity with shortcuts

### Algebraic Step Explanations
- **Never skip steps** — show every manipulation explicitly
- Use `<md>` blocks with aligned equations using `\amp` for alignment
- Add explanations on the right using `\amp\amp\text{explanation}`
- Common annotations:
  - `\text{by the square root property}`
  - `\text{factoring}`
  - `\text{dividing both sides by 2}`
  - `\text{solving for } x`
  - `\text{subtracting 4 from both sides}`
- Include prose explanations before and after `<md>` blocks explaining the reasoning
- State what you're about to do, do it, then explain what happened

Example pattern:
```xml
<p>First, move the constant to the other side,</p>
<md>
  <mrow>x^2 + 8x + 5 \amp= 0</mrow>
  <mrow>x^2 + 8x \amp= -5</mrow>
</md>
<p>Next, we want to add a number to both sides so that...</p>
```

### Example Progression Pattern
1. **Motivational example** — shows why technique is needed
2. **Pattern recognition** — identify the structure through multiple cases
3. **Worked example** — standard case with full steps
4. **Edge cases** — no solution, special cases, what can go wrong
5. **Alternative methods** — show other approaches when applicable ("This could also be solved by factoring...")
6. **Harder variations** — leading coefficient ≠ 1, fractions, rearrangement needed

### Practice Problem Structure
- Projects labeled I, II, III with increasing difficulty
- Each project has `<introduction>` explaining what to do
- Tasks use `<task><statement>...</statement><answer>...</answer></task>`
- Hints point to **method**, not answers: "factor", "quadratic formula", "sign analysis"
- Include "no solution" cases to test understanding
- Scaffolded: isolate sub-skills before combining them

### Summary Tables
- Two-column format: Steps | Example
- Place at end of major topics
- Uses `<tabular>` with 50% width columns
- Numbered steps on left, corresponding worked example on right
- Wrap cell content in `<p>` tags for proper formatting

### Handling Edge Cases and Common Errors
- Explicitly show "no solution" cases with clear explanation
- Address common errors head-on: "there is no real number whose square is -3"
- Compare methods when useful: "This could be solved by factoring... However, [technique] also works"
- Show what happens when standard assumptions fail
- Use non-examples to clarify boundaries: "Some functions that are NOT exponential include..."

### Visual Elements
- Number line diagrams for inequalities showing critical values and sign patterns
- Graphs to motivate concepts (show parabola before algebraic sign analysis)
- TikZ diagrams with clear labels
- Use `\text{+}` and `\text{-}` for sign indicators on number lines

## Common Issues

- **Table too wide**: Wrap cell content in `<p>` tags for multi-line cells
- **TikZ overfull hbox**: Reduce spacing, node text, or scale
- **MiKTeX PATH error**: Use the PATH filter shown in build command above
