export function getInnerText(element) {
    return element.innerText;
}
export function editCell(component, element) {
    element.onkeydown = e => {
        switch (e.key) {
            case 'Enter':
                e.stopPropagation();
                if (!e.shiftKey) {
                    e.preventDefault();
                    component.invokeMethod('EditCellCommit', element.innerText);
                }
                break;
            case 'Escape':
                e.preventDefault();
                e.stopPropagation();
                component.invokeMethod('EditCellCancel');
                break;
        }
    };
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.selectAllChildren(element);
    element.focus();
}
export function invokeInput(element) {
    element.querySelector('input').click();
}
export function invokeAnchor(anchor, url, name) {
    anchor.href = url;
    anchor.download = name;
    anchor.click();
}
