# LUCY ISLAND Encore Planner

Buildless, browser-local Korean fan concert planning game. Serve `dist/`.

- 45 sourced catalog entries plus four concert-time new-song candidates; provisional game ratings for independent Violin/Vocal/Bass/Drums difficulty and stamina.
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
