module.exports = {
  name: 'ui-icons',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/icons',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
