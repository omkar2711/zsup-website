/**
 * Helper function to get the correct path for logos in both development and production
 * 
 * In development, Vite can handle assets from the /src folder
 * In production, we need to use the public folder or have the build system process the imports
 */

export function getLogoPath(path: string): string {
  // Strip the /src prefix if present
  const cleanPath = path.startsWith('/src/') ? path.slice(4) : path;
  
  // For production builds, all assets should be in the public directory
  // which is accessible from the root URL in the built site
  return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
}
