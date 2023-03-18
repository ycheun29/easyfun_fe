import { Injectable } from "@angular/core";
import { Activity } from "./activity.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class ActivityRepository {

    private tempActivityList: Activity[] = [];
    public listReady: boolean = false;

    constructor(private dataSource: RestDataSource) {}

    getActivityList(): Activity[] {
        return this.tempActivityList;
    }

    setActivityList(){
        this.listReady = false;
        // Use subscribe to get data when it is ready
        this.dataSource.getActivityList().subscribe(data => {
            this.tempActivityList = data;
            this.listReady = true;
        });
    }

    getActivity(id: string): Activity {
        return Object.assign({}, this.tempActivityList.find(i => i._id === id)!);          
    }
}