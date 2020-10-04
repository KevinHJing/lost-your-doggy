import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {
   }

   id;
   data;


   async fetchData() {
    const searchQuery = this.db.collection('userPostings', ref => ref.where('name', '==', 'Katrina').where('breed', '==', 'dog')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        this.id = a.payload.doc.id;
        this.data = a.payload.doc.data;
        return [this.id , this.data]
      }))
    );
   }

  ngOnInit() {

    let el = <HTMLImageElement>document.getElementById("1");
    //el.src = this.storage.openStream(this.getImage());
  }

  getImage(){
    var storageRef = this.storage.ref(`lostDogPostings/images/1601798106290`);

    storageRef = this.storage.ref('gs://lost-your-doggy.appspot.com/lostDogPostings/').child('images/1601798106290');
    console.log(storageRef);
    console.log(storageRef.getDownloadURL());
    return storageRef.getDownloadURL();
  }

}
