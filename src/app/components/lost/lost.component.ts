import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})



export class LostComponent implements OnInit {

  selectedImage: any = null;

  url:string;
  file:string;
  location: number;
  contactInfo: {name: string, email:string, phone: number}

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {}
  ngOnInit() {  }


  onFileSelected(event) {


    this.location = 123;
    this.contactInfo = {name : "Katrina", email: "helloworld", phone: 123456};

    //save the image
    var n = Date.now();
    const file = event.target.files[0];
    const task = this.storage.upload(`lostDogPostings/images/${n}`, file);

    //create user profile data file, replace with input data later
    let docData = {
      id: Date.now(),
      location: this.location,
      name: this.contactInfo.name,
      email: this.contactInfo.email,
      phone: this.contactInfo.phone
    }

    this.db.collection('userPostings').doc('${id}').set(docData).then(function() {
      console.log("Document successfully written!");
    });
  }

}
