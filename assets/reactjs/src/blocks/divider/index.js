import './style.scss'
import Edit from './Edit'
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
import Save from './Save';

registerBlockType ( 'qubely/divider', {
    title: __( 'Divider' ),
    description: 'Use beautiful pre-designed dividers with Qubely Divider.',
	icon: <img src={qubely_admin.plugin+'assets/img/blocks/block-divider.svg'} alt={__('Divider Block')}/>,
    category: 'qubely',
    keywords: [ __( 'Divider' ), __( 'Separator' ) ],
    attributes: {
		uniqueId:{ type: 'string', default: '' }, 
		spacer: { type: 'object', default:{spaceTop: { md: '10', unit: "px"}, spaceBottom: { md: '10', unit: "px"}}, style: [{ selector: '{{QUBELY}}' }] },
        style: { type: 'string', default: 'slash' },
		color: { type: 'string', default: '#252525', style: [{ selector: '{{QUBELY}} .qubely-block-divider > div { border-top-color: {{color}}; } {{QUBELY}} .qubely-block-divider path { fill: {{color}}; }' }] },
		height: { type: 'object', default: {md: '2', unit: 'px'}, style: [{ selector: '{{QUBELY}} .qubely-block-divider > div { border-top-width: {{height}};}' }] }, 
		width: { type: 'object', default: {md: '280', unit: 'px'}, style: [{ selector: '{{QUBELY}} .qubely-block-divider > div { width: {{width}};} {{QUBELY}} .qubely-block-divider svg { width: {{width}};}' }] },
		alignment: { type: 'object', default: {md: 'center'}, style: [{ selector: '{{QUBELY}} .qubely-block-divider {text-align: {{alignment}};}' }]},
		showGlobalSettings: { type: 'boolean', default: true },  // Global Settings
    },
    edit: Edit,
    save: Save,
});
