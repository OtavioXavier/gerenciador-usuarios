import { booleanAttribute, Component, computed, inject, input, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'gu-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '[class.header--sidebar-collapsed]': 'isSidebarCollapsed()'
  }
})
export class Header {
  isSidebarCollapsed = input(false, { transform: booleanAttribute });
  private router = inject(Router);

  currentRoute = signal<string>(this.router.url);

  constructor() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      this.currentRoute.set(event.url);
    })
  }

  routeName = computed(() => {
    const route = this.currentRoute();
    if (route === '/dashboard') return 'Dashboard';
    if (route.includes('/users')) return 'Usuários';
    return 'Não encontrado';
  });

  routeDescription = computed(() => {
    const route = this.currentRoute();
    if (route === '/dashboard') return 'Visão geral do sistema de usuários';
    if (route.includes('/users')) return 'Gerencie todos os usuários do sistema';
    return 'Não encontrado';
  });
}
