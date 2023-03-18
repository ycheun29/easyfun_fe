export class Activity {

    constructor(
        public _id?: string,
        public title?: string,
        public picture?: string,
        public price?: number,
        public description?: string,
        public category?: string,
        public status?: Status[0],
        public date?: Date,
        public startTime?: Date,
        public endTime?: Date,
    ){}

}

export enum Status {
    Active = 'Active',
    Disable = 'Disable',
}



