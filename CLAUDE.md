# CLAUDE.md - Export Desi Website v2

**Project:** Company website for exportdesi.com
**Stack:** React 19 + Vite + Tailwind CSS + Framer Motion

---

## 9-Point Productivity Framework

### 1. Plan Mode Default
- Enter plan mode for any task with 3+ steps or architectural decisions
- If something goes wrong, STOP and re-plan immediately — don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy
- Use subagents frequently to keep the main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute via subagents
- Assign one task per subagent for focused execution

### 3. Self-Improvement Loop
- After any correction from the user, update `tasks/lessons.md` with the pattern
- Write rules to prevent repeating the same mistake
- Ruthlessly iterate on these lessons until the mistake rate drops
- Review lessons at the start of each session

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask: "Would a staff engineer approve this?"
- Run tests, check logs, and demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes, ask: "Is there a more elegant solution?"
- If a fix feels hacky, ask: "Knowing everything I know now, implement the elegant solution."
- Skip this for simple fixes — don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it
- Use logs, errors, and failing tests to diagnose
- Require zero context switching from the user
- Fix failing CI tests automatically

### 7. Task Management
1. **Plan First** — Write the plan in `tasks/todo.md` with checkable items
2. **Verify Plan** — Confirm the plan before implementation
3. **Track Progress** — Mark items complete as you go
4. **Explain Changes** — Provide a high-level summary at each step
5. **Document Results** — Add a review section to `tasks/todo.md`
6. **Capture Lessons** — Update `tasks/lessons.md` after corrections

### 8. Core Principles
- **Simplicity First** — Make every change as simple as possible, minimize code impact
- **No Laziness** — Find root causes, avoid temporary fixes, maintain senior-level engineering standards

### 9. CLAUDE.md Self-Improvement Loop
- Treat this file as living config, not static
- Read `tasks/lessons.md` at session start
- Update `tasks/lessons.md` after every correction
- Run `/update-learnings` at end of session
- Every mistake becomes permanent institutional memory

---

## Session Start Protocol

1. **Read lessons.md** — Review `tasks/lessons.md` for learned patterns
2. **Check memory** — Load relevant context from `.claude/projects/C--Users-dudej/memory/`
3. **Plan first** — For tasks with 3+ steps, enter plan mode before implementation

---

## Common Commands

```bash
npm run dev       # Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
```

---

## Design System

**UI/UX Pro Max Skill:** Available at `~/.claude/skills/ui-ux-pro-max/`
**Framer Motion:** Installed for animations

---

## Project Structure

```
website-v2/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route components
│   ├── lib/            # Utilities, helpers
│   └── styles/         # Tailwind config
├── tasks/
│   ├── todo.md         # Active task list
│   └── lessons.md      # Learned patterns
├── CLAUDE.md           # This file
└── package.json
```

---

## Business Context

**Export Desi** - Indian food exports to global buyers

**Products:**
- Makhana (Bihar) - 4-7 Suta grades
- Turmeric (AP/TN) - Finger, Powder, Lakadong
- Dehydrated Onion & Garlic (Gujarat)
- Food Powders (Moringa, Banana)

**Contact:**
- Email: contact@exportdesi.com, info@exportdesi.com
- Phone: +91 9289790283
- Website: exportdesi.com

**Certifications:**
- GST: 06ALYPD9414C1Z1 | IEC: ALYPD9414C
- APEDA RCMC: 06757/2024-2025
- FSSAI: 10824999000454
- Spice Board: CRES/SBCB/23080/2024-2025
- FIEO: 13083/2025-2026

---

## Related Documentation

- `../export-desi-business/CLAUDE.md` — Main business ops
- `.claude/projects/C--Users-dudej/memory/` — Business context files
- `.claude/skills/website-dev-agent/` — Web Dev Agent skill

---

**Next:** Sprint 1 — Company Profile, Product Catalog, Quote Form
