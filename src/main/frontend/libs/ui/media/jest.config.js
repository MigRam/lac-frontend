module.exports = {
  name: 'ui-media',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/media',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
