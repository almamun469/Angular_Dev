import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {

  constructor() { }

 write(){
  return "service 1"
 }

}
