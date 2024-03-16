class Pagination<Data, Message>{
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();
pgData.data;
pgData.message;
pgData.lastFetchedAt;

class Pagination2<Data, Message>{
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;

    constructor(data: Data[], message?: Message, lastFetchedAt?: Date){
        this.data = data;
        this.message = message;
        this.lastFetchedAt = lastFetchedAt;
    }
}

const pagination2 = new Pagination2([123, 456]);

pagination2.data;
pagination2.message;
pagination2.lastFetchedAt;

class DefaultGeneric<T= boolean>{
    data: T[] = []

    constructor(data: T[]){
        this.data = data
    }
}

const defaultGeneric = new DefaultGeneric([true, false]);
defaultGeneric.data