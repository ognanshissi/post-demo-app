import { CommentModel } from './../models/comment.model';
import { PostListModel } from './../models/post-list.model';
import { map } from 'rxjs/operators';
import { ArticleModel } from './../models/article.model';
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private _http = inject(HttpClient);

  articleList$ = this._http.get<PostListModel[]>(`https://jsonplaceholder.typicode.com/posts?_limit=10`).pipe(
    map(data => data.map(datum => {
      return {
        title: datum.title,
        body: datum.body,
        id: datum.id
      }
    }))
  );

  getPostComments(postId: string) {
    return this._http.get<CommentModel[]>(`https://jsonplaceholder.typicode.com/comments`).pipe(
      map(data => data.filter(datum => +datum.postId === +postId))
    )
  }

}
