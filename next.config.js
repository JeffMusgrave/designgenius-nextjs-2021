module.exports = {
  webpack: (config, options) => {
    config.experiments = {
      topLevelAwait: true,
    };

    // Add the simple-react-lightbox package to the webpack resolution
    config.resolve.alias["@hueyyeng/simple-react-lightbox"] = path.resolve(
      __dirname,
      "packages/@hueyyeng/simple-react-lightbox"
    );

    return config;
  },
  transpilePackages: ["@hueyyeng/simple-react-lightbox"],
};
