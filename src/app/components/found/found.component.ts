import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  url;
  file;

  onFileChanged(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.file = event.target.files[0];

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
      }
    }
  }

  onSearch(event){
    //this is where we determine what search results will be or set the image as some passed on var
    //this.afStorage.upload('/upload/to/this-path', this.file);
  }

}
