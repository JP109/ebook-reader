import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ePub from 'epubjs';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  @HostListener('document:keydown', ['$event'])
  keypressHandler = (event:KeyboardEvent) => {
    if(event.code == "ArrowLeft"){
      this.book.package.metadata.direction === "rtl" ? this.rendition.next() : this.rendition.prev();
    }

    if(event.code == "ArrowRight"){
      this.book.package.metadata.direction === "rtl" ? this.rendition.prev() : this.rendition.next();
    }
  }

  book: any
  rendition: any
  displayed: any

  selectedFile: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.book);
    console.log(this.rendition);

    this.selectedFile = this.route.snapshot.params['ebook']

    this.book = ePub('../../assets/the-great-gatsby.epub');
    this.rendition = this.book.renderTo("area", {flow: "paginated", width: "100%", height: "100%"});
    this.displayed = this.rendition.display();
  }

  goBack = () => {
    this.rendition.prev();
  }

  goAhead = () => {
    this.rendition.next();
  }

}
