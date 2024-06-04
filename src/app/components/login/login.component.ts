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
      this.curatorService.login(this.model).subscribe(
        response => console.log('Login successful', response),
        error => console.log('Login error', error)
      );
    }
  }

}
