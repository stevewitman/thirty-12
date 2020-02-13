module.exports = {
  name: 'ui-page-not-found',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-page-not-found',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
