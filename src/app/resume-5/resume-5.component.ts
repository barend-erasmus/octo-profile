import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ResumeBaseComponent } from '../resume-base/resume-base.component';

@Component({
  selector: 'app-resume-5',
  templateUrl: './resume-5.component.html',
  styleUrls: ['./resume-5.component.css']
})
export class Resume5Component extends ResumeBaseComponent implements OnInit {

  constructor() {
    super();
  }
}
