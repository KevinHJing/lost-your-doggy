import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material';
import { finalize } from "rxjs/operators";
import { ResultsComponent } from '../results/results.component';
// import * as tf from '@tensorflow/tfjs';
import * as automl from '@tensorflow/tfjs-automl';

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {

  loadAPI: Promise<any>;

  constructor() { }

  ngOnInit() {
    this.loadModel();
  }

  async loadModel() {
    this.model = await automl.loadImageClassification('assets/model.json');
  }

  url;
  file;
  model;

  onFileChanged(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.file = event.target.files[0];

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
        ResultsComponent.prototype.url = reader.result;
      }
      document.getElementById("uploadImg").style.display = 'block';
      document.getElementById("searchBtn").style.display = 'block';
    }
  }

  onSearch(event){
    //this is where we determine what search results will be or set the image as some passed on var
    
    const image = document.getElementById('uploadImg');
    const predictions = this.model.classify(image);
    console.log(predictions);
    // Show the resulting object on the page.
    const pre = document.createElement('pre');
    pre.textContent = JSON.stringify(predictions, null, 2);
    document.body.append(pre);
    
  }

}
