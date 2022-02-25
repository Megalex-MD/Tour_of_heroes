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
      { id: 11, name: 'Spiderman' },
      { id: 12, name: 'Superman' },
      { id: 13, name: 'Thor' },
      { id: 14, name: 'Loky' },
      { id: 15, name: 'Thanos' },
      { id: 16, name: 'Hulk' },
      { id: 17, name: 'CAP' },
      { id: 18, name: 'Dr Strange' },
      { id: 19, name: 'Black Widow' },
      { id: 20, name: 'Aquaman' }
    ];
    return {heroes}
}
  constructor() { }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

