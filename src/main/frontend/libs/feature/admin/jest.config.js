module.exports = {
  name: 'feature-admin',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
