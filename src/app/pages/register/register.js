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
            form_user: new Form({
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
            forms_car:[],
            form_car: new Form({
                color:{ 
                    value: '',
                    type: 'text'
                },
                reg_number:{ 
                    value: '',
                    type: 'text'
                },
                year:{ 
                    value: '',
                    type: 'text'
                },
                brand:{ 
                    value: '',
                    type: 'text'
                },
                model:{ 
                    value: '',
                    type: 'text'
                },
                currency:{ 
                    value: '',
                    type: 'text'
                },
                planting_costs:{ 
                    value: '',
                    type: 'text'
                },
                costs_per_1:{ 
                    value: '',
                    type: 'text'
                },
                car_photo:{ 
                    value: '',
                    type: 'image'
                },

            }),
            countries: [
            { id: '1', name: 'Ukraine' },
             { id: '2', name: 'Bangladesh' }, 
            ],
            loading:false,
        }
    },
    watch:{
        'form_car.year' () {
            setTimeout(()=>{
                this.form_car.year = this.form_car.year.replace(/^\D/g,'');           
            },50);
        }   
    },

    methods: {
        register() { 
            this.loading = true;
           let data = Object.assign(this.form_user.data(), this.form_car.data())
            console.log(data);
            Auth.register(data)
                .then(() => {
                    this.loading = false;
                    // Vue.router.push({
                    //     name: 'home'
                    // });
                })
                .catch((errors) => {
                    console.log(errors, ' errors register');
                    this.loading = false;
                    this.form_user.recordErrors(errors);
                    forms_car.forEach((form) => {
                        form.recordErrors(errors);    
                    });
                });
            ;

        },

        addDriverRows() {
            this.forms_car.push(this.form_car);
        },
        deleteFormCar(index) {
            this.forms_car.splice(index,1);
        },
    },
    created() {
        this.form_user.setOptions('country', this.countries.map(
            c => (
             { id: c.id, name: c.name }
            )));
    },

    components: {
        Vform: Vform,
    },
}