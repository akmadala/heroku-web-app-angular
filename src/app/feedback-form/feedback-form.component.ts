import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  
  occupations = ['Student', 'Professor', 'Software Developer'];
  preferredContactMethods = ['E-mail', 'Phone'];

  model = new Feedback('xyz', 'xyz@domain.com', '123 Test St', '1998887654', 'test', 'email', 'none');

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
    this.newFeedback();
  }

  newFeedback() {
    this.model = new Feedback('', '', '', '', '', '', '');
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////
}
