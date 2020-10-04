import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})

export class LostComponent implements OnInit{

  selectedImage: any = null;

  url:string;
  file:string;
  location: number;
  contactInfo: {name: string, email:string, phone: number}

  constructor(
    private storage: AngularFireStorage, 
    private db: AngularFirestore,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {  }

  onFileSelected(event) {

    //save the image
    var n = Date.now();
    const file = event.target.files[0];
    const task = this.storage.upload(`lostDogPostings/images/${n}`, file);

  }

  onSubmit(){
    //create user profile data file, replace with input data later
    let docData = {
      id: Date.now(),
      location: document.getElementById("zip"),
      name: document.getElementById("name"),
      email: document.getElementById("email"),
      phone: document.getElementById("phoneNum")
    }

    this.db.collection('userPostings').doc('${id}').set(docData).then(function() {
      console.log("Document successfully written!");
    });
  }

}
