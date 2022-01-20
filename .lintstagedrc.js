module.exports = {
  /**
   * 如果檔案符合在.eslintignore中的條件，則顯示警告
   * warning  File ignored because of a matching ignore pattern. Use "--no-ignore" to override
   */
  'src/**/*.{ts,html}': (filenames) => {
    const src = '/src';
    const newFilsNames = filenames // 將絕對路徑改成相對路徑
      .filter((file) => file.includes(src))
      .map((file) => src + file.split(src)[1]);

    return `ng lint --fix ${newFilsNames.map((file) => `--lint-file-patterns ${file}`).join(' ')}`;
  },
};
