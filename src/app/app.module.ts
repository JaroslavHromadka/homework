import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserIdPipe } from './user-id.pipe';
import { SortTitlePipe } from './sort-title.pipe';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { DocumentationComponent } from './documentation/documentation.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserIdPipe,
    SortTitlePipe,
    UserComponent,
    DocumentationComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
