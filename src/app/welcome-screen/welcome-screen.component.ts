import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {
  inputValue = '';

  constructor(private route: Router) { }
  ngOnInit() {

  }

  onChange(e) {
    this.inputValue = e;
  }

  loginClick() {
    if (this.inputValue.length > 0) {

      this.route.navigate(['search'], { queryParams: { userName: this.inputValue } });
    } else {
      alert('Please Enter UserName');
    }
  }
}
