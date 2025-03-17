import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-application-info',
  imports: [CommonModule, FormsModule],
  templateUrl: './application-info.component.html',
  styleUrl: './application-info.component.css'
})
export class ApplicationInfoComponent {
  applicationId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.applicationId = this.route.snapshot.paramMap.get('id');
  }
  
}
