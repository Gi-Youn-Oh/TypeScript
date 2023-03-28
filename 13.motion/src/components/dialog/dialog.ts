import { BaseComponent, Component } from "../component.js";
import { Composable } from "../page/page.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface MediaData {
    readonly title: string;
    readonly url: string;
}

export interface TextData {
    readonly title: string;
    readonly body: string;
}


export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
    closeListener?: OnCloseListener;
    submitListener?: OnSubmitListener;
    constructor() {
        super(`
        <dialog class="dialog">
            <div class="dialog_container">
            <button class="close">&times;</button>
            <div id="dialog_body"></div>
            <button class="dialog_submit">ADD</button>
            </div>
        </dialog>
        `)
        const closeBtn = this.element.querySelector('.close')! as HTMLElement;
        // closeBtn.addEventListener('click', "")
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        }
        // addEventListener 순서대로 콜백 함수 다 실행 -> 여러곳에서 사용하면 
        // onclick 덮어씌워짐 -> 한번사용

        const submitBtn = this.element.querySelector('.dialog_submit')! as HTMLElement;
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        }
    }
    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }

    setOnSubmitListener(listener: OnSubmitListener) {
        this.submitListener = listener;
    }
    addChild(child: Component): void {
        const body = this.element.querySelector('#dialog_body')! as HTMLElement;
        child.attachTo(body);
    }
}