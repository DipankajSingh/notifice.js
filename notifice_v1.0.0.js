'use strict';
import { GiveElement } from './utils.js';
function notifice(msg = '', RGB = { R: 255, G: 255, B: 255 }, pos = 'bottom', type = 'alert', Callback) {
    const s1 = `display: flex;
            flex-direction: row;
            align-items: center;`;
    const s2 = `gap: 4px;
            overflow-x: auto;
            ${pos == 'bottom' ? 'bottom' : 'top'}: 20px;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            padding: 5px 5px;
            height: max-content;
            max-width: 90vw;
            max-height: 10rem;
            background-color: rgba(${RGB.R}, ${RGB.G}, ${RGB.B}, .4);
            color: white;`;
    const s3 = `margin: 0;`
    const s4 = `font-size: clamp(.7rem, 1.2rem, calc(.6rem + 1vw));
            text-align: center;`;
    const s5 = `gap: 5px;`;
    const s6 = `padding: 6px 6px;
            font-size: 10px;
            background-color: rgba(${RGB.R}, ${RGB.G}, ${RGB.B}, .4);
            color: inherit;`;
    const s7 = `width: max-content;
            border-radius: .4rem;
            border: 1px solid rgb(${RGB.R}, ${RGB.G}, ${RGB.B});`;
    const s8 = `cursor: pointer;
            background-color: rgb(${RGB.R}, ${RGB.G}, ${RGB.B});`;
    const notificeContainer = GiveElement('div');
    notificeContainer.style = s1 + s2 + s3 + s7;
    const notificeText = GiveElement('p', undefined, msg);
    notificeText.style = s3 + s4;
    notificeContainer.appendChild(notificeText);
    if (type === 'prompt') {
        const notificeButtons = GiveElement('div');
        notificeButtons.style = s1 + s5;
        const notificeOk = GiveElement('button', undefined, 'Ok');

        notificeOk.addEventListener('click', () => {
            try {
                Callback(true);
                notificeContainer.remove();
            } catch (error) {
                if (Callback == undefined) {
                    console.error('Callback function is not availeble!');
                } else {
                    console.error(`'${Callback}' is not a function!`);
                }
            }
        });
        const notificeCancel = GiveElement('button', undefined, 'Cancel');
        [notificeOk, notificeCancel].forEach((e) => {
            e.style = s6 + s7;
            e.addEventListener('mouseover', () => {
                e.style.backgroundColor = `rgb(${RGB.R}, ${RGB.G}, ${RGB.B}`;
                e.style.cursor = 'pointer';
            })
            e.addEventListener('mouseleave', () => {
                e.style.backgroundColor = `rgba(${RGB.R}, ${RGB.G}, ${RGB.B},.4)`;
                e.style.cursor = 'pointer';
            })

        })
        notificeCancel.addEventListener('click', () => {
            notificeContainer.remove();
            if (typeof Callback !== 'function') {
                console.warn(`'${Callback}' is not a function! or its not defined`);
            }
        });
        notificeButtons.append(notificeOk, notificeCancel);
        notificeContainer.appendChild(notificeButtons);
    }

    document.body.appendChild(notificeContainer);
    if (type !== 'prompt') {
        setTimeout(() => {
            notificeContainer.remove();
        }, 2000);
    }
}
export { notifice as default }
