import { Injectable } from "@angular/core";
import { Activity } from "./activity.model";
import { Participant } from "./participant.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";
import { User } from "./user.model";

@Injectable()
export class ParticipantRepository {
    private tempParticipantList: Participant[] = [];

    constructor(private dataSource: RestDataSource) {}

    // getParticipantList(id: String): Participant[] {
    //     return this.tempParticipantList;
    // }

    setParticipantList(id: String){
        // this.listReady = false;
        // Use subscribe to get data when it is ready
        // this.dataSource.getParticipantList(id).subscribe(data => {
        //     this.tempParticipantList = data;
        //     this.listReady = true;
        // });
    }

     addParticipant(participant: Participant) {
        const body = {
            activity: participant.activity,
            participant: participant.participant
        };
        this.dataSource.registerParticipant(participant)
            .subscribe(response => {
                if(response.success) // If API created
                {
                    console.log(`Success: ${response.success}`);
                    alert(response.message);
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