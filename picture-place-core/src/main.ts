import { Album } from "./photo-app/album";
import { Picture } from "./photo-app/picture";
import { User } from "./photo-app/user";
import { PhotoOrientation } from './photo-app/item';

const user = new User(1, 'Erickowski', 'Erick', true);
const album = new Album(10, 'Platzi Album');
const picture = new Picture(1, 'Foto', '2020-08', PhotoOrientation.Landscape);

// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);