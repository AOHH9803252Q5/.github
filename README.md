#kotlin@5cc7f92559981126e61035ad6792dfa276b0df57

# SQLite build scripts for Android

This build scripts generate the following SQLite artifacts for Android:

* Statically Linked CLI
  * sqlite3-static

* Static Library
  * libsqlite3.a

* Dynamically Linked CLI
  * sqlite3-dynamic

* Dynamically Linked Shared Object Library
  * libsqlite3.so

## Configure your environment

* Get Android NDK and configure your environment so the command `ndk-build`
  can be found in the PATH. This is a build dependency and is necessary to
  cross-compile and build Android Native Code Applications:

https://developer.android.com/ndk/downloads/index.html

## Update SQLite version if needed

* No download is necessary, Makefile will take care of that for you. Use the
  download link only to choose any `sqlite-amalgamation` version number and year:

http://www.sqlite.org/download.html

* Update Makefile with desired SQLite version and corresponding year. This will
  be used to build the full download URL from SQLite site.

```bash
  vi Makefile

  ...

  SQLITE_VERSION ?= 3160100
  SQLITE_YEAR    ?= 2017
  ...
```

## Build/Compile

* Make CLI and Library

```bash
  make clean
  make

  * Expected output

  [armeabi] Compile thumb  : sqlite3-static-cli <= shell.c
  [armeabi] Compile thumb  : sqlite3-static-cli <= sqlite3.c
  [armeabi] Compile thumb  : sqlite3-a <= sqlite3.c
  [armeabi] StaticLibrary  : libsqlite3.a
  [armeabi] Executable     : sqlite3-static
  [armeabi] Install        : sqlite3-static => libs/armeabi/sqlite3-static

  [armeabi] Compile thumb  : sqlite3-dynamic-cli <= shell.c
  [armeabi] Compile thumb  : sqlite3-dynamic-cli <= sqlite3.c
  [armeabi] Compile thumb  : sqlite3-so <= sqlite3.c
  [armeabi] SharedLibrary  : libsqlite3.so
  [armeabi] Executable     : sqlite3-dynamic
  [armeabi] Install        : sqlite3-dynamic => libs/armeabi/sqlite3-dynamic
  [armeabi] Install        : libsqlite3.so => libs/armeabi/libsqlite3.so
```

## Artifacts

* CLI

```bash
  libs/armeabi/sqlite3-static
  libs/armeabi/sqlite3-dynamic
```

* Library

```bash
  obj/local/armeabi/libsqlite3.a
  libs/armeabi/libsqlite3.so
```

* You may now push SQLite to your Android device

```bash
  adb push libs/armeabi/sqlite3-static /sdcard/sqlite3
  adb shell
  mv /sdcard/sqlite3 /data/local/
  chmod 755 /data/local/sqlite3
  /data/local/sqlite3 -help
```

Note that paths and permissions may vary in your Android device or environment.

Happy hacking!
