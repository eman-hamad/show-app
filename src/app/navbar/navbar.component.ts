import { Component, OnInit } from '@angular/core';
import { DataSharedService } from '../data-shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  itemsNum: any;
  constructor(private data_shared: DataSharedService) {
    this.data_shared
      .getItems()
      .subscribe((data: any) => (this.itemsNum = data.length || 0));
  }
  ngOnInit(): void {}
}
