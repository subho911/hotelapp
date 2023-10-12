import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { Property } from '../../model/property.model';
import { PropertiesService } from '../../service/properties.service';

export interface DialogData {
  id: number;
  action: string;
  property: Property;
}

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  propertyForm: UntypedFormGroup;
  property: Property;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public propertyService: PropertiesService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Edit Poperry';
      this.property = data.property;
    } else {
      this.dialogTitle = 'New Property';
      const blankObject = {} as Property;
      this.property = new Property(blankObject);
    }
    this.propertyForm = this.createContactForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.property.id],
      name: [this.property.name],
      address: [this.property.address],
      gmapCoordinates: [this.property.gmapCoordinates],
      email: [this.property.email],
      phone: [this.property.phone],
      chargingType: [this.property.chargingType],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.propertyService.addRoom(this.propertyForm.getRawValue());
  }
}
