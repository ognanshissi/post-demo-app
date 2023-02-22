import { ArticleService } from './core/services/article.service';
import { inject } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog post';

  pageIndex = 0;
  pageElement = 10;

  private _postService = inject(ArticleService);

  postList$ = this._postService.articleList$;

  loadMore() {
    const page = this.pageIndex + 1;
    this.pageElement;

    // loadMoore
  }
}
