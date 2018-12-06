import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BeerService } from '../service/beer.service';
import { Beer } from '../beer';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private beerService: BeerService) { }

  ngOnInit() {
  }


  onSubmit(form){
      this.beerService.addBeer(form.form.value)
        .subscribe(beer => {
          this.router.navigate([`./list`]);
        });
    }

}
