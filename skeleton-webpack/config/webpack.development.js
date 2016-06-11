import baseWeb from './webpack.base-web';
import baseDev from './webpack.base-dev';

const config = {
  ...baseWeb,
  ...baseDev,
  plugins: [
    ...baseDev.plugins,
    ...baseWeb.plugins,
  ]
}

export default config;
