# Play Store – butiksside og formularer

Alt materiale til Google Play Console samlet ét sted. Tekster kan kopieres direkte.

> Googles grænser og formularer ændrer sig løbende. Tallene herunder er de kendte grænser,
> og Play Console viser selv en tæller/fejl, hvis noget ikke passer.

---

## 1. Tekster

### App-navn (25 / 30 tegn)
```
QR-scanner: Scan og opret
```

### Kort beskrivelse (78 / 80 tegn)
```
Scan og lav QR-koder – hurtigt, roligt og privat. Ingen reklamer, ingen konto.
```

### Fuld beskrivelse (maks. 4000 tegn)
```
En enkel og rolig QR-scanner uden reklamer, konti eller sporing.

Ret kameraet mod en QR-kode, og appen finder den med det samme. Hjørnerne bliver grønne, og et kort glider op med indholdet – så du altid kan se, hvad koden indeholder, før du gør noget.

SCAN
• Kameraet starter med det samme og genkender QR-koder automatisk
• Links vises tydeligt med domænenavnet, så du kan se hvor de fører hen
• Åbn, kopiér eller scan igen med ét tryk
• Lommelygte til mørke steder (på telefoner der understøtter det)
• Scan QR-koder fra billeder i dit galleri, fx skærmbilleder

OPRET
• Lav dine egne QR-koder til links eller tekst
• Se koden, mens du skriver
• Gem koden som billede eller del den direkte

HISTORIK
• Tidligere scanninger gemmes, så du kan finde dem igen
• Slet enkelte koder eller hele historikken

PRIVAT
• Kamerabilledet behandles kun på din telefon og gemmes aldrig
• Historikken ligger kun på din egen enhed
• Ingen reklamer, ingen konto, ingen statistik eller sporing

SIKKER
• Links åbnes først, når du selv trykker "Åbn"
• Skjulte kommandoer i QR-koder vises som almindelig tekst og kan ikke udføres

Virker også uden internet, når appen først er åbnet én gang.
```

---

## 2. Grafik (filer i denne mappe)

| Felt i Play Console | Fil | Størrelse |
|---|---|---|
| App-ikon | `ikon-512.png` | 512 × 512 PNG |
| Banner (Feature graphic) | `banner-1024x500.jpg` | 1024 × 500 JPEG |
| Telefon-skærmbilleder (min. 2) | `skaermbillede-1-scan.jpg` … `skaermbillede-4-history.jpg` | 1080 × 1920 JPEG |

Rækkefølge på skærmbillederne: 1 scan → 2 resultat → 3 opret → 4 historik.

---

## 3. Butiksindstillinger

| Felt | Svar |
|---|---|
| App eller spil | App |
| Kategori | Værktøjer (Tools) |
| Gratis eller betalt | Gratis |
| Privatlivspolitik (URL) | `https://saidi3616.github.io/QR-scanner/privacy.html` |
| Kontakt-e-mail | *Din e-mail (påkrævet af Google, vises i butikken)* |
| Hjemmeside (valgfri) | `https://saidi3616.github.io/QR-scanner/` |

---

## 4. Forslag til svar på "App-indhold"-formularerne

Formularerne findes i Play Console under **Politik → App-indhold**. Svarene passer til, hvordan appen faktisk virker i dag.

### Datasikkerhed (Data safety)
- **Indsamler eller deler appen nogen af de påkrævede brugerdatatyper?** → **Nej**
- Begrundelse (til dig selv): kamerabillede, galleribilleder og historik behandles kun på enheden og sendes aldrig til en server. Ifølge Googles definition tæller data, der kun behandles på enheden, ikke som "indsamlet".

### Reklamer
- **Indeholder appen reklamer?** → **Nej**

### Adgang til appen (App access)
- **Alle funktioner er tilgængelige uden særlig adgang** (ingen login).

### Indholdsklassificering (spørgeskema)
- Kategori: **Hjælpeprogram, produktivitet, kommunikation eller andet**
- Vold, seksuelt indhold, sprogbrug, stoffer, gambling: **Nej** til alle
- Kan brugere interagere med eller udveksle indhold med hinanden i appen? → **Nej**
- Deler appen brugerens placering? → **Nej**
- Køb af digitale varer? → **Nej**
- Forventet resultat: laveste aldersgrænse (fx PEGI 3 / "Alle")

### Målgruppe
- Vælg **13 år og op** (eller 18+). Vælg *ikke* aldersgrupper under 13 – det udløser Googles ekstra familie-regler, som ikke er relevante for appen.

### Øvrige erklæringer
- Offentlig myndighedsapp → **Nej**
- Finansielle funktioner → **Ingen**
- Sundhedsapp → **Nej**
- Nyhedsapp → **Nej**

---

## 5. Tilladelser

Appen bruger **kameraet** til at scanne. I den indpakkede Android-app (Trusted Web Activity) er det Chrome, der beder om kameraadgang på vegne af siden – ligesom når appen bruges i browseren.
