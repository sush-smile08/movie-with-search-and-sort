import { Component, OnInit, Input, Pipe, PipeTransform  } from '@angular/core';
import { Config } from 'protractor';
import { Ng2SearchPipeModule   } from 'ng2-search-filter'; 
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ListService } from './../service/list.service';
import {FormsModule} from '@angular/forms'
import { SearchfilterPipe } from './../searchfilter.pipe';
import { OrderByPipe } from './../order-by.pipe';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  tittle = "List of Movies";
  appsName;
  headers: string[];
  config;
  isDesc: boolean = false;
  column: string = 'CategoryName';
  search;
  name;
  i;
  searchText;
  p;


  ngOnInit() { }

  constructor(private ListService: ListService) {
     this.showConfigResponse();
  }

  showConfig() {
    this.ListService.getlist()
      .subscribe((data: Config) => this.appsName = {
        heroesUrl: data['heroesUrl']
      });
  }
  showConfigResponse() {
    this.ListService.getlistResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        //console.log(resp);
        //this.config=JSON.parse(resp.body);
        this.appsName = resp.body;
        this.config = { ...resp.body };
        for( this.i in this.appsName){
          this.name += this.appsName[this.i].movie_title;
          //console.log(this.name);
        }
      });
  }

  // key: string = 'language'; //set default
  // reverse: boolean = false;
  // year: number;
  // sort(key){
  //   this.key = key;
  //   this.reverse = !this.reverse;
  // }
  direction: number;
  sort(property: string){
    this.direction = this.isDesc ? 1 : -1; // This one first
    this.isDesc = !this.isDesc; //change the direction 
    this.column = property;


    this.appsName.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * this.direction;
        }
        else if( a[property] > b[property]){
            return 1 *  this.direction;
        }
        else{
            return 0;
        }
    });
};

}