import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
//vista
import { InformacionComponent } from './pages/informacion/informacion.component';
//componente incrustable 
import { CardComponent } from './components/card/card.component';

//componente de la web
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    InformacionComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [ 
    InformacionComponent,
    MatCardModule,
    MatButtonModule
  ]
})
export class InformacionModule { }
