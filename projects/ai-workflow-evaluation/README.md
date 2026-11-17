# AI workflow evaluation

A grounded drafting workflow with explicit checks for facts, decisions and missing information.

**[Open the interactive project](https://ashabakercv.github.io/projects/ai-workflow-evaluation/demo/)**

## Scenario
A fictional coordinator needs to turn source notes into a client update. A fluent draft can still invent approval, remove a blocker or claim a launch date that was never agreed.

## Design decision
Require source-grounded facts and a separate decision-needed section. Evaluate prepared response fixtures against explicit requirements, and reserve judgment about usefulness and tone for a human reviewer.

## Explore the work
- [Prompt Design](docs/prompt-design.md)
- [Evaluation Method](docs/evaluation-method.md)
- [Review Rubric](docs/review-rubric.md)
- [Fictional source data](data/fixtures.json)
- [Functional logic](src/model.mjs)
- [Functional checks](tests/model.test.mjs)

## Run locally
Use Node.js 22 or later to run `npm test`. No dependency installation is required. To view the demo, serve this repository over local HTTP with any static server and open `/demo/`. For example: `python3 -m http.server 8000` followed by `http://localhost:8000/demo/`.

## Scope and limitations
This lab evaluates prepared sample responses offline. It does not call a live model, measure model accuracy or establish performance in production.

## Contribution and provenance
This is an AI-assisted personal portfolio demonstration prepared for Asha Baker. The scenario, source records and sample responses are fictional. It is separate from employer deliverables and does not imply a production deployment, client outcome or prior employment in software engineering. Professional experience is described on the portfolio home page. Asha can use the documentation and source files to review, adapt and explain the implementation.

## Tools and relevant work
Prompt design / Evaluation fixtures / Human review. Relevant areas: AI and learning, Knowledge.

## Version history
Version 1.0 introduces the documented scenario, browser demonstration, source data and functional checks. Subsequent changes should record the user need, change made and verification performed. GitHub Actions results should be described as passing only after a real workflow run succeeds.

## Reuse
The code and documentation are available for portfolio review. No license granting reuse has been selected; contact the owner for permission.
