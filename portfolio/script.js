// Replace these sample records with your own project titles, descriptions, and tools.
const categories = [
 {name:'Graphic Designs',projects:[
 ['Make Some Noise','Event poster · Typography','poster','MAKE<br>SOME<br>NOISE','An energetic poster study for a campus music night. Bold typography and a limited color palette make the message easy to spot.',['Illustrator','Typography']],
 ['Forma Studio','Brand identity · Visual design','brand','forma.','A fictional creative studio identity, exploring a flexible wordmark, brand colors, and consistent layouts.',['Illustrator','Branding']],
 ['Type & Texture','Editorial · Type exploration','type','Aa','An experimental typography project studying contrast, letterforms, and expressive editorial compositions.',['Photoshop','Typography']],
 ['The Daily Edit','Publication · Layout design','editorial','The<br>Daily Edit','A magazine layout concept balancing large headlines with a clear reading hierarchy.',['InDesign','Editorial']]
 ]},
 {name:'Website Development',projects:[
 ['Campus Connect','Student community website','web','Your campus.<br>Connected.','A responsive student community website concept with an accessible layout and clearly organized campus information.',['HTML','CSS','JavaScript']],
 ['Leaf & Bean','Café landing page','web teal','A good day<br>starts here.','A fictional café website concept focused on a simple menu, welcoming typography, and mobile-friendly browsing.',['HTML','CSS','Responsive design']],
 ['Study Space','Productivity dashboard','web purple','A little focus.<br>A lot of progress.','A study dashboard concept that organizes tasks and deadlines in one calm workspace.',['JavaScript','UI design']],
 ['Open Shelf','Book discovery website','web orange','Find your<br>next chapter.','A book discovery interface concept with a reusable card layout and approachable browsing experience.',['HTML','CSS','UI design']]
 ]},
 {name:'Game Development',projects:[
 ['Orbit Runner','Arcade · 2D game','game','ORBIT RUNNER','An arcade game concept about navigating a spaceship through an endless obstacle course. Designed to explore input handling and score systems.',['Unity','C#','2D']],
 ['Forest Quest','Adventure · Exploration','game mint','FOREST QUEST','A small adventure game concept exploring environmental storytelling, movement, and collectible items.',['Godot','GDScript']],
 ['Pixel Duel','Local multiplayer · Platformer','game red','PIXEL DUEL','A two-player platform game concept with quick matches and a focus on responsive movement.',['Unity','C#']],
 ['Tiny Tactics','Puzzle · Turn-based strategy','game gold','TINY TACTICS','A turn-based puzzle concept built around a compact board and thoughtful movement decisions.',['Godot','Game design']]
 ]}
];
const galleries=document.querySelector('#galleries');
const dialog=document.querySelector('#project-dialog');
function showDetails(category,project){document.querySelector('#dialog-category').textContent=category;document.querySelector('#dialog-title').textContent=project[0];document.querySelector('#dialog-description').textContent=project[4];const tags=document.querySelector('#dialog-tags');tags.replaceChildren(...project[5].map(tag=>{const el=document.createElement('span');el.textContent=tag;return el}));dialog.showModal()}
categories.forEach((category,index)=>{
 const section=document.createElement('section');section.className='category';section.setAttribute('aria-labelledby',`category-${index}`);
 section.innerHTML=`<div class="category-heading"><h3 id="category-${index}"><span class="category-number">0${index+1}</span>${category.name}</h3><div class="controls"><button class="previous" aria-label="Previous ${category.name} projects">‹</button><button class="next" aria-label="Next ${category.name} projects">›</button></div></div><div class="rail" tabindex="0" role="region" aria-label="${category.name} project gallery"></div>`;
 const rail=section.querySelector('.rail');
 category.projects.forEach(project=>{const card=document.createElement('article');card.className='card';let art=`<span class="art-title">${project[3]}</span>`;
 if(project[2].startsWith('web'))art=`<div class="browser"><div class="browser-bar">● ● ● &nbsp; ${project[0].toLowerCase()}</div><h4>${project[3]}</h4><span class="mini-button">Explore</span><div class="tiles"><i></i><i></i><i></i></div></div>`;
 else if(project[2].startsWith('game'))art=`<span class="game-meta">A STUDENT GAME CONCEPT</span>${art}<span class="play-mark">▷</span>`;
 else art+=`<small>${project[2]==='brand'?'CREATIVE STUDIO':'DESIGN STUDY / 2026'}</small>`;
 card.innerHTML=`<button class="preview ${project[2]}" aria-label="View ${project[0]} project details">${art}</button><h4>${project[0]}</h4><p>${project[1]}</p><div class="card-bottom"><span>2026 · STUDENT PROJECT</span><button class="detail-button">View project</button></div>`;
 card.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>showDetails(category.name,project)));rail.append(card)});
 const previous=section.querySelector('.previous'),next=section.querySelector('.next');
 const update=()=>{previous.disabled=rail.scrollLeft<2;next.disabled=rail.scrollLeft>=rail.scrollWidth-rail.clientWidth-2};
 const move=direction=>rail.scrollBy({left:direction*(rail.firstElementChild.getBoundingClientRect().width+24),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 previous.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));rail.addEventListener('scroll',update,{passive:true});rail.addEventListener('keydown',event=>{if(event.target===rail&&['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();move(event.key==='ArrowRight'?1:-1)}});new ResizeObserver(update).observe(rail);galleries.append(section);update();
});
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close()});
