import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ResumeBaseComponent } from '../resume-base/resume-base.component';

@Component({
  selector: 'app-resume-2',
  templateUrl: './resume-2.component.html',
  styleUrls: ['./resume-2.component.css']
})
export class Resume2Component extends ResumeBaseComponent implements OnInit {

  constructor() { 
    super();
  }
}
