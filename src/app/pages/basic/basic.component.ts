import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {
  private router = inject(Router);

  navigateToSecond(): void {
    this.router.navigate(['second']);
  }
}
