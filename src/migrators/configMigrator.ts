// Migrateur pour l'ancien format de config GIRR vers le nouveau format
// Ne jamais modifier le fichier source !

export interface OldSubject {
  id: number | string;
  nom: string;
  ordre?: number;
}

export interface OldConfig {
  titre?: string;
  sujets?: OldSubject[];
  // autres champs possibles
}

export interface NewSubject {
  id: string;
  title: string;
  order: number;
}

export interface NewConfig {
  title: string;
  subjects: NewSubject[];
  // autres champs possibles
}

export function migrateOldConfigToNew(oldConfig: OldConfig): NewConfig {
  return {
    title: oldConfig.titre || '',
    subjects: (oldConfig.sujets || []).map((s) => ({
      id: String(s.id),
      title: s.nom,
      order: s.ordre ?? 0,
    })),
    // autres mappings si besoin
  };
}
