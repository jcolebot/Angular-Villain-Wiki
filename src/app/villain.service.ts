import { Injectable } from '@angular/core';
import { Villain } from './villain';
import { VILLAINS } from './more-villains';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VillainService {

  constructor(private messageService: MessageService) { }

   // Asychronous signature to simulate fetching villains from remote server
  getVillains(): Observable<Villain[]> {
    const villains = of(VILLAINS);
    this.messageService.add("VillainService: fetched villains");
    return villains;
  }

  getVillain(id: number): Observable<Villain> {
    const villain = VILLAINS.find(v => v.id === id)!;
    // JS template literal `` to embed id
    this.messageService.add(`VillainService: fetched villain id=${id}`);
    return of(villain);
  }
}
