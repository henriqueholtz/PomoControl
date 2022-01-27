import Cookie from 'js-cookie';

export class PomoControlStorage {
    static Get(key) {
        try {
            const item = localStorage.getItem(key);
            if (!item) return null;
            return JSON.parse(item)
                .then((result) => result)
                .catch(() => null);
        } catch (ex) {
            return Cookie.get(key);
        }
    }

    static Set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (ex) {
            Cookie.set(key, value);
        }
    }

    static Remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (ex) {
            Cookie.remove(key);
        }
    }
}
