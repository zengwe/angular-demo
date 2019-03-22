import { Component } from '@angular/core';
import { routeAnimation } from './animations/router';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})
export class AppComponent {
  title = 'app';
  routerState:boolean = true;
  routerStateCode:string = 'active';
  constructor(private router:Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      // 每次路由跳转改变状态
      this.routerState = !this.routerState;
      this.routerStateCode = this.routerState ? 'active' : 'inactive';
      }
    });
}
}
