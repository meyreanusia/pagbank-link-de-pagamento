/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
  pageExtensions: ['js', 'jsx'],
  experimental: {
    appDir: true,
  }
};
// const withTranspileModules = require('@pagseguro/ps-react-bootstrap/config/transpile-module-next');
// const sequence = (...fns) => data =>
//   fns.filter(Boolean).reduce((result, fn) => fn(result), data)

// module.exports = sequence(withTranspileModules)({
//     transpileModules: ['@pagseguro/ps-react-bootstrap']
// });


