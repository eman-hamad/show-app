import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharedService } from '../data-shared.service';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css'],
})
export class CardlistComponent implements OnInit {

  pro_list : any;
  productsList: any;
  constructor(private products: DataSharedService) {}

  ngOnInit(): void {
    this.products.getproduct().subscribe(
      (data) => {
        this.pro_list = data;
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('complete ', 'compelete');
      }
    );
  }


  addToCart(product: any) {
    this.products.addToCart(product);
    this.products.getItems().subscribe((data) => console.log(data));
    window.alert('Your product has been added to the cart!');
  }
}


// pro_list : any;

//   pro_img:any;
//   pro_price:any;
//   pro_catogery:any
//   pro_title : any;
//   pro_description : any;
//   constructor(private route : ActivatedRoute,private products: DataSharedService) {
// this.products.getproduct().subscribe(
//     (data) => {
//       this.pro_list = data;
//     },
//     (error) => {
//       console.log('error: ', error);
//     },
//     () => {
//       console.log('complete ', 'compelete');
//     }
//   );
// }

//   ngOnInit(): void {
//     this.route.params.subscribe(params =>{
//     let i = this.pro_list.find(pro => {
//        pro.id ==params.id;

//     });
//     this.pro_img = i.image;
//     this.pro_catogery=i.category;
//     this.pro_description=i.description;
//     this.pro_price=i.price;
//     this.pro_title=i.title;

   
//   }
//     )};
// }
