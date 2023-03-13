import { Injectable } from "@angular/core";
import { Activity } from "./activity.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class ActivityRepository {

    private activity: Activity[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getActivityList().subscribe(data => {
            this.activity = data;
        });
    }

    getActivityList(): Activity[] {
        return this.activity;
    }

    getActivity(id: string): Activity {
        return (this.activity.find(i => i._id === id)!);        
    }
}