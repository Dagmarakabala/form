import 'babel-polyfill';
import $ from 'jquery';
import 'jquery-validation';
import 'selectric';

import Form from './components/Form/Form'

$(document).ready(() => {
  // PUT LOADERS HERE
  Form.init()
  $('#citys').selectric(); 
  $('#countrys').selectric();  
  $('#education').selectric(); 
  $('.form__form').validate( {
    rules: {
      name: "required",
      surname: {
        required: true,
        minlength: 3,
      },
      phoneNumber: {
        required: true,
        minlength: 9,
      },
      email: {
        required: true,
        email: true,
      },
      city: {
        required: true,
      },
      country: {
        required: true,
      },
      work: {
        required: true,
        minlength: 5,
      },
      first: {
        required: true,
      },
      second: {
        required: true,
      }
    },
    messages: {
      name: "wpisz imie",
      surname: {
        required: "podaj nazwisko",
        minlength: "podaj nazwisko",
      },
      phoneNumber: {
        required: "podaj poprawny numer telefonu",
        minlength: "podałeś za krótki numer",
      },
      email: {
        required: "podaj poprawny email",
        email: "adres email musi zawierać @"
      },
      city: {
        required: "wybierz miasto",
      },
      country: {
        required: "wybierz kraj",
      },
      work: {
        required: "Napisz czego szukasz!",
        minlength: "Napisz trochę więcej!",
      },
      first: {
        required: "potrzebujemy twojej zgody",
      },
      second: {
        required: "potrzebujemy twojej zgody",
      }
    },
  }
  ) 
  $('.form__button').on("click", () => {
    window.setTimeout(() => {
      $('#first-error').removeClass('error'); 
      $('#first-error').addClass('-errorInCheck'); 
      $('#second-error').removeClass('error'); 
      $('#second-error').addClass('-errorInCheck'); 
    }, 500);

  })
 
});
