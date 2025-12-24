import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/User';
import { GoBackDirective } from '../../utils/helpers';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../shared/models/Profile';
import { SparklesIllustration } from '../../shared/components/sparkles-illustration/sparkles-illustration';

@Component({
  selector: 'app-user-screen',
  imports: [GoBackDirective, SparklesIllustration],
  templateUrl: './user-screen.html',
  styleUrl: './user-screen.scss',
})
export class UserScreen implements OnInit {
  user = signal<User | null>(null);
  profiles = signal<Profile[]>([]);

  route = inject(ActivatedRoute);
  
  userService = inject(UserService);
  profileService = inject(ProfileService);

  ngOnInit(): void {
    this.getUser();
    this.getProfiles();
  }


  getUser() {
    this.route.params.subscribe(params => {
      this.userService.getUser(params['id']).subscribe(user => {
        this.user.set(user);
      });
    });
  }

  getProfiles() {
    this.profileService.getAllProfiles().subscribe(profiles => {
      this.profiles.set(profiles);
    });
  }
}
