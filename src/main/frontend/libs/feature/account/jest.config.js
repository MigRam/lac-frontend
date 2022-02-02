module.exports = {
  name: 'feature-account',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/account',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
