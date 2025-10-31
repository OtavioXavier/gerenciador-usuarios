import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './core/sidebar/sidebar';
import { Footer } from './core/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    '[class.gu-sidebar--collapsed]': 'isSidebarCollapsed()'
  }
})
export class App {
  isSidebarCollapsed = signal(false);
  protected readonly title = signal('gerenciador-usuarios');

  onToggleSidebar() {
    this.isSidebarCollapsed.set(!this.isSidebarCollapsed());
  }
}
