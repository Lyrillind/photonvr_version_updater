import AV from 'leancloud-storage';

const appId = 'VPVzwjElxgAwTwJBbdEwoMlx-gzGzoHsz';
const appKey = 'h9XawPpBQqLHEMj7eDFfVIU5';
AV.init({ appId, appKey });

const versionNumber = '0.8.37b';

const Version = AV.Object.extend('EditorVersions');
const newVersion = new Version();
newVersion.set('version', versionNumber);
newVersion.set('linkMacOS', `http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20${versionNumber}.pkg`);
newVersion.set('linkWin32', `http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20Setup%20${versionNumber}-ia32.exe`);
newVersion.set('linkWin64', `http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20Setup%20${versionNumber}-x64.exe`);
newVersion.set('linkBaiduMacOS', 'https://pan.baidu.com/s/1boEyIBH');
newVersion.set('linkBaiduWin32', 'https://pan.baidu.com/s/1qYCm9as');
newVersion.set('linkBaiduWin64', 'https://pan.baidu.com/s/1slpjW9v');
newVersion.set('macSize', '374.79 MB');
newVersion.set('win32Size', '287.84 MB');
newVersion.set('win64Size', '299.80 MB');
newVersion.set('releaseNote', '紧急更新：修正了在关闭编辑器时可能导致项目文件损坏的问题。同时增加了项目文件自动备份的功能。建议所有用户更新。');

newVersion.save().then((ver) => {
  console.log(`${ver.id} saved!`)
});
