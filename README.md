# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## directory structure
weds-egg-project
├─ .autod.conf.js
├─ .gitignore
├─ .travis.yml
├─ README.md
├─ app
│    ├─ controller
│    │    └─ v1.ts
│    ├─ middleware
│    │    └─ getRouterTime.ts
│    ├─ model
│    │    └─ school.ts
│    ├─ mqtt
│    │    ├─ controller
│    │    └─ middleware
│    ├─ public
│    │    └─ json
│    ├─ router.ts
│    └─ service
│           └─ Test.ts
├─ app.ts
├─ appveyor.yml
├─ config
│    ├─ config.default.ts
│    ├─ config.local.ts
│    ├─ config.prod.ts
│    └─ plugin.ts
├─ logs
│    └─ weds-egg-project
│           ├─ common-error.log
│           ├─ egg-agent.log
│           ├─ egg-schedule.log
│           ├─ egg-web.log
│           └─ weds-egg-project-web.log
├─ package.json
├─ run
│    ├─ agent_config.json
│    ├─ agent_config_meta.json
│    ├─ agent_timing_11896.json
│    ├─ application_config.json
│    ├─ application_config_meta.json
│    ├─ application_timing_13664.json
│    ├─ application_timing_13788.json
│    ├─ application_timing_2812.json
│    ├─ application_timing_5616.json
│    ├─ application_timing_8636.json
│    └─ router.json
├─ test
│    └─ app
│           ├─ controller
│           └─ service
├─ tsconfig.json
├─ tslint.json
└─ typings
    ├─ app
    │    ├─ controller
    │    ├─ middleware
    │    ├─ model
    │    └─ service
    ├─ config
    │    ├─ index.d.ts
    │    └─ plugin.d.ts
    └─ index.d.ts

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled ts at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
