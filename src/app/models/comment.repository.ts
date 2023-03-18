import { Injectable } from "@angular/core";
import { Activity } from "./activity.model";
import { Comment } from "./comment.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class CommentRepository {

    private tempCommentList: Comment[] = [];
    public listReady: boolean = false;

    constructor(private dataSource: RestDataSource) {}

    getCommentList(item: Activity): Comment[] {
        return this.tempCommentList.filter(comment => comment.activity == item._id);
    }

    setCommentList(item: Activity){
        this.listReady = false;
        // Use subscribe to get data when it is ready
        this.dataSource.getCommentList(item).subscribe(data => {
            this.tempCommentList = data;
            this.listReady = true;
        });
    }
    
}