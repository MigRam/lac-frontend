module.exports = {
  name: 'ui-leaflet',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/leaflet',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
