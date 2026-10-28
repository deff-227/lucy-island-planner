# LUCY ISLAND Encore Planner

Buildless, browser-local Korean fan concert planning game. Serve `dist/`.

- 47 catalog entries with recording references and clearly marked personal-song archive evidence plus four concert-time new-song candidates; provisional game ratings for independent Violin/Vocal/Bass/Drums difficulty and stamina.
- Ten unique main songs, four candidates per selection, grouped by concert role. Solo/vocal stages and special performances are distinguished from regular tracks.
- Art/Performance/Music/Technic satisfaction, budget, preparation time, rehearsal readiness, production checks, four negotiations and fictional SNS events.
- Seeded member-specific dance challenge outcomes, with visible extra stamina costs and practice tradeoffs.
- Consensus failure when all satisfaction scores are <=60; preparation failure when two or more critical checks remain; live stamina/time limits and early finish.
- Repeat encores require every satisfaction >=75, audience >=80, execution readiness >=65 and sufficient member stamina/time. No repeated full songs.
- Audience >=90 and at least one member at zero stamina trigger a special final choice after the farewell or a later encore. Returning for an audience-led final refrain is separate from full-song encore counts and does not restore stamina.
- Fourteen endings, including hidden memories. Only ending collection persists in localStorage; refresh resets the current run.
- Design uses the supplied 2021 First Landing map, labeled separately from the encore setting. Actual letter text is not fabricated; dialogue, SNS posts and numerical ratings are fictional. No audio playback.

Run `node checks/v3.cjs` and syntax checks for `dist/data.js`, `dist/engine.js`, `dist/app.js`. See VALIDATION.md.

UI v4 uses self-hosted SUIT plus distinct handwritten member accents, keyword choices, producer thoughts, blue interaction accents and member/instrument stickers. See VALIDATION.md.

UI/game v5: ten base tracks, twelve categorized challenges, icon-only stickers, three conditional mid-planning hidden events with once-per-run effects and a browser-local discovery collection. Live time limit is 84 game minutes.

V6 fixes 다시! as the first track inside the ten-song base (nine user selections). Additional new songs are 도시해적 (pirate-adventure instrumental), 아마 괜찮을 너에게 (ballad) and 쉿! (rock), using user-provided titles/genres. The next-title-track status of 다시! is explicitly an expectation. Optional new songs enter their corresponding concert segment.

V7: mandatory independent challenge stage for every setlist; 15 dance choices including Guilty, Love Shot and It’s Me. Full/point practice takes 8/4 preparation time; the no-cost pose relay retains all four selected songs with 1 stamina each. Preparation begins with 125 time, 110 budget and 50 readiness. My Warm Loneliness is a Yechan solo-vocal stage; the first member slot represents his singing, not violin playing. Run To You emphasizes Sangyeop’s vocals. Three spaced live incidents per completed main show (from five fictional scenarios) include crowd sing-along/teary members, technical surprises and comic recovery moments. At least one cost-free, non-draining response always exists.

GitHub Pages serves the root of `gh-pages`; source remains in `main/dist/`. Publish updated `dist/` contents to the root of `gh-pages` when changing the site.

V8: corrected the systemic Technic penalty on costume/arrangement/session/stage choices. These still cost resources and require preparation checks; ignoring technical checks still penalizes the show. Full rehearsal gives Technic +4, technical rehearsal +6, equipment check +6, and accepting Gwangil’s meeting request also raises his part readiness by 4. The preparation screen shows accumulated technical-progress gains.

Personal stage selection now shows all four members (eight existing/new options). Only two tracks were added: Gwangil’s Would You Dance With Me and 안잘꼬얌. The latter uses the user’s identification and fan archive linking the original upload; the original post body was inaccessible. Domino retains a single song ID and can be staged as Wonsang solo or four-member arrangement, avoiding duplicate setlist entries. Vocal/self-accompaniment costs use the relevant member’s slot, not their usual instrument label.

V9 resource units: displayed initial budget 2,021 points and preparation time 508 points. All resource cost chips and emergency rehearsal costs use the same proportional conversion. Normalized engine values remain 110/125, so affordability, endings and balance are exactly preserved. Charges equal rounded balance before minus rounded balance after; no cumulative rounding drift. Two-new-song total is displayed separately. Satisfaction/stamina remain /100 and live duration remains minutes.

V10: all four member satisfaction scores start at 70 (previously 68). Energy remains 100 and readiness remains 50.

V11: invitation/journal cover with blue Gugi display title, Gaegu notes, paper map, postage stamp and backstage pass. Gugi is self-hosted as a 4.3 KB title subset with original OFL. Choice/button/resource typography is SUIT. Desktop and 390px iframe layout visually checked; mobile start reaches chapter 1 and computed fonts for choice titles/member scores are SUIT. Resource tests and JS syntax pass; gameplay unchanged.

V12: concrete concert concepts (singalong festival, acoustic night, first-show revival, arrangement showcase). Four once-per-run member hints rank currently enabled prep choices by personal priorities, satisfaction/readiness gains and remaining resources. Hints highlight a choice without selecting it or spending resources; use persists across steps, markers clear at the next step. Multi-select new-song checks remain intact when asking. Release hints require sufficient resources for one additional song. Removed speculative title-track wording from game UI. Hint tests, resource tests and full model regression pass. Browser checks confirm used-button disabling, badges, step transitions and preservation of selected new songs.

## V13 — Eight endings and non-exclusive concert moments
Eight endings: unready, rough, good, warm, fire, return, endless, shore. Team satisfaction, challenge recovery, 맞네 and 21세기의 어떤 날 now appear as concurrent result memories rather than overriding the ending. Existing local collections migrate with deduplication.
Hidden return: 1–3 encores, return concept + outro + letter/voices + accepted map event, audience ≥90 and each member ≥80. Hidden endless: ≥4 encores, last track 맞네 or 21세기의 어떤 날, audience ≥95, each member ≥80 and remaining stamina >0. Shore event: audience ≥95 and at least one stamina exactly zero; explicit return choice. No random ending lottery.
Reproduce: `node checks/endings-audit.cjs`, `node checks/endings-v13.cjs`, `node checks/v3.cjs`, `node checks/hints.cjs`, `node checks/resources.cjs`. For baseline comparison run audit with `ENGINE_FILE` pointing to V12 engine. Full counts and policy limitations: checks/endings-audit-results.json.

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
