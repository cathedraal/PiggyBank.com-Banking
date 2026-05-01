import { Component } from '@angular/core';
import { articlePreviewItem } from '../../../models/interfaces/default/articles.model';
import { ARTICLE_PREVIEW_SECTION } from '../../../constants/articles';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-articles',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: `./articles.html`,
  styleUrl: './articles.css',
})
export class ArticlesComponent {
  // html template
  articles: articlePreviewItem[] = ARTICLE_PREVIEW_SECTION
}
