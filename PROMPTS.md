# QR-kode scanner — prompt-plan

Trin-for-trin plan for QR-kode scanneren, bygget på lærdommen fra Koran-appen.
Denne fil er vores faste referencepunkt undervejs.

---

## Trin 0 — Spilleregler (sæt disse først, før noget bygges)

Vi bygger en QR-kode scanner app, trin for trin, ligesom vi gjorde med Koran-appen. Nogle faste regler for hele projektet:

1. Når jeg beder om en feature, skriver jeg det som **"Kontekst: [hvor vi er]. Ønske: [hvad skal tilføjes/ændres]"** — jo mere visuelt, jo mere detaljeret.
2. Når noget ikke virker, giver jeg aldrig kun "det virker ikke" — jeg beskriver hvad jeg gjorde, hvad jeg forventede, hvad der skete (helst ordret/screenshot), hvilket link/enhed jeg testede på, og hvad der står i browserens konsol (F12).
3. Jeg tester altid via et **live, hostet link** — aldrig en downloadet lokal fil — så vi undgår forældede versioner.
4. Hvis du er i tvivl om hvordan et bibliotek eller en browser-funktion faktisk opfører sig, så **tjek kildekoden/dokumentationen først** i stedet for at gætte.

## Trin 1 — Grundlæggende kamera-adgang

**Kontekst:** intet er bygget endnu.
**Ønske:** en side der beder om adgang til kameraet og viser live kamera-billede på skærmen. Intet scan endnu — kun at se kameraet virker.

> Vigtigt: kamera-adgang kræver "secure context" (https), så host dette live med det samme fra trin 1 — det virker ikke fra en lokal fil, ligesom vi så med mixed-content-problemet i Koran-appen.

## Trin 2 — QR-kode genkendelse

**Kontekst:** kameraet vises live.
**Ønske:** appen genkender automatisk en QR-kode i billedet og viser den afkodede tekst på skærmen.

## Trin 3 — Smart håndtering af indhold

**Kontekst:** vi kan afkode en QR-kode til rå tekst.
**Ønske:** hvis indholdet er et link, skal det vises som et klikbart link; almindelig tekst vises som tekst.

## Trin 4 — Scan-historik

**Kontekst:** vi kan scanne én kode ad gangen.
**Ønske:** en liste der gemmer tidligere scannede koder (localStorage), så de ikke forsvinder når appen lukkes.

## Trin 5 — Design-finish

**Kontekst:** funktionen virker, men er visuelt rå.
**Ønske:** _[her beskriver du selv stilen du vil have — evt. med et referencebillede, ligesom sidst]_

## Trin 6 — (Valgfrit) QR-kode generator

**Kontekst:** appen kan scanne.
**Ønske:** mulighed for selv at indtaste tekst/link og få genereret en QR-kode man kan gemme/dele.

## Trin 7 — PWA (installerbar app)

**Kontekst:** appen virker i browseren.
**Ønske:** gør den installerbar som app (`manifest.json`, `service-worker.js`), så den kan tilføjes til hjemmeskærmen.

## Trin 8 — Hosting og test på mobil

**Kontekst:** appen er færdig lokalt.
**Ønske:** sæt den live på GitHub Pages, og test kamera + installation på den faktiske telefon.
