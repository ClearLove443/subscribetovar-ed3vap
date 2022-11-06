import { Component, OnInit } from '@angular/core';
import {SharedVarService} from '../service/shared-var.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public flag: boolean;
  constructor(private service: SharedVarService) {
  }

  ngOnInit() {
    this.service.getValue().subscribe((value) => {
      this.flag = value;
    });
  }

}
