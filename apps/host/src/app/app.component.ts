import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { RouterModule } from '@angular/router';
import { LoginService } from './services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService) {}
  title = 'host';
  login = this.loginService.isLoggedIn;

  // to render the react web component
  @ViewChild('reactElementRef', { read: ElementRef, static: true })
  reactElementRef!: ElementRef;

  // use a view container to instantiate the remote angular component
  @ViewChild('angularViewContainerRef', { read: ViewContainerRef })
  angularViewContainerRef!: ViewContainerRef;

  //  // to render the vue web component
  //  @ViewChild("vueElementRef", { static: true })
  //  vueElementRef!: ElementRef;

  ngOnInit(): void {
    window.localStorage.setItem('test', 'foo');
  }

  async loadAngular(): Promise<void> {
    const m = await import('angularRemote/EntryComponent');
    this.angularViewContainerRef.createComponent(m.HomeComponent);
  }

  async loadReact(): Promise<void> {
    await loadRemoteModule({
      remoteEntry: 'http://localhost:8081/remoteEntry.js',
      remoteName: 'marketing',
      exposedModule: './TestComponent',
    });

    const e = document.createElement('react-remote-test-component-element');
    this.reactElementRef.nativeElement.appendChild(e);
  }

  toggle() {
    this.loginService.toggleLoggedIn();
  }
}
