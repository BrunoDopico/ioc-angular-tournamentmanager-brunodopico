import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('ioc-angular-tournamentmanager-brunodopico');
  public appTitle = 'Tournament Manager';
  public author = 'Bruno Dopico';
  public app_date = Date.now;
  public version = '0.1.1';
}
