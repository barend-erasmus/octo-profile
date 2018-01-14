import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ResumeBaseComponent } from '../resume-base/resume-base.component';

@Component({
  selector: 'app-resume-3',
  templateUrl: './resume-3.component.html',
  styleUrls: ['./resume-3.component.css']
})
export class Resume3Component extends ResumeBaseComponent implements OnInit {

  constructor() { 
    super();
  }
}
