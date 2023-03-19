import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of  } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import { Activity } from "./activity.model";
import { Comment } from "./comment.model";
import { Participant } from "./participant.model";
import { ResponseModel } from "./response.model";
import { User } from "./user.model";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token?: string;

    constructor(private http: HttpClient) {        
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    // Activity
    getActivityList(): Observable<Activity[]> {
        //to be updated after updating the backend
        return this.http.get<Activity[]>(this.baseUrl + "activity" );
    }

    // Comment
    getCommentList(item: Activity): Observable<Comment[]> {
        return this.http.get<Comment[]>(
            this.baseUrl+ "activity/details/" + item._id
        );
    }

    // Participant
    getParticipantList(item: Participant): Observable<Participant[]> {
        return this.http.get<Participant[]>(
            this.baseUrl+ "participant/"
        );
    }

    registerParticipant(participant: Participant): Observable<Participant> {
        return this.http.post<Participant>(
            this.baseUrl + "participant/add",
            participant
        ).pipe(map(response => {
            return response;
        }),
        catchError(error => {
            console.log(error.error);
            return of(error.error);
        }));
    }
    authenticate(user: string, pass: string): Observable<ResponseModel> {
        return this.http.post<any>(this.baseUrl + "user/login", 
        {
            username: user, 
            password: pass
        }).pipe(
            map(response => {
                // console.log(response);
                this.auth_token = response.success ? response.token : null;
                return response;
            }),
            catchError(error => {return of(error.error)})
        );
    }
    signupUser(user: User): Observable<ResponseModel> {
        return this.http.post<ResponseModel>(
                this.baseUrl + "user/signup", 
                user
            )
            .pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

  

}