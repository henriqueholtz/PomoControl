import { useCallback, useState } from 'react';
import { PomoControlStorage } from '../PomoControlStorage';

export function useStorage(key) {
    const [state, setState] = useState(() => PomoControlStorage.Get(key));

    const set = useCallback(
        (newValue) => {
            PomoControlStorage.Set(key, newValue);
            setState(newValue);
        },
        [key],
    );

    const remove = useCallback(() => {
        PomoControlStorage.Remove(key);
        setState(undefined);
    }, [key]);

    return [state, set, remove];
}
