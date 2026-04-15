/**
 * Utilitário para resolver caminhos de assets tanto em desenvolvimento local 
 * quanto após o deploy no GitHub Pages (que utiliza um subdiretório).
 */
export function getAssetPath(path: string): string {
  const isProd = process.env.NODE_ENV === 'production';
  const repoName = 'Site-Miriti-Pousada';
  
  // Se o caminho já for absoluto (http/https), retorna como está
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Normaliza o caminho para garantir que comece com /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Em produção no GitHub Pages, adiciona o nome do repositório
  if (isProd) {
    return `/${repoName}${normalizedPath}`;
  }
  
  return normalizedPath;
}
