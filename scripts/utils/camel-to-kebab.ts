/**
 * Convert camelCase to kebab-case  
 */
export default (camelCase: string): string => camelCase.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())