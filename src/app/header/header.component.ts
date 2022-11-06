import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { SharedVarService } from '../service/shared-var.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public flag: boolean;
  public flag2: BehaviorSubject<boolean>;
  constructor(private service: SharedVarService) {
    this.flag2 = new BehaviorSubject<boolean>(false);
  }

  ngOnInit() {
    this.flag2.subscribe((val) => {
      console.log(val);
    });
    this.service.getValue2().subscribe((value) => {
      this.flag = value;
      this.flag2.next(value);
    });
  }
}
