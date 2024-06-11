import { IUser } from './../user';
import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  // data pro zobrazeni v tabulce
  data: IUser[] = [];
  error: any = null;

  constructor(
    public listService: ListService,
    private dialog: MatDialog
  ) { }

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
  //title - jmeno uzivatele
  delete(id: number, title: string) {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, { data: `${id} - ${title}` });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data = this.listService.delete(id);
      }
    });

  }
}
