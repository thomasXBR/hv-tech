declare module "react" {
  // Mínimo necessário para o TypeScript do editor parar de acusar erro
  export type ReactNode = any;
  export function useState<S = any>(
    initialState: S | (() => S)
  ): [S, (value: S | ((prev: S) => S)) => void];
}

declare module "react/jsx-runtime" {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

