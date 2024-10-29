import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nested',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nested.component.html',
  styleUrl: './nested.component.scss',
})
export class NestedComponent {
  constructor(private route: ActivatedRoute) {}
  changeState() {
    return {};
  }
}
