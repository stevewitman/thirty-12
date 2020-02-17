import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ProjectsService, Project } from '@nx12/core-data';

@Component({
  selector: 'nx12-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
	projects$;
	selectedProject: Project;
	form: FormGroup;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
		this.getProjects();
	}
	
	getProjects() {
		this.projects$ = this.projectsService.getProjects();
	}

	deleteProject(project) {
		this.projectsService.deleteProject(project.id)
			.subscribe(result => {
				this.getProjects();
			});
	}

	editProject(project) {
		this.selectedProject = project;
	}

}
