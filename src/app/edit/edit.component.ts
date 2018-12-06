import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BeerService } from '../service/beer.service';
import { Beer } from '../beer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {

  key: string;
  beer: Object;

  constructor(private route: ActivatedRoute, private http: HttpClient, private beerService: BeerService, private router: Router) {
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


  onSubmit(form){
    this.beerService.editBeer(form.form.value, this.key)
      .subscribe(beer => {
        this.router.navigate([`./list`]);
      });
  }


}