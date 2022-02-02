module.exports = {
  name: 'lac-av-services',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/lac-av-services',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
