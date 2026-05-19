# Repo-Migration: `XAU-USD` → `DeltaCompare`

Das Projekt liegt aktuell im GitHub-Repo `transldelta/XAU-USD`, heißt aber
`DeltaCompare Autopilot`. Vor dem Go-Live solltest du das Repo entweder
umbenennen oder in ein neues Repo umziehen. Beide Wege sind verlustfrei.

## Option A: Repo umbenennen (schnellster Weg, History bleibt erhalten)

1. <https://github.com/transldelta/XAU-USD> öffnen.
2. „Settings" → unter „Repository name" auf `DeltaCompare` ändern.
3. „Rename" bestätigen.
4. GitHub legt automatisch eine Weiterleitung von der alten URL an.
5. Lokal das `origin` aktualisieren:

   ```bash
   git remote set-url origin git@github.com:transldelta/DeltaCompare.git
   ```

6. In Vercel im Projekt unter „Settings → Git" das verbundene Repository neu
   verbinden (oder GitHub-Webhook neu autorisieren).
7. `NEXT_PUBLIC_SITE_URL` und alle Domain-/CI-Verweise prüfen.

> Vorteile: Issues, PRs, Stars, History, Watcher bleiben erhalten. Auch alle
> Klone werden automatisch weitergeleitet.

## Option B: Neues Repo `transldelta/DeltaCompare` anlegen

1. Neues leeres Repo auf GitHub erstellen (`transldelta/DeltaCompare`,
   keine README/`.gitignore`/License initialisieren).
2. Lokal:

   ```bash
   git remote rename origin xau-usd
   git remote add origin git@github.com:transldelta/DeltaCompare.git
   git push -u origin --all
   git push origin --tags
   ```

3. In Vercel das neue Repo verbinden, Environment Variables übernehmen.
4. Altes Repo `transldelta/XAU-USD` archivieren (Settings → „Archive this repository")
   oder löschen.

> Vorteile: sauberer Schnitt, neue URL ist sofort der Hauptort.
> Nachteile: Issues/PRs des alten Repos werden nicht mitgenommen
> (lassen sich aber via `gh issue list --repo …` und Re-Import migrieren).

## Empfehlung

Wenn dir Issues/PRs egal sind und du einen sauberen neuen Namen willst → **Option B**.
Wenn du History und externe Links nicht brechen willst → **Option A**.

## Was bleibt unverändert

- Die Branch `claude/deltacompare-autopilot-LO7NB` mit dem aktuellen Code.
- Der Inhalt des Pull Requests #1 (sofern bereits gemerged oder zumindest erstellt).
- Vercel-Deployments, sobald das Webhook neu verbunden ist.

## Nach der Migration

- README, Docs und PR-Beschreibungen prüfen, falls dort die alte Repo-URL hartcodiert ist.
- Domain in der DNS- und Vercel-Konfiguration bleibt unverändert – sie hängt nicht am Repo-Namen.
