import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registro } from './registro';

describe('Registro', () => {
  let component: Registro;
  let fixture: ComponentFixture<Registro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe iniciar con el formulario inválido', () => {
    expect(component.formulario.valid).toBe(false);
  }); 

  it('debe rechazar un correo inválido', () => {
    const email = component.formulario.controls.email;

    email.setValue('correo-malo');
    expect(email.valid).toBe(false);
  });

  it('debe rechazar una contraseña de menos de 6 caracteres', () => {
    const password = component.formulario.controls.password;

    password.setValue('123');
    expect(password.hasError('minlength')).toBe(true)
  })

  it('debe ser válido con datos correctos', () => {
    component.formulario.setValue({
      nombre: 'Luis',
      email: 'luis@gmail.com',
      password: '123456'
    });
    expect(component.formulario.valid).toBe(true)
  })
});
