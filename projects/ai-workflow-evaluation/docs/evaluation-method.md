# Evaluation method and limits

The collection contains prepared source/response fixtures. They are deliberately constructed to exercise the checker. The two versions are sample responses, not outputs recorded from a model run.

## Automated checks
Required phrases verify whether specified facts remain visible. Forbidden phrases flag known unsupported claims. Each fixture passes only when all required facts appear and no listed unsupported phrase is present. These are lexical checks; paraphrases and nuanced contradictions may be missed.

## Human review
Assess source fidelity, completeness, usefulness and audience fit. Check quotations, dates, obligations and decisions manually. A lexical pass is not approval to send the draft. Add human ratings only when a reviewer actually provides them.

## Reporting
Report fixture counts and checker outcomes. Do not interpret the pass rate as model accuracy or claim that prompt version 2 improves a live model. A future model experiment would need saved model identifiers, settings, actual responses, a held-out set and reviewer evidence.
