import { log } from '@utils';

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          log('sw', 'registered', registration);
        })
        .catch(registrationError => {
          log('sw', 'registration failed', registrationError);
        });
    });
  }
}
