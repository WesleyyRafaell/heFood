import { Story, Meta } from '@storybook/react'
import BoxInformation, { BoxInformationProps } from '.'

export default {
	title: 'BoxInformation',
	component: BoxInformation,
	args: {
		title: 'Ingredientes'
	}
} as Meta

export const Default: Story<BoxInformationProps> = (args) => (
	<BoxInformation {...args} />
)
