import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ResumeBaseComponent } from '../resume-base/resume-base.component';

@Component({
  selector: 'app-resume-4',
  templateUrl: './resume-4.component.html',
  styleUrls: ['./resume-4.component.css']
})
export class Resume4Component extends ResumeBaseComponent implements OnInit {

  constructor() {
    super();
  }
}

