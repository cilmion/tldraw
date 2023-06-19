import { T } from '@tldraw/validate'
import { StyleProp } from './StyleProp'

/** @public */
export const DefaultVerticalAlignStyle = StyleProp.defineEnum(
	'tldraw:verticalAlign',
	['start', 'middle', 'end'],
	{ defaultValue: 'middle' }
)

/** @public */
export type TLDefaultVerticalAlignStyle = T.TypeOf<typeof DefaultVerticalAlignStyle>
