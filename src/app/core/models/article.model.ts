import { CommentModel } from './comment.model';


export class ArticleModel {
  id!: string;
  title!: string;
  body!: string;
  comments!: CommentModel[]
}
