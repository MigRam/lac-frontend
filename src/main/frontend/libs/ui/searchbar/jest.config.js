module.exports = {
  name: 'ui-searchbar',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/searchbar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
