import {Validators} from '@angular/forms';

export class UserF {

  form = [
    {
      id: 'id',
      type: 'hidden',
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Entrez un email correct',
      validators: [
        Validators.required,
        Validators.email
      ]
    },
    {
      id: 'password',
      type: 'password',
      label: 'Mdp',
      validators: [
        Validators.required,
        Validators.minLength(8)
      ]
    },
    {
      id: 'lastname',
      type: 'text',
      label: 'Nom',
      placeholder: 'Nom',
      validators: [
        Validators.required,
        Validators.minLength(2)
      ]
    },
    {
      id: 'firstname',
      type: 'text',
      label: 'Prénom',
      validators: [
        Validators.required,
        Validators.minLength(2)
      ]
    },

  ];
}
