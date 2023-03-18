import { Injectable } from "@angular/core";
import { Activity } from "./activity.model";
import { Participant } from "./participant.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class ParticipantRepository {

    private tempParticipantList: Participant[] = [];
    public listReady: boolean = false;

    constructor(private dataSource: RestDataSource) {}

    getParticipantList(item: Activity): Participant[] {
        return this.tempParticipantList;
    }

    setParticipantList(item: Activity){
        this.listReady = false;
        // Use subscribe to get data when it is ready
        this.dataSource.getParticipantList(item).subscribe(data => {
            this.tempParticipantList = data;
            this.listReady = true;
        });
    }

    async addParticipant(participant: Participant) {
        this.dataSource.registerParticipant(participant)
            .subscribe(response => {
                if(response._id) // If API created
                {
                    this.tempParticipantList.push(response);
                }
                else{ // If API send error.
                    // Convert into ResponseModel to get the error message.
                    let error = response as ResponseModel;  
                    alert(`Error: ${error.message}`);
                }
        });
    }
    
}