/**
 * ========
 * Regisfter
 * ========
 * THe page for the register user
 */

import Vue from 'vue';
import Auth from './../../services/auth'; 
import Form from './../../utils/forms/forms';
import Vform from './../../components/form/form.vue';

export default { 
    data() {
        return {
            form: new Form({
                first_name: {
                    value: '',
                    type: 'text'
                },
                last_name: {
                    value: '',
                    type: 'text'
                },
                phone: {
                    value: '',
                    type: 'email'
                },
                country: {
                    value: '',
                    type: 'select'
                },
                password: {
                    value: '',
                    type: 'password'
                },
                confirm_password: {
                    value: '',
                    type: 'password'
                },
            }),
            driverRows: {
                color: 'string'
            },
            countries: [
            { id: '1', name: 'Ukraine' },
             { id: '2', name: 'Bangladesh' }, 
            ]
        }
    },
    methods: {
        register() { 
            this.form.loading = true; 
            console.log(this.form.data());
            Auth.registerUser(this.form.data())
                .then(() => {
                    // Vue.router.push({
                    //     name: 'home'
                    // });
                })
                .catch((errors) => {
                    console.log(errors, ' errors register');
                    this.form.loading = false;
                    this.form.recordErrors(errors);
                })
        },

        addDriverRows() {
            this.form.fields = Object.assign(this.form.fields, this.driverRows);
           this.form.color = '';
            console.log(this.form);
        }
    },
    created() {
        this.form.setOptions('country', this.countries.map(
            c => (
             { id: c.id, name: c.name }
            )));
    },

    components: {
        Vform: Vform,
    },
}