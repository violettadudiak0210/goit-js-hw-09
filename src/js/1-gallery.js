import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItems = [
    {
        preview: "small-image-1.jpg",
        original: "large-image-1.jpg",
        description: "Image 1 description"
    },
    {
        preview: "small-image-2.jpg",
        original: "large-image-2.jpg",
        description: "Image 2 description"
    },
    {
        preview: "small-image-3.jpg",
        original: "large-image-3.jpg",
        description: "Image 3 description"
    }
];

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({ preview, original, description }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img 
                class="gallery-image" 
                src="${preview}" 
                alt="${description}" 
            />
        </a>
    </li>
`).join('');

galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
