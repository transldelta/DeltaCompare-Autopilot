# Empfehlung: Repo umbenennen oder neu anlegen

Das Projekt liegt aktuell unter `transldelta/XAU-USD`, heißt aber
**DeltaCompare Autopilot**. Für Klarheit und Vertrauen bei Mitarbeitern,
Affiliate-Partnern und Investoren empfehlen wir einen Repo-Wechsel.

## Warum ein neuer Repo-Name?

- Der Name passt zur Marke und ist sofort wiedererkennbar
- Affiliate-Netzwerke verlangen einen seriösen Marken-Auftritt
- Wenn du das Repo später öffentlich machst, soll es nicht „XAU-USD" heißen
- Sucheinträge und Bookmarks werden konsistent

## Zwei Wege

### Option A: Repo umbenennen (empfohlen — schneller, History bleibt)

1. <https://github.com/transldelta/XAU-USD> öffnen.
2. „Settings" → unter „Repository name" auf `deltacompare-autopilot` ändern.
3. „Rename" bestätigen.
4. GitHub legt automatisch eine Weiterleitung von der alten URL an.

Lokal aktualisieren:

```bash
git remote set-url origin https://github.com/transldelta/deltacompare-autopilot.git
```

In Vercel: Projekt-Settings → Git → Repository neu verbinden / autorisieren.

**Vorteile:**
- Issues, PRs, Stars, History bleiben erhalten
- Alte Klone werden automatisch weitergeleitet
- Vercel-Deploys behalten ihre History

### Option B: Neues Repo anlegen (sauberer Schnitt)

1. Neues leeres Repo auf GitHub: `transldelta/deltacompare-autopilot` (keine README/Initialdateien).
2. Lokal:

   ```bash
   git remote rename origin xau-usd
   git remote add origin https://github.com/transldelta/deltacompare-autopilot.git
   git push -u origin --all
   git push origin --tags
   ```

3. Vercel: neues Projekt vom neuen Repo erstellen, Environment Variables aus dem alten kopieren.
4. Altes Repo archivieren: Settings → ganz unten „Archive this repository".

**Vorteile:**
- Saubere Trennung
- Klarer Marken-Auftritt von Anfang an

**Nachteile:**
- Issues/PRs werden nicht automatisch mitgenommen

## Wichtig: Stand sichern bevor du migrierst

Bevor du irgendeine Aktion durchführst:

```bash
git status              # nichts ungepushtes vergessen
git fetch --all         # alle Remote-Branches lokal kennen
git tag                 # alle Tags prüfen
```

Optional: lokaler Komplett-Backup als Bundle:

```bash
git bundle create deltacompare-backup.bundle --all
```

Diese Datei kannst du auf einen Cloud-Speicher legen.

## Migration ohne Code-Verlust

Beide Optionen oben sind verlustfrei. Wenn du dir unsicher bist:

1. Zuerst Bundle wie oben anlegen (`git bundle create`).
2. Dann Variante A oder B durchführen.
3. Nach erfolgreichem Push: Bundle als Cold-Backup archivieren.

## Was du nach der Migration prüfen solltest

- [ ] `git push` zum neuen Remote funktioniert
- [ ] Vercel deployt automatisch nach Push
- [ ] Domain ist weiterhin verbunden (DNS hängt nicht am Repo)
- [ ] Lokale `git pull`-Befehle funktionieren
- [ ] PR-Vorlagen, Branch-Protection-Regeln, Webhooks: bei Option B neu setzen
- [ ] Affiliate-Bewerbungen, die das alte Repo als „Webseite" zitierten:
      Domain bleibt gleich, kein Update nötig
