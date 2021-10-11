let selectedAnnotation = null;
let focusedWindow = null;
var listener = () => {
	state = mirador.store.getState();
	if ('selectedAnnotationId' in state.windows[state.workspace.focusedWindowId] && typeof state.windows[state.workspace.focusedWindowId].selectedAnnotationId !== 'undefined' && focusedWindow === state.workspace.focusedWindowId && selectedAnnotation !== state.windows[state.workspace.focusedWindowId].selectedAnnotationId) {
		t = state.windows[state.workspace.focusedWindowId].selectedAnnotationId.split('/')
		mirador.store.dispatch(Mirador.actions.deselectAnnotation(focusedWindow, state.windows[state.workspace.focusedWindowId].selectedAnnotationId));
		mirador.store.dispatch(Mirador.actions.addWindow({manifestId: 'https://alecvandenbroeck.github.io/Altaarretabel-demo/Lam_gods_manifest.json'}));
		mirador.store.dispatch(Mirador.actions.setCanvas(state.workspace.focusedWindowId ,'http://127.0.0.1:8887/canvas/p' + t[t.length -1]));
	}
	focusedWindow = state.workspace.focusedWindowId;
	if ('selectedAnnotationId' in state.windows[state.workspace.focusedWindowId]) {
		selectedAnnotation = state.windows[state.workspace.focusedWindowId].selectedAnnotationId;
	}
	else {
		selectedAnnotation = null;
	}
};

mirador.store.subscribe(listener);
