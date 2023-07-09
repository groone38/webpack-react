import webpack from "webpack";

export function buildLoader(): webpack.RuleSetRule[] {
  const typscriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  };
  return [typscriptLoader, styleLoader];
}
