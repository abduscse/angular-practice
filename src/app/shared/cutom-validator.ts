import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
    static projectNameValidation(control: FormControl): { [s: string]: boolean } {
        if (control.value === 'Test') {
            return { projectNameInvalid: true };
        } else {
            return null;
        }
    }

    static projectNameValidationAsync(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                // if (control.value === 'Test') {
                //     resolve({ projectNameInvalid: true });
                // } else {
                //     resolve(null);
                // }
                resolve(CustomValidators.projectNameValidation(control));
            }, 1000);
        });
        return promise;
    }
}
