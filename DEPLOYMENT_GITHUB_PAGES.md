# Deployment zu GitHub Pages

Diese Website wird bei GitHub gespeichert und automatisch über GitHub Pages veröffentlicht.

## GitHub Pages aktivieren

Im GitHub Repository:

1. `Settings` öffnen.
2. `Pages` öffnen.
3. Unter `Build and deployment` bei `Source` den Wert `GitHub Actions` auswählen.
4. Speichern.

Die Datei `.github/workflows/deploy-pages.yml` baut die Website nach jedem Push und veröffentlicht den Ordner `dist`.

## Custom Domain

Die Domain ist in `public/CNAME` hinterlegt:

```text
engel-plissee.com
```

GitHub übernimmt diese Datei nach dem Build in `dist/CNAME`.

## DNS bei STRATO

Für die Hauptdomain `engel-plissee.com` A-Records auf GitHub Pages setzen:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Für `www.engel-plissee.com` einen CNAME setzen:

```text
paddy170289.github.io
```

## Update-Ablauf

```powershell
npm run build
git add .
git commit -m "Update Website"
git push
```

Nach dem Push baut GitHub Actions die Website und veröffentlicht sie automatisch über GitHub Pages.
