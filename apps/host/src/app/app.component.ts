import {
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'host';

  // to render the react web component
  @ViewChild('reactElementRef', { read: ElementRef, static: true })
  reactElementRef!: ElementRef;

  // use a view container to instantiate the remote angular component
  @ViewChild('angularViewContainerRef', { read: ViewContainerRef })
  angularViewContainerRef!: ViewContainerRef;

  //  // to render the vue web component
  //  @ViewChild("vueElementRef", { static: true })
  //  vueElementRef!: ElementRef;

  //  constructor(private renderer: Renderer2) {

  //  }

  async loadAngular(): Promise<void> {
    const m = await import('angularRemote/EntryComponent');
    const ref = this.angularViewContainerRef.createComponent(
      m.RemoteEntryComponent
    );
  }

  async loadReact(): Promise<void> {
    const { mount } = await loadRemoteModule({
      remoteEntry: 'http://localhost:8081/remoteEntry.js',
      remoteName: 'marketing',
      exposedModule: './TestComponent',
    });
    mount();
    const e = document.createElement('react-remote-test-component-element');
    this.reactElementRef.nativeElement.appendChild(e);
  }
}
