import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {
   }

  ngOnInit() {

    const dbRef = this.db.collection('userPostings');

    const searchQuery = this.db.collection('userPostings', ref => ref.where('name', '==', 'Katrina')); //go back and make better later

    const snapshot = searchQuery.get();
    if (snapshot == null) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      console.log(doc[1]);
    });

  }

}
