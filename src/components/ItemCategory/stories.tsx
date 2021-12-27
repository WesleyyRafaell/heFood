import { Story, Meta } from '@storybook/react'
import Category, { CategoryProps } from './index'

export default {
	title: 'Category',
	component: Category,
	args: {
		name: 'Ingredientes',
		selected: true,
		action: true
	}
} as Meta

export const Index: Story<CategoryProps> = (args) => <Category {...args} />
