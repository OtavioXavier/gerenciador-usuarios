import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gu-footer',
  imports: [NgOptimizedImage, NgbTooltipModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

}
