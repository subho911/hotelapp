import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Room } from '../model/room.model';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private readonly API_URL = 'assets/data/rooms.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  // Temporarily stores data from dialogs
  dialogData!: Room;
  constructor(private httpClient: HttpClient,
    private afs: AngularFirestore) {}
  get data(): Room[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllRooms(): void {
    this.afs.collection(`rooms`).valueChanges().subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addRoom(room: Room): void {
    const userRef: AngularFirestoreDocument<Room> = this.afs.doc(`rooms/${room.id}`);
    userRef.set(room, { merge: true });
  }
  updateRoom(room: Room): void {
    const userRef: AngularFirestoreDocument<Room> = this.afs.doc(`properties/${room.id}`);
    userRef.set(room, { merge: true });
  }
  deleteRoom(id: number): void {
    const userRef: AngularFirestoreDocument<Room> = this.afs.doc(`properties/${id}`);
    userRef.delete();
  }
}
