export const getItem = (item: string): string | null | undefined => {
    if (process.client) {
        return sessionStorage.getItem(item);
    } else {
        return undefined;
    }
}

export const setItem = (item: string, value: string): void | undefined => {
    if (process.client) {
        sessionStorage.setItem(item, value);
    }
}

export const removeItem = (item: string): void | undefined => {
    if (process.client) {
        sessionStorage.removeItem(item);
    }
}

export default defineNuxtPlugin(() => {
    inject('getItem', getItem);
    inject('setItem', setItem);
    inject('removeItem', removeItem);
});``