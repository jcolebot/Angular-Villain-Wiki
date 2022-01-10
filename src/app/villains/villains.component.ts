import { Component, OnInit } from '@angular/core';
import { Villain } from '../villain';
import { VillainService } from '../villain.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})

export class VillainsComponent implements OnInit {

  villains: Villain[] =  [];

  constructor(private villainService: VillainService) { }
  // private messageService: MessageService

  ngOnInit(): void {
    this.getVillains();
  }

  // onSelect(villain: Villain): void {
  //   this.selectedVillain = villain;
  //   this.messageService.add(`VillainsComponent: Selected villain id=${villain.id}`);
  // }

  getVillains(): void {
    this.villainService.getVillains()
    .subscribe(villains => this.villains = villains)

    // Sychronous signature is not ideal for a real app
    // this.villains = this.villainService.getVillains()
  }

}
