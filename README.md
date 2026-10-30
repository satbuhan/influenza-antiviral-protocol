# Influenza Antiviral Selection — Baloxavir Marboxil vs Oseltamivir

An interactive, referenced walkthrough of the algorithm for choosing between
baloxavir marboxil and oseltamivir in influenza, including severe illness
and viral pneumonia. Every box and decision point in the diagram can be
selected to reveal, in one place: what the step means, why the algorithm
calls for it, and the sources behind it.

**Live site:** https://satbuhan.github.io/influenza-antiviral-protocol/

**Authors:** Dr. Özgür Karcıoğlu & Dr. Satuk Buğra Han Bozatlı

This tool is part of a growing atlas of tools built the same way:

- [Clinical Algorithm Atlas](https://satbuhan.github.io/clinical-algorithm-atlas/) — the hub page for all of them
- [Acute aortic dissection — initial medical management](https://github.com/satbuhan/aortic-dissection-protocol) ([live site](https://satbuhan.github.io/aortic-dissection-protocol/))
- [Butyrophenone selection — acute agitation & hyperactive delirium](https://github.com/satbuhan/agitation-delirium-protocol) ([live site](https://satbuhan.github.io/agitation-delirium-protocol/))
- [Dexketoprofen vs ibuprofen — selecting an NSAID for acute pain](https://github.com/satbuhan/nsaid-pain-protocol) ([live site](https://satbuhan.github.io/nsaid-pain-protocol/))
- [Anticoagulant reversal in gastrointestinal haemorrhage](https://github.com/satbuhan/anticoagulant-reversal-protocol) ([live site](https://satbuhan.github.io/anticoagulant-reversal-protocol/))
- [The adult with obesity in emergency and critical care](https://github.com/satbuhan/obesity-critical-care-protocol) ([live site](https://satbuhan.github.io/obesity-critical-care-protocol/))
- [Dapagliflozin / SGLT2 inhibitor — overdose and acute illness management](https://github.com/satbuhan/dapagliflozin-overdose-protocol) ([live site](https://satbuhan.github.io/dapagliflozin-overdose-protocol/))
- [Lidocaine vs prilocaine — local anaesthesia for laceration repair](https://github.com/satbuhan/lidocaine-prilocaine-protocol) ([live site](https://satbuhan.github.io/lidocaine-prilocaine-protocol/))
- [Reperfusion therapy in acute pulmonary thromboembolism](https://github.com/satbuhan/pte-thrombolysis-protocol) ([live site](https://satbuhan.github.io/pte-thrombolysis-protocol/))

## Why this exists

A flowchart alone tells a reader *what* to do at each step but not *why*,
and a reader outside the authors' own team cannot easily check the evidence
behind a specific recommendation (why oseltamivir rather than baloxavir in
pregnancy, why FLAGSTONE argues against adding baloxavir to a neuraminidase
inhibitor in severe illness). This page keeps the original algorithm
exactly as authored, and attaches the clinical reasoning and literature to
each box without cluttering the diagram itself.

## Evidence base

The algorithm reproduced here is the synthesis from the authors' own
systematic review — 65 reports spanning 2006–2026, with RoB-2 risk-of-bias
assessment, GRADE certainty rating, and clinical significance assessed by
Cohen's d. Every other reference (the CAPSTONE, FLAGSTONE, BLOCKSTONE and
MINISTONE-2 trials; the WHO 2024 influenza guideline; CDC obstetric
guidance; the FDA Xofluza label; two resistance-surveillance studies) was
independently located and verified against its primary source rather than
taken on trust from any secondary summary. See the References section at
the bottom of the page for the full list.

## Disclaimer

This is an academic / educational reference tool, not a substitute for
institutional protocol or bedside clinical judgement. Verify any drug
choice or timing against current local protocol before clinical use.

## How it's built

Plain HTML/CSS/JS, no build step and no framework — a single static site
that GitHub Pages can serve directly.

```
index.html          page structure
assets/style.css     design — same paper/ink/navy "journal" aesthetic as
                      the other tools in this atlas, laid out as three
                      equal-weight parallel columns (severe / high-risk
                      non-severe / standard-risk non-severe)
assets/content.js     ← single source of truth for every node's text and
                      reference list. Edit this file to change what the
                      page says.
assets/app.js         rendering + interaction (builds the diagram and the
                      connector lines from content.js, handles the
                      click-to-expand panel on desktop and the bottom
                      sheet on mobile)
```

### Running it locally

No install needed:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

### Editing content

Open `assets/content.js`. Each entry in `NODES` is one box or decision
diamond from the algorithm (`meaning`, `rationale`, optional `cautions`,
and `refs` pointing at numbered entries in `REFERENCES`). Add or edit a
reference in `REFERENCES` and point to it by `id` from any node.

### Building the next tool in this atlas

See [`METHODOLOGY.md`](METHODOLOGY.md) — the full build/verification
process (fidelity rule, content schema, citation verification, QA steps),
written so that any collaborator or AI assistant can pick up this project
in a fresh session and build the next tool the same way.

## License

Content and code are released under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) —
share and adapt with attribution, non-commercially, under the same license.
