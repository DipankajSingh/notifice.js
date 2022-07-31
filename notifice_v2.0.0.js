'use strict'
import { GiveElement, $ } from './utils.js'
class Notifice {
    #textValue
    #postionValue = 'bottom-right'
    #MsgType = 'alert'
    #callback
    #clr = [30, 250, 70]
    constructor(obj) {
        Object.entries(obj).forEach(([key, value]) => {
            this[key] = value
        })
    }

    stay(value) {
        this.autoClose = value
    }

    set onClick(value) {
        this.#callback = value
    }

    set rgbColor(value) {
        this.#clr = value
    }

    set type(value) {
        this.#MsgType = value
    }

    set position(value) {
        this.#postionValue = value
    }
    set text(value) {
        this.#textValue = value
    }
    show() {
        let clr = `rgba(${this.#clr[0]},${this.#clr[1]},${this.#clr[2]}`
        const pTag = GiveElement('p', undefined, this.#textValue)
        const notificeCard = GiveElement('div', 'notifice-card')
        notificeCard.style.backgroundColor = clr + ',.4)';
        notificeCard.style.borderColor = clr + ')'
        const bTag = GiveElement('button', undefined, 'h&#xD7')
        bTag.style.borderColor = clr + ')'
        bTag.style.backgroundColor = clr + ',.6)'
        bTag.addEventListener('mousemove', () => {
            bTag.style.backgroundColor = clr + ')'
        })
        bTag.addEventListener('mouseleave', () => {
            bTag.style.backgroundColor = clr + ',.6)'
        })
        bTag.addEventListener('click', () => {
            if (this.#callback) {
                this.#callback()
            }
            notificeCard.remove()
        })
        switch (this.#MsgType) {
            case 'reload':
                bTag.innerHTML = '&#10227';
                break;
            case 'confirm':
                bTag.innerHTML = '&#10003'
                break;
            default:
                bTag.innerHTML = '&#xD7'
                break;
        }
        notificeCard.append(pTag, bTag)
        const selector = `.notifice-container[data-position=${this.#postionValue}]`
        const container = $(selector) || createCon(this.#postionValue)
        container.style.color = `rgba(${this.#clr[0] - 100},${this.#clr[1] - 100},${this.#clr[2] - 100})`
        container.append(notificeCard)

        if (this.autoClose) {
            setTimeout(() => {
                notificeCard.remove()
                if (!container.hasChildNodes()) {
                    container.remove()
                }
            }, this.autoClose);
        }
    }

    remove() {
        try {
            $(`.notifice-container[data-position=${this.#postionValue}]`).firstChild.remove()
            return true
        } catch (e) {
            console.warn('Already Deleted!', e)
            return false
        }
    }

}
function createCon(pos) {
    const el = GiveElement('div', 'notifice-container')
    el.dataset.position = pos
    document.body.append(el)
    return el
}
let notify = new Notifice({
    text: 'this is the message!'
})
notify.show()
notify.show()
$('.bu').addEventListener('click', () => {
    notify.stay(3000)
    notify.onClick = () => {
        console.log('hello from button!')
    }
    notify.show()
})