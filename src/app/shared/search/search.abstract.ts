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

    public playerAndTeamModel = {} as PlayerAndTeam;

    search = (text$: Observable<string>) => {
        return text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            switchMap(
                (searchText) => this.globalSearch.allAutoComplete(searchText)),
            catchError((err) => of(this.toastrService.warning(`An error occurred ${err}`)))
        );
    }


    resultFormatListValue({ name, full_name, first_name, last_name }: PlayerAndTeam) {
        name = full_name ? full_name : first_name + ' ' + last_name;
        return name;
    }

    inputFormatListValue(playersAndTeams: PlayerAndTeam) {
        return this.resultFormatListValue(playersAndTeams);
    }
}
