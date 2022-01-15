import Cookie from 'js-cookie';

export const PomoControlStorage = () => {
    const storage = {};
    try {
        if (!window.localStorage) {
            throw Error('no local Storage');
        }
    
        storage.set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
        storage.get = (key) => {
            const item = localStorage.getItem(key);
            JSON.parse(item)
                .then((result) => result)
                .catch(() => null)
        }
    
        storage.remove = key => localStorage.removeItem(key);
    }
    catch (ex) {
        storage.set = Cookie.set;
        storage.get = Cookie.get;
        storage.remove = Cookie.remove;
    }
    return storage;
}