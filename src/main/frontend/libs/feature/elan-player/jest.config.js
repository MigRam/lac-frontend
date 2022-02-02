module.exports = {
  name: 'feature-elan-player',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/elan-player',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
