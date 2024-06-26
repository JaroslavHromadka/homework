import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../user';
import { ListService } from '../list.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listService: ListService,
    private location: Location
  ) { }

  // object pro pridai nebo editaci
  user: IUser | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = +(paramMap.get('id') || 0);
      this.listService.get(id).subscribe(o => this.user = o);
    });
  }

  //ulozeni nebo editovani zaznamu
  save() {
    if (this.user) {
      this.listService.edit(this.user);
    }
    this.router.navigate(['home']);
  }

  //navrat na predchozi stranku
  back() {
    this.location.back();
  }
}
