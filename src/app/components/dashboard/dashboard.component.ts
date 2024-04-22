import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  xyz: boolean = false;
  abc: boolean = false;

  openBottomSheet(sheet: any) {
    if (sheet == 'route') {
      this.xyz = true;
      this.abc = true;
      $('.bottom-sheet-wrapper').addClass('show-modal');
    }
  }
}
