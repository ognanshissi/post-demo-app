import { CommentModel } from './../core/models/comment.model';
import { ArticleService } from './../core/services/article.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PostListModel } from '../core/models/post-list.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  @Input() post!: PostListModel;

  comments!: CommentModel[] | null;

  private _postService = inject(ArticleService);

  loadComments() {
    this._postService.getPostComments(this.post.id).subscribe(data => {
      this.comments = data;
    });
  }
}
