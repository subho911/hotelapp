import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Property } from '../model/property.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  private readonly API_URL = 'assets/data/rooms.json';
  isTblLoading = true;
  public dataChange: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  // Temporarily stores data from dialogs
  dialogData!: Property;
  constructor(private afs: AngularFirestore) {}
  get data(): Property[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllRooms(): void {
    this.afs.collection(`properties`).valueChanges().subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addRoom(property: Property): void {
    const userRef: AngularFirestoreDocument<Property> = this.afs.doc(`properties/${property.id}`);
    userRef.set(property, { merge: true });
  }
  updateRoom(property: Property): void {
    const userRef: AngularFirestoreDocument<Property> = this.afs.doc(`properties/${property.id}`);
    userRef.set(property, { merge: true });
  }
  deleteRoom(id: number): void {
    const userRef: AngularFirestoreDocument<Property> = this.afs.doc(`properties/${id}`);
    userRef.delete();
  }
}
