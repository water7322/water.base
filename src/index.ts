let keyIndex = 0;
// 翻译统计命中和缺失的情况

const that: any = this;
const type = [
    'String',
    'Number',
    'Boolean',
    'Null',
    'Undefined',
    'Array',
    'Object',
    'Function',
    'Date',
    'RegExp',
    'Symbol',
    'Error',
    'HTMLDocument',
    'Window',
    'global'
];

for (const name of type) {
    that[`is${name}`] = (obj: any) => Object.prototype.toString.call(obj) === `[object ${name}]`;
}
// 判断代码是否运行在小程序环境中，有些对象小程序和浏览器不一致，比如websocket,localStorage
function isInWp() {
    const that = this;
    // return (
    //     typeof wx === 'object' &&
    //     !!wx &&
    //     !!wx.createMapContext &&
    //     !!wx.connectSocket &&
    //     typeof getCurrentPages === 'function' &&
    //     !!getCurrentPages
    // );
}
// 生成nStart到nStop的数组，间隔为nStep
function range(start: number, stop?: number, step?: number) {
    if (stop === null || stop === undefined) {
        stop = start || 0;
        start = 0;
    }
    // nStop小于nStart，nStep默认为-1，否则默认为1
    if (!step) {
        step = stop < start ? -1 : 1;
    }
    // 计算数组长度
    const length = Math.max(Math.ceil((stop - start) / step), 0);
    const result: number[] = new Array(length);
    for (let i = 0; i < length; i++, start += step) {
        result[i] = start;
    }
    return result;
}
// aItem里如果有后面的参数就去掉
// 如fWithOut([1, 2, 3, 3], 2, 3)返回[1]
function without(arr: any[], ...args: any[]) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (args.includes(arr[i])) arr.splice(i, 1);
    }
    return arr;
}
// 类似数组的find方法，区别在于能处理likeArray和likeObject类型，bAll为true返回数组
function find(arr: any[], cb: (...args: any[]) => boolean, bAll?: boolean) {
    let aIndex: number | number[] = this.findIndex(arr, cb, bAll);
    aIndex = bAll ? (aIndex as number[]) : ([aIndex] as number[]);
    const result = aIndex.map((index) => (index === -1 ? undefined : arr[index]));
    return bAll ? result : result[0];
}
// 类似数组的findIndex方法，区别在于能处理likeArray和likeObject类型，bAll为true返回数组
function findIndex(arr: any[], cb: (...args: any[]) => boolean, all?: boolean) {
    if (!that.isFunction(cb)) return;
    const result: number[] = [];
    let has = false;
    for (let i = 0; i < arr.length; i++) {
        if (!all && has) break;
        if (cb(arr[i], i)) {
            result.push(i);
            has = true;
        }
    }
    return all ? result : result.length === 0 ? -1 : result[0];
}
// 返回一个二维数组，重复值的下标
// 如[1, 2, 3, 4, 6, 4, 4, 6]
// 返回[[3, 5, 6], [4, 7]]
function findRepeat(aItem: any[], conf = { noNull: false }) {
    const result = [];
    const mark = new Map();
    const noNull = !!conf.noNull;
    for (const [index, item] of aItem.entries()) {
        if (noNull && (item === null || item === undefined)) continue;
        if (mark.has(item)) {
            mark.get(item).push(index);
        } else {
            mark.set(item, [index]);
        }
    }
    for (const item of mark.values()) {
        if (item.length > 1) result.push(item);
    }
    return result;
}
// keyIndex自增再转字符串
function ascId() {
    keyIndex++;
    return keyIndex + '';
}
// 根据keyIndex和当前时间戳和随机数生成主键
function key() {
    return this.ascId() + '_' + new Date().getTime() + '_' + Math.floor(Math.random() * 10001);
}
function primaryKey() {
    return this.ascId() + '_' + new Date().getTime() + '_' + Math.floor(Math.random() * 10001);
}
function outColor(info: string | { [key: string]: any }, color: string) {
    try {
        info = (info as { [key: string]: any }).stack || (info as string);
        console.log('%c ' + info, 'color:' + (color || '#00BC9B'));
    } catch (e) {}
}

export { isInWp, range, without, find, findIndex, findRepeat, ascId, key, primaryKey, outColor };
