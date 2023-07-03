/**
 * Convert kebab-case to camelCase
 */
export default (kebabCase: string): string => kebabCase.replace(/-./g, x=>x[1].toUpperCase())