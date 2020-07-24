import { HttpParams } from '@angular/common/http';
export class Utils {

    public static buildParams(itemsPerPage: number, page?: any) {
        return new HttpParams()
            .set('page', page)
            .set('per_page', itemsPerPage.toString());
    }

}
