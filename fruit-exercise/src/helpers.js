function helpful() {
    console.log("I am very helpful. I am the default function");
}

function choice(items) {
    let index = Math.floor(Math.random() * items.length);
    return items[index];
}

function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [ ...items.slice(0, i), ...items.slice(1 + i)];
        }
    }
}

export default helpful;
export { choice, remove }
