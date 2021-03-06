import Immutable from 'seamless-immutable'
import app from './app'
import pause from './pause'

const reducer = (state = initialState, action)=>{
	const _app = app(state,action)
	if (_app) state = _app

	const _pause = pause(state,action)
	if (_pause) state = _pause

	switch (action.type) {
		default:
			return state
	}
}

const initialState = Immutable({
	theme: {
		app: 'day',
		sidebar: 'day',
		auto: true
	},
	appSize: 'default',
	collectionsSearchResults: true,
	pause: ''
})

export default {
	local: reducer
}