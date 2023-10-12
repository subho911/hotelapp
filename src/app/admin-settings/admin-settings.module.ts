import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSettingsRoutingModule } from './admin-settings-routing.module';
import { PropertiesComponent } from './properties/properties.component';
import { SharedModule } from '@shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@shared/components/components.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DeleteDialogComponent } from './properties/dialogs/delete/delete.component';
import { FormDialogComponent } from './properties/dialogs/form-dialog/form-dialog.component';
import { RoomDeleteComponent } from './rooms/dialogs/room-delete/room-delete.component';
import { RoomEditComponent } from './rooms/dialogs/room-edit/room-edit.component';
import { RoomsComponent } from './rooms/rooms.component';


@NgModule({
  declarations: [
    PropertiesComponent,
    RoomsComponent,
    DeleteDialogComponent,
    FormDialogComponent,
    RoomDeleteComponent,
    RoomEditComponent,
  ],
  imports: [
    CommonModule,
    AdminSettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
    NgxDatatableModule,
  ]
})
export class AdminSettingsModule { }
