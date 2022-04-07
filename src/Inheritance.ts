interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;
    constructor(data: IPersonData) {
        this._age = data.age;
        this._name = data.name;
        this._secondName = data.secondName;
    }
    getData(): IPersonData {
        return {
            name: this._name,
            age: this._age,
            secondName: this._secondName,
        };
    }
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    readonly _phone: string;
    constructor(data: IStudentData) {
        super(data);
        this._phone = data.phone;
    }
    getData(): IStudentData {
        return {
            name: this._name,
            age: this._age,
            secondName: this._secondName,
            phone: this._phone,
        };
    }
}
