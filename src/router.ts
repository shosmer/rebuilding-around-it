import {useSyncExternalStore} from 'react';

export type Route = 'home' | 'designers' | 'leaders' | 'risk';

export const PATHS: Record<Route, string> = {
  home: '#/',
  designers: '#/designers',
  leaders: '#/leaders',
  risk: '#/risk',
};

function parse(hash: string): Route {
  const h = hash.replace(/^#\/?/, '').replace(/\/$/, '');
  if (h === 'designers' || h === 'leaders' || h === 'risk') return h;
  return 'home';
}

function subscribe(cb: () => void) {
  window.addEventListener('hashchange', cb);
  return () => window.removeEventListener('hashchange', cb);
}

export function useRoute(): Route {
  return useSyncExternalStore(
    subscribe,
    () => parse(window.location.hash),
    () => 'home',
  );
}
