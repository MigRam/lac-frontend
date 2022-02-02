module.exports = {
  name: 'lac-deposit',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/lac-deposit',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
