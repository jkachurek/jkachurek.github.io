export default class Repository<T> {
	constructor(Db: Array<T>) { this.db = Db;	}
	db: Array<T>;
	getById(id: number): T {
		return this.db.find(i => i['id'] === id);
	}
	getAll(): Array<T> {
		return this.db;
	}
	getByExpression(expression: (i: T) => any): Array<T> {
		return this.db.filter(expression);
	}
	getByProp(propName: string, propValue: any): T {
		return this.db.find(i => i[propName] === propValue);
	}
};
