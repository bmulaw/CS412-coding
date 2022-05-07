import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  volunteerForm !: FormGroup;
  countryCapital : string = ""; 
  country : string = "";

  constructor(private service : AppServiceService, private fb : FormBuilder){
  
  }

  ngOnInit(){
    this.initializeForm();
  }

  getDataFromAPI(country: string){
    this.service.getCapital(country).subscribe((res) => {
      let json = JSON.parse(JSON.stringify(res))
      console.log('response', json.capital)
      this.countryCapital = json.capital;
    }, (err) => {
      console.log('error', err)
    })
  }

  initializeForm() : void {
    this.volunteerForm = this.fb.group({
      country: ''
    })
  }

  onSumbit(): void {
    console.log(this.volunteerForm);
    let country: string = this.volunteerForm.value.country;
    this.country = country;
    this.getDataFromAPI(country);
    this.volunteerForm.reset();
  }

  get references(): FormArray {
    return this.volunteerForm.get('references') as FormArray;
  }
}
