import ErrorBoundary from './components/ErrorBoundary'
import Recipe from './components/Recipe'

export const App = () => {
	return (
		<ErrorBoundary>
			<Recipe name='Сырные палочки' />
		</ErrorBoundary>
	)
}
