import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { FileService } from '../../file-service.service';
import { writeFile } from 'fs';

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

  constructor(private storage: AngularFireStorage) {}
  ngOnInit() {}
  onFileSelected(event) {

    //save the image
    var n = Date.now();
    const file = event.target.files[0];
    const task = this.storage.upload(`lostDogPostings/${n}/image`, file);

    //create user profile data file, replace with input data later
    let docData = 
      '\r Name: ' + "Katrina" + ' \r\n ' + 
          'Phone: ' + 1234567890 + ' \r\n ' + 
          'Email: ' + "helloworld";
      
    var blob = new Blob([docData], {type: "text/plain"});
    const sFileName = 'formData.txt';	   // The file to save the data.

    this.storage.upload(`lostDogPostings/${n}/postingInfo`, <File>blob);
  }

}
