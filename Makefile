.PHONY: all

all:
	echo "not implemented";

android:
	ember cordova:build --platform=android --environment=production && \
		ember cordova run android

android-release:
	ember cordova:build --platform=android --environment=production && \
		open cordova/platforms/android/ant-build

android-logs:
	adb logcat CordovaLog:D SystemWebChromeClient:D EstimoteBeacons:D *:S

ios:
	ember cordova:build --platform=ios --environment=production && \
		open cordova/platforms/ios/*.xcodeproj
