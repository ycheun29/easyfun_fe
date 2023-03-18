import { Component, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";

import { Activity } from "../../models/activity.model";
import { ActivityRepository } from "../../models/activity.repository";

@Component({
    selector: "list-activity",
    templateUrl: "list.component.html"
})

export class ActivityListComponent{

    title = 'Explore Activities';
    filteredActivities: Activity[] = [];
    keyword = '';
    selectedCategory = 'all';

    constructor(public repository: ActivityRepository, private router: Router, private cdRef: ChangeDetectorRef) {
        this.repository.setActivityList();
    }
    formatDate(date: Date | undefined): string {
        if (!date) {
          return '';
        }
        return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }

    get activityList(): Activity[] {
        return this.repository.getActivityList();
    }

    searchActivities(): void {
        if (this.selectedCategory === 'all'){
            this.filteredActivities = this.activityList.filter(item => item.title && item.title.toLowerCase().includes(this.keyword.toLowerCase()));
            console.log(this.filteredActivities);
        }
        else {
            this.filteredActivities = this.activityList.filter(item => item.title && item.title.toLowerCase().includes(this.keyword.toLowerCase())).filter(item => item.category === this.selectedCategory);
            console.log(this.filteredActivities);
        }
        this.cdRef.detectChanges();
    }

    onCategorySelected(category: string): void {
        this.selectedCategory = category;
        this.searchActivities();
    }
}
