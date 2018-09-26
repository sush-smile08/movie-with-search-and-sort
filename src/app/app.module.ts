import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { Observable, pipe } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule   } from 'ng2-search-filter'; 
import { Ng2OrderModule } from 'ng2-order-pipe';

import { AppComponent } from './app.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';

import { AuthService } from './service/auth.service';
import { ListService } from './service/list.service';
import { SearchfilterPipe } from './searchfilter.pipe';
import { OrderByPipe } from './order-by.pipe';
import { BsFooterComponent } from './bs-footer/bs-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarTopComponent,
    HomeComponent,
    LoginComponent,
    ProductListComponent,
    SearchfilterPipe,
    OrderByPipe,
    BsFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot ([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'product', component: ProductListComponent },
    ])
  ],
  providers: [
    AuthService,
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
