# LUCY ISLAND v3 validation

Run `node checks/v3.cjs` from this checkout. This uses the same pure engine and catalog shipped to the browser. It checks catalog shape and unique IDs, four candidates on every round, 12 distinct main songs, budget/time bounds, 500 seeded full preparation/performance routes, consensus and rehearsal failure gates, challenge cost prediction and outcomes, encore thresholds and duplicate rejection, all automatic ending predicates, and a naturally completed concert with four encores.

The random sweep uses deliberately unoptimized choices and no final corrections. It is a stress check, not a measured player win rate. Difficulty and stamina values are provisional game data, not factual judgments of musicians' ability. Source links and unverified material are distinguished in the in-game archive.

Browser QA: desktop landing, four-card song selection, preparation and result flow; 390px iframe viewport for responsive layout. Current hosted audience remains owner-private.

Exhausted encore event: audience 89/90 boundary; each member at zero; accept/decline; no stamina recovery; no extra full-song count; once only; and a naturally reached exhaustion event after normal performance/encores. A temporary UI fixture verifies event presentation and its hidden ending, and is excluded from publication.

## v4 presentation refresh

SUIT is self-hosted for UI and numerical information. Gaegu, Gamja Flower, Single Day and Hi Melody are self-hosted for member-name and note accents, with OFL license files retained. The handwritten webfonts include common Korean characters and all characters in the game copy at generation time; remaining glyphs fall back to SUIT. Member typefaces are fictional visual assignments, not reproductions of real handwriting.

Warm paper and the supplied map colors are retained; interaction accents use blue. Production choices, SNS replies, rehearsals and the exhausted-encore choice use keyword groups with costs/effects. Producer reasoning appears in a separate 생각… region. Animal motifs follow user assignments; custom black six-string guitar and white six-string bass SVG stickers distinguish Sangyeop and Wonsang.

Validation: all 34 preparation-screen render paths, four member note fonts loaded in the browser, normal entry-to-note selection flow, 390px iframe viewport (375px content) for costume/song/challenge/exhausted-encore/result screens, no horizontal overflow. Temporary QA pages are removed before packaging. The pure game engine and catalog balancing are unchanged.

## v5 short concert and discoveries

Ten base songs retain two lyrical, two power and two closing slots, with one each for opening, instrumental growth, event and vocal stages. New songs and a special stage remain optional. The live limit is 84 game minutes; per-song stamina and encore satisfaction thresholds are preserved. The safe baseline still reaches encores, and a naturally exhausted encore path still reaches the special ending.

Twelve challenge options have unique IDs, provisional difficulty/stamina ratings and provenance links. New options: Magnetic, NOT CUTE ANYMORE, BANG BANG, JUMP, Gnarly, SPAGHETTI and Whiplash. They are a selectable repertoire, not a claim about current viral rankings or actual LUCY performances.

Three hidden events are conditional, skip when ineligible, cannot repeat, offer a zero-resource fallback, and record choices and discoveries locally. Tests cover each eligibility gate, zero-time fallback, once-only behavior, all twelve challenge stamina predictions, 500 seeded routes, ten distinct songs with four candidates per round, ending branches and encore exhaustion. Browser QA checks actual selection-to-note flow, the twelve-option selector, live metric updates, same-challenge-to-hidden transition, hidden-event continuation, and 375px content-width overflow for challenges and hidden events. Temporary QA pages are excluded from publication.

## v6 opener and new-song corrections

다시! is preselected once and always first in the performed queue. Nine catalog selections complete the ten-song base. The three remaining new songs are optional (maximum two), with duplicate opener submission rejected. 도시해적 replaces the unnamed instrumental; its vocal difficulty/stamina remain zero. Rock and ballad metadata follow user corrections. The fixed opener contributes to the new-song rehearsal check. Optional tracks are inserted into matching growth/lyric/power segments, preserving the Passacaglia-to-Chameleon connection. Browser QA verifies the fixed card and three genre-labeled choices. Engine checks cover the base count, ordering, duplicate rejection and genre metadata, alongside the existing 500-route suite.

## V7 challenge / live-event update
- 15 challenge songs, including officially sourced TAEMIN Guilty, EXO Love Shot and ILLIT It’s Me.
- 100 naturally prepared shows always contain one independent challenge and exactly three once-only live incidents, including the final crowd sing-along.
- 500 seeded unoptimized preparation routes: 124 preparation failures (24.8%); previous V6 same harness: 317/500 (63.4%). This is a regression comparison, not a predicted human win rate.
- Every live incident has an available zero-time, non-draining fallback, including at zero stamina and the time limit.
- Yechan solo voice stamina stays with Yechan; Piano & Vocal rests all other member slots. Selected pose-relay songs remain unchanged; difficulty and stamina are provisional game values.

## V8 Technic fairness and personal stages
- Pre-patch preparation audit (1,000 seeded random routes): means Art 86.610 / Performance 81.577 / Music 92.545 / Technic 62.612. Counts below encore satisfaction threshold 75: 114 / 218 / 12 / 858.
- Post-patch audit, same 1,000-run selection policy (route sequence changes when the Domino arrangement step appears): means 86.740 / 80.938 / 92.660 / 84.163. Counts below 75: 105 / 235 / 7 / 172. These are automated policy samples, not measured player success rates or exact paired choices.
- Every member has personal stage choices; all personal songs can complete the main show. Solo vocal costs stay with the singer. Domino’s two arrangements share one song ID and are tested in both the event and personal slots.
- Existing failure gates, special-stage checks, challenge failures and fatigue finales remain in effect.

V9 resource units: displayed initial budget 2,021 points and preparation time 508 points. All resource cost chips and emergency rehearsal costs use the same proportional conversion. Normalized engine values remain 110/125, so affordability, endings and balance are exactly preserved. Charges equal rounded balance before minus rounded balance after; no cumulative rounding drift. Two-new-song total is displayed separately. Satisfaction/stamina remain /100 and live duration remains minutes.

V10 validation: starting member satisfaction 70 each. 500 route checks and 1,000 preparation samples pass; preparation means 88.586 / 82.923 / 94.125 / 86.066. Updated the technical-neglect test to assert the unchanged -7 penalty relative to initial satisfaction. Resource-display checks pass.

V11: invitation/journal cover with blue Gugi display title, Gaegu notes, paper map, postage stamp and backstage pass. Gugi is self-hosted as a 4.3 KB title subset with original OFL. Choice/button/resource typography is SUIT. Desktop and 390px iframe layout visually checked; mobile start reaches chapter 1 and computed fonts for choice titles/member scores are SUIT. Resource tests and JS syntax pass; gameplay unchanged.

V12: concrete concert concepts (singalong festival, acoustic night, first-show revival, arrangement showcase). Four once-per-run member hints rank currently enabled prep choices by personal priorities, satisfaction/readiness gains and remaining resources. Hints highlight a choice without selecting it or spending resources; use persists across steps, markers clear at the next step. Multi-select new-song checks remain intact when asking. Release hints require sufficient resources for one additional song. Removed speculative title-track wording from game UI. Hint tests, resource tests and full model regression pass. Browser checks confirm used-button disabling, badges, step transitions and preservation of selected new songs.

## V13 ending consolidation
- Paired 2,000 mixed + 2,000 prepared routes before/after. Mixed hidden 62.75% → 4.35%; prepared 68.25% → 2.40%. Change largely reflects reclassification of common team/challenge/song moments, not a random rejection gate. These are synthetic policy frequencies, not player probabilities. Prepared policy deliberately selects original arrangements, so cannot reach the return hidden route; separately verified natural legal return route seed 0.
- Mixed outcome counts: unready 596, good 637, fire 338, warm 342, endless 14, return 26, shore 47; rough 0 under this completion-focused policy. Rough remains reachable by voluntary live withdrawal and low-quality outcomes, covered by branch tests.
- Hidden automatic branches are mutually exclusive by encore count. Shore is an explicit stamina-zero return decision. Concept endings no longer suppressed by high member scores or challenge recovery.
- Boundary tests: audience 94/95 fatigue event, audience 89/90 return, member 79/80 endless, stamina 0/positive, collection migration, concurrent moments, all prior balance/resource/hint regressions.

