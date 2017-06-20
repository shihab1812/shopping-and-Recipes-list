import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ListEditComponent } from './shopping-list/list-edit/list-edit.component';
import { IngredientsComponent } from './shopping-list/ingredients/ingredients.component';
import { ReciepeComponent } from './reciepe/reciepe.component';
import { ReceipeListComponent } from './reciepe/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from './reciepe/receipe-list/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './reciepe/receipe-detail/receipe-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingListComponent,
    ListEditComponent,
    IngredientsComponent,
    ReciepeComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
