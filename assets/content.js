/* =========================================================================
   Content data for the interactive baloxavir-vs-oseltamivir protocol
   (influenza, including severe illness / viral pneumonia).
   Every clinical claim below is paraphrased from the cited source, not
   copied from it. Reference numbers match REFERENCES below and the
   printed list in index.html.

   Reference 1 is the authors' own systematic review (evidence summary:
   65 reports, RoB-2 risk-of-bias assessment, GRADE certainty rating,
   effect sizes by Cohen's d) whose algorithm is reproduced, unchanged,
   on this page. Every other reference below was independently located
   and verified against a primary source (a trial report, a regulatory
   label, or the WHO guideline itself) rather than taken on trust from
   any secondary summary.
   ========================================================================= */

const REFERENCES = [
  {
    id: 1,
    kind: "Systematic review — source of this algorithm",
    text: "Karcıoğlu Ö, Bozatlı SBH. Baloxavir marboxil versus oseltamivir in influenza and viral pneumonia: a systematic review and evidence synthesis (2006–2026), with risk-of-bias assessment (RoB-2), GRADE certainty rating, and clinical significance by Cohen's d (MCID 0.2 minimal / 0.5 clear). Manuscript in preparation. This page's algorithm is reproduced, unchanged, from that review's synthesis.",
    url: null
  },
  {
    id: 2,
    kind: "Randomized trial",
    text: "Hayden FG, Sugaya N, Hirotsu N, et al; Baloxavir Marboxil Investigators Group. Baloxavir Marboxil for Uncomplicated Influenza in Adults and Adolescents. N Engl J Med. 2018;379(10):913–923.",
    url: "https://doi.org/10.1056/NEJMoa1716197"
  },
  {
    id: 3,
    kind: "Randomized trial",
    text: "Ison MG, Portsmouth S, Yoshida Y, et al. Early treatment with baloxavir marboxil in high-risk adolescent and adult outpatients with uncomplicated influenza (CAPSTONE-2): a randomised, placebo-controlled, phase 3 trial. Lancet Infect Dis. 2020;20(10):1204–1214.",
    url: "https://doi.org/10.1016/S1473-3099(20)30004-9"
  },
  {
    id: 4,
    kind: "Randomized trial",
    text: "Kumar D, Ison MG, Mira JP, et al. Combining baloxavir marboxil with standard-of-care neuraminidase inhibitor in patients hospitalised with severe influenza (FLAGSTONE): a randomised, parallel-group, double-blind, placebo-controlled, superiority trial. Lancet Infect Dis. 2022;22(5):718–730.",
    url: "https://doi.org/10.1016/S1473-3099(21)00469-2"
  },
  {
    id: 5,
    kind: "Randomized trial",
    text: "Ikematsu H, Hayden FG, Kawaguchi K, et al. Baloxavir Marboxil for Prophylaxis against Influenza in Household Contacts (BLOCKSTONE). N Engl J Med. 2020;383(4):309–320.",
    url: "https://doi.org/10.1056/NEJMoa1915341"
  },
  {
    id: 6,
    kind: "Post-hoc analysis, randomized trial (MINISTONE-2)",
    text: "Safety and efficacy of baloxavir marboxil in influenza-infected children 5–11 years of age: a post-hoc analysis of a phase 3 study (MINISTONE-2). Pediatr Infect Dis J.",
    url: "https://doi.org/10.1097/INF.0000000000004062"
  },
  {
    id: 7,
    kind: "Clinical practice guideline",
    text: "World Health Organization. Clinical practice guidelines for influenza. Geneva: WHO; 2024. ISBN 978-92-4-009775-9. Recommendations on antiviral choice for non-severe, high-risk influenza (conditional recommendation for baloxavir, low-quality evidence) and against routine oseltamivir in non-severe influenza generally (strong recommendation, moderate-quality evidence) are in the \"Recommendations for patients with non-severe symptomatic influenza\" section.",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK607899/"
  },
  {
    id: 8,
    kind: "Clinical guidance",
    text: "Centers for Disease Control and Prevention. Antiviral Treatment of People who are Obstetric or Immediately Postpartum with Suspected or Confirmed Influenza. CDC Influenza (Flu) — Clinical Guidance.",
    url: "https://www.cdc.gov/flu/hcp/antivirals/treatment_obstetric.html"
  },
  {
    id: 9,
    kind: "Regulatory label",
    text: "U.S. Food and Drug Administration. XOFLUZA (baloxavir marboxil) tablets, for oral use — full prescribing information. Genentech/Shionogi, original approval 2018 (sections 2, 7.1, 8.1, 12.3, and 17 cover polyvalent-cation interactions and pregnancy data).",
    url: "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2018/210854Orig1s000lbl.pdf"
  },
  {
    id: 10,
    kind: "Surveillance study",
    text: "Takashita E, Ichikawa M, Morita H, et al. Human-to-Human Transmission of Influenza A(H3N2) Virus with Reduced Susceptibility to Baloxavir, Japan, February 2019. Emerg Infect Dis. 2019;25(11):2108–2111.",
    url: "https://wwwnc.cdc.gov/eid/article/25/11/19-0757_article"
  },
  {
    id: 11,
    kind: "Observational study",
    text: "Chon I, Wagatsuma K, Saito R, et al. Detection of influenza A(H3N2) viruses with polymerase acidic subunit substitutions after and prior to baloxavir marboxil treatment during the 2022–2023 influenza season in Japan. Antiviral Res. 2024;229:105956.",
    url: "https://doi.org/10.1016/j.antiviral.2024.105956"
  }
];

