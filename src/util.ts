/**
 * 打开新窗口
 *
 * @param {String} url 链接
 * @param {Number} width 窗口宽度
 * @param {Number} height 窗口高度
 * @returns {Window}
 */
export function openWin(url: string, width: number, height: number): Window {
    let win, left, top, opts
    if (width && height) {
        left = (document.documentElement.clientWidth / 2 - width / 2)
        top = (document.documentElement.clientHeight - height) / 2
        opts = 'status=1,resizable=yes' +
            ',width=' + width + ',height=' + height +
            ',top=' + top + ',left=' + left
        win = window.open(url, '', opts)
    } else {
        win = window.open(url)
    }
    return win
}
