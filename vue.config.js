
// module.exports = {
//     chainWebpack: config => {
//         if (config.plugins.has('extract-css')) {
//         const extractCSSPlugin = config.plugin('extract-css');
//         extractCSSPlugin &&
//             extractCSSPlugin.tap(() => [
//             {
//                 filename: 'build.css',
//                 chunkFilename: 'build.css'
//             }
//             ]);
//         }
//     }
// }