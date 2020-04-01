import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  constructor(private _studentservice: StudentService,private router:Router) { }
  studs = [];
  ngOnInit() {
    
    this._studentservice.getstuds().subscribe((mydata: any[]) => {

      this.studs = mydata['msg'];
    });
  }

  redirect()

  {
    console.log("test");
    this.router.navigate(['/addstud']);
  }

}
