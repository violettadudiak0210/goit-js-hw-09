import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as l}from"./assets/vendor-D0gBiHs0.js";const r=[{preview:"small-image-1.jpg",original:"large-image-1.jpg",description:"Image 1 description"},{preview:"small-image-2.jpg",original:"large-image-2.jpg",description:"Image 2 description"},{preview:"small-image-3.jpg",original:"large-image-3.jpg",description:"Image 3 description"}],g=document.querySelector(".gallery"),m=r.map(({preview:e,original:a,description:i})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${a}">
            <img 
                class="gallery-image" 
                src="${e}" 
                alt="${i}" 
            />
        </a>
    </li>
`).join("");g.innerHTML=m;new l(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
