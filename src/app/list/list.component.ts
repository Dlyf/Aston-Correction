import { Component, OnInit } from '@angular/core';
import { BeerService } from '../service/beer.service';
import { Beer } from '../beer';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  liste: any[] = [];
  beers:Beer[];
  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
    this.beerService.getBeers()
     .subscribe(data => {
      let cle = Object.keys(data);
      let donnees = Object.values(data);
      for(let i = 0; i < cle.length; i++){
        this.liste.push({key: cle[i], values:donnees[i]});
      }
     });
   }

   deleteBeer(key){
     this.beerService.deleteBeer(key).subscribe();
     this.liste = this.liste.filter(liste => liste.key !== key);
   }
}
