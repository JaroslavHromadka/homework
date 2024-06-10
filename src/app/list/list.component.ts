import { IUser } from './../user';
import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  data: IUser[] = [];

  constructor(public listService: ListService) { }

  ngOnInit(): void {
    this.listService.load().subscribe(data => this.data = data);
  }

  changeSort() {
    this.listService.sortType += 1;
    this.listService.sortType %= 3; 
  }

  delete(id: number) {
    this.data = this.listService.delete(id);
  }
}
