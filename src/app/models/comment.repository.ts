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

    async postComment(comment: Comment) {
        this.dataSource.insertComment(comment)
            .subscribe(response => {
                if(response._id) // If API created
                {
                    this.tempCommentList.push(response);
                }
                else{ // If API send error.
                    // Convert into ResponseModel to get the error message.
                    let error = response as ResponseModel;  
                    alert(`Error: ${error.message}`);
                }
        });
    }

    async postResponse(comment: Comment) {
        this.dataSource.insertResponse(comment)
            .subscribe(resp => {
                let response = resp as ResponseModel;
                if (response.success == true) {
                    console.log(`Sucess: ${response.success}`);
                    this.tempCommentList.splice(this.tempCommentList.
                        findIndex(i => i._id == comment._id), 1, comment);
                }
                else{
                    // If API send error.
                    alert(`Error: ${response.message}`);
                }   
        });
    }
    
}