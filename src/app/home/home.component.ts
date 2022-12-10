import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  book: any
  rendition: any
  displayed: any
  objectUrl: any

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  file: any;

  uploadFile = (form: NgForm) => {
    console.log(form);
    this.file = form.value.ebook;

    this.router.navigate([`reader/${this.file}`])
  }

}
