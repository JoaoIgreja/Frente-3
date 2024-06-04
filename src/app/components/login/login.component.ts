import { Component } from '@angular/core';
import { Curator } from 'src/app/interfaces/curator';
import { CuratorSerice } from 'src/app/services/curator.serice';

@Component({
  selector: 'app-component-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model: Curator = {id: undefined as unknown as string, username: '', email: '', password: ''};

  constructor(private curatorService: CuratorSerice) { }

  onSubmit(form: { valid: any; }) {
    if (form.valid) {
      const token = this.curatorService.login(this.model).subscribe({
        next: response => console.log('Login successful', response),
        error: error => console.log('Login error', error)
      });

      console.log('Token', token);
    }
  }

}
