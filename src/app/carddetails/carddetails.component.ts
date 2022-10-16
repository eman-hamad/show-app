import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharedService } from '../data-shared.service';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})
export class CarddetailsComponent implements OnInit {
//   pro_list : any;
//     constructor(private products: DataSharedService) {}
  
//     ngOnInit(): void {
//       this.products.getdetails(id).subscribe(
//         (data) => {
//           this.pro_list = data;
//         },
//         (error) => {
//           console.log('error: ', error);
//         },
//         () => {
//           console.log('complete ', 'compelete');
//         }
//       );
//     }
//   }

// function id(id: any) {
//   throw new Error('Function not implemented.');
// }




pro_list : any;
 i:any;
  // pro_img:any;
  // pro_price:any;
  // pro_catogery:any
  // pro_title : any;
  // pro_description : any;
  constructor(private route : ActivatedRoute,private products: DataSharedService) {

    this.route.params.subscribe(params =>{
      
         this.i =params.id;
  
      });
    }
      de_data: any ={};



  ngOnInit(): void {
    
    this.products.getdetails(this.i).subscribe(
      (data) => {
        console.log(data);
        this.de_data = data;
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('complete ', 'compelete');
    })
   
  }
 
 
}
