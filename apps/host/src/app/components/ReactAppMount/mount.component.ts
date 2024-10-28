import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { Router } from '@angular/router';
const ROUTE_BASE = '/marketing';
@Component({
  selector: 'app-react-mount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mount.component.html',
  styleUrl: './mount.component.scss',
})
export class ReactAppMountComponent implements OnInit {
  // to render the react web component
  @ViewChild('reactElementRef', { read: ElementRef, static: true })
  reactElementRef!: ElementRef;

  constructor(private router: Router, private location: Location) {}

  async ngOnInit(): Promise<void> {
    const { mount } = await loadRemoteModule({
      remoteEntry: 'http://localhost:8081/remoteEntry.js',
      remoteName: 'marketing',
      exposedModule: './Marketing',
    });

    const { onParentNavigate } = mount(this.reactElementRef.nativeElement, {
      initialPath: this.router.url,
      onNavigate: ({ pathname: nextPathName }: any) => {
        if (!this.location.isCurrentPathEqualTo(nextPathName)) {
          const endUrl = ROUTE_BASE + nextPathName;
          this.location.go(endUrl);
        }
      },
    });

    this.location.onUrlChange(onParentNavigate);
  }
}
