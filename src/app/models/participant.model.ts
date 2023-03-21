import { Activity } from "./activity.model";
import { User } from "./user.model";

export class Participant {

    constructor(
        public _id?: string,
        public activity?: Activity,
        public participant?: User
    ){}

}
