/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMeta {
  readonly env: {
    readonly DEV: boolean;
    readonly PROD: boolean;
  };
}

declare module 'gsap' {
  export * from 'gsap/all';
}

declare module 'gsap/ScrollTrigger' {
  export * from 'gsap/ScrollTrigger';
}

declare module 'gsap/SplitText' {
  export * from 'gsap/SplitText';
}

declare module 'gsap/ScrollToPlugin' {
  export * from 'gsap/ScrollToPlugin';
}