## V14 — Concert journal quality update
- Choice receipts show actual satisfaction, stamina, audience and resource deltas; fictional member reactions follow the largest satisfaction change. Preparation readiness is visible separately from stamina.
- Progress strip, cue-sheet access and next-song cue improve orientation. Blue accents, paper memory cards, readable UI typography, keyboard focus and reduced-motion support preserve the island visual identity.
- Incident pool 5 → 9: early confetti, audience light wave, challenge reprise request and drum-camera moment. Still three incidents per run including choir; alternate stories retain existing numerical trade-offs.
- Collection cards replay unlocked ending text and hidden stories. Locked hidden pages offer qualitative clues. Replays do not mutate gameplay. Existing collection migration retained.
- Result debrief highlights remaining preparation and low stamina. Concert note includes actual setlist, ending, audience, encore count and four member stats; downloadable as UTF-8 text with no server upload or run persistence.
- Checks: quality-v14, v3, endings-v13, hints and resources passed. 4,000 audit routes exactly match V13 outcomes (mixed hidden 4.35%, prepared 2.40%). Browser checked live selection receipt, 390px iframe result/collection/replay/export; downloaded note bytes verified. Browser download-event listener timed out in the iframe, but the completed file was present and its contents verified. Test fixture pages removed before publication.

## V15 — Letters, real concert memories and song-specific audience choices
- Yechan DAY1/2/3 recovered from deff-227/yeopne_yc after-concert.js + yechan.js; Sangyeop DAY1/2/3 supplied directly by user, DAY3 checked against deff-227/yeopne letter-oct25.js. Only fan-addressed concert letters imported; private fictional phone chat/romance notes excluded. Source provenance is shown.
- Wonsang/Gwangil final-day handwritten letters preserved as user-provided performance photographs. Sangyeop stage speech transcribed from selected image and attributed per explicit user correction. The second speech screenshot has no confirmed author and is not attributed or published.
- Added user-specified 개화, 낙화, 빌런 (50 track catalog). Audience-call tags on seven songs. Optional call-response performance adds audience +1, capped at three, retaining full song stamina/time.
- Choir triggers once at the last selected eligible song (개화/낙화/발아/전체관람가/나는 너야), never arbitrary nonmatching songs. Final-song event resolves to farewell; otherwise returns to live. No forced choir if no eligible song. Base event slots retained.
- INTRO/OUTRO are standalone instrumental scenes; Intro+Knowhow and Intro+I Got U target the selected song. One optional bridge selected in review, extra budget/time/stamina/minutes, switching is refundable and idempotent. Again remains first. Existing blind/Passacaglia/Caprice stages retained.
- Result keepsakes reflect remembered preparation and actual chosen scene. Letters accessible from collection, archive, farewell and result independent of score.
- Checks: fanlove-v15 + v3 + endings-v13 + quality-v14 + hints + resources. New tests cover six letters, correct attribution, no imported private fiction, choir eligibility/final-song phase, bridge adjacency/no duplicate charge/refund, response cap and rejected-state immutability.
- Synthetic 2,000 mixed + 2,000 prepared policy audit after song/catalog changes: mixed hidden 6.30%, prepared 1.80%; failure at preparation mixed 29.80%, prepared 0%. These are scripted policy frequencies, not player probabilities. Full counts: checks/fanlove-v15-audit.json.

## V16 — Text letters and shared stage-heart excerpts
Wonsang and Gwangil final-day handwritten letters transcribed into readable text with spacing/punctuation normalization; photo and original-image links removed from the player UI. The second speech is Wonsang per user confirmation. Stage speeches now appear as separate short excerpts under a shared, unnamed title, both in the reading collection and after the farewell scene. Source attribution retained only in data. No gameplay/stat changes. Rendering and anonymized excerpt assertions passed.

## V17 — Four personal stages and precise choices
- Concepts renamed 파도/달빛/회귀/모험, costume choices 셔츠 & 데님/블랙 수트/블루·화이트/수트→티셔츠. Session choices identify added keyboard, strings, brass/percussion players and practical checks. Member remarks name tempo and entry-beat rehearsal instead of abstract sequencing.
- Four sequential personal rounds, exactly four candidates per member, mandatory one per member. Base set expands from 10 to 13 (Again + eight band slots + four individual slots). Actual solo costs and durations retained; no stamina or time-limit inflation.
- Yechan: 내 쓸쓸함은 차갑지 않아요/사랑한 영원/꿈/Flashback (N.Flying cover). Sangyeop: 해가뜨는밤/날씨가 미쳤어/Run To You/무색. Wonsang: Domino/Porch Light/너무 그렇게 보지 마/Slidey Boy (bass cover). Gwangil: 충분히/Would You Dance With Me/안잘꼬얌/구구절절. Covers explicitly labeled.
- Sources: Bugs official album credits for 사랑한 영원 (20765815), Childish (20807962: Porch Light vocal and 구구절절), 너무 그렇게 보지 마 (20337127); official LUCY ISLAND Slidey Boy nQsE_1pN5Dw. Yechan Flashback selected from previously retrieved official 자장가수 channel catalog in yechan-phone/cover-catalog.json (ZCTDuznmQOA); new web fetch failed, so do not claim newly verified video contents.
- Domino/꿈/충분히 now solo-only, excluded from regular and encore pools; 수박깨러가 joins cute pool to preserve four available candidates. All four-round ownership checks prevent selecting another member's song.
- Removed choir-event tags from song cards; 응원법 mark only. Removed audience-demonstrated dance scenarios and replaced them with an onstage member demonstrating the move.
- Letters: only all four final-day letters remain available; DAY1/2 data and buttons removed. Shared stage-heart excerpts retained.
- Regression: solo-v17, v3, hints, resources, endings-v13, fanlove-v15, quality-v14 passed. Full 4,000-route audit: mixed preparation failure 30.25%, mixed hidden 5.35%; prepared hidden 2.80%. Synthetic policy frequencies only. Prepared route seed31 finishes main and qualifies for encore with energy [55,34,54,51]; natural four-encore and exhausted-encore paths still pass. Browser clicked through all member transitions and confirmed four candidates and accumulated selections. QA fixture removed before commit.

## V18 — aligned cards and part-specific ratings
- Shared grid rows align headings, part tables and buttons. Inline accessible fan-call badge. Browser: paired cards 428px high, table y=261 and button y=454 for tagged/untagged cards; no horizontal overflow.
- Foul vocal difficulty/cost 10/10, Chameleon bass difficulty/cost 10/10. Rebalanced 14 tracks by sustained voice, fast bowing, bass riff/tapping and sustained drum rhythm. Game ratings, not physiological measurements. Existing costume, pacing, medley and fatigue modifiers remain previewed.
- Simplified production labels, track keywords and selection action.
- Passed v3 (500 routes and natural encore/exhaustion), solo-v17, hints, resources, fanlove-v15, endings-v13, quality-v14; JS syntax and diff checks.

## V19 — six keepsake features
- New presentation-only keepsakes.js loaded after prior wrappers. No engine changes. Name is escaped and limited to 24 Unicode characters.
- checks/keepsakes-v19.cjs: 100 cue projections match engine cost/duration/streak modifiers without mutating live state; live cursor/current time; result rows historical; progressive poster; HTML escaping; all eight result tickets and planned/performed distinction; scenes, sticker thresholds, locked clues and collected stamps.
- Passed v3 500 seeded routes and natural encore/exhaustion, resources, hints, fanlove-v15, quality-v14 and endings-v13.
- Browser: custom title updates both poster and cue book. Generated and downloaded PNG poster (1000×1400) and ticket (1440px wide), visually inspected Korean text and edge shapes. Preview restores download controls and handles map-load failure.
- Browser: stage effects off removes scene-art, on restores bloom; tired/happy stickers reflect 18 energy/90 satisfaction. 390px iframe (375px layout viewport) has scrollWidth=clientWidth=375; both ticket faces scrollWidth=clientWidth=299. Mobile poster/status arrangement checked.
- Motion respects prefers-reduced-motion. Forecast table scroll is contained in a named keyboard-focusable region.
- Temporary browser fixtures removed before commit/publication.

## V20 — final immersion and navigation polish
- Removed the concert archive entry points, modal implementation and extension wrapper; retained memory journal and final letters.
- Removed meta disclaimers from member meetings, hints, feeds, incidents, letters, track notes, result notes, exported text and PNG keepsakes. Track details retain practical part difficulty, stamina modifiers, readiness, and cover/solo identification.
- Simplified footer and journal entry. Preserved play-guide visibility on mobile after removing the first header button.
- Passed v3 (500 routes), solo-v17, endings-v13, hints, resources, fanlove-v15, quality-v14 and keepsakes-v19; syntax/diff checks. Browser landing confirms no archive entry or disclaimer copy, journal and guide remain accessible.

## V21 — relay reactions and solo narration
- Renamed the fixed challenge stage, selection heading and result heading to 릴레이 챌린지!; cue sheets and exported setlists use the same data title.
- Four distinct member reactions for cute/sexy/power/groove choices, with separate preparation/success/stumble lines (48 entries). Guilty and Love Shot use sexy reactions without changing mechanical styles or costs. Select changes update only the changed member's preview; chosen lineup and actual result use the same mapping.
- Added individually written non-lyrical stage descriptions for all 16 solo candidates in selection cards, details and live narration. Replaced technical stamina narration in solo scenes; retained numeric part information.
- Added 21세기의 어떤 날 to fan-call songs, including badge and capped audience-response action.
- checks/challenge-v21.cjs covers all 15×4×5 reaction combinations, member variation, success/failure distinction, selective DOM update without state mutation, all solo descriptions and fan-call execution. Existing v3, solo-v17, fanlove-v15, hints, quality-v14 and keepsakes-v19 pass.
- Browser verified four dropdown choices (Magnetic/Love Shot/Guilty/It’s Me), immediate per-member reaction changes and the four-member result report. Temporary QA fixture removed.

## V22 — Sangyeop solo recommendation
- Yechan and Wonsang hint preferences now select Run To You during Sangyeop's solo-song round. Member-specific reasons refer to his voice and sustained phrasing.
- Priority applies after legal option validation and only to this owner/round; other recommendations retain existing scoring. Hint remains once per member and never selects a song or spends resources.
- checks/hints.cjs passes concept/production regressions plus reversed candidate ordering, both named preferences, unavailable-song fallback, other solo owners and unchanged game state except hint records.

## V23 — continuation, records and contextual scenes
- voyage.js adds validated versioned local snapshots without changing engine balances. Retains all engine state (including rest locks, incidents, seeded challenges, hints, bridge and fan responses) and pending challenge/release drafts. Rejects malformed versions, IDs, choices, scalar bounds and arrays.
- Completed shows upsert by run ID, bounded at 20. Result replays are read-only and never replace current save. New-run replacement confirmation and typed reset scope cover only this game's four keys. Storage exceptions keep gameplay usable and announce failure.
- Encore readiness and reason calculations match engine execution/cost/duration/gates; available-first sort is stable and does not mutate resources. All candidates remain visible with disabled choices and specific reasons.
- Flavor is hashed from immutable seed + scene key; does not consume or modify gameplay roll state. Meeting notes react to actual selected songs and arrangements. Final reflections only name performed moments, with a distinct pre-show failure fallback.
- checks/voyage-v23.cjs: 100 seeded routes, 1,225 live and 207 incident snapshots validate and round-trip with identical subsequent outcomes; reload, hint and draft retention; 20-show cap/dedupe; read-only replay; invalid/reset input; unrelated storage key preservation; corrupted storage and current/history quota handling; 100 encore sorts, exact shortage reasons; fixed-per-run variations; selected-song and performed-only copy.
- Existing v3 (500 full routes, encore/exhaustion), resources, hints (including Run To You preference), challenge-v21, solo-v17, quality-v14, fanlove-v15, endings-v13 and keepsakes-v19 pass.
- Browser: start/choice/reload/continue restores step 2 and resources; reset confirmation counts and cancel; finish populates records; result replay indicates read-only; actual encore UI puts MP3 first while disabling costly vocal songs with exact deficits; saved result reflection names actual opener/closing and solo stages. 390px mobile iframe has clientWidth=scrollWidth=375, header controls and continuation card fit. QA fixtures removed before publication.


