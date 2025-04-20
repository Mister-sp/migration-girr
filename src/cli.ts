// CLI principale pour la migration d'une config GIRR
import { migrateOldConfigToNew } from './migrators/configMigrator.js';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { basename, dirname, join } from 'path';

function printUsage() {
  console.log('Usage: npx girr-migrate <chemin/vers/config.json> [chemin/sortie.json]');
}

async function main() {
  const [,, inputPath, outputPathArg] = process.argv;
  if (!inputPath) {
    printUsage();
    process.exit(1);
  }
  if (!existsSync(inputPath)) {
    console.error(`Fichier introuvable: ${inputPath}`);
    process.exit(2);
  }
  const outputPath = outputPathArg || join(dirname(inputPath), basename(inputPath, '.json') + '.migrated.json');
  try {
    const raw = readFileSync(inputPath, 'utf-8');
    const oldConfig = JSON.parse(raw);
    const newConfig = migrateOldConfigToNew(oldConfig);
    writeFileSync(outputPath, JSON.stringify(newConfig, null, 2), { flag: 'wx' });
    console.log(`Migration réussie ! Nouveau fichier : ${outputPath}`);
  } catch (e: any) {
    console.error('Erreur lors de la migration :', e.message);
    process.exit(3);
  }
}

main();
