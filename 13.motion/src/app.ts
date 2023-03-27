import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";

class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const video = new VideoComponent('Video_title', "https://youtu.be/wS52aAeztWg?list=PLqCoVH1bdO995KckDPA3SlWk1dwgNDJLi");
        video.attachTo(appRoot, 'beforeend')

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300')
        image.attachTo(appRoot, 'beforeend')

        const note = new NoteComponent('Note Title', 'Note Body');
        note.attachTo(appRoot, 'beforeend');

        const todo = new TodoComponent('Todo Title', 'Todo Item');
        todo.attachTo(appRoot, 'beforeend');

    }
}

new App(document.querySelector('.document')! as HTMLElement);