export class Activity {

    constructor(
        public _id?: string,
        public title?: string,
        public picture?: String,
        public price?: number,
        public description?: string,
        public category?: string,
        public status?: Status[0],
        public activityDate?: Date,
        public startTime?: Date,
        public endTime?: Date,
    ){}

}

export enum Status {
    Active = 'Active',
    Disable = 'Disable',
}



