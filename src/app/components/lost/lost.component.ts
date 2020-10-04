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
  contactInfo: {name: string, email:string, phone: number};

  constructor(
    private storage: AngularFireStorage, 
    private db: AngularFirestore,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {  }

  onFileSelected(event) {

    //save the image
    alert("Image uploaded!");

    var n = Date.now();
    this.file = event.target.files[0];

  }

  onSubmit(){

    const n = Date.now()
    const task = this.storage.upload(`lostDogPostings/images/${n}`, this.file);

    //create user profile data file, replace with input data later
    let docData = {
      id: n,
      location: (<HTMLInputElement>document.getElementById("zip")).value,
      name: (<HTMLInputElement>document.getElementById("name")).value,
      email: (<HTMLInputElement>document.getElementById("email")).value,
      phone: (<HTMLInputElement>document.getElementById("phoneNum")).value
    }

    this.db.collection('userPostings').doc(n.toString()).set(docData).then(function() {
      console.log("Document successfully written!");
    });
  }

}
