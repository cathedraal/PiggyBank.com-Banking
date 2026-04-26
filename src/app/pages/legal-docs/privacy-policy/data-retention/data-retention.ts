import { Component } from '@angular/core';
import { retentionDataItem } from '../../../../models/interfaces/retentionData.model';
import { RETENTION_DATA } from '../../../../constants/constants';

@Component({
  selector: 'app-data-retention',
  imports: [],
  templateUrl: './data-retention.html',
  styleUrl: './data-retention.css',
})
export class DataRetentionComponent {
  retentions: retentionDataItem[] = RETENTION_DATA
}
