'use strict';

export function openWin(url, width, height) {
    let win, left, top, opts;
    if (width && height) {
        left = (document.documentElement.clientWidth / 2 - width / 2);
        top = (document.documentElement.clientHeight - height) / 2;
        opts = 'status=1,resizable=yes' +
            ',width=' + width + ',height=' + height +
            ',top=' + top + ',left=' + left;
        win = window.open(url, '', opts);
    } else {
        win = window.open(url);
    }
    return win;
}
