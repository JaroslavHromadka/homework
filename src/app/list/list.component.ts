import { IUser } from './../user';
import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  // data pro zobrazeni v tabulce
  data: IUser[] = [];
  error: any = null;

  constructor(public listService: ListService) { }

  ngOnInit(): void {
    this.listService.load().subscribe(
      {
        next: data => this.data = data,
        error: error => this.error = error
      }
    );
  }

  // zmena razeni
  changeSort() {
    this.listService.sortType += 1;
    this.listService.sortType %= 3;
  }

  //smazani zaznamu
  //id - idecko zaznamu
  delete(id: number) {
    this.data = this.listService.delete(id);
  }
}
