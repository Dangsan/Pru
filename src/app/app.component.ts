import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TresSesenta';

  constructor(private router:Router){    
  }
  ngOnInit() {
    this.Inicial();
  }

  Inicial(){
    this.router.navigate(["nosearch"])
  }

  Buscar(){
    this.router.navigate(["search"])
  }

}
