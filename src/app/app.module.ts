/* Sebastian de JEsus Pioquinto Cruz
21 de Marzo del 2021
Inicio: 10:18 
Finalizacion: 
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentsComponent } from './components/students/students.component';
import { DataService } from './services/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule ],
  declarations: [ AppComponent, HelloComponent, StudentsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ DataService]
})
export class AppModule { }
