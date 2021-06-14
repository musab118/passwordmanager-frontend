import { Component, Injectable, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams,HttpResponse} from '@angular/common/http';
import {Observable, throwError } from 'rxjs'
import {catchError, retry } from 'rxjs/operators'
import { Config } from 'protractor';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

@Injectable()
export class LoginFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this.baseUrl).subscribe(data =>{
      console.log(data)
    })
  }

  // Global variables
  baseUrl = "localhost:8080/api/v1/user";
  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }

    


  loginHandler(f:NgForm){

  let username = f.value.username; 
    // Add logic to pass into spring backend


    
  if(!f.valid){
 

  }else {
    console.log(f.value)

  }
  
    

  }




}
