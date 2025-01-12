import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nested',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nested.component.html',
  styleUrl: './nested.component.scss',
})
export class NestedComponent {}
