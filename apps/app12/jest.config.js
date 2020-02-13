module.exports = {
  name: 'app12',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app12',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
