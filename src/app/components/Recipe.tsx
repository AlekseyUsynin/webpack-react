import { ReactElement } from 'react'

// типизируем props компонента
type RecipeProps = {
	name: string
}

// указываем тип props и возвращаемое значение - ReactElement
export default function Recipe(props: RecipeProps): ReactElement {
	return (
		<section>
			<h1>{props.name}</h1>
			<h2>Ингредиенты:</h2>
			<ul className='ingredients'>
				<li>Сыр твердый - 300 г</li>
				<li>Яйцо - 1 шт.</li>
				<li>Мука - 30 г (1 ст. ложка с горкой)</li>
				<li>Масло растительное - 70 мл</li>
			</ul>
			<h2>Инструкция по приготовлению</h2>
			<ol className='instruction'>
				<li>Подготовить продукты</li>
				<li>Сыр натереть на мелкой тёрке</li>
				<li>Добавить муку, яйцо</li>
				<li>Всё перемешать</li>
				<li>Обжарить в растительном масле до золотого цвета</li>
				<li>Палочки готовы!</li>
			</ol>
		</section>
	)
}
