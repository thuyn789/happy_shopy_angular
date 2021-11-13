import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseDBService {
  constructor(private fireDB: AngularFirestore) {}

  getProducts(): Observable<any> {
    return this.fireDB.collection('products').valueChanges();
  }
}
