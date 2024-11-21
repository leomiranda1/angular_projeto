import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  applyForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
      phone: [''],
      website: ['']
    });
  }

  submitUser(): void {
    console.log(this.applyForm.value); // Aqui você pode adicionar lógica para enviar os dados para a API ou serviço.
  }
}