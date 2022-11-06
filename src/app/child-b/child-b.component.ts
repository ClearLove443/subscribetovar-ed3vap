import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedVarService} from '../service/shared-var.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit, OnDestroy {

  constructor(private service: SharedVarService) { }

  ngOnInit() {
    this.service.setValue(true);
  }
  ngOnDestroy() {
    this.service.setValue(false );
  }
}
