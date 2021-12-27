import { Story, Meta } from '@storybook/react'
import Header, { HeaderProps } from './index'

export default {
	title: 'Header',
	component: Header
} as Meta

export const Index: Story<HeaderProps> = (args) => <Header {...args} />
