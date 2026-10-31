const photos = {
  rally: { src: './public/assets/photography/porsche-911-rally.jpg', width: 1920, height: 1293, alt: 'Porsche 911 rally car at the Goodwood Festival of Speed', photographer: 'Nic Redhead', license: 'CC BY-SA 2.0', url: 'https://commons.wikimedia.org/wiki/File:Porsche_911_Rallycar_(14574074995).jpg', position: 'center 55%' },
  porsche: { src: './public/assets/photography/porsche-911-s-city.jpg', width: 1920, height: 1440, alt: '1972 Porsche 911 S 2.4 in close detail inside a garage', photographer: 'Ethan Llamas', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:1972_Porsche_911_2.4_S,_front_left,_05-18-2024.jpg', position: 'center 58%' },
  f40: { src: './public/assets/photography/ferrari-f40-concours.jpg', width: 1817, height: 915, alt: '1990 Ferrari F40 at Salon Privé in the grounds of Blenheim Palace', photographer: 'Vauxford', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:1990_Ferrari_F40_2.9_(1).jpg', position: 'center 54%' },
  bmw: { src: './public/assets/photography/bmw-2002-turbo.jpg', width: 1920, height: 888, alt: '1974 BMW 2002 Turbo at an outdoor gathering', photographer: 'TTTNIS', license: 'CC0 1.0', url: 'https://commons.wikimedia.org/wiki/File:1974_BMW_2002_Turbo.jpg', position: 'center 56%' },
  engine: { src: './public/assets/photography/bmw-2002-engine.jpg', width: 1920, height: 1280, alt: 'Engine bay of a BMW 2002 Turbo', photographer: 'dave_7', license: 'CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:BMW_2002_Turbo_engine_-_Flickr_-_dave_7.jpg', position: 'center' },
  miura: { src: './public/assets/photography/lamborghini-miura-london.jpg', width: 1920, height: 1280, alt: '1969 Lamborghini Miura P400 S at a London classic car show', photographer: '35mmMan', license: 'CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Lamborghini_Miura_-_30701882556.jpg', position: 'center 58%' },
  mercedes: { src: './public/assets/photography/mercedes-190e-25-16.jpg', width: 1920, height: 986, alt: 'Mercedes-Benz 190 E 2.5-16 at an enthusiast event', photographer: 'Alexander-93', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Mercedes-Benz_190_E_2.5-16_1X7A2549.jpg', position: 'center 55%' },
  jaguar: { src: './public/assets/photography/jaguar-e-type.jpg', width: 1920, height: 1440, alt: 'Jaguar E-Type Series I by a waterfront in daylight', photographer: '117PXL', license: 'CC0 1.0', url: 'https://commons.wikimedia.org/wiki/File:Jaguar_e-type.jpg', position: 'center 58%' },
  targa: { src: './public/assets/photography/porsche-911-s-targa.jpg', width: 1920, height: 951, alt: '1972 Porsche 911 S 2.4 Targa in the Porsche museum', photographer: 'Alexander Migl', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Porsche_911_S_2.4_Targa_(1972,_Porsche_Classic)_1X7A0346.jpg', position: 'center 55%' }
};

function webpSet(photo) {
  const stem = photo.src.replace(/\.jpg$/, '');
  return [640, 960, 1440].map((width) => `${stem}-${width}.webp ${width}w`).join(', ');
}

const cars = [
  {
    slug: '911-s', name: '911 S', make: 'Porsche', year: '1972', type: 'Classic',
    tag: 'AN EXERCISE IN RESTRAINT', photo: 'porsche', layout: 'close-study', chapter: 'THE SHAPE, UP CLOSE', pullquote: 'A familiar form reveals itself one line at a time.',
    story: 'A shape so resolved it seems to have arrived fully formed.',
    detail: 'The early 911 made a clear statement with very little. A drawn-out roofline, a light touch at the rear, and a profile that still feels in motion at rest. Its story is one of careful evolution: the original idea, held onto and refined across generations.'
  },
  {
    slug: 'f40', name: 'F40', make: 'Ferrari', year: '1990', type: 'Supercar',
    tag: 'BUILT AROUND THE DRIVE', photo: 'f40', layout: 'wide-open', chapter: 'AN UNCOMPROMISING FORM', pullquote: 'The drama lives in the exposed structure.',
    story: 'An uncompromising answer to a simple question: what should a road car feel like?',
    detail: 'The F40 put lightness and driver involvement ahead of comfort. Its broad stance, purposeful openings and visible construction made performance part of the design language. Decades later, it remains a vivid portrait of its time.'
  },
  {
    slug: '2002-turbo', name: '2002 Turbo', make: 'BMW', year: '1974', type: 'Classic',
    tag: 'A COMPACT REBELLION', photo: 'bmw', storyPhoto: 'bmw', detailPhoto: 'engine', layout: 'mechanical', chapter: 'THE TURBO ERA, IN DETAIL', pullquote: 'A small shape with an unusually large point of view.',
    story: 'A small coupe with the confidence to change the mood of the whole road.',
    detail: 'The 2002 family brought a nimble, direct character to a compact shape. The Turbo made that character more urgent, with a visual presence that announced its intent before the engine turned over.'
  },
  {
    slug: 'miura-p400', name: 'Miura P400 S', make: 'Lamborghini', year: '1969', type: 'Supercar',
    tag: 'A NEW PROPORTION', photo: 'miura', layout: 'sculptural', chapter: 'A NEW SUPERSPORT', pullquote: 'The body seems to flow around the idea of motion.',
    story: 'Low, poised and unexpected: a different idea of what a fast car could look like.',
    detail: 'The Miura shifted the visual balance of the supercar. Its cabin sat forward, its body flowed close to the ground, and every line seemed to be drawn around movement. It remains a landmark in the meeting of engineering and form.'
  },
  {
    slug: '190-e', name: '190 E 2.5-16', make: 'Mercedes-Benz', year: '1980s', type: 'Touring',
    tag: 'PRECISION, IN PROFILE', photo: 'mercedes', layout: 'touring', chapter: 'A STUDY IN CONTROL', pullquote: 'Performance expressed through proportion and poise.',
    story: 'The quiet confidence of a road car with a competition story in its bones.',
    detail: 'The 190 E brought motorsport ambition into a measured, compact saloon. Its design never needed to shout: squared shoulders and purposeful details carried the character. A reminder that performance can be expressed with restraint.'
  },
  {
    slug: 'e-type', name: 'E-Type Series I', make: 'Jaguar', year: 'Series I', type: 'Classic',
    tag: 'THE LONG BONNET', photo: 'jaguar', layout: 'long-line', chapter: 'A CONTINUOUS GESTURE', pullquote: 'One long line carries the eye from nose to tail.',
    story: 'A long, low line that feels less designed than discovered.',
    detail: 'The E-Type made a sculptural argument for the sports car. Its long bonnet, set-back cabin and clean bodywork still carry an unmistakable sense of occasion. The shape became an enduring reference point for automotive design.'
  }
];

const grid = document.querySelector('#car-grid');
const storyView = document.querySelector('#story-view');
const collection = document.querySelector('#discover');
let lastFocusedElement = null;

function renderCollection(filter = 'All') {
  const shown = cars.filter((car) => filter === 'All' || car.type === filter);
  document.querySelector('#count').textContent = String(shown.length).padStart(2, '0');
  grid.innerHTML = shown.map((car) => {
    const originalIndex = cars.indexOf(car);
    const photo = photos[car.photo];
    return `<button class="car-card${originalIndex === 0 ? ' car-card-feature' : ''}" type="button" data-slug="${car.slug}" aria-label="Read the FORME story on the ${car.year} ${car.make} ${car.name}">
      <span class="car-image"><picture><source type="image/webp" srcset="${webpSet(photo)}" sizes="${originalIndex === 0 ? '(max-width:760px) 86vw, 72vw' : '(max-width:760px) 43vw, 42vw'}"/><img loading="lazy" src="${photo.src}" width="${photo.width}" height="${photo.height}" alt="${photo.alt}" style="object-position:${photo.position}"/></picture><span class="card-index">${String(originalIndex + 1).padStart(2, '0')} / 06</span><span class="card-arrow" aria-hidden="true">↗</span></span>
      <span class="car-info"><span class="car-name"><span class="car-maker">${car.make} — ${car.year}</span><strong>${car.name}</strong></span><span class="car-tag">${car.tag}</span></span>
    </button>`;
  }).join('');

  grid.querySelectorAll('.car-card').forEach((card) => card.addEventListener('click', () => {
    lastFocusedElement = card;
    card.querySelector('.car-image img').style.viewTransitionName = 'automotive-image';
    navigateToStory(card.dataset.slug);
  }));
}

function navigateToStory(slug) {
  history.pushState({ formeStory: slug }, '', `#story=${slug}`);
  renderRoute();
}

function setStory(car) {
  const index = cars.indexOf(car);
  const storyPhoto = photos[car.storyPhoto || car.photo];
  const image = storyView.querySelector('.story-image');
  image.alt = storyPhoto.alt;
  image.width = storyPhoto.width;
  image.height = storyPhoto.height;
  image.style.objectPosition = storyPhoto.position;
  image.style.viewTransitionName = 'automotive-image';
  const storySource = storyView.querySelector('.story-image-source');
  storySource.srcset = webpSet(storyPhoto);
  storySource.sizes = '100vw';
  image.src = storyPhoto.src;
  const credit = storyView.querySelector('.story-credit');
  credit.href = storyPhoto.url;
  credit.querySelector('span').textContent = `PHOTOGRAPH BY ${storyPhoto.photographer}`;
  credit.querySelector('b').textContent = storyPhoto.license;
  const detailFigure = storyView.querySelector('.story-detail-photo');
  if (car.detailPhoto) {
    const detailPhoto = photos[car.detailPhoto];
    detailFigure.hidden = false;
    const detailImage = detailFigure.querySelector('img');
    detailImage.alt = detailPhoto.alt;
    detailImage.width = detailPhoto.width;
    detailImage.height = detailPhoto.height;
    detailFigure.querySelector('picture source').srcset = webpSet(detailPhoto);
    detailFigure.querySelector('picture source').sizes = '(max-width:760px) 82vw, 50vw';
    detailImage.src = detailPhoto.src;
    detailFigure.querySelector('figcaption').innerHTML = `<span>${detailPhoto.alt}</span><a href="${detailPhoto.url}" target="_blank" rel="noreferrer">${detailPhoto.photographer} · ${detailPhoto.license} ↗</a>`;
  } else detailFigure.hidden = true;
  storyView.dataset.layout = car.layout;
  storyView.querySelector('.story-title .section-label').textContent = `${car.make.toUpperCase()}  /  ${car.type.toUpperCase()}  /  ${car.year}`;
  const storyHeading = storyView.querySelector('.story-title h2');
  if (car.layout === 'sculptural') {
    storyHeading.replaceChildren(document.createTextNode('Miura '), document.createElement('br'), document.createTextNode('P400 S'));
  } else storyHeading.textContent = car.name;
  storyView.querySelector('.story-count').textContent = `${String(index + 1).padStart(2, '0')}  /  ${String(cars.length).padStart(2, '0')}`;
  storyView.querySelector('.story-number').textContent = `FORM Nº ${String(index + 1).padStart(2, '0')}`;
  storyView.querySelector('.story-lead').textContent = car.story;
  storyView.querySelector('.story-detail').textContent = car.detail;
  storyView.querySelector('.story-chapter').textContent = car.chapter;
  storyView.querySelector('.story-pullquote').textContent = car.pullquote;
  storyView.querySelector('.story-meta').textContent = `${car.tag}  ·  FROM THE FORME COLLECTION`;
  const previous = cars[(index - 1 + cars.length) % cars.length];
  const next = cars[(index + 1) % cars.length];
  [[previous, '.story-prev'], [next, '.story-next']].forEach(([related, selector]) => {
    const button = storyView.querySelector(selector);
    const preview = photos[related.photo];
    const previewImage = button.querySelector('.story-nav-image img');
    previewImage.src = preview.src.replace(/\.jpg$/, '-640.webp');
    previewImage.alt = '';
    button.querySelector('b').textContent = `${related.make} ${related.name}`;
    button.setAttribute('aria-label', `${selector === '.story-prev' ? 'Previous' : 'Next'} story: ${related.make} ${related.name}`);
  });
  storyView.querySelector('.story-prev').onclick = () => navigateToStory(previous.slug);
  storyView.querySelector('.story-next').onclick = () => navigateToStory(next.slug);
}

function renderRoute() {
  const match = location.hash.match(/^#story=([a-z0-9-]+)$/);
  const car = match && cars.find((item) => item.slug === match[1]);
  if (!car) {
    storyView.classList.remove('is-visible');
    storyView.setAttribute('aria-hidden', 'true');
    storyView.inert = true;
    document.body.classList.remove('story-open');
    document.title = 'FORME — The art of the automobile';
    if (lastFocusedElement?.isConnected) lastFocusedElement.focus({ preventScroll: true });
    return;
  }

  if (storyView.classList.contains('is-visible')) {
    storyView.querySelector('.story-image').style.viewTransitionName = 'automotive-image';
  }

  const show = () => {
    setStory(car);
    storyView.scrollTop = 0;
    storyView.inert = false;
    storyView.setAttribute('aria-hidden', 'false');
    storyView.classList.add('is-visible');
    document.body.classList.add('story-open');
    document.title = `${car.make} ${car.name} — FORME`;
    storyView.querySelector('.story-back').focus({ preventScroll: true });
  };
  if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const transition = document.startViewTransition(show);
    const clearTransitionNames = () => {
      storyView.querySelector('.story-image').style.viewTransitionName = 'none';
      grid.querySelectorAll('.car-image img').forEach((element) => { element.style.viewTransitionName = 'none'; });
    };
    transition.finished.then(clearTransitionNames, clearTransitionNames);
  } else {
    show();
  }
}

document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
  document.querySelector('.filter.active')?.classList.remove('active');
  button.classList.add('active');
  renderCollection(button.dataset.filter);
}));

document.querySelector('.story-back').addEventListener('click', (event) => {
  event.preventDefault();
  history.replaceState(null, '', '#discover');
  renderRoute();
  collection.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});

window.addEventListener('popstate', renderRoute);
window.addEventListener('hashchange', renderRoute);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && storyView.classList.contains('is-visible')) {
    history.replaceState(null, '', '#discover');
    renderRoute();
    collection.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
});

renderCollection();
renderRoute();
