import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Search } from './search.abstract';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent extends Search {

}
