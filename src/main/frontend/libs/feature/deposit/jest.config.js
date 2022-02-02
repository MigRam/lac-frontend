module.exports = {
  name: 'feature-deposit',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/deposit',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
