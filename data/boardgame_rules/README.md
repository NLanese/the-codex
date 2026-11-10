# Board Game Master AI: rules source files

Put the rule text for each game here, then rebuild the search index:

    node scripts/boardgame/buildRulesIndex.mjs

Two layouts work (you can mix them):

1. **One file per game**: `Chess.md`, `Robo Quest Arena.txt`, ... The file name must match
   the game's name in the dropdown on `pages/showcases/projects/boardgame_master_ai.js`.
2. **One combined file** (like the old Bedrock/S3 document): start each game with a marker line

       === Chess ===
       ...rules...
       === Checkers ===
       ...rules...

Markdown headings (`## Setup`, `## Winning`) or short ALL-CAPS lines become section names,
which the bot shows as its sources, so keep them in where you can.

Commit the generated `constants/projects/boardgame_master_ai/rulesIndex.json`. Vercel bundles it
into the API route, so there is no database or vector store to run.
