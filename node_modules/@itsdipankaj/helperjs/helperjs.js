'use strict'
export function $(selector = 'body') {
    const e = document.querySelectorAll(selector)
    if (e.length == 1) return e[0]
    if (e.length > 1) return e
}

export function GiveElement(tagName = 'div', classList = '', innerText = '') {
    const elm = document.createElement(tagName)
    if (classList != '') elm.classList = classList
    if (innerText != '') elm.innerText = innerText
    return elm
}

export function altKeyEvent(key = 'b', Callback) {
    addEventListener('keydown', (e) => {
        if (e.altKey && e.key == key) Callback(e)
    })
}

export function codeHTML(keyPairs = { '*b*': '<b>' }, onString = '') {
    const keys = Object.keys(keyPairs)
    const str = onString.split(' ')
    for (let i = 0; i < str.length; i++) {
        const elm = str[i];
        if (keys.includes(elm)) str[i] = keyPairs[elm]
    }
    return JSON.stringify(str.join(' '))
}

export function insertSnippet(
    snippet = { open: '', close: '' },
    selectionTXT = '',
    insertIn = new HTMLTextAreaElement
) {
    const [start, end] = [insertIn.selectionStart, insertIn.selectionEnd]
    const text = insertIn.value
    const [before, after] = [text.substring(0, start), text.substring(end, text.lenght)]
    insertIn.value = (before + " " + snippet.open + ' ' + selectionTXT + ' ' + snippet.close + after)
    insertIn.focus()
    insertIn.setSelectionRange(start + snippet.open.length + 2, start + snippet.open.length + 2 + selectionTXT.length)
}

// strings.js
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverse(str) {
    return str.split('').reverse().join('');
}

export function addClickEvent(element, callback) {
    element.addEventListener('click', e => {
        callback(e)
    });
}

export function addKeyEvent(key, callback) {
    document.addEventListener('keydown', event => {
        if (event.key === key) {
            callback(event);
        }
    });
}
