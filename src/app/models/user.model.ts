export class User {

    constructor(
        public _id?: string,
        public firstName?: string,
        public lastName?: String,
        public email?: String,
        public username?: string,
        public password?: string,
        public admin?: boolean
    ){}
}