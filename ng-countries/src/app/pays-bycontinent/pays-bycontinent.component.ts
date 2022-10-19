import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, forkJoin, of } from 'rxjs';
import { Country, Currency, Language } from 'src/app/types/api';
import { ActivatedRoute } from '@angular/router';
import { tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-pays-bycontinent',
  templateUrl: './pays-bycontinent.component.html',
  styleUrls: ['./pays-bycontinent.component.scss']
})
export class PaysBycontinentComponent implements OnInit {
  country$: Observable<Country>;
  borderCountries$: Observable<Country[]>;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country$ = this.api.getCountryByContinent(params.continent).pipe(
        tap((res) => console.log(res)),
        mergeMap((res) => {
          return of(res);
        })
      );
    });
  }
}