## V25 — backstage choices and live consequences
- Four contextual two-member meetings, three concrete choices each, existing resource/stat costs preserved, accepted/compromise callbacks once per member in performed-stage feedback.
- Two direct cues per show, one per cursor. Talk: +3 each/+2 minutes. Band: current track vocal cost −3, active instrument costs +1/+1 minute. Signal: immediate −1 each, current stage execution +5/+1 minute. Strict phase/type/time/energy guards and no mutation on rejected actions. Crowd/rest retain independent original limits.
- Cue-sheet forecasts apply the pending current-cursor cost once and advance the forecast cursor for later rows. Original-save compatibility retained; optional new fields validated and copied through current/history snapshots.
- Eight new incidents (17 total); eligible costumes, cute songs, solo returns, bass repertoire and mandatory challenge feed distinct pools. Mid-show/cute extra slot used once; choir retains song-bound priority. Maximum four incidents. Every incident has a zero-time non-negative-energy fallback.
- Performed-only deterministic reviews, audience mood labels, evidence/next-action debrief and completed-stage successes. Failed stages surface in a review; unplayed songs are not presented as heard.
- checks/showtime-v25.cjs: 12 meeting choices, cue application/caps/atomic rejection, exact forecasts, continuation, 500 natural routes covering all 17 incidents, reachability/context/no-repeat/no-deadlock gates, pure reports, once-only crowd UI and exact resource chips.
- Browser: meeting dialogue/resources; applied band cue updates costs [5,7,5,6] to [6,4,6,7], time 0→1 and remaining 2→1, all same-cursor directives disabled. Result reviews name performed choir/solos/challenges. Mobile iframe meeting/live/event clientWidth=scrollWidth=375. Temporary fixtures removed before commit. Browser extension metadata errors are unrelated to site scripts.


## V26 — short decorative sticker moments
- cute.js wraps actual successful actions and scene transitions; snapshots and pure classification never alter model, RNG or saved run. Four distinct animal motions/props. Separate success, recovery and miss art/text; recovery wording never appears for a miss.
- Setlist stamp, two-member agreement, challenge entrance/results, water recovery, choir bubbles/heart, encore notes/reappearance, hidden folded note and ticket-ready stamp. Ticket is guarded by a valid completed show, visible preview and successful image preparation.
- One transient click-through aria-hidden container, at most two scenes; one replacement timer (1.85 seconds, or 2.6 for challenge results). Header setting reuses original effects preference; disabling clears active art, reduced-motion suppresses it, history replay does not restart it.
- checks/cute-v26.cjs covers all effect categories, four members, escaping, scene gating, blocked choices, timer/node replacement and cleanup, settings/reduced-motion/read-only guards, unchanged saved bytes and 100 UI-vs-engine identical actions. showtime-v25 (500 routes), voyage-v23, keepsakes-v19 and challenge-v21 also pass.
- Browser: real meeting action yields two-member high-five with pointer-events:none and aria-hidden:true; node automatically disappears. Effects off prevents emission. Four challenge result stickers fit a 375px viewport (265px wide, right edge363) without horizontal overflow. Ticket image is enabled and its stamp is appended inside the open dialog. Screenshot gallery uses the same production art; temporary fixtures and held-preview timers removed before publication.


## V27 — 8th digital single release-live concept
- User-provided release identity applied consistently to landing, document metadata, header/footer, opening/release choices, track classification, default show titles, poster/ticket DOM and Canvas exports, final messages and concert-note export.
- Again! no longer described as unreleased/concert prerelease. Other optional tracks remain separate performance choices; no unprovided release date, tracklist or official artwork invented. Historical concert sources and supplied letters are retained.
- Regression: v3 (500 routes and encore/failure boundaries), solo-v17, hints, keepsakes-v19, voyage-v23, showtime-v25 and cute-v26 pass. Gameplay numbers, IDs and local-storage schema unchanged.
- Browser: release-live landing renders; poster and ticket PNG previews generate with the new titles/edition. Mobile landing clientWidth=scrollWidth=375. Temporary fixtures removed before publication.
