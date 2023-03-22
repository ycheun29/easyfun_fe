import { Injectable } from "@angular/core";
import { Activity } from "./activity.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ActivityRepository {



    private tempActivityList: Activity[] = [];
    public currentDate: Date = new Date();
    public listReady: boolean = false;

    constructor(private dataSource: RestDataSource) {}

    getActivityList(): Activity[] {
        return this.tempActivityList.filter( item => item.status == 'Active').filter( item => item.date && new Date(item.date) >= this.currentDate);
    }

    getActivityManagementList(): Activity[] {
        return this.tempActivityList;
    }
    
    setActivityManagementList() {
        this.listReady = false;
        // Use subscribe to get data when it is ready
        this.dataSource.getActivityManagementList().subscribe(data => {
            this.tempActivityList = data;
            this.listReady = true;
        });
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

    async saveActivity(item: Activity) {
        // If it does not have id, then create a new item.
        if (item._id == null || item._id == "") {
            this.dataSource.addActivity(item).subscribe((response) => {
                    if(response.success) // If API created
                    {
                        this.tempActivityList.push(response);
                        alert(response.message);
                        console.log(`Success: ${response.success}`);
                    }
                    else{ // If API send error.
                        // Convert into ResponseModel to get the error message.
                        let error = response as ResponseModel;  
                        alert(`Error: ${error.message}`);
                    }
                });
        } else {
            // If it has id, then update a existing item.
            this.dataSource.updateActivity(item).subscribe((resp) => {

                // Convert into ResponseModel to get the error message.
                let response = resp as ResponseModel;
                if (response.success) {
                    console.log(`Success: ${response.success}`);
                    alert(response.message);
                    this.tempActivityList.splice(this.tempActivityList.
                        findIndex(i => i._id == item._id), 1, item);
                }
                else{
                    // If API send error.
                    let error = response as ResponseModel;  
                    alert(`Error: ${error.message}`);
                }        
            });
        }
    }

    deleteActivity(id: string) {
        this.dataSource.deleteActivity(id).subscribe((response) => {
            if (response.success) {
                this.tempActivityList.splice(this.tempActivityList.
                    findIndex(item => item._id == id), 1);                                
            }
            else{
                let error = response as ResponseModel;  
                alert(`Error: ${error.message}`);
            }
        })
    }
}