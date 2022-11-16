import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:MenuService) { }

  navLinks:any;
  value:any;
  cartLogo:any;
  ngOnInit(): void {
    this.service.values.subscribe(
      (data:any)=>{
        this.value=data
      }
    )

    this.service.navLinks.subscribe(
      (data:any)=>{
        this.navLinks=data

      }
    )

    this.service.cartLogo.subscribe(
      (data:any)=>{
        this.cartLogo=data
      }
    )
  }


}
