module.exports = {
  name: 'feature-docs',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/docs',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
