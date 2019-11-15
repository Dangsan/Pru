import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('stickyMenu') menuElement: ElementRef;
  constructor(private router:Router) { }
  sticky: boolean = false;
  elementPosition: any;
  trPosition: any;

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  Solicitudes(){
    this.router.navigate(["search"])
  }
  EditarCliente(){
    this.router.navigate(["editclient"]);
  }


  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
}
