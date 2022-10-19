import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Country } from 'src/app/types/api';
import { ActivatedRoute } from '@angular/router';
const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  private source: Country[];
  searchFilter?: string;
  regionFilter?: string;
  regionOptions = REGION_OPTIONS;
  isVisible=true;

  constructor(private api: ApiService, private route: ActivatedRoute, private cd: ChangeDetectorRef) {
    setTimeout(
      ()=>{
       this.isVisible=false;
     }, 8000
    );
  }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.api.getCountryByName(params.continent).subscribe((countries) => {
        this.source = countries;
      });
    });
  }

  get countries() {
    return this.source
      ? this.source
          .filter((country) =>
            this.searchFilter
              ? country.name
                  .toLowerCase()
                  .includes(this.searchFilter.toLowerCase())
              : country
          )
          .filter((country) =>
            this.regionFilter
              ? country.region.includes(this.regionFilter)
              : country
          )
      : this.source;
  }

}
