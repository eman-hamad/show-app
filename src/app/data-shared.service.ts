import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
 private itembehavior = new BehaviorSubject([]);
newitem =this.itembehavior.asObservable();
count = 0;
  simpleObservable = new Subject();
  simple_Observable = this.simpleObservable.asObservable();
  constructor(private http : HttpClient) { }


  getproduct(){

   return this.http.get('https://fakestoreapi.com/products');
  }

  getdetails(id){

    return this.http.get(`https://fakestoreapi.com/products/${id}`);
   }

   items: any = [];

  addToCart(product: any) {
    this.items.push(product);
    return this.simpleObservable.next(this.items);
  }

  getItems() {
    return this.simple_Observable;
  }

  clearCart() {
    this.items = [];
  }
 


}
