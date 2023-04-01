import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Participant } from "src/app/models/participant.model";
import { RestDataSource } from "../../models/rest.datasource";
import { User } from "src/app/models/user.model";

@Component({
    selector: "participants",
    templateUrl: "participants.component.html"
})
export class ParticipantsComponent implements OnInit {
    title = 'Participants List';
    participants: Participant[] = [];
    users: User[] = [];

    constructor(
        public dataSource: RestDataSource,
        private activeRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getParticipantList(this.activeRoute.snapshot.params["id"]);
    }

    getParticipantList(id: string): void {
        this.dataSource.getParticipantList(id).subscribe({
            next: (data) => {
                this.participants = data;
                this.participants.forEach(participant =>this.users.push(participant.participant!))
    
            },
            error: (e) => console.error(e)}
        );
    }
       
}




    // this.id=activeRoute.snapshot.params["id"];
    // this.dataSource.getParticipantList(this.id).subscribe(data => {
    //     this.participants = data;
        
    // });
    // repository.setParticipantList(activeRoute.snapshot.params["id"]);
    // console.log(this.participantList); 
    // get participantList(): Participant[] {
    //    // this.participantList.forEach(participant =>this.user.push(participant.participant!));
    //     return this.repository.getParticipantList(this.id);
    // }