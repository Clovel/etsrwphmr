/**
 * Checks if process NODE_ENV in 'development' mode
 */
export const isDev = (): boolean => {
  return process.env.NODE_ENV === 'development';
};
