/**
 * Utilitário para resolver caminhos de assets tanto em desenvolvimento local 
 * quanto após o deploy no GitHub Pages (que utiliza um subdiretório).
 */
export function getAssetPath(path: string): string {
  // Se o caminho já for absoluto (http/https), retorna como está
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Normaliza o caminho para garantir que comece com /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Como estamos usando domínio próprio, o caminho é sempre a partir da raiz
  return normalizedPath;
}
