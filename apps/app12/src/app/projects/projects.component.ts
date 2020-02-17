import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '@nx12/core-data';

@Component({
  selector: 'nx12-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
	projects$;

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

}
