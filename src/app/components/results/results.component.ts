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
   url;


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
    el.src = "https://www.muglestonspitbullfarm.com/asccustompages/uploadedfiles/dbadminfiles/20190603_142456-swDQH-YEGJm-orqkx.jpg"

    let el2 = <HTMLImageElement>document.getElementById("2");
    el2.src = "https://i.pinimg.com/originals/a1/93/14/a19314e419d1e831fe826a9d3c1c2b0c.jpg"

    let el3 = <HTMLImageElement>document.getElementById("3");
    el3.src = "https://i.pinimg.com/originals/90/32/e8/9032e8cad7432fa67d2ccc8eff429ede.jpg"
  }

  getImage(){
    var storageRef = this.storage.ref(`lostDogPostings/images/1601798106290`);

    storageRef = this.storage.ref('gs://lost-your-doggy.appspot.com/lostDogPostings/').child('images/1601798106290');
    console.log(storageRef);
    console.log(storageRef.getDownloadURL());
    return storageRef.getDownloadURL();
  }

}
