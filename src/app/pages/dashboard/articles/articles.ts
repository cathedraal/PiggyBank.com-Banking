import { Component } from '@angular/core';
import { articlePreviewItem } from '../../../models/interfaces/articles.model';
import { ARTICLE_PREVIEW_SECTION } from '../../../constants/constants';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-articles',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: `./articles.html`,
  styleUrl: './articles.css',
})
export class ArticlesComponent {
  articles: articlePreviewItem[] = ARTICLE_PREVIEW_SECTION
}
