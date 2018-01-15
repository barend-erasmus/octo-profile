import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ResumeBaseComponent } from '../resume-base/resume-base.component';

@Component({
  selector: 'app-resume-1',
  templateUrl: './resume-1.component.html',
  styleUrls: ['./resume-1.component.css']
})
export class Resume1Component extends ResumeBaseComponent implements OnInit {

  constructor() {
    super();
  }
}
