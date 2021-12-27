import { Story, Meta } from '@storybook/react'
import InformationRecipe, { InformationRecipeProps } from '.'

export default {
	title: 'InformationRecipe',
	component: InformationRecipe,
	args: {
		title: 'Ingredientes',
		minutes: 15,
		portions: 2
	}
} as Meta

export const Index: Story<InformationRecipeProps> = (args) => (
	<InformationRecipe {...args} />
)
