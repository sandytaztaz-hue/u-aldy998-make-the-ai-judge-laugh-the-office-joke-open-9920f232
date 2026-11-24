// Make the AI Judge Laugh: the Office Joke Open
// One line of office comedy, at most 200 characters, written to /output/entry.txt.
// The joke: a fire drill is the one meeting everyone actually wants to attend —
// on time in, early out, and no slides to ask for afterwards.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The fire drill is the only meeting where everyone shows up on time, leaves early, and nobody asks for the slides.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
