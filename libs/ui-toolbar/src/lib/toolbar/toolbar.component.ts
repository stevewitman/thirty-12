import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  title = 'App 12'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

	onLogout() {
		localStorage.removeItem('token');
		this.router.navigate(['/login']);
	}

}
