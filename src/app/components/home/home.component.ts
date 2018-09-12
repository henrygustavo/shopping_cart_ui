import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _productService: ProductService) { }
  products: Product[];

  ngOnInit() {

      this._productService.getAll().subscribe(
      (response: any) => {
         this.products = response;
      },
      (error: any) => {

      });

  }

}