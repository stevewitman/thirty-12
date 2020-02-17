import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '@nx12/core-data';

@Component({
  selector: 'nx12-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
	@Input() projects: Project[];
	@Output() deleting = new EventEmitter;
	@Output() editing = new EventEmitter;

  constructor(private router: Router) { }

  ngOnInit(): void {
	}
	
	onSelect(project) {
		this.router.navigate(['/project', project.id]);
	}
	
	onEdit(project) {
		this.editing.emit(project)
	}
	
	onDelete(project) {
		this.deleting.emit(project);
	}
}
