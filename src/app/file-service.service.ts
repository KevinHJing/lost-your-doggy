import { Injectable, Inject } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class FileService {
  userDetailList: AngularFireList<any>;
  fileList: any[];
  dataSet: Data = {
    id:'',
    url:'',
    location: null,
    contactInfo: {name: '', email: '', phone: null}
  };
  msg:string = 'error';
  constructor(@Inject(AngularFireDatabase) private firebase: AngularFireDatabase) { }
  getUserDetailList() {
    this.userDetailList = this.firebase.list('userDetails');
  }
  insertUserDetails(id, url, location, contact) {
    this.dataSet = {
      id : id,
      url: url,
      location: location,
      contactInfo : { name: contact.name, phone: contact.email, email: contact.phone}
    };
    this.userDetailList.push(this.dataSet);
  }
  getImage(value){
    this.userDetailList.snapshotChanges().subscribe(
      list => {
        this.fileList = list.map(item => { return item.payload.val();  });
        this.fileList.forEach(element => {
          if(element.id===value)
          this.msg = element.url;
        });
        if(this.msg==='error')
          alert('No record found');
        else{
          window.open(this.msg);
          this.msg = 'error';
        }
      }
    );
  }
}
export interface Data{
  id:string;
  url:string;
  location:number;
  contactInfo: {name: string, email:string, phone: number};
}