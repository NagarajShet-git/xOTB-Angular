const padding = '8px';

const text_color = 'rgba(0, 0, 0, 0.65)';

const border_color = '#dddbda';

const highlight_color = '#f5222d';

const heading_color = '#1890ff';

const input_bg = 'red';

export const theme = {
  // Colors
  'primary-color': '#1890ff', // primary color for all components
  'link-color': '#1890ff', // link color
  'success-color': '#52c41a', // success state color
  'warning-color': '#faad14', // warning state color
  'error-color': '#f5222d', // error state color

  // Fonts
  'font-size-base': '14px', // major text font size
  'heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
  'text-color': text_color, // major text color
  'text-color-secondary': 'rgba(0, 0, 0, .45)', // secondary text color
  'disabled-color': 'rgba(0, 0, 0, .25)', // disable state color
  'border-radius-base': '4px', // major border radius
  'border-color-base': '#d9d9d9', // major border color
  'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // major shadow for layers

  // Input
  'input-border-color': border_color,
  'input-border-radius': '.25rm',
  'input-background-color': '#fff',
  'input-border': '1px solid',
  'input-width': '100%',
  'input-transition': 'border .1s linear,background-color .1s linear',
  'input-display': 'inline-block',
  'input-padding': '0 1rem 0 .75rem',
  'input-line-height': '1.875rem',
  'input-min-height': 'calc(1.875rem + (1px * 2))',

  // Form
  // ---
  'label-required-color': highlight_color,
  'label-color': heading_color,
  'form-warning-input-bg': input_bg,
  'form-item-margin-bottom': '24px',
  'form-item-trailing-colon': true,
  'form-vertical-label-padding': '0 0 8px',
  'form-vertical-label-margin': 0,
  'form-error-input-bg': input_bg,
  'form-field-host-padding': padding,
  'form-element__label__color': '#3e3e3c'
};
