import { Component } from '@angular/core';
import { ServicesRedirectComponent } from './amc/services-redirect.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './total-systems.component.html',
  styleUrl: './total-systems.component.css'
})
export class TotalSystemsComponent {

}
