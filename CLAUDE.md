# Schule für Lebensmentoren – Website

Neue Website für **Maria Tamegger** (Humanenergetikerin, Naturheiltherapeutin, St. Veit an der Glan, Kärnten).
Ersetzt die alte WordPress/Divi-Seite unter https://schulefürlebensmentoren.at (Punycode: `xn--schulefrlebensmentoren-ylc.at`).

Statische Seite, kein Build-Schritt, kein Framework. Einfach HTML bearbeiten, committen, pushen.

## Struktur

```
index.html            Startseite (One-Pager, alle Inhalte)
impressum.html        Impressum (österr. Pflichtangaben)
datenschutz.html      Datenschutzerklärung
assets/css/style.css  Gesamtes Styling (Farben als CSS-Variablen in :root)
assets/js/main.js     Menü, Scroll-Animationen, Workshop-Filter, Kontaktformular
assets/img/           Bilder (noch leer, siehe Livegang-Checkliste)
assets/fonts/         Schriften (noch leer, siehe Livegang-Checkliste)
.github/workflows/    pages.yml = Vorschau bei jedem Push, deploy-ftp.yml = Livegang (manuell)
```

## Konventionen

- **Sprache:** Deutsch (Österreich), Sie-Form gegenüber Besuchern, Ich-Perspektive von Maria. „Jänner“ statt „Januar“.
- **Farben:** nur über die Variablen in `style.css` (`--plum`, `--violet`, `--sage`, `--cream` …), keine neuen Hex-Werte im HTML.
- **Schriften:** Fraunces (Überschriften), Inter (Fließtext).
- **Neue Abschnitte** bekommen die Klasse `reveal` für die Einblend-Animation.
- **Rechtlich:** Keine Heilversprechen formulieren („heilt“, „hilft gegen …“). Stattdessen „kann unterstützen“, „begleitet“. Der Hinweis zur Energiearbeit im Footer muss bleiben (Pflicht für Humanenergetiker in Österreich).
- Kontakt-E-Mail ist **tamegger.wellnesshome@aon.at** (auf der alten Seite gab es Tippfehler-Varianten, die nicht verwenden).

## Häufige Aufgaben

**Workshop hinzufügen:** In `index.html` im Abschnitt `id="workshops"` einen `<div class="ws reveal" data-c="…">` kopieren. `data-c` ist eine Kategorie aus dem Filter (`bach`, `hildegard`, `raeuchern`, `koerper`), mehrere mit Leerzeichen trennen.

**Lehrgangstermin ändern:** In `index.html` nach „Nächster Lehrgangsstart“ suchen.

**Neues Bild:** Datei nach `assets/img/` legen (max. ca. 1600 px breit, als JPG/WebP komprimiert), mit relativem Pfad `assets/img/…` und aussagekräftigem `alt`-Text einbinden.

**Veröffentlichen:** Push auf `main` aktualisiert die Vorschau (GitHub Pages). Live geht es nur über Actions → „Live (FTP)“ → Run workflow.

## Livegang-Checkliste

- [ ] Bilder vom alten Server nach `assets/img/` holen, verkleinern und Pfade umstellen (aktuell per Hotlink von der alten Domain geladen, das bricht, sobald die alte Seite abgeschaltet wird)
- [ ] Schriften lokal einbinden (`assets/fonts/` + `@font-face`), Google-Fonts-Links in allen drei HTML-Dateien entfernen (DSGVO)
- [ ] `<meta name="robots" content="noindex, nofollow">` in allen HTML-Dateien entfernen
- [ ] Gelb markierte `todo`-Stellen und `.note`-Boxen in Impressum und Datenschutz klären und entfernen
- [ ] Kontaktformular an einen Formular-Dienst (z. B. Web3Forms) anbinden, dann Datenschutz-Abschnitt 4 anpassen
- [ ] FTP-Secrets im Repo hinterlegen, „Live (FTP)“ ausführen
- [ ] Prüfen, dass die alte WordPress-Seite ersetzt bzw. abgeschaltet ist, und alte URLs (`/ausbildung/`, `/ueber-mich/` …) per Weiterleitung auf die Startseite führen (`.htaccess`)

## Interne Notizen

Offene Fragen an die Kundin sowie Vertrags- und Hosting-Infos stehen in `NOTIZEN.md`. Die Datei ist absichtlich nicht im Repo (das Repo ist öffentlich) und liegt nur lokal.
