import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => {
      console.log(data)
    });
  }

}
