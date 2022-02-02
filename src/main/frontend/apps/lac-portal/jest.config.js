module.exports = {
  name: 'lac-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/lac-portal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
