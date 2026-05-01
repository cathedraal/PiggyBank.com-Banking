import { Component } from '@angular/core';
import { retentionDataItem } from '../../../../models/interfaces/default/retentionData.model';
import { RETENTION_DATA } from '../../../../constants/legal';

@Component({
  selector: 'app-data-retention',
  imports: [],
  templateUrl: './data-retention.html',
  styleUrl: './data-retention.css',
})
export class DataRetentionComponent {
  retentions: retentionDataItem[] = RETENTION_DATA
}
