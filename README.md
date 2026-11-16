# Schule für Lebensmentoren

Neue Website für Maria Tamegger (Bachblüten, Blütenessenzen & Energiearbeit, St. Veit an der Glan).

## Lokal ansehen

`index.html` im Browser öffnen. Kein Build nötig.

## Veröffentlichen

| Was | Wie |
| --- | --- |
| **Vorschau** | Push auf `main` → GitHub Pages aktualisiert sich automatisch |
| **Live** | GitHub → Actions → „Live (FTP)“ → Run workflow |

Einmalige Einrichtung:
1. Repo → Settings → Pages → Source: **GitHub Actions**
2. Für den Livegang: Repo → Settings → Secrets and variables → Actions → `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR` anlegen

Details, Konventionen und die Livegang-Checkliste stehen in [CLAUDE.md](CLAUDE.md).
