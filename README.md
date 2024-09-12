# Prosjektutgangspunkt 🏄

Dette er et repo med ulike tomme prosjekter som du kan bruke som et utgangspunkt til ditt neste hobbyprosjekt!

## Oppsett av maskin ⚙️

Alle prosjektene krever at vi har Node.js installert. Denne seksjonen tar deg gjennom hvordan du sjekker hvilken versjon du har installert, og hvordan du eventuelt installerer det, basert på [Node.js sin dokumentasjon](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

<details>

<summary>Installasjon av Node.js</summary>

#### Sjekk eventuelt installert versjon

Du kan sjekke om du allerede har Node.js og npm installert ved å spørre om programmenes installerte versjon ved å kjøre følgende kommandoer

```bash
# Sjekk Node.js-versjon
node --version

# Sjekk npm-versjon
npm --version
```

Dersom disse gir en eller annen verdi, er du mest sannsynlig good to go! 🚀 Det skal nevnes at nyeste versjon av Node.js er v22, men at vi regner v18 og v20 som godt støttet. Så om du har en versjon lavere enn v18, kan det være greit å installere en nyere versjon.

#### Installer Node.js og npm

Node.js-dokumentasjonen anbefaler å bruke et verktøy for å håndtere ulike versjoner av Node.js, så vi kommer til å installere Node.js via kommandolinjeverktøyet `nvm`, som står for _Node Version Manager_. Du kan også se på andre alternative måter å installere Node.js på for din maskin på https://nodejs.org/en/download

Disse instruksjonene gjelder om du sitter på Mac, Linux, eller Windows med WSL.

```bash
# Installer nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# Installer Node.js versjon 20
nvm install 20
```

</details>

## Oppsett av prosjekt basert på utgangspunktene 🚀

Nå som vi har Node.js installert, kan vi sette i gang!

1. Start med å velge et av prosjektene du ønsker å ta utgangspunkt i
   - `react` – Standard React med klassisk CSS
   - `next` – Standard Next 14-prosjekt
   - `express` – Standard Express-prosjekt (backend)
2. Last ned koden ved å kjøre kommandoen for valgt prosjektutgangspunkt. I dette eksempelet går vi videre med `react`

   ```bash
    # react
    npx degit github:bekk/prosjektutgangspunkt/react react-prosjekt

   ```

   ```bash
    # next
    npx degit github:bekk/prosjektutgangspunkt/next next-prosjekt
   ```

   ```bash
    # express
    npx degit github:bekk/prosjektutgangspunkt/express express-prosjekt
   ```

3. Opprett et repository på GitHub via [github.com/new](https://github.com/new). Kall den hva du vil, i dette eksempelet kaller vi den bare `react-prosjekt`
4. Koble sammen lokal kode med GitHub
   - Naviger inn i prosjektet vi lastet ned i _Steg 2_. I eksempelet har vi lastet ned `react`, så vi skal navigere inn i `react-prosjekt`
     ```bash
     cd react-prosjekt
     ```
   - Initier Git i prosjektet.
     ```bash
     git init
     ```
   - Lag en commit med alle filene i prosjektutgangspunktet.
     ```bash
     git add .
     git commit -m "Initial commit"
     ```
   - Sett opp det nye GitHub-repoet som remote. I dette eksempelet opprettet brukeren med brukernavn `sivertschou` repoet i forrige steg, så erstatt `sivertschou` med ditt GitHub-brukernavn, og erstatt `react-prosjekt` med navnet på repoet ditt
     ```bash
     git remote add origin git@github.com:sivertschou/react-prosjekt.git
     ```
   - Dytt opp koden
     ```bash
     git push -u origin main
     ```
   - Du skal nå kunne se koden i repoet på GitHub!
5. Gjør nettsiden tilgjengelig på Vercel
   - Koble sammen prosjektet ditt ved å gå til til [vercel.com/new](https://vercel.com/new)
   - Velg _Continue with GitHub_ og gjennomfør innlogging
   - Finn GitHub-repoet du opprettet i _Steg 3_, og trykk _Import_
   - Gå gjennom innstillingene og trykk _Deploy_
     Vercel skal nok ha funnet ut hva slags type prosjekt det er (f.eks. Vite for `react`)
   - Nettsiden skal nå være tilgjengelig for alle, og når du dytter endringer til GitHub, vil nettsiden deploye med endringene!
6. Gjør nettsiden til din egen!