const NODES = [
  {
    id: "trigger",
    type: "terminal",
    label: "Adult or child with suspected or confirmed influenza (clinical syndrome ± rapid antigen/NAAT test)",
    meaning:
      "The algorithm opens on clinical suspicion, not a confirmed result. Rapid antigen tests are specific but miss a meaningful share of true infections, and NAAT (nucleic acid amplification testing, e.g. PCR) results often return too late to guide a same-day treatment decision — which is why every downstream box is written around \"suspected or confirmed\" rather than \"confirmed\" influenza.",
    rationale:
      "Starting from syndrome rather than a positive test keeps the first real decision point — how sick is this patient right now — ahead of any laboratory turnaround time, consistent with how the WHO guideline frames treatment timing below.",
    refs: [7]
  },
  {
    id: "severe_check",
    type: "decision",
    label: "SEVERE ILLNESS?",
    sub: "Hospitalisation needed, hypoxaemia (SpO2 <94%), radiological pneumonia, sepsis, altered mentation or ICU need",
    meaning:
      "This is the first branch point, and it separates two populations with very different stakes: a patient sick enough to need hospital-level care, versus everyone else. Each criterion listed is itself a marker of a complication influenza can cause directly (viral pneumonia, sepsis from bacterial co-infection, hypoxaemic respiratory failure) rather than a marker of influenza severity in the abstract.",
    rationale:
      "Routing on organ-level severity rather than on test result or symptom duration is what lets the \"treat even if >48 h\" instruction on the next screen make sense: a patient who is hypoxaemic or septic is not treated on a symptom-duration clock the way an outpatient is.",
    refs: [7]
  },
  {
    id: "oseltamivir_now",
    type: "process",
    tone: "key",
    label: "Start OSELTAMIVIR immediately;",
    sub: "do not wait for test results; treat even if >48 h from onset",
    meaning:
      "Oseltamivir, not baloxavir, is the drug named here for severe illness. The WHO guideline's recommendation against routine oseltamivir use is scoped specifically to non-severe influenza; antiviral treatment of hospitalised, severe influenza is treated as a distinct clinical question the same guideline also addresses, and starting promptly rather than waiting on a test result or a 48-hour symptom-duration cutoff is standard practice once a patient meets severe-illness criteria.",
    rationale:
      "A rapid antigen test's sensitivity is not high enough to safely rule out influenza in a patient who is already hypoxaemic or septic, and NAAT turnaround is frequently measured in hours to a day — treatment delayed until either result returns can mean a clinically meaningful delay in a patient who may deteriorate during that window.",
    refs: [7]
  },
  {
    id: "risk_check",
    type: "decision",
    label: "HIGH RISK OF COMPLICATIONS?",
    sub: "Age ≥65 y or <5 y, pregnancy/post-partum, chronic cardiopulmonary, renal or metabolic disease, immunosuppression, obesity",
    meaning:
      "For patients who are not severely ill, the next fork is risk status rather than drug choice directly, because the WHO guideline's two recommendations for non-severe influenza point in different directions depending on exactly this. Each listed risk factor is a recognised correlate of influenza-related complications and hospitalisation in the surveillance and trial literature this algorithm draws on.",
    rationale:
      "Splitting on risk before splitting on drug choice mirrors how the evidence itself is organised: CAPSTONE-2 enrolled specifically high-risk outpatients, while CAPSTONE-1 enrolled an otherwise-healthy population, and the two trials' results are not interchangeable across that line.",
    refs: [3, 2, 7]
  },
  {
    id: "supportive_care",
    type: "process",
    label: "Oxygen and supportive care;",
    sub: "antibiotics only if bacterial co-infection suspected; continue oseltamivir ≥5 days",
    meaning:
      "Antiviral treatment does not replace the supportive measures severe influenza itself can require — supplemental oxygen for hypoxaemia, fluid and haemodynamic support for sepsis. Antibiotics are reserved for suspected bacterial co-infection rather than given empirically to every severe case, consistent with general antimicrobial stewardship practice around viral respiratory illness.",
    rationale:
      "The 5-day minimum course mirrors the standard oseltamivir treatment duration used across the trial literature (CAPSTONE-1, CAPSTONE-2) rather than a shorter, symptom-driven course, reflecting that a hospitalised patient's viral burden and complication risk justify completing a full course rather than stopping once symptoms begin to improve.",
    refs: [7, 2]
  },
  {
    id: "treat_promptly",
    type: "process",
    label: "Treat promptly,",
    sub: "ideally ≤48 h of onset (later if progressive)",
    meaning:
      "For a high-risk but non-severe patient, timing still matters even though the WHO recommendation to treat this group is not conditioned on a hard 48-hour cutoff the way some older guidance was. Both CAPSTONE trials enrolled patients within 48 hours of symptom onset, and that window is where the strongest direct trial evidence for symptom-duration benefit comes from; \"later if progressive\" reflects that a worsening trajectory, not the clock alone, is what should prompt treatment outside that window.",
    rationale:
      "Treating promptly in a high-risk patient is where the WHO guideline's conditional recommendation for baloxavir carries most of its weight — the evidence-to-decision judgement behind it rests partly on reducing progression to hospitalisation in exactly this population.",
    refs: [7, 3]
  },
  {
    id: "symptomatic_care",
    type: "process",
    label: "Symptomatic care;",
    sub: "antiviral optional if ≤48 h from onset",
    meaning:
      "This is the lowest-risk, non-severe branch, and it is also where the WHO guideline's strong recommendation against routine oseltamivir sits most squarely: for an otherwise healthy, non-severe patient, that guideline recommends against routine oseltamivir use on moderate-quality evidence, which is why antiviral treatment here is framed as optional rather than routine, and tied to the same early-treatment window where benefit is best established.",
    rationale:
      "Framing treatment as optional rather than withheld outright leaves room for shared decision-making — faster symptom resolution is still a real, if modest, benefit an individual patient may reasonably want even outside a risk group the guideline singles out.",
    refs: [7, 2]
  },
  {
    id: "no_baloxavir",
    type: "process",
    tone: "alarm",
    label: "Do NOT routinely add baloxavir",
    sub: "(FLAGSTONE: no clinical benefit of baloxavir + NAI)",
    meaning:
      "FLAGSTONE directly tested this question in the population it matters most for — hospitalised patients with severe influenza already receiving a neuraminidase inhibitor — and found no benefit to adding baloxavir: median time to clinical improvement was 97.5 hours with baloxavir added versus 100.2 hours with standard of care alone, a difference that was not statistically significant.",
    rationale:
      "This is the one box in the algorithm where a specific combination strategy was tested in a large randomised trial and came back negative, which is why it is stated as a direct instruction rather than left to clinical judgement the way most of the rest of this branch is.",
    refs: [4]
  },
  {
    id: "baloxavir_single",
    type: "process",
    tone: "key",
    label: "BALOXAVIR single dose (WHO preference for high-risk non-severe)",
    sub: "or OSELTAMIVIR for 5 days",
    meaning:
      "The WHO guideline's wording for this group is a conditional recommendation in favour of baloxavir, based on low-quality evidence for reducing hospital admission, applying to patients aged 65 or older or with one or more major risk factors, started within 2 days of symptom onset. The guideline's overall certainty across outcomes for this recommendation is rated moderate — high for mortality and adverse events, moderate for symptom alleviation, low for hospital admission specifically. Oseltamivir for 5 days remains the alternative named in this box, reflecting that the WHO recommendation is conditional rather than strong, and that oseltamivir has the much larger safety experience in exactly the populations (older adults, people with chronic disease) this risk category covers.",
    rationale:
      "A conditional, low-certainty recommendation is not the same as a mandate — the algorithm preserves oseltamivir as a listed alternative here rather than removing it, consistent with the guideline's own conditional framing.",
    refs: [7, 3]
  },
  {
    id: "either_equivalent",
    type: "process",
    label: "Either agent is clinically equivalent;",
    sub: "baloxavir favoured for influenza B, adherence or household protection",
    meaning:
      "For a non-severe, standard-risk patient who wants treatment, CAPSTONE-1 found baloxavir's symptom-relief benefit over placebo similar in magnitude to oseltamivir's, with the two active drugs not meaningfully different from each other on the primary symptom-alleviation endpoint. CAPSTONE-2 separately found baloxavir's time-to-improvement advantage particularly pronounced in influenza B infection. Baloxavir's practical edge in this group is less about symptom relief and more about it being a single oral dose rather than a twice-daily 5-day course, which matters for adherence, and that BLOCKSTONE separately showed a single baloxavir dose reduced clinical influenza in household contacts by 86% relative to placebo when used as post-exposure prophylaxis.",
    rationale:
      "Naming the single-dose regimen and household-protection data as reasons to favour baloxavir — rather than superior efficacy — keeps the \"clinically equivalent\" framing honest: the trial evidence does not show baloxavir outperforming oseltamivir on symptom relief in this population, only convenience and transmission-related advantages.",
    refs: [2, 3, 5]
  },
  {
    id: "resistance_exception",
    type: "process",
    label: "Exception: proven/suspected NAI resistance or immunocompromised host with persistent shedding",
    sub: "→ consider baloxavir ± oseltamivir with expert advice and virological monitoring",
    meaning:
      "This exception sits on the severe-illness branch, where FLAGSTONE otherwise argues against routinely adding baloxavir to a neuraminidase inhibitor. Proven or suspected neuraminidase-inhibitor resistance removes the premise FLAGSTONE tested under (an NAI that is actually working), and immunocompromised patients with persistent viral shedding are a population in whom prolonged replication raises the chance of a resistant variant emerging under treatment, independent of baseline resistance.",
    rationale:
      "Naming \"expert advice and virological monitoring\" rather than a fixed regimen reflects that this is a genuinely individualised scenario with comparatively little direct trial evidence — the combination strategy that failed in FLAGSTONE's general hospitalised population may still have a rationale once the underlying premise (a working NAI) no longer holds.",
    refs: [4]
  },
  {
    id: "pregnancy_pref",
    type: "process",
    label: "Prefer OSELTAMIVIR in pregnancy/post-partum, infants, or when cation co-ingestion (dairy, antacids, supplements) cannot be avoided",
    meaning:
      "CDC guidance recommends oseltamivir as the preferred antiviral in pregnancy and for up to two weeks post-partum, and explicitly advises against baloxavir in both pregnancy and breastfeeding — not because of a demonstrated harm, but because of an absence of human safety and efficacy data in this population; the only data are animal studies, including one rabbit study at a maternally toxic dose that showed fetal skeletal variations and two pregnancy losses among nineteen pregnancies. Oseltamivir's recommendation instead rests on multiple observational studies in pregnancy showing no increase in adverse events. Separately, baloxavir's US approval begins at age 5 (based on the MINISTONE-2 paediatric data), so infants fall outside its studied and approved age range regardless of the pregnancy question. The cation-interaction caveat is a practical rather than a safety one: the FDA label specifically warns that dairy products, calcium-fortified beverages, and polyvalent-cation-containing antacids, laxatives, or supplements (calcium, iron, magnesium, zinc) can chelate baloxavir and reduce its plasma concentration, with no defined safe spacing interval given — only \"avoid co-administration\".",
    rationale:
      "Grouping three different populations in one box works because the underlying reason is the same shape in each case: a real or practical gap in baloxavir's evidence or pharmacokinetics that oseltamivir's much larger experience doesn't share.",
    cautions: [
      "The FDA label's pregnancy section states plainly that there are no available human data on baloxavir use in pregnant women."
    ],
    refs: [8, 9, 6]
  },
  {
    id: "return_precautions",
    type: "process",
    label: "Return precautions: dyspnoea, chest pain, confusion or persistent fever",
    sub: "→ re-assess for pneumonia",
    meaning:
      "This is the safety-net for the lowest-risk branch: a patient sent home on symptomatic care alone can still progress to viral or secondary bacterial pneumonia, and the listed symptoms are the standard red flags for that progression rather than an exhaustive list of every possible complication.",
    rationale:
      "Explicit return precautions matter most exactly where the algorithm has just offered the lightest-touch management (symptomatic care, antiviral optional) — without a clear instruction for when to come back, the patients least closely followed are the ones a deteriorating course is easiest to miss in.",
    refs: [1]
  },
  {
    id: "safety_net",
    type: "terminal",
    label: "SAFETY NET: re-evaluate if symptoms rebound after baloxavir",
    sub: "(possible PA/I38X variant, especially children with A(H3N2)); post-exposure prophylaxis for high-risk contacts (baloxavir or oseltamivir); vaccinate",
    meaning:
      "Baloxavir resistance arises from substitutions at polymerase acidic protein residue 38 (PA/I38X), and the available surveillance data show this is not evenly distributed: in one Japanese seasonal survey, pre-treatment PA I38 substitutions in A(H3N2) virus were found in 12.1% of specimens from patients aged 0–11, compared with under 2% in adults over 20. A separate 2022–2023 season study of paired A(H3N2) samples collected before and after baloxavir treatment found the substitution emerged in roughly 15% of post-treatment specimens, and every post-treatment case in that study was a child aged 7–14 — the one adult case in the whole dataset was a pre-treatment detection, not a treatment-emergent one. This is the clinical basis for singling out children with A(H3N2) as the group in whom a symptom rebound after baloxavir should specifically raise suspicion of a resistant variant. Post-exposure prophylaxis closes the loop back to the top of this algorithm: BLOCKSTONE showed a single baloxavir dose reduced clinical influenza among household contacts by 86% relative to placebo, with benefit seen across age groups including children under 12, both influenza A subtypes, and regardless of vaccination status.",
    rationale:
      "Ending on vaccination rather than treatment is deliberate — every box above this one is about managing an infection that has already happened, and the single intervention with the largest effect on influenza-related severe illness at a population level remains preventing the infection in the first place.",
    refs: [10, 11, 5]
  }
];

const GLOSSARY = [
  { match: "NAAT", full: "nucleic acid amplification test", def: "A molecular test (e.g. PCR) that detects viral genetic material directly; more sensitive than rapid antigen testing but often with a slower turnaround." },
  { match: "NAI", full: "neuraminidase inhibitor", def: "The drug class that includes oseltamivir and zanamivir, which block the viral neuraminidase enzyme needed for new virus particles to leave an infected cell." },
  { match: "PA/I38X", full: "polymerase acidic protein, isoleucine-38 substitution", def: "A substitution at residue 38 of the influenza polymerase acidic (PA) protein — the site baloxavir binds — that reduces the drug's effectiveness when it emerges." },
  { match: "ICU", full: "intensive care unit", def: "A hospital unit providing the highest level of monitoring and organ support for critically ill patients." },
  { match: "SpO2", full: "peripheral oxygen saturation", def: "Oxygen saturation of the blood as measured non-invasively, typically by pulse oximetry." }
];
