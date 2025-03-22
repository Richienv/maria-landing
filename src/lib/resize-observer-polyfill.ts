export function initResizeObserverPolyfill() {
  if (typeof window !== 'undefined' && !window.ResizeObserver) {
    window.ResizeObserver = class ResizeObserver {
      constructor(callback: any) {
        this.callback = callback;
        this.observables = [];
      }
      
      callback: any;
      observables: Array<{ element: Element; size: { inlineSize: number; blockSize: number } }>;
      
      observe(target: Element) {
        const observable = {
          element: target,
          size: {
            inlineSize: (target as HTMLElement).offsetWidth || 0,
            blockSize: (target as HTMLElement).offsetHeight || 0
          }
        };
        
        this.observables.push(observable);
        
        if (this.observables.length === 1) {
          this.startLoop();
        }
      }
      
      unobserve(target: Element) {
        this.observables = this.observables.filter(
          (observable) => observable.element !== target
        );
        
        if (this.observables.length === 0) {
          this.stopLoop();
        }
      }
      
      disconnect() {
        this.observables = [];
        this.stopLoop();
      }
      
      startLoop() {
        const checkForChanges = () => {
          this.rafId = requestAnimationFrame(checkForChanges);
          
          const changedEntries = this.observables
            .filter((observable) => {
              const newWidth = (observable.element as HTMLElement).offsetWidth || 0;
              const newHeight = (observable.element as HTMLElement).offsetHeight || 0;
              
              const widthChanged = observable.size.inlineSize !== newWidth;
              const heightChanged = observable.size.blockSize !== newHeight;
              
              if (widthChanged || heightChanged) {
                observable.size.inlineSize = newWidth;
                observable.size.blockSize = newHeight;
                return true;
              }
              
              return false;
            })
            .map((observable) => ({
              target: observable.element,
              contentRect: {
                width: observable.size.inlineSize,
                height: observable.size.blockSize
              }
            }));
          
          if (changedEntries.length > 0) {
            this.callback(changedEntries);
          }
        };
        
        this.rafId = requestAnimationFrame(checkForChanges);
      }
      
      rafId: number | null = null;
      
      stopLoop() {
        if (this.rafId !== null) {
          cancelAnimationFrame(this.rafId);
          this.rafId = null;
        }
      }
    };
  }
} 