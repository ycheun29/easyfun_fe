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

    updateActivity(item: Activity): Observable<ResponseModel> {
        return this.http.put<ResponseModel>(
                this.baseUrl+ "activity/edit/" + item._id,
                item,
                this.provideToken()
            )
            .pipe(map(response => {
                return response;
            }),
            catchError(error => {
                return of(error.error)
            }));
    }

    addActivity(item: Activity) {
        return this.http.post<Activity>(
            this.baseUrl + "activity/add",
            item,
            this.provideToken()
        ).pipe(map(response => {
            return response;
        }),
        catchError(error => {
            console.log(error.error);
            return of(error.error);
        }));
    }
    
    deleteActivity(id: string): Observable<ResponseModel> {
        return this.http.put<ResponseModel>(
            this.baseUrl+ "activity/delete/" + id,
            this.provideToken()
            ).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    // Activity
    getActivityList(): Observable<Activity[]> {
        //to be updated after updating the backend
        return this.http.get<Activity[]>(this.baseUrl + "activity" );
    }

    getActivityManagementList(): Observable<Activity[]> {
        //to be updated after updating the backend
        return this.http.get<Activity[]>(this.baseUrl + "activity/activityManagement",this.provideToken());
    }

    // Comment
    getCommentList(item: Activity): Observable<Comment[]> {
        return this.http.get<Comment[]>(
            this.baseUrl+ "activity/details/" + item._id
        );
    }

    // Participant
    getParticipantList(id: String): Observable<Participant[]> {
        return this.http.get<Participant[]>(
            this.baseUrl+ "participant/?activity=" + id,
            this.provideToken()
        );
    }

    registerParticipant(participant: Participant): Observable<Participant> {
        return this.http.post<Participant>(
            this.baseUrl + "participant/add",
            participant,
            this.provideToken()
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

    private provideToken() {
        return {
            headers: new HttpHeaders(
                {
                    "Authorization": `Bearer ${this.auth_token}`
                }
            )
        }
    }

}