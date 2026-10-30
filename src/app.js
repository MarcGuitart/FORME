const cars = [
  {name:'911 S',make:'Porsche',year:'1972',type:'Classic',tag:'AIR-COOLED ORIGINAL',image:'photo-1503376780353-7e6692767b70',story:'The long-running 911 shape, distilled. The early S paired a delicate, unmistakable silhouette with a rev-hungry flat-six.',detail:'A lightweight expression of the original 911 idea. Its compact proportions and rear-engine character helped define a sports car lineage that continues today.'},
  {name:'F40',make:'Ferrari',year:'1987',type:'Supercar',tag:'BORN TO BE FAST',image:'photo-1503734-ec21c8c3b5df',story:'A raw, featherweight celebration of speed. The final car personally signed off by Enzo Ferrari.',detail:'Created to mark four decades of Ferrari road cars, the F40 put lightness and driver involvement ahead of luxury. Its wide stance and purposeful details still feel uncompromising.'},
  {name:'2002 Turbo',make:'BMW',year:'1974',type:'Classic',tag:'THE ORIGINAL TURBO',image:'photo-1555215695-3004980ad54e',story:'A compact coupe with a bold idea: bring turbocharged performance to the road.',detail:'The 2002 Turbo brought a racing technology into a compact road car. Its restrained dimensions and unmistakable period details made a lasting impression.'},
  {name:'Miura P400',make:'Lamborghini',year:'1967',type:'Supercar',tag:'A NEW PROPORTION',image:'photo-1544829099-b9a0c07fad1a',story:'Mid-engined, impossibly low, and unlike anything before it. A new blueprint for the supercar.',detail:'The Miura rearranged the visual language of performance cars. Its dramatic proportions and sculptural body remain a landmark of Italian design.'},
  {name:'190 E 2.5-16',make:'Mercedes-Benz',year:'1990',type:'Rally',tag:'HOMOLOGATION ICON',image:'photo-1617814076367-b759c7d7e738',story:'A road-going lesson in precision, sharpened by competition and finished with quiet confidence.',detail:'Developed with motorsport in mind, the 190 E combined everyday proportions with serious engineering intent. A discreet icon of an era when touring cars ruled.'},
  {name:'E-Type Series 1',make:'Jaguar',year:'1961',type:'Classic',tag:'THE LONG BONNET',image:'photo-1563720223185-11003d516935',story:'A sweeping bonnet, a fine wire wheel, and one of the most celebrated shapes ever put on a road.',detail:'The E-Type made a lasting case for the beauty of speed. Its long bonnet and clean, flowing bodywork still feel remarkably modern.'}
];

const photo = (id, width=1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const grid = document.querySelector('#car-grid');
const render = (filter='All') => {
  const shown = cars.filter(car => filter === 'All' || car.type === filter);
  document.querySelector('#count').textContent = String(shown.length).padStart(2,'0');
  grid.innerHTML = shown.map((car) => `<article class="car-card" tabindex="0" data-name="${car.name}"><div class="car-image"><img loading="lazy" src="${photo(car.image)}" alt="${car.year} ${car.make} ${car.name}"/><span class="card-index">${String(cars.indexOf(car)+1).padStart(2,'0')} / 06</span><span class="card-arrow">↗</span></div><div class="car-info"><div><h3>${car.make} ${car.name}</h3><p>${car.tag}</p></div><span class="car-year">${car.year}</span></div></article>`).join('');
  grid.querySelectorAll('.car-card').forEach(card => {
    const open = () => showCar(cars.find(car => car.name === card.dataset.name));
    card.addEventListener('click', open);
    card.addEventListener('keydown', event => {if(event.key === 'Enter' || event.key === ' '){event.preventDefault();open()}});
  });
};
function showCar(car){
  const dialog=document.querySelector('#car-dialog');
  dialog.querySelector('.dialog-image').style.backgroundImage=`url('${photo(car.image,1400)}')`;
  dialog.querySelector('.section-label').textContent=`${car.make.toUpperCase()} — ${car.type.toUpperCase()}`;
  dialog.querySelector('h2').textContent=`${car.name} · ${car.year}`;
  dialog.querySelector('.dialog-copy p').textContent=car.detail;
  dialog.querySelector('.dialog-meta').textContent=`${car.tag}  /  FORME COLLECTION Nº ${String(cars.indexOf(car)+1).padStart(2,'0')}`;
  dialog.showModal();
}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');button.classList.add('active');render(button.dataset.filter)}));
document.querySelector('.dialog-close').addEventListener('click',()=>document.querySelector('#car-dialog').close());
document.querySelector('#car-dialog').addEventListener('click',event=>{if(event.target.id==='car-dialog')event.currentTarget.close()});
render();
