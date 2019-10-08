import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
  } from 'rxjs/operators';
import { GlobalSearchService } from '@nba/core/global-search/global-search.service';
import { NbToastrService } from '@nebular/theme';
import { Observable, of } from 'rxjs';

export abstract class Search {
    constructor(private globalSearch: GlobalSearchService,
        private toastrService: NbToastrService) {

    }

    public playerAndTeamModel = {} as PlayersAndTeams;

    search = (text$: Observable<string>) => {
        return text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            switchMap(
                (searchText) => this.globalSearch.allAutoComplete(searchText)),
            catchError((err) => of(this.toastrService.warning(`An error occurred ${err}`)))
        );
    }


    resultFormatListValue({ full_name, first_name, last_name }: PlayersAndTeams) {
        return full_name ? full_name : first_name + ' ' + last_name;
    }

    inputFormatListValue(playersAndTeams: PlayersAndTeams) {
        return this.resultFormatListValue(playersAndTeams);
    }
}
