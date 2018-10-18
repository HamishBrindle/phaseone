// To get thumbnails for videos, use https://deponewd.github.io/video/

import artwork1 from '../../assets/Projects/artwork1.png'
import artwork2 from '../../assets/Projects/artwork2.png'
import artwork3 from '../../assets/Projects/artwork3.png'


function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../assets/stefanimages', false, /\.(png|jpe?g|svg)$/));

let index = 0;

const newProjects = []
images.forEach(image => {
    newProjects.push({
        index: index++,
        type: 'photo',
        src: image,
        thumbnail: image,
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        caption: image
    })
});

const projects = [{
        index: 0,
        type: 'video',
        src: 'https://vimeo.com/252632691',
        thumbnail: "https://i.vimeocdn.com/video/679322565_1280x720.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "8H (gratisography.com)"
    },
]

export default newProjects