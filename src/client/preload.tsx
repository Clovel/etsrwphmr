// Say something
console.log('[ERWT] : Preload execution started');

// Get versions
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (pSelector: string, pText: string) => {
    const lElement = document.getElementById(pSelector);

    if(lElement) {
      lElement.innerText = pText;
    }
  };

  // Packages version
  for(const type of ['chrome', 'node', 'electron']) {
    replaceText(
      `${type}-version`,
      process.versions[type as keyof typeof process.versions] as string,
    );
  }
});

/* Why ? 'preload.ts' cannot be compiled under '--isolatedModules'
 * because it is considered a global script file.
 * Add an import, export, or an empty 'export {}'
 * statement to make it a module.
 * */
export {};
