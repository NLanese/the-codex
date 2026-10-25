/*
    Helpers for the thingsDone list.

    thingsDone is an array of objects. Every entry has a `title`, and some also
    have a `value`:
        [{ title: "forgeLolliGrabbed" }, { title: "wellCandiesThrown", value: 12 }]
*/

// true if something with this title has been done
export function hasDone(thingsDone, title) {
    return thingsDone.some(t => t.title === title);
}

// the full { title, value } entry for this title, or undefined
export function getDone(thingsDone, title) {
    return thingsDone.find(t => t.title === title);
}

// just the value for this title (or `fallback` if it hasn't been done / has no value)
export function getDoneValue(thingsDone, title, fallback = undefined) {
    const entry = getDone(thingsDone, title);
    return entry && entry.value !== undefined ? entry.value : fallback;
}

/*
    Records that something was done.
      - Not in the list yet  -> adds { title } (or { title, value } if a value is given)
      - Already in the list  -> leaves it alone, unless a value is given, in which case
                                that entry's value is replaced
    `value` can also be a function that gets the old value and returns the new one:
        markDone(setThingsDone, "wellCandiesThrown", old => (old ?? 0) + 1)
*/
export function markDone(setThingsDone, title, value) {
    setThingsDone(prev => {
        const index = prev.findIndex(t => t.title === title);
        const hasValue = value !== undefined;

        if (index === -1) {
            const newValue = typeof value === "function" ? value(undefined) : value;
            return [...prev, hasValue ? { title, value: newValue } : { title }];
        }
        if (!hasValue) return prev;

        const old = prev[index];
        const newValue = typeof value === "function" ? value(old.value) : value;
        const next = [...prev];
        next[index] = { ...old, value: newValue };
        return next;
    });
}

// removes an entry (handy for testing / resetting)
export function unmarkDone(setThingsDone, title) {
    setThingsDone(prev => prev.filter(t => t.title !== title));
}
