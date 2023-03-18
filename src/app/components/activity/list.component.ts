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
    selectedSort = 'dateAsc';

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
        }
        else {
            this.filteredActivities = this.activityList.filter(item => item.title && item.title.toLowerCase().includes(this.keyword.toLowerCase())).filter(item => item.category === this.selectedCategory);
        }
        switch (this.selectedSort){
            case 'dateAsc':
                this.filteredActivities.sort((a, b) => {
                    const aDate = a.date ? new Date(a.date) : undefined;
                    const bDate = b.date ? new Date(b.date) : undefined;
                    
                    if (aDate && bDate) {
                      return aDate.getTime() - bDate.getTime();
                    } else if (bDate) {
                      return -1;
                    } else if (aDate) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                break;
            case 'dateDes':
                this.filteredActivities.sort((a, b) => {
                    const aDate = a.date ? new Date(a.date) : undefined;
                    const bDate = b.date ? new Date(b.date) : undefined;
                        
                    if (aDate && bDate) {
                        return bDate.getTime() - aDate.getTime();
                    } else if (aDate) {
                        return -1;
                    } else if (bDate) {
                        return 1;
                    } else {
                        return 0;
                    }
                  });
                break;
                case 'priceAsc':
                    this.filteredActivities.sort((a, b) => {
                        if (a.price !== undefined && b.price !== undefined) {
                          return a.price - b.price;
                        }
                        // Return 0 if either a.price or b.price is undefined
                        return 0;
                      });
                    break;
                case 'priceDes':
                    this.filteredActivities.sort((a, b) => {
                        if (a.price !== undefined && b.price !== undefined) {
                          return b.price - a.price;
                        }
                        // Return 0 if either a.price or b.price is undefined
                        return 0;
                      });
                    break;    
        }
        this.cdRef.detectChanges();
        console.log(this.filteredActivities);
    }

    onCategorySelected(category: string): void {
        this.selectedCategory = category;
        this.searchActivities();
    }
    
    onSortSelected(sort: string): void {
        this.selectedSort = sort;
        this.searchActivities();
    }
}
