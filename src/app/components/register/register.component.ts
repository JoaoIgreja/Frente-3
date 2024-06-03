import { Component } from '@angular/core';
import { Curator } from 'src/app/interfaces/curator';
import { CuratorSerice } from 'src/app/services/curator.serice';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  model: Curator = {id: undefined as unknown as string, username: '', email: '', password: ''};

  constructor(private curatorService: CuratorSerice) { }

  onSubmit(form: { valid: any; }) {
    if (form.valid) {
      this.curatorService.register(this.model).subscribe(
        response => console.log('Registration successful', response),
        error => console.log('Registration error', error)
      );
    }
  }
}
