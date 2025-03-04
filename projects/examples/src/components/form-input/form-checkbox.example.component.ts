/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CheckBoxStyling, FormCheckboxComponent } from '@vcd/ui-components';

@Component({
    selector: 'vcd-form-checkbox-example-component',
    templateUrl: `./form-checkbox.example.component.html`,
})
export class FormCheckboxExampleComponent implements OnInit {
    formGroup = this.fb.group({
        checkboxInput: [true],
        toggleInput: [true],
        enabledDisabled: [false],
    });

    styling = CheckBoxStyling;

    @ViewChild('checkbox', { static: true }) checkboxComponent: FormCheckboxComponent;
    @ViewChild('toggleswitch', { static: true }) toggleSwitchComponent: FormCheckboxComponent;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.formGroup.controls.enabledDisabled.valueChanges.subscribe((value) => {
            const { checkboxInput, toggleInput } = this.formGroup.controls;
            [checkboxInput, toggleInput].forEach((c) => (value ? c.disable() : c.enable()));
        });
    }
}
