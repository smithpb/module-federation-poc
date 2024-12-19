import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mount.component.html',
  styleUrl: './mount.component.scss',
})
export class MountComponent implements OnInit {
  @ViewChild('windowEventElementRef', { read: ElementRef, static: true })
  windowEventElementRef!: ElementRef;

  async ngOnInit(): Promise<void> {
    const { mount } = await import('windowEvent/Module');
    mount(this.windowEventElementRef.nativeElement);
  }
}
