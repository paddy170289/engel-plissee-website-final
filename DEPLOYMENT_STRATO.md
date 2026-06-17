# Deployment zu STRATO via GitHub Actions

Diese Website wird lokal bearbeitet, bei GitHub gespeichert und automatisch zu STRATO hochgeladen.

## GitHub Secrets

Im GitHub Repository unter `Settings > Secrets and variables > Actions` folgende Secrets anlegen:

```text
STRATO_HOST=5017181505.ssh.w2.strato.hosting
STRATO_USER=su233148
STRATO_PASSWORD=<SFTP/SSH-Passwort aus STRATO>
STRATO_PORT=22
STRATO_TARGET_DIR=/
```

Falls die Domain bei STRATO in einen Unterordner zeigt, muss `STRATO_TARGET_DIR` entsprechend angepasst werden.

## Update-Ablauf

```powershell
npm run build
git add .
git commit -m "Update Website"
git push
```

Nach dem Push baut GitHub Actions die Website und lädt den Inhalt aus `dist` per SFTP zu STRATO hoch.

## Hinweis

Das STRATO-Passwort niemals in Dateien speichern oder committen. Es gehört ausschließlich in GitHub Secrets.
