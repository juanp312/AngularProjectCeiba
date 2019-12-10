import { Component } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';  
import { NavigationCancel,  
  Event,  
         NavigationEnd,  
         NavigationError,  
         NavigationStart,  
         Router } from '@angular/router';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8project';
  
}
