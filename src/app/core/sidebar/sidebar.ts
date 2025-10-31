import { booleanAttribute, Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SidebarItem {
  label: string;
  icon: string;
  path: string;
  active: boolean;
}

@Component({
  selector: 'gu-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  host: {
    '[class.sidebar--collapsed]': 'isSidebarCollapsed()',
    '[attr.aria-expanded]': '!isSidebarCollapsed()',
  },
})
export class Sidebar {
  isSidebarCollapsed = input(false, { transform: booleanAttribute });
  readonly onToggleSidebar = output<void>();

  itensList: SidebarItem[] = [
    {
      label: 'Dashboard',
      icon: 'pie-chart-fill',
      path: '/dashboard',
      active: false,
    },
    {
      label: 'Usuários',
      icon: 'person-lines-fill',
      path: '/users',
      active: false,
    },
  ];
}
