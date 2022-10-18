const person = {
    one: '1',
    two: 2
};

const onehandler = {
    get() {
        return '3';
    }
};

const p = new Proxy(person, Reflect);
//const { p, r } = Proxy.revocable(person, handler);
console.log(person.two);
p.three = 3;
console.log(p.three);
Object.defineProperty(p, 'four', { value: 4 }, 'five');
console.log(Object.values(person));
