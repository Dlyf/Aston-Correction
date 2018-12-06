import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BeerService } from '../service/beer.service';
import { Beer } from '../beer';
 
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  key: string;
  beer: Beer;

  constructor(private route: ActivatedRoute, private http: HttpClient, private beerService: BeerService) {
    this.route.params
    .subscribe( params => this.key = params.key)
   }

  ngOnInit() {
    this.getBeerByKey(this.key);
  }

  getBeerByKey(key){
    this.beerService.getBeers()
    .subscribe(data => {
     this.beer = Object.values(data)[0];  //0 Firebase send an array 
    });
  }

}
