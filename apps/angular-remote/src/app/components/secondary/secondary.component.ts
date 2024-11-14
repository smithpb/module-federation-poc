import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-secondary',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './secondary.component.html',
  styleUrl: './secondary.component.scss',
})
export class SecondaryComponent {}
