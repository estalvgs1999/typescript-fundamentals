// Funcion para mostrar una Fotografia
export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface PictureConfig {
    title: string,
    date?: string,
    orientation: PhotoOrientation
}

interface IPicture {
    title: string;
    date: string;
    orientation: PhotoOrientation
}

function showPicture(picture: IPicture) {
    console.log(`[title: ${picture.title}, 
                 date: ${picture.date}, 
                 orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test'// Error
});

class Picture {
    private id: number;
    private title: string;
    orientation: PhotoOrientation;

    constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation
                ) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    getTitle(): string {
        return this.title;
    }

}

