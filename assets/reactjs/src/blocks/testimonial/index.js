import './style.scss'
import Edit from './Edit'
import Save from './Save'
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
registerBlockType('qubely/testimonial', {
    title: __('Testimonial'),
    description: 'Display testimonials from clients with Qubely Testimonials.',
    icon: <img src={qubely_admin.plugin + 'assets/img/blocks/block-testimonial.svg'} alt={__('Testimonial')} />,
    category: 'qubely',
    keywords: [__('testimonial'), __('Quote')],
    attributes: {
        uniqueId: { type: 'string', default: '' },
        spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },
        alignment: { type: 'string', default: 'center', style: [{ selector: '{{QUBELY}} .qubely-block-testimonial {text-align: {{alignment}};}' }] },

        //Name
        name: { type: 'string', default: 'JOHN DOE' },
        nameTypo: { type: 'object', default: { openTypography: 1, size: { md: 16, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-author-name' }] },
        nameSpacing: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-testimonial-author-name {margin-bottom: {{nameSpacing}};}' }] },

        //Designation
        designation: { type: 'string', default: 'WordPress Developer' },
        designationTypo: { type: 'object', default: { openTypography: 1, size: { md: 14, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-author-designation' }] },

        //Messsage
        message: { type: 'string', default: '“There’s no easier way to add innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”' },
        messagePosition: { type: 'string', default: 'top' },
        messageTypo: { type: 'object', default: { openTypography: 1, size: { md: 20, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-content' }] },
        messageSpacingTop: { type: 'object', default: { md: 0, unit: 'px' }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-content {margin-top: {{messageSpacingTop}};}' }] },
        messageSpacingBottom: { type: 'object', default: { md: 20, unit: 'px' }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-content {margin-bottom: {{messageSpacingBottom}};}' }] },

        //Avatar
        avatar: { type: 'object', default: { url: 'https://via.placeholder.com/300' } },
        avatarLayout: { type: 'string', default: 'left' },
        avatarAlt: { type: 'string', default: '' },
        avatarSize: { type: 'string', default: '64px', style: [{ condition: [{ key: 'avatarSize', relation: '!=', value: 'custom' }], selector: '{{QUBELY}} .qubely-testimonial-avatar {width: {{avatarSize}};height: {{avatarSize}};}' }] },
        avatarWidth: { type: 'object', default: { md: 120, unit: 'px' }, style: [{ condition: [{ key: 'avatarSize', relation: '==', value: 'custom' }], selector: '{{QUBELY}} .qubely-testimonial-avatar {width: {{avatarWidth}};}' }] },
        avatarHeight: { type: 'object', default: { md: 120, unit: 'px' }, style: [{ condition: [{ key: 'avatarSize', relation: '==', value: 'custom' }], selector: '{{QUBELY}} .qubely-testimonial-avatar {height: {{avatarHeight}};}' }] },
        avatarSpacing: { type: 'object', default: { md: 20, unit: 'px' }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-avatar-layout-left .qubely-testimonial-avatar {margin-right:{{avatarSpacing}};} {{QUBELY}} .qubely-block-testimonial.qubely-alignment-right .qubely-testimonial-avatar-layout-left .qubely-testimonial-avatar {margin-right: 0; margin-left: {{avatarSpacing}};} {{QUBELY}} .qubely-testimonial-avatar-layout-top .qubely-testimonial-avatar {margin-bottom:{{avatarSpacing}};}' }] },
        avatarBorderRadius: {
            type: 'object',
            default: {
                openBorderRadius: 1,
                radiusType: 'global',
                global: {md: 100},
                unit: '%'
            },
            style: [
                {selector: '{{QUBELY}} .qubely-testimonial-avatar'}
            ]
        },

        avatarBorder: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-testimonial-avatar' }] },

        //Quote
        quoteIcon: { type: 'string', default: 'fas fa-quote-left' },
        quoteIconPosition: { type: 'string', default: 'top' },
        quoteIconSize: { type: 'object', default: { md: 48, unit: 'px' }, style: [{ condition: [{ key: 'quoteIcon', relation: '!=', value: '' }], selector: '{{QUBELY}} .qubely-quote-icon {font-size: {{quoteIconSize}};}' }] },
        quoteIconColor: { type: 'string', default: '#E2E2E2', style: [{ condition: [{ key: 'quoteIcon', relation: '!=', value: '' }], selector: '{{QUBELY}} .qubely-quote-icon {color: {{quoteIconColor}};}' }] },
        quoteIconSpacing: { type: 'object', default: { md: 20, unit: 'px' }, style: [{ condition: [{ key: 'quoteIcon', relation: '!=', value: '' }], selector: '{{QUBELY}} .qubely-testimonial-quote.qubely-position-top {margin-bottom: {{quoteIconSpacing}};} {{QUBELY}} .qubely-testimonial-quote.qubely-position-bottom {margin-top: {{quoteIconSpacing}};}' }] },

        //Ratings
        ratings: { type: 'string', default: 4.5 },
        ratingsPosition: { type: 'string', default: 'bottom' },
        ratingsColor: { type: 'string', default: '#FFB800', style: [{ condition: [{ key: 'ratings', relation: '!=', value: '0' }], selector: '{{QUBELY}} .qubely-testimonial-ratings:before {color: {{ratingsColor}};} {{QUBELY}} .qubely-testimonial-ratings {color: {{ratingsColor}};}' }] },
        starsSize: { type: 'object', default: { md: 20, unit: 'px' }, style: [{ condition: [{ key: 'ratings', relation: '!=', value: '0' }], selector: '{{QUBELY}} .qubely-testimonial-ratings {font-size:{{starsSize}};}' }] },
        ratingsSpacing: { type: 'object', default: { md: 30, unit: 'px' }, style: [{ condition: [{ key: 'ratings', relation: '!=', value: '0' }], selector: '{{QUBELY}} .qubely-testimonial-ratings {margin-bottom:{{ratingsSpacing}};}' }] },

        // Design
        bgPadding: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-block-testimonial { padding:{{bgPadding}}; }' }] },
        textColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-block-testimonial { color:{{textColor}}; }' }] },
        bgColor: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-block-testimonial' }] },
        bgBorderRadius: {
            type: 'object',
            default: {
                openBorderRadius: 1,
                radiusType: 'global',
            },
            style: [{ selector: '{{QUBELY}} .qubely-block-testimonial' }]
        },

        border: { type: 'object', default: { openTy: 0, color: '#3373dc', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-block-testimonial' }] },
        boxShadow: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-block-testimonial' }] },

        showGlobalSettings: { type: 'boolean', default: true }, // Global Settings
    },
    edit: Edit,
    save: Save
});