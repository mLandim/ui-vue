export function fakeRandom(value = '', key = 1) {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.floor(Math.random() * (new Date().valueOf() - key) + key) + `${value}`
}