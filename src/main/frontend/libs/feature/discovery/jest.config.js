module.exports = {
  name: 'feature-discovery',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/discovery',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
