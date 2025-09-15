import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  expandedService: string | null = null;
  toggleService(serviceName: string) {
    this.expandedService = this.expandedService === serviceName ? null : serviceName;
  }
}
