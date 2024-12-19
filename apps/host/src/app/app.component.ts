import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
// import { loadRemoteModule } from '@angular-architects/module-federation';
import { RouterModule } from '@angular/router';
import { LoginService } from './services/login.service';
import { CommonModule, Location } from '@angular/common';

type RouteEvent = CustomEvent<string>;

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService, private location: Location) {}
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

    const appNavigated = ({ detail }: RouteEvent) => {
      if (detail === location.pathname) {
        return;
      }
      this.location.go(detail);
    };
    window.addEventListener('remote', appNavigated as EventListener);

    this.location.onUrlChange(() => {
      if (location.pathname.startsWith('/chat')) {
        window.dispatchEvent(
          new CustomEvent('host', {
            detail: location.pathname.replace('/chat', ''),
          })
        );
      }
    });
  }

  async loadAngular(): Promise<void> {
    const m = await import('footer/Entry');
    this.angularViewContainerRef.createComponent(m.RemoteEntryComponent);
  }

  // async loadReact(): Promise<void> {
  //   await loadRemoteModule({
  //     remoteEntry: 'http://localhost:8081/remoteEntry.js',
  //     remoteName: 'marketing',
  //     exposedModule: './TestComponent',
  //   });

  //   const e = document.createElement('react-remote-test-component-element');
  //   this.reactElementRef.nativeElement.appendChild(e);
  // }

  toggle() {
    this.loginService.toggleLoggedIn();
  }
}
