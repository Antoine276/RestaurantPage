export function reset (element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}