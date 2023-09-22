import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StyleService } from 'src/app/_services/style.service';
import { LOAD_STYLE, loadStyleSuccess } from './style.actions';
import { EMPTY, catchError, exhaustMap, map } from 'rxjs';

@Injectable()
export class StyleEffects {
  constructor(private action$: Actions, private styleService: StyleService) {}
  loadStyle$ = createEffect(() =>
    this.action$.pipe(
      ofType(LOAD_STYLE),
      exhaustMap(() =>
        this.styleService.getStyle().pipe(
          map((styles) => {
            return loadStyleSuccess({ style: styles });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
