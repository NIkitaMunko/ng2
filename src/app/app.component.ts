import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { NgClass, NgForOf, NgIf } from "@angular/common";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgClass,
        NgForOf,
        NgIf
    ],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    answers = [{
        type: 'yes',
        text: 'Да'
    }, {
        type: 'no',
        text: 'Нет'
    }];

    charsCount = 5;

    form!: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            user: new FormGroup({
                email: new FormControl<string>('', {
                    validators: [Validators.required, Validators.email],
                    asyncValidators: [this.checkForEmail.bind(this)]
                }),
                pass: new FormControl<string>('', [Validators.required, this.checkForLength.bind(this)])
            }),
            country: new FormControl<string>('ru'),
            answer: new FormControl<string>('no')
        });
    }

    onSubmit() {
        console.log('Submited!', this.form);
    }

    checkForLength(control: AbstractControl): ValidationErrors | null {
        if (control.value.length <= this.charsCount) {
            return {
                'lengthError': true
            };
        }
        return null;
    }

    checkForEmail(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value === 'test@mail.ru') {
                    resolve({
                        'emailIsUsed': true
                    });
                } else {
                    resolve(null);
                }
            }, 3000);
        });
    }

    // Helper method to safely access form controls
    getControl(path: string): AbstractControl | null {
        return this.form.get(path);
    }
}
