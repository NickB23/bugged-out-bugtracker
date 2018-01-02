import { Component } from '@angular/core';

import { BugService } from '../service/bug.service';

@Component({
    moduleId: module.id,
    selector: 'bug-list',
    templateUrl: 'bug-list.component.html',
    styleUrls: [ 'bug-list.component.css' ]
})
export class BugListComponent { 

    constructor(private bugService: BugServ)
}