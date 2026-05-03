import './styles.css';
import logoUrl from '../assets/logo.png';

document.querySelector('#app').innerHTML = `
  <main class="shell">
    <button class="banner" id="banner" type="button">
      <span>Notice about original Videoticle - click to read</span>
    </button>
    <section class="content">
      <div class="brand" aria-label="Videoticle brand">
        <img class="wordmark" src="${logoUrl}" alt="Videoticle" />
      </div>
      <h1>Stay tuned for the new Videoticle.</h1>
      <div class="pill">Videoticle.com - V2 in progress</div>
    </section>
  </main>

  <dialog id="shutdownDialog" aria-labelledby="shutdownTitle">
    <h2 id="shutdownTitle">Original Videoticle has been shut down</h2>
    <p>
      The original Videoticle product is no longer active. This website has been
      replaced to prepare for Videoticle V2.
    </p>
    <p>
      For a similar experience, please visit my friend's app:
      <a class="scribe-link" href="https://www.appblit.com/scribe" target="_blank" rel="noopener noreferrer">Appblit Scribe</a>.
    </p>
    <div class="modal-actions">
      <button class="btn" id="closeDialog" type="button">Got it</button>
    </div>
  </dialog>
`;

const banner = document.querySelector('#banner');
const dialog = document.querySelector('#shutdownDialog');
const closeDialog = document.querySelector('#closeDialog');

banner.addEventListener('click', () => dialog.showModal());
closeDialog.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedOutside) dialog.close();
});
