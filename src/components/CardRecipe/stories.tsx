import { Story, Meta } from '@storybook/react'
import CardRecipe, { CardRecipeProps } from '.'

export default {
	title: 'CardRecipe',
	component: CardRecipe,
	args: {
		title: 'Ingredientes',
		minutes: 15,
		portions: 2
	}
} as Meta

export const Index: Story<CardRecipeProps> = (args) => <CardRecipe {...args} />
