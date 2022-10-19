import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Continent } from 'src/app/types/api';

const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private source: Continent[];
  searchFilter?: string;
  regionFilter?: string;
  regionOptions = REGION_OPTIONS;
  isVisible=true;

  constructor(private api: ApiService, private cd: ChangeDetectorRef) {
    setTimeout(
      ()=>{
       this.isVisible=false;
     }, 3000
    );
  }

  ngOnInit(): void {
    this.api.getContinent().subscribe((continents) => {
      this.source = continents;
    });
  }

  get continents() {
    return this.source
      ? this.source
          .filter((continent) =>
            this.searchFilter
              ? continent.Name
                  .toLowerCase()
                  .includes(this.searchFilter.toLowerCase())
              : continent
          )
          // .filter((country) =>
          //   this.regionFilter
          //     ? country.region.includes(this.regionFilter)
          //     : country
          // )
      : this.source;
  }
}
