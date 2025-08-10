unlayer.registerTool({
  name: 'my_tool',
  label: 'My Tool',
  icon: 'fa-smile',
  supportedDisplayModes: ['web', 'email'],
  options: {
    colors: {
      title: 'Colors',
      position: 1,
      collapsed: false,
      options: {
        textColor: {
          label: 'Text Color',
          defaultValue: '#FF0000',
          widget: 'color_picker',
        },
        backgroundColor: {
          label: 'Background Color',
          defaultValue: '#FF0000',
          widget: 'color_picker',
        },
      },
    },
    content: {
      title: 'Content',
      position: 2,
      collapsed: false,
      options: {
        text: {
          label: 'Text',
          defaultValue: 'I am a custom tool.',
          widget: 'rich_text', // Use rich text editor
        },
      },
    },
  },
  values: {
    text: 'I am a custom tool.',
    textColor: '#FFF',
    backgroundColor: '#FF0000'
  },
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return `<div style="color: ${values.textColor}; background-color: ${values.backgroundColor}; padding: 10px;">
                  ${values.text}
                </div>`;
      },
    }),
    exporters: {
      web: function (values) {
        return `<div style="color: ${values.textColor}; background-color: ${values.backgroundColor}; padding: 10px;">
                  ${values.text}
                </div>`;
      },
      email: function (values) {
        return `<div style="color: ${values.textColor}; background-color: ${values.backgroundColor}; padding: 10px;">
                  ${values.text}
                </div>`;
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
  validator(data) {
    const { values } = data;
    const errors = [];
    if (!values.text || values.text.trim() === '') {
      errors.push({
        property: 'text',
        message: 'Text cannot be empty.',
      });
    }
    return errors;
  },
});
