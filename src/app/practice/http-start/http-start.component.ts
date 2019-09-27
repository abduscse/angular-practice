import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-start',
  templateUrl: './http-start.component.html',
  styleUrls: ['./http-start.component.css']
})
export class HttpStartComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFectching = false;
  error = null;
  errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit() {
    this.onFetchPosts();
    this.errorSub = this.postService.error.subscribe(
      (errorMessage) => {
        this.error = errorMessage;
      });
  }

  onCreatePost(postData: Post) {
    this.postService.onCreatePost(postData);
  }

  onFetchPosts() {
    this.isFectching = true;
    this.postService.onFetchPosts().subscribe(
      posts => {
        this.loadedPosts = posts;
        this.isFectching = false;
      },
      error => {
        this.error = error.message;
        this.isFectching = false;
        // console.log(error);
      });
  }

  onClearPosts() {
    this.postService.onClearPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
  onOkay() {
    this. error = null;
  }
  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

}
