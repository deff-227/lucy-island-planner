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

## V17 — Four personal stages and precise choices
- Concepts renamed 파도/달빛/회귀/모험, costume choices 셔츠 & 데님/블랙 수트/블루·화이트/수트→티셔츠. Session choices identify added keyboard, strings, brass/percussion players and practical checks. Member remarks name tempo and entry-beat rehearsal instead of abstract sequencing.
- Four sequential personal rounds, exactly four candidates per member, mandatory one per member. Base set expands from 10 to 13 (Again + eight band slots + four individual slots). Actual solo costs and durations retained; no stamina or time-limit inflation.
- Yechan: 내 쓸쓸함은 차갑지 않아요/사랑한 영원/꿈/Flashback (N.Flying cover). Sangyeop: 해가뜨는밤/날씨가 미쳤어/Run To You/무색. Wonsang: Domino/Porch Light/너무 그렇게 보지 마/Slidey Boy (bass cover). Gwangil: 충분히/Would You Dance With Me/안잘꼬얌/구구절절. Covers explicitly labeled.
- Sources: Bugs official album credits for 사랑한 영원 (20765815), Childish (20807962: Porch Light vocal and 구구절절), 너무 그렇게 보지 마 (20337127); official LUCY ISLAND Slidey Boy nQsE_1pN5Dw. Yechan Flashback selected from previously retrieved official 자장가수 channel catalog in yechan-phone/cover-catalog.json (ZCTDuznmQOA); new web fetch failed, so do not claim newly verified video contents.
- Domino/꿈/충분히 now solo-only, excluded from regular and encore pools; 수박깨러가 joins cute pool to preserve four available candidates. All four-round ownership checks prevent selecting another member's song.
- Removed choir-event tags from song cards; 응원법 mark only. Removed audience-demonstrated dance scenarios and replaced them with an onstage member demonstrating the move.
- Letters: only all four final-day letters remain available; DAY1/2 data and buttons removed. Shared stage-heart excerpts retained.
- Regression: solo-v17, v3, hints, resources, endings-v13, fanlove-v15, quality-v14 passed. Full 4,000-route audit: mixed preparation failure 30.25%, mixed hidden 5.35%; prepared hidden 2.80%. Synthetic policy frequencies only. Prepared route seed31 finishes main and qualifies for encore with energy [55,34,54,51]; natural four-encore and exhausted-encore paths still pass. Browser clicked through all member transitions and confirmed four candidates and accumulated selections. QA fixture removed before commit.

### V19 — 공연을 남기는 여섯 가지 디자인
- 콘셉트·의상·공연명으로 완성되는 포스터와 PNG 저장, 공연명 편집.
- 실제 큐 순서(특별 연주·챌린지·신곡·연결 무대 포함), 무대별 시간·전환 메모·운영 조건에 따른 체력 계획.
- 만족도와 체력에 반응하는 동물 스티커, 주요 곡의 꽃잎·푸른 빛·객석 불빛. 효과 끄기 및 reduced-motion 지원.
- 사용자 제공 티켓의 남색·우표 가장자리·장식선을 참고한 엔딩 티켓 앞뒷면과 PNG 저장. 실제 연주곡과 미진행 기획곡을 구분.
- 발견한 엔딩·숨은 장면에 섬 장소 도장이 남는 스크랩 항해 수첩. 기존 수집 데이터 유지.

### V23 — 이어지는 공연과 플레이 기록
- 선택·힌트·미확정 챌린지/신곡 배정 자동 저장. 첫 화면에서 준비하던 단계 또는 지난 결과로 복귀.
- 최근 완주 기록 최대 20개: 엔딩, 실제 셋리스트, 수치와 티켓 다시 보기. 지난 공연 열람은 진행 중인 저장을 덮어쓰지 않는다.
- 기록 전체 초기화: ‘초기화’ 입력 후 현재 저장·지난 공연·엔딩·숨은 항해만 삭제. 다른 앱 데이터와 무대 효과 설정은 유지.
- 앙코르 가능 곡 우선 정렬, 멤버별 부족한 체력/만족도·시간·합주 조건 표시. 실제 실행 조건은 기존 엔진과 동일.
- 공연 seed 기반의 챌린지/선택 반응 변주, 선곡을 짚는 멤버 회의, 실제 진행한 곡을 돌아보는 마지막 인사. 새로고침이나 기록 열람으로 반응을 다시 뽑지 않는다.
- 저장과 지난 기록은 사용하는 브라우저 안에 보관한다. 저장 공간이 막히거나 기록이 손상된 경우 안내하고 새 공연/이미지 저장을 계속 사용할 수 있다.


### V25 — 멤버 회의와 현장 지시
- 멤버 네 번의 회의를 두 사람의 대화와 구체적인 세 선택지로 정리. 합의 내용은 공연 중 한 번씩 다시 언급된다.
- 현장 지시 공연당 두 번, 한 무대당 한 번: 짧은 멘트 / 간주 늘려 보컬 쉬기 / 서로 신호 맞추기. 기존 휴식·객석 후렴은 같은 영역에서 별도로 제공.
- 라이브 이벤트 17종. 의상·선곡·개인 무대·챌린지에 맞는 사건을 선별하고, 중복 없이 공연당 최대 네 번. 떼창 곡 조건은 유지.
- 실제 진행에 따른 열기·몰입·여운 문구와 팬 후기 세 개. 새로고침은 같은 공연의 후기를 다시 뽑지 않는다.
- 성공한 장면과 함께 준비·합주 완성도·체력·시간·축약·앵콜 합의 부족의 근거 및 다음 시도 방법을 표시.
- 기존 진행 저장과 지난 공연을 유지하며 새 회의·현장 지시도 함께 저장한다.


### V26 — 작은 스티커 효과
- 선택에 따른 멤버별 기쁨·고민, 선곡 도장, 회의 하이파이브, 챌린지 준비와 성공/수습/실패, 휴식 물병·물방울, 떼창 하트, 앵콜 쪽지와 재등장, 숨은 발견, 티켓 준비 도장.
- 점수·체력·시간·게임 난수·플레이 저장에는 영향이 없는 짧은 장식이다. 다음 선택을 막지 않고 자동으로 정리한다.
- 상단 효과 ON/OFF와 기존 무대 효과 설정을 함께 사용한다. 기기 동작 줄이기 설정과 지난 기록 읽기에서는 새 장식 효과를 재생하지 않는다.


### V27 — 8th DS 〈다시!〉 발매기념 공연
- 공연 설정을 앙코르 콘서트에서 LUCY 8th Digital Single 〈다시!〉 발매기념 공연으로 전환.
- 첫 화면·메타데이터·헤더·기획 문구·기본 공연명·포스터·티켓 및 PNG·공연 일지·결과 문구를 통일.
- 다시!의 미발매/선공개 표기를 발매기념 고정 오프닝으로 변경. 나머지 선택곡은 싱글 수록곡으로 단정하지 않고 추가 무대로 유지.
- 섬 지도와 파란색 디자인, 앵콜 진행, 기존 저장·기록·수집 데이터 유지.


### V28 — 붓글씨 제목과 별빛
- 첫 화면 제목을 East Sea Dokdo 붓글씨로 변경하고 확대. 제목에 쓰는 글자만 포함한 로컬 WOFF(3,848 bytes), SIL OFL 동봉. 출처: https://github.com/google/fonts/tree/main/ofl/eastseadokdo
- 제공된 콘셉트 아트의 남색·연보라색·별똥별 분위기를 코드 기반 장식으로 반영.
- 동물 메모를 지도 아래의 흐름 배치로 이동해 지도·문구를 가리지 않도록 조정.
