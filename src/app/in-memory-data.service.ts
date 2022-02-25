import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

createDb() {
    const heroes = [
      { id: 1, name: 'Spiderman' },
      { id: 2, name: 'Superman' },
      { id: 3, name: 'Thor' },
      { id: 4, name: 'Loky' },
      { id: 5, name: 'Thanos' },
      { id: 6, name: 'Hulk' },
      { id: 7, name: 'CAP' },
      { id: 8, name: 'Dr Strange' },
      { id: 9, name: 'Black Widow' },
      { id: 10, name: 'Aquaman' }
    ];
    return {heroes}
}
  constructor() { }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

