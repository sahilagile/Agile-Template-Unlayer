unlayer.registerTool({
    name: 'hero_banner',
    label: 'Hero Banner',
    icon: 'fa-image',
    supportedDisplayModes: [
        'web',
        'email'
    ],
    options: {
        default: {
            image: {
                label: 'Background Image',
                default: 'https://via.placeholder.com/600x200'
            },
            title: {
                label: 'Title',
                default: 'Welcome to Our Store'
            },
            button_text: {
                label: 'Button Text',
                default: 'Shop Now'
            },
            button_url: {
                label: 'Button URL',
                default: '#'
            }
        }
    },
    renderer: {
        Viewer: function({ values }) {
            return `
          <div style="background:url(${values.image}) center / cover; padding: 30px; text-align: center; color: #fff;">
            <h1 style="font-size: 28px; margin-bottom: 20px;">${values.title}</h1>
            <a href="${values.button_url}" style="background: #000; color: #fff; padding: 12px 25px; text-decoration: none; border-radius: 4px;">
              ${values.button_text}
            </a>
          </div>
        `;
        }
    }
});

//# sourceMappingURL=Unlayer.b3502bec.js.map
