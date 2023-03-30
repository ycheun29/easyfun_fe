import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";
import { ResponseModel } from "./response.model";

@Injectable()
export class AuthService {

    public username?: string;
    private _redirectUrl?: string;

    constructor(private datasource: RestDataSource) { }

    authenticate(username: string, password: string): Observable<ResponseModel> {
        return this.datasource.authenticate(username, password)
            .pipe(map(response => {
                if(response.success)
                {
                    this.username = username;
                }
                return response;
            }));
    }

    signupUser(user: User): Observable<ResponseModel> {
        return this.datasource.signupUser(user);
    }

    getUser(){
        return this.datasource.getUserList();
    }

    get authenticated(): boolean {
        return this.datasource.auth_token != undefined;
    }

    clear() {
        this.username = undefined;
        this.datasource.auth_token = undefined;
    }

    get redirectUrl(): string | undefined {
        let result = this._redirectUrl;
        this._redirectUrl = undefined;
        return result;
    }

    set redirectUrl(url: string| undefined){
        this._redirectUrl = url;
    }
}