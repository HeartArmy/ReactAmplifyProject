/**
 * This file contains helpers that generate default form fields, given the
 * current Authenticator / Zero Config configuration.
 */
import { AuthMachineState, FormFields, FormFieldComponents, FormFieldsArray } from '../../../types';
/** Gets the default formFields for given route/route */
export declare const getDefaultFormFields: (route: FormFieldComponents, state: AuthMachineState) => FormFields;
/** Gets default formFields, then merges custom formFields into it */
export declare const getFormFields: (route: FormFieldComponents, state: AuthMachineState) => FormFields;
/** Calls `getFormFields` above, then sorts it into an indexed array */
export declare const getSortedFormFields: (route: FormFieldComponents, state: AuthMachineState) => FormFieldsArray;
