declare global {
  interface Window {
    google?: {
      maps: {
        Map: new (element: HTMLElement, options?: object) => unknown;
      };
    };
  }
}

export {};
