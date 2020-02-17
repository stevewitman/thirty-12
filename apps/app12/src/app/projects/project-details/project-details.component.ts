import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nx12-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  currentProject;
	originalTitle;

	@Input() set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
	};

  constructor() { }

  ngOnInit() {
		console.log('CURRENT PROJECT:', this.currentProject)
  }

}
