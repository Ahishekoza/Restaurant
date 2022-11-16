import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchAll } from 'rxjs';
import { MenuService } from 'src/app/Services/menu.service';
import { PersonalDetailsService } from 'src/app/Services/personal-details.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  foodId:any;
  menuData:any;

  personalInfo={
    Customername:'',
    phoneNo:'',
    address:'',
  }
  constructor(private route:ActivatedRoute,private _service:MenuService, private _personalService:PersonalDetailsService) { }

  ngOnInit(): void {
    

   
    this.foodId=this.route.snapshot.params['id']

    this._service.foodDetails.filter((value)=>{
      if(value.id==this.foodId){
        this.menuData=value
      }
    })
  }

  addDetail(){
    this._personalService.addPersonalInfo(this.personalInfo).subscribe(
      (data:any)=>{

       
        
        // Check for non empty submit form
        if(this.personalInfo.Customername.trim()=='' || this.personalInfo.Customername==null){
          Swal.fire("Please enter your name");
          return;
        }

        // Check for non empty submit form
        if(this.personalInfo.phoneNo.length==10 || this.personalInfo.phoneNo==null){
          Swal.fire("Please enter your phoneNo");
          return;
        }

        // Check for non empty submit form
        if(this.personalInfo.address.trim()=='' || this.personalInfo.address==null){
          Swal.fire("Please enter your address");
          return;
        }

      
        this.personalInfo={
          Customername:'',
          phoneNo:'',
          address:'',
        }
        

      }
    )
  }

}
