// Each project: [title, subtitle, previewStyle, previewText, description, tags, optionalScreenshots].
// All project images and details are supplied portfolio work.
const categories = [
  {
    "name": "Graphic Designs",
    "projects": [
      [
        "Graphic Poster: Park Seo Joon",
        "Portrait · Graphic poster",
        "screenshot",
        "",
        "A monochrome portrait poster combining a stylized character, repeated typography, and textured details for a bold, high-contrast composition.",
        [
          "Adobe Photoshop",
          "Poster design"
        ],
        [
          "assets/park-so-jeon.png"
        ]
      ],
      [
        "Graphic Poster Nayeon",
        "Portrait · Graphic poster",
        "screenshot",
        "",
        "A vibrant portrait collage combining warm orange and purple tones, repeated typography, and layered images for an expressive fan poster.",
        [
          "Adobe Photoshop",
          "Collage",
          "Poster design"
        ],
        [
          "assets/nayeon-poster.png"
        ]
      ],
      [
        "Movie Poster",
        "Cinema · Poster design",
        "screenshot",
        "",
        "An action-inspired movie poster combining layered portraits, dramatic colors, and bold title typography to create a cinematic mood.",
        [
          "Adobe Photoshop",
          "Compositing",
          "Poster design"
        ],
        [
          "assets/movie-poster.png"
        ]
      ],
      [
        "Movie Poster / Photo Manipulation",
        "Sci-fi · Photo manipulation",
        "screenshot",
        "",
        "A surreal science-fiction composition bringing together spacecraft, an astronaut, and a coastal city through layered imagery and atmospheric blending.",
        [
          "Adobe Photoshop",
          "Photo manipulation"
        ],
        [
          "assets/photo-manipulation.png"
        ]
      ]
    ]
  },
  {
    "name": "Website Development",
    "projects": [
      [
        "G-TECH",
        "Ecommerce · Computer accessories",
        "screenshot",
        "",
        "G-TECH is an ecommerce website designed to make shopping for computer accessories and peripherals straightforward. It brings a wide range of products together in a user-friendly interface, with competitive pricing and clear product browsing.",
        [
          "HTML",
          "CSS",
          "JavaScript",
          "PHP"
        ],
        [
          "assets/g-tech.png"
        ]
      ]
    ]
  },
  {
    "name": "Game Development",
    "projects": [
      [
        "Remnants of Reflection",
        "3D · Puzzle-platformer",
        "screenshot",
        "",
        "Remnants of Reflection is a 3D puzzle-platformer designed for streamers, featuring relatable characters and a narrative built around memory. Players collect fragments of the protagonist’s past, overcome challenges, and uncover hidden truths.",
        [
          "Unity",
          "C#",
          "C++",
          "3D",
          "Puzzle-platformer"
        ],
        [
          "assets/remnants-of-reflection.png"
        ]
      ],
      [
        "Conquer the Islands",
        "2D · Adventure platformer",
        "screenshot",
        "",
        "Conquer the Islands is a 2D platform game created in Buildbox 2, combining adventure, arcade, and puzzle elements. Players guide the protagonist across platforms, avoid obstacles, and battle opponents using character abilities.\n\nCollecting coins unlocks new characters, while collecting keys opens the next stage. The game encourages critical thinking and problem-solving as players navigate hazards, defeat enemies, and complete each mission.",
        [
          "Buildbox 2",
          "2D",
          "Adventure",
          "Puzzle"
        ],
        [
          "assets/conquer-the-islands.png",
          "assets/conquer-gameplay.png"
        ]
      ]
    ]
  },
  {
    "name": "Voxel Design",
    "projects": [
      [
        "Voxel Design",
        "Characters · Voxel style",
        "screenshot",
        "",
        "A voxel-style character study featuring two block-based figures, simple platforms, and directional shadows against a clean blue background.",
        [
          "Adobe Photoshop",
          "Character design",
          "Voxel style"
        ],
        [
          "assets/voxel-design.png"
        ]
      ],
      [
        "Jason’s Demise",
        "Voxel · Character collection",
        "screenshot",
        "",
        "A six-character voxel collection telling Jason’s story through changing moods, roles, and styles.",
        [
          "Voxel design",
          "Character design"
        ],
        [
          "assets/jasons-demise-1.png",
          "assets/jasons-demise-2.png"
        ]
      ]
    ]
  },
  {
    "name": "Brand Design",
    "projects": [
      [
        "J&J Perfumes",
        "Fragrance brand · Banner design",
        "screenshot",
        "",
        "A banner for my mom’s fragrance brand, featuring scents inspired by original perfumes.",
        [
          "Brand design",
          "Banner design"
        ],
        [
          "assets/jj-perfumes-banner.png"
        ]
      ]
    ]
  }
];
const galleries=document.querySelector('#galleries');
const dialog=document.querySelector('#project-dialog');
function showDetails(category,project){document.querySelector('#dialog-category').textContent=category;document.querySelector('#dialog-title').textContent=project[0];document.querySelector('#dialog-description').textContent=project[4];const tags=document.querySelector('#dialog-tags');tags.replaceChildren(...project[5].map(tag=>{const el=document.createElement('span');el.textContent=tag;return el}));const images=document.querySelector('#dialog-images');images.replaceChildren(...(project[6]||[]).map((src,index)=>{const img=document.createElement('img');img.src=src;img.alt=project[0]+(index?' — additional project image':' — project image');return img}));document.querySelector('.sample-note').hidden=Boolean(project[6]);dialog.showModal()}
categories.forEach((category,index)=>{
 const section=document.createElement('section');section.className=category.name==='Graphic Designs'?'category category-graphics':'category';if(category.name==='Brand Design')section.classList.add('category-brand');section.setAttribute('aria-labelledby',`category-${index}`);
 section.innerHTML=`<div class="category-heading"><h3 id="category-${index}"><span class="category-number">0${index+1}</span>${category.name}</h3><div class="controls"><button class="previous" aria-label="Previous ${category.name} projects">‹</button><button class="next" aria-label="Next ${category.name} projects">›</button></div></div><div class="rail" tabindex="0" role="region" aria-label="${category.name} project gallery"></div>`;
 const rail=section.querySelector('.rail');
 category.projects.forEach(project=>{const card=document.createElement('article');card.className='card';let art=`<span class="art-title">${project[3]}</span>`;
 if(project[6])art=`<img src="${project[6][0]}" alt="${project[0]} project screenshot" loading="lazy">`;
 else if(project[2].startsWith('web'))art=`<div class="browser"><div class="browser-bar">● ● ● &nbsp; ${project[0].toLowerCase()}</div><h4>${project[3]}</h4><span class="mini-button">Explore</span><div class="tiles"><i></i><i></i><i></i></div></div>`;
 else if(project[2].startsWith('game'))art=`<span class="game-meta">A STUDENT GAME CONCEPT</span>${art}<span class="play-mark">▷</span>`;
 else art+=`<small>${project[2]==='brand'?'CREATIVE STUDIO':'DESIGN STUDY / 2026'}</small>`;
 card.innerHTML=`<button class="preview ${project[2]}" aria-label="View ${project[0]} project details">${art}</button><h4>${project[0]}</h4><p>${project[1]}</p><div class="card-bottom"><span>${project[6]?'STUDENT PROJECT':'SAMPLE PROJECT'}</span><button class="detail-button">View project</button></div>`;
 const thumbnail=card.querySelector('.preview img');if(thumbnail&&category.name!=='Graphic Designs'){const fit=()=>{if(thumbnail.naturalWidth)thumbnail.parentElement.style.aspectRatio=thumbnail.naturalWidth+'/'+thumbnail.naturalHeight};thumbnail.addEventListener('load',fit);if(thumbnail.complete)fit();}
 card.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>showDetails(category.name,project)));rail.append(card)});
 const previous=section.querySelector('.previous'),next=section.querySelector('.next');
 const update=()=>{previous.disabled=rail.scrollLeft<2;next.disabled=rail.scrollLeft>=rail.scrollWidth-rail.clientWidth-2};
 const move=direction=>rail.scrollBy({left:direction*(rail.firstElementChild.getBoundingClientRect().width+24),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 previous.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));rail.addEventListener('scroll',update,{passive:true});rail.addEventListener('keydown',event=>{if(event.target===rail&&['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();move(event.key==='ArrowRight'?1:-1)}});new ResizeObserver(update).observe(rail);galleries.append(section);update();
});
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close()});

