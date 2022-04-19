import { FormFields, FormFieldsArray } from '../../../types';
/** Applies translations to label and placeholder */
export declare const applyTranslation: (formFields: FormFields) => FormFields;
/** Sorts formFields according to their `order`.  */
export declare const sortFormFields: (formFields: FormFields) => FormFieldsArray;
/** Applies defaultFormFields value into customFormFields */
export declare const applyDefaults: (defaultFormFields: FormFields, customFormFields?: FormFields) => FormFields;
