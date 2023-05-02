import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  userId!: string | null;
  userName!: string | null;
  userAge!: string | null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((add)=>{this.userId=add.get("id")});
    this.route.paramMap.subscribe((add)=>{this.userName=add.get("name")});
    this.route.paramMap.subscribe((add)=>{this.userAge=add.get("age")});
    // this.route.snapshot.paramMap.get('name');
    // this.route.snapshot.paramMap.get('age');

    // this.userId = this.route.snapshot.params['id'];
    // this.userName = this.route.snapshot.params['name'];
    // this.userAge = this.route.snapshot.params['age'];
  }
}
