export default defineNitroPlugin((nitro) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  nitro.hooks.hook('render:html', (html) => {
    // html.head.push('<link rel="stylesheet" href="xxx">')
  });
});
