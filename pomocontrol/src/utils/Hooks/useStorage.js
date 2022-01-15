import { useCallback, useState } from 'react';
import { PomoControlStorage } from '../PomoControlStorage';

export function useStorage(key) {
    const [state, setState] = useState(() => PomoControlStorage.get(key))

    const set = useCallback(newValue => {
        PomoControlStorage.set(key, newValue);
        setState(newValue);
    }, [key])

    const remove = useCallback(() => {
        PomoControlStorage.remove(key);
        setState(undefined);
    }, [key]);

    return [state, set, remove];
}