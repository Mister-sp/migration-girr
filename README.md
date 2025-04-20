# migration-girr

Outil CLI pour migrer automatiquement les anciennes configurations frontend GIRR (JSON, etc.) vers le nouveau format du frontend modernisé.

## Utilisation rapide

1. Place tes anciens fichiers de config (ex: `config.json`) dans le dossier de ton choix.
2. Exécute :
   ```bash
   npm install
   npm run build
   npx girr-migrate chemin/vers/config.json [chemin/sortie.json]
   ```
3. Le fichier migré sera généré à côté de l’original (jamais d’overwrite !)

## Fonctionnalités
- Mapping automatique des champs (ex: `titre` → `title`, `nom` → `title`...)
- Conversion des types (`id` number → string, etc.)
- Validation et log des erreurs
- Jamais de modification du fichier original

## Bonus
- Peut être adapté pour une UI web (voir dossier `ui/` si besoin)
- Peut migrer par lots avec un script supplémentaire

## Exemples

**Ancien format :**
```json
{
  "titre": "Mon émission",
  "sujets": [
    { "id": 1, "nom": "Sujet 1", "ordre": 1 }
  ]
}
```

**Nouveau format :**
```json
{
  "title": "Mon émission",
  "subjects": [
    { "id": "1", "title": "Sujet 1", "order": 1 }
  ]
}
```

## Sécurité
- Les fichiers originaux ne sont jamais modifiés.
- Les erreurs sont loguées dans la console.

---

Contact : équipe GIRR
