export default function elementLoadedById(id) {
  return new Promise((resolve, reject) => {
    const firstPass = document.getElementById(id);
    if (firstPass) {
      resolve(firstPass);
      return;
    }

    const observer = new MutationObserver((_) => {
      const element = document.getElementById(id);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
      reject('DOM finished loading, not found.');
      observer.disconnect();
    });

    if (document.readyState != 'loading') {
      reject('DOM already loaded, not found.');
      return;
    }

    observer.observe(document, {
      subtree: true,
      childList: true,
      attributeFilter: ['id'],
    });
  });
}
