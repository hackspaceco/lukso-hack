# LUKSO Center
Lukso center

## Include in sites 
- Include these files in header
```
    <link rel="stylesheet" href="https://lukso.b-cdn.net/luksocenter/main.css"/>
    <script src="https://lukso.b-cdn.net/luksocenter/main.js"></script>
```

### Tech Stack
- React
- Webpack
- SaSS
- Bootstrap
- Execution explorer API
- useSWR
- OpenAI

### Running in local
- clone project
- setup node 18
- install npm/yarn/pnpm package manager
- cd project_name
- rename .env.example to .env and provide your API key
- run `pnpm install`
- run `pnpm start`
- open `http://localhost:3000/popup.html` in your browser

### Deploying to server 

- run `pnpm build`
- it will generate a file called as `widget`
- it will contain to file `main.js` & `main.css`
- upload the main.js and main.css files to server 
- update the link and script to point to file path on your server

