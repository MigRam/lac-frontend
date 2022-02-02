module.exports = {
  name: 'ui-pipes',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/pipes',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
