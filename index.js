module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

module.exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#ECEFF1',
    backgroundColor: 'rgba(38,50,56,.6)',
    borderColor: 'rgba(38,50,56,.9)',
    cursorColor: 'rgba(0, 150, 136, .5)',
    colors: {
      black: '#263238',
      red: '#FF5252',
      green: '#9CCC65',
      yellow: '#fee94e',
      blue: '#2b98f0',
      magenta: '#b38bfc',
      cyan: '#68b6f3',
      white: '#ECEFF1',
      lightBlack: '#617d8a',
      lightRed: '#fc625d',
      lightGreen: '#9CCC65',
      lightYellow: '#fee94e',
      lightBlue: '#2b98f0',
      lightMagenta: '#b38bfc',
      lightCyan: '#68b6f3',
      lightWhite: '#ffffff'
    },
    css: `
      ${config.css || ''}
      .hyper_main {
        border: none !important;
      }
      .header_header {
        background: rgba(34,45,50,.5) !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_textActive {
        border-bottom: 2px solid #009688;
      }

			.terms_terms {
				 background-color: rgb(38,50,56);
			}

      .splitpane_divider {
        background-color: rgba(170, 187, 195, 0.16) !important;
      }
    `
  })
}
