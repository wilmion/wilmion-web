// const posiblePaths = ['Stats', 'Manage', 'Contact', 'Blog', 'Settings'];
// const managePosbilePaths = ['social-media', 'skills', 'projects', 'jobs'];

export function getPaths(event: any) {
  let url = event['url'] as string | undefined;

  if (!url) return [];

  url = url.replace('/admin', '');

  const paths = ['Dashboard'];

  paths.push(...url.split('/'));

  paths.splice(1, 1);

  return paths;
}
