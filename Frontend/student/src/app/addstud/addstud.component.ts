import { Component, OnInit } from '@angular/core';
import { Istudent } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstud',
  templateUrl: './addstud.component.html',
  styleUrls: ['./addstud.component.css']
})
export class AddstudComponent implements OnInit {

  studmodel = new Istudent();

  constructor(private _studservice: StudentService,private router:Router) { }

  ngOnInit() {

  }

  save() {
    console.log(this.studmodel);
    this._studservice.addstud(this.studmodel).subscribe(data=>{
      alert(data['msg']);
      this.router.navigate(['/studs']);
    })

  }

}
