import {CanDeactivateFn} from '@angular/router';

export const canDeactivateTestGuard: CanDeactivateFn<unknown> = (
    _component,
    currentRoute,
    currentState,
    nextState,
) => {
    // eslint-disable-next-line no-console
    console.log(currentRoute, currentState, nextState);

    // eslint-disable-next-line no-restricted-globals, no-alert
    return confirm('Вы хотите покинуть на данную страницу?');
};
