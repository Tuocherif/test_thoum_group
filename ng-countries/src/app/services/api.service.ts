import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Continent, Country } from '../types/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //private api = 'https://restcountries.eu/rest/v2';
  private api = 'http://localhost:3000/api/pays';

  private api2 = 'http://localhost:3000/api/continent/get';


  getContinent(){

    return this.http.get<Continent[]>(`${this.api2}`);
  }
  constructor(private http: HttpClient) {}

  getAllCountries() {
    console.log(this.http.get<Country[]>(`${this.api}/index`))

    return this.http.get<Country[]>(`${this.api}`);
  }

  getCountryByName(name: string) {
    return this.http
      .get<Country[]>(`${this.api}/${name}`)
  }

  getCountryByContinent(Name: string) {
    return this.http
      .get<Country[]>(`${this.api}/${Name}`)
      .pipe(map(([res]) => res));
  }

  getCountriesByCodes(codes: string[]) {
    console.log(`${this.api}/alhpa?codes=${codes.join(';')}`);
    return this.http.get<Country[]>(
      `${this.api}/alpha?codes=${codes.join(';')}`
    );
  }
}
