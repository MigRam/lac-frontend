module.exports = {
  name: 'ui-material-design',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/material-design',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
