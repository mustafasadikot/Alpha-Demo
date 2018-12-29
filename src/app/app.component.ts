import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private isLogin: boolean;
  private navOptions = [
    { text: "Home", icon: "home", route: "dashboard" },
    { text: "Material flow", icon: "home", route: "materialflow" }
  ]

  constructor(private _router: Router){
    _router.events.subscribe((event: Event) =>{
      if(event instanceof NavigationEnd){
        if(event.url == '/' || event.url == '/login'){
          this.isLogin = true;
        }
        else{
          this.isLogin = false;
        }
      }
    });
  }

  private onItemClick = (event) => {    
    this._router.navigateByUrl(event.itemData.route)
  }
}
