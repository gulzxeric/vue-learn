# AGENTS.md

## Commands

```sh
npm run dev       # start dev server (Vite + HMR)
npm run build     # production build
npm run preview   # preview production build
```

## Project structure

```
src/
  main.js              # entry: createApp(App).mount('#app')
  App.vue              # root component
  components/          # reusable SFCs (*.vue)
```

`@/` path alias maps to `src/` (configured in `vite.config.js` + `jsconfig.json`).

## Conventions

- Vue 3 `<script setup>` syntax only
- Component filenames: PascalCase (`UserCard.vue`, not `userCard.vue`)
- No TypeScript, no Router, no Pinia
- Prettier: `tabWidth: 2` (`.prettierrc`)
- VSCode: `Vue.volar` extension required (`.vscode/extensions.json`)

## Notes

- `App00.vue` / `App01.vue` are snapshots from earlier sessions — not in use
- No lint or typecheck commands configured
- No test framework installed
