import { Component } from '@angular/core';
import { ThirdComponent } from '../third/third.component';
import { FirstComponent } from '../first/first.component';
import { CommonModule } from '@angular/common';
import { Serv1Service } from '../../services/serv1.service';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],

templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

constructor(private disServe: Serv1Service){ }

mas(){
  return this.disServe.write();
}

currentComponent:string="First";

changTab(tabName:string){
  this.currentComponent=tabName;

}

writeDisplay(){

}


note=123;
add(){
  return this.note;
}
}
