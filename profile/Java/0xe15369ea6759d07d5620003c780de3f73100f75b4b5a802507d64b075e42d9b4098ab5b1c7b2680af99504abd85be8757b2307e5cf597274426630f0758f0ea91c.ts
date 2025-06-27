*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
#597d0a98ac0c2a1bd1f876dd935eacd99b64c860
Build fingerprint: 'Redmi/cloud_global/cloud:13/TP1A.220624.014/V14.0.25.0.TGOMIXM:user/release-keys'
Revision: '0'
ABI: 'arm'
Timestamp: 2025-06-27 01:36:27.972824501-0600
Process uptime: 2662s
Cmdline: com.android.chrome
pid: 5648, tid: 5648, name: .android.chrome  >>> com.android.chrome <<<
uid: 10132
signal 5 (SIGTRAP), code 1 (TRAP_BRKPT), fault addr 0xb549e2b4
    r0  53a20508  r1  53a80478  r2  b549e2b5  r3  00000000
    r4  53a80460  r5  ffffffff  r6  53a80468  r7  53a804d8
    r8  00000001  r9  7fffffff  r10 ffc2a88c  r11 ffc2a884
    ip  00000000  sp  ffc2a7e8  lr  b6945e9d  pc  b549e2b4

backtrace:
      #00 pc 00d932b4  /product/app/TrichromeLibrary/TrichromeLibrary.apk!libmonochrome.so (BuildId: 5a3926e5dab733b203e516cc875c59189243f263)
      #01 pc 0223ae9b  /product/app/TrichromeLibrary/TrichromeLibrary.apk!libmonochrome.so (BuildId: 5a3926e5dab733b203e516cc875c59189243f263)
      #02 pc 0223abef  /product/app/TrichromeLibrary/TrichromeLibrary.apk!libmonochrome.so (BuildId: 5a3926e5dab733b203e516cc875c59189243f263)
      #03 pc 03d93b77  /product/app/TrichromeLibrary/TrichromeLibrary.apk!libmonochrome.so (BuildId: 5a3926e5dab733b203e516cc875c59189243f263)
      #04 pc 03d93be5  /product/app/TrichromeLibrary/TrichromeLibrary.apk!libmonochrome.so (BuildId: 5a3926e5dab733b203e516cc875c59189243f263)
      #05 pc 03d5edd7  /product/app/TrichromeLibrary/TrichromeLibrary.apk!libmonochrome.so (Java_J_N_MmYX7nWa+56) (BuildId: 5a3926e5dab733b203e516cc875c59189243f263)
      #06 pc 00365671  /data/misc/apexdata/com.android.art/dalvik-cache/arm/boot.oat (art_jni_trampoline+88)
      #07 pc 0009f9bc  /apex/com.android.art/lib/libart.so (nterp_helper+172) (BuildId: 1bd94cb20c2b076c775ed3494b8fc388)
      #08 pc 006be824  /data/dalvik-cache/arm/product@app@Chrome@Chrome.apk@classes.vdex (org.chromium.chrome.browser.printing.TabPrinter.c+40)
      #09 pc 000a0dac  /apex/com.android.art/lib/libart.so (nterp_helper+5276) (BuildId: 1bd94cb20c2b076c775ed3494b8fc388)
      #10 pc 00589f94  /data/dalvik-cache/arm/product@app@Chrome@Chrome.apk@classes.vdex (Jz2.onWrite+228)
      #11 pc 000a0400  /apex/com.android.art/lib/libart.so (nterp_helper+2800) (BuildId: 1bd94cb20c2b076c775ed3494b8fc388)
      #12 pc 004ebb8a  /system/framework/framework.jar (android.print.PrintManager$PrintDocumentAdapterDelegate$MyHandler.handleMessage+186)
      #13 pc 0095bcf1  /data/misc/apexdata/com.android.art/dalvik-cache/arm/boot.oat (android.os.Handler.dispatchMessage+144)
      #14 pc 0095efd1  /data/misc/apexdata/com.android.art/dalvik-cache/arm/boot.oat (android.os.Looper.loopOnce+992)
      #15 pc 0095eb5d  /data/misc/apexdata/com.android.art/dalvik-cache/arm/boot.oat (android.os.Looper.loop+1044)
      #16 pc 00760f87  /data/misc/apexdata/com.android.art/dalvik-cache/arm/boot.oat (android.app.ActivityThread.main+2166)
      #17 pc 000a4775  /apex/com.android.art/lib/libart.so (art_quick_invoke_stub_internal+68) (BuildId: 1bd94cb20c2b076c775ed3494b8fc388)
      #18 pc 005acc0d  /apex/com.android.art/lib/libart.so (art_quick_invoke_static_stub+246) (BuildId: 1bd94cb20c2b076c775ed3494b8fc388)
      #19 pc 00208dff  /apex/com.android.art/lib/libart.so (art::ArtMethod::Invoke(art::Thread*, unsigned int*, unsigned int, art::JValue*, char const*)+162) (BuildId: 1bd94cb20c2b076c775ed3494b8fc388)
      #20 pc 004dd605  /apex/com.android.art/lib/libart.so (_jobject* art::InvokeMethod<(art::PointerSize)4>(art::ScopedObjectAccessAlreadyRunnable const&, _jobject*, _jobject*, _jobject*, unsigned int)+1488) (BuildId: 1bd94cb20c2b076c775ed3494b8fc388)
      #21 pc 0046cf33  /apex/com.android.art/lib/libart.so (art::Method_invoke(_JNIEnv*, _jobject*, _jobject*, _jobjectArray*) (.__uniq.165753521025965369065708152063621506277)+22) (BuildId: 1bd94cb20c2b076c775ed3494b8fc388)
      #22 pc 00364711  /data/misc/apexdata/com.android.art/dalvik-cache/arm/boot.oat (art_jni_trampoline+56)
      #23 pc 00c08adf  /data/misc/apexdata/com.android.art/dalvik-cache/arm/boot.oat (com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run+118)
      #24 pc 00c12c71  /data/misc/apexdata/com.android.art/dalvik-cache/arm/boot.oat (com.android.internal.os.ZygoteInit.main+3200)
      #25 pc 000a4775  /apex/com.android.art/lib/libart.so (art_quick_invoke_stub_internal+68) (BuildId: 1bd94cb20c2b076c775ed3494b8fc388)
      #26 pc 005acc0d  /apex/com.android.art/lib/libart.so (art_quick_invoke_static_stub+246) (BuildId: 1bd94cb20c2b076c775ed3494b8fc388)
      #27 pc 00208dff  /apex/com.android.art/lib/libart.so (art::ArtMethod::Invoke(art::Thread*, unsigned int*, unsigned int, art::JValue*, char const*)+162) (BuildId: 1bd94cb20c2b076c775ed3494b8fc388)
      #28 pc 004ded6f  /apex/com.android.art/lib/libart.so (art::JValue art::InvokeWithVarArgs<_jmethodID*>(art::ScopedObjectAccessAlreadyRunnable const&, _jobject*, _jmethodID*, std::__va_list)+362) (BuildId: 1bd94cb20c2b076c775ed3494b8fc388)
      #29 pc 003f3ad1  /apex/com.android.art/lib/libart.so (art::JNI<true>::CallStaticVoidMethodV(_JNIEnv*, _jclass*, _jmethodID*, std::__va_list)+400) (BuildId: 1bd94cb20c2b076c775ed3494b8fc388)
      #30 pc 00080453  /system/lib/libandroid_runtime.so (_JNIEnv::CallStaticVoidMethod(_jclass*, _jmethodID*, ...)+30) (BuildId: 2b714b15c83e9cdc97d64c202f5002be)
      #31 pc 00088e5d  /system/lib/libandroid_runtime.so (android::AndroidRuntime::start(char const*, android::Vector<android::String8> const&, bool)+624) (BuildId: 2b714b15c83e9cdc97d64c202f5002be)
      #32 pc 000024ed  /system/bin/app_process32 (main+936) (BuildId: 53b18348c66beb50b0d356b13e9ff772)
      #33 pc 0005c69d  /apex/com.android.runtime/lib/bionic/libc.so (__libc_init+56) (BuildId: 82f892fd1b7c9384a320c9a49d4c95fc)

memory near r0 ([anon:partition_alloc]):
    53a204e0 53a152c0 53a15320 53a15380 53a153e0  .R.S S.S.S.S.S.S
    53a204f0 53a15440 53a154a0 53a15500 53a15560  @T.S.T.S.U.S`U.S
    53a20500 53a155c0 00000000 b85fa0f0 53a11ac0  .U.S......_....S
    53a20510 00000000 53a80478 00000001 00000000  ....x..S........
    53a20520 702bfcd1 0000000a 00000000 0000009a  ..+p............
    53a20530 0000009b eaedf3c0 ec9bde80 00000000  ................
    53a20540 b85f97d8 00000002 00000000 53a66200  .._..........b.S
    53a20550 53a04208 53ad4800 53a04200 53a15770  .B.S.H.S.B.SpW.S
    53a20560 00000001 00000001 b4b03a70 53a04210  ........p:...B.S
    53a20570 53a20540 00000000 b85f97d8 00000002  @..S......_.....
    53a20580 00000000 53a66400 53a04208 53ad4800  .....d.S.B.S.H.S
    53a20590 53a04200 53a157d0 00000001 00000001  .B.S.W.S........
    53a205a0 b4b03a4c 53a04220 53a20578 00000000  L:.. B.Sx..S....
    53a205b0 b85f97d8 00000002 00000000 53a66600  .._..........f.S
    53a205c0 53a04208 53ad4800 53a04200 53a15830  .B.S.H.S.B.S0X.S
    53a205d0 00000001 00000001 b4b03ad9 53a04230  .........:..0B.S

memory near r1 ([anon:partition_alloc]):
    53a80450 00000000 00000000 00000000 00000000  ................
    53a80460 b85f9968 53a04118 53a80460 63069b68  h._..A.S`..Sh..c
    53a80470 63069b88 63069b88 b85f99f0 b85f9a14  ...c...c.._..._.
    53a80480 61777b70 61777b78 61777b78 53a04558  p{wax{wax{waXE.S
    53a80490 53a04560 53a04560 53a80498 53a80498  `E.S`E.S...S...S
    53a804a0 00000002 00000000 00000001 b85f9a30  ............0._.
    53a804b0 53ad4004 53ad400c 53a041d8 00000000  .@.S.@.S.A.S....
    53a804c0 00000001 00000000 00000000 00000000  ................
    53a804d0 702bfcd1 0000000a ffffffff 7fffffff  ..+p............
    53a804e0 00000001 00000000 00000000 53a15620  ............ V.S
    53a804f0 00000006 53a04118 b85f9950 00000100  .....A.SP._.....
    53a80500 53a20508 00000000 b88a16bc 53a040f0  ...S.........@.S
    53a80510 5d6480e0 5d648158 5d6481a0 53a041d0  ..d]X.d]..d].A.S
    53a80520 00000000 00000000 00000001 00000000  ................
    53a80530 ffffffff 00ffffff 00000000 00000000  ................
    53a80540 b85f9968 53a04200 53a80540 5d7e3630  h._..B.S@..S06~]

memory near r2 (/product/app/TrichromeLibrary/TrichromeLibrary.apk):
    b549e290 69610b00 0000e9c4 616960a0 0b03edd4  ..ai.....`ia....
    b549e2a0 0b03edc5 e9c46160 8b210003 462861e8  ....`a....!..a(F
    b549e2b0 bdb08329 de00be00 b0acb570 460d2001  ).......p.... .F
    b549e2c0 0008f88d 48114611 4478461c 68006800  .....F.H.FxD.h.h
    b549e2d0 ae02902b 0008f106 f9d1f000 46319b30  +...........0.1F
    b549e2e0 46229831 46289000 f814f000 46304604  1."F..(F.....F0F
    b549e2f0 f9d9f000 4906982b 68094479 42816809  ....+..IyD.h.h.B
    b549e300 4620bf02 bd70b02c d3f6f159 03381ce2  .. F,.p.Y.....8.
    b549e310 03381cb4 43f0e92d 4606b0f9 460d4839  ..8.-..C...F9H.F
    b549e320 447821a0 46904699 68006800 af049078  .!xD.F.F.h.hx...
    b549e330 f74d4638 7828ef2e b1409c80 0008f107  8FM...(x..@.....
    b549e340 0108f105 f9baf000 f88d2001 f10d0010  ......... ......
    b549e350 f88d000f f15d400f 9002d1c1 2198af2c  .....@].....,..!
    b549e360 f74d4638 4638ef16 d1baf15d a904ad52  8FM...8F]...R...
    b549e370 4628463a f86af000 d1b4f15d 20d84604  :F(F..j.]....F. 
    b549e380 d3acf159 46224629 f15d4633 9001d1ad  Y...)F"F3F].....

memory near r4 ([anon:partition_alloc]):
    53a80440 00000378 000003e8 7fffffff 00000000  x...............
    53a80450 00000000 00000000 00000000 00000000  ................
    53a80460 b85f9968 53a04118 53a80460 63069b68  h._..A.S`..Sh..c
    53a80470 63069b88 63069b88 b85f99f0 b85f9a14  ...c...c.._..._.
    53a80480 61777b70 61777b78 61777b78 53a04558  p{wax{wax{waXE.S
    53a80490 53a04560 53a04560 53a80498 53a80498  `E.S`E.S...S...S
    53a804a0 00000002 00000000 00000001 b85f9a30  ............0._.
    53a804b0 53ad4004 53ad400c 53a041d8 00000000  .@.S.@.S.A.S....
    53a804c0 00000001 00000000 00000000 00000000  ................
    53a804d0 702bfcd1 0000000a ffffffff 7fffffff  ..+p............
    53a804e0 00000001 00000000 00000000 53a15620  ............ V.S
    53a804f0 00000006 53a04118 b85f9950 00000100  .....A.SP._.....
    53a80500 53a20508 00000000 b88a16bc 53a040f0  ...S.........@.S
    53a80510 5d6480e0 5d648158 5d6481a0 53a041d0  ..d]X.d]..d].A.S
    53a80520 00000000 00000000 00000001 00000000  ................
    53a80530 ffffffff 00ffffff 00000000 00000000  ................

memory near r6 ([anon:partition_alloc]):
    53a80440 00000378 000003e8 7fffffff 00000000  x...............
    53a80450 00000000 00000000 00000000 00000000  ................
    53a80460 b85f9968 53a04118 53a80460 63069b68  h._..A.S`..Sh..c
    53a80470 63069b88 63069b88 b85f99f0 b85f9a14  ...c...c.._..._.
    53a80480 61777b70 61777b78 61777b78 53a04558  p{wax{wax{waXE.S
    53a80490 53a04560 53a04560 53a80498 53a80498  `E.S`E.S...S...S
    53a804a0 00000002 00000000 00000001 b85f9a30  ............0._.
    53a804b0 53ad4004 53ad400c 53a041d8 00000000  .@.S.@.S.A.S....
    53a804c0 00000001 00000000 00000000 00000000  ................
    53a804d0 702bfcd1 0000000a ffffffff 7fffffff  ..+p............
    53a804e0 00000001 00000000 00000000 53a15620  ............ V.S
    53a804f0 00000006 53a04118 b85f9950 00000100  .....A.SP._.....
    53a80500 53a20508 00000000 b88a16bc 53a040f0  ...S.........@.S
    53a80510 5d6480e0 5d648158 5d6481a0 53a041d0  ..d]X.d]..d].A.S
    53a80520 00000000 00000000 00000001 00000000  ................
    53a80530 ffffffff 00ffffff 00000000 00000000  ................

memory near r7 ([anon:partition_alloc]):
    53a804b0 53ad4004 53ad400c 53a041d8 00000000  .@.S.@.S.A.S....
    53a804c0 00000001 00000000 00000000 00000000  ................
    53a804d0 702bfcd1 0000000a ffffffff 7fffffff  ..+p............
    53a804e0 00000001 00000000 00000000 53a15620  ............ V.S
    53a804f0 00000006 53a04118 b85f9950 00000100  .....A.SP._.....
    53a80500 53a20508 00000000 b88a16bc 53a040f0  ...S.........@.S
    53a80510 5d6480e0 5d648158 5d6481a0 53a041d0  ..d]X.d]..d].A.S
    53a80520 00000000 00000000 00000001 00000000  ................
    53a80530 ffffffff 00ffffff 00000000 00000000  ................
    53a80540 b85f9968 53a04200 53a80540 5d7e3630  h._..B.S@..S06~]
    53a80550 5d7e3650 5d7e3670 b85f99f0 b85f9a14  P6~]p6~].._..._.
    53a80560 5d6880d8 5d6880dc 5d6880dc 5d624210  ..h]..h]..h].Bb]
    53a80570 5d624218 5d624218 53a80578 53a80578  .Bb].Bb]x..Sx..S
    53a80580 00000002 00000000 00000001 b85f9a30  ............0._.
    53a80590 53ad4804 53ad480c 5d6242d0 00000000  .H.S.H.S.Bb]....
    53a805a0 00000001 00000000 00000000 00000000  ................

memory near r10 ([stack]):
    ffc2a860 ffc2a888 ffc2a920 b4c30ff8 b4b08e72  .... .......r...
    ffc2a870 602edfd0 61648800 602edfd0 61648800  ...`..da...`..da
    ffc2a880 00000000 00000000 00000000 b4b08e72  ............r...
    ffc2a890 b4c30ffe 000003b8 b849eb71 53a8047c  ........q.I.|..S
    ffc2a8a0 00000001 00000100 ffc2a900 53a15620  ............ V.S
    ffc2a8b0 5e0ccfd0 ffc2a89c b85f9f10 00000000  ...^......_.....
    ffc2a8c0 b4b08e72 b4c30ffe 000003b2 b849eb0d  r.............I.
    ffc2a8d0 00000001 5eb07e30 03938700 00000000  ....0~.^........
    ffc2a8e0 73b7dedc 0000000a 73b7dedc 0000000a  ...s.......s....
    ffc2a8f0 00000000 61463400 00000000 62031400  .....4Fa.......b
    ffc2a900 61648800 00000006 00000006 00000000  ..da............
    ffc2a910 ecabde00 e6a98d00 c26fa824 b849ebe9  ........$.o...I.
    ffc2a920 602edfd0 61648800 000000af 00000004  ...`..da........
    ffc2a930 618947e0 618947e0 618947e4 00000000  .G.a.G.a.G.a....
    ffc2a940 629ba200 629ba200 629ba200 00000006  ...b...b...b....
    ffc2a950 00000006 b59dc1af 00000006 b849f8ed  ..............I.

memory near r11 ([stack]):
    ffc2a860 ffc2a888 ffc2a920 b4c30ff8 b4b08e72  .... .......r...
    ffc2a870 602edfd0 61648800 602edfd0 61648800  ...`..da...`..da
    ffc2a880 00000000 00000000 00000000 b4b08e72  ............r...
    ffc2a890 b4c30ffe 000003b8 b849eb71 53a8047c  ........q.I.|..S
    ffc2a8a0 00000001 00000100 ffc2a900 53a15620  ............ V.S
    ffc2a8b0 5e0ccfd0 ffc2a89c b85f9f10 00000000  ...^......_.....
    ffc2a8c0 b4b08e72 b4c30ffe 000003b2 b849eb0d  r.............I.
    ffc2a8d0 00000001 5eb07e30 03938700 00000000  ....0~.^........
    ffc2a8e0 73b7dedc 0000000a 73b7dedc 0000000a  ...s.......s....
    ffc2a8f0 00000000 61463400 00000000 62031400  .....4Fa.......b
    ffc2a900 61648800 00000006 00000006 00000000  ..da............
    ffc2a910 ecabde00 e6a98d00 c26fa824 b849ebe9  ........$.o...I.
    ffc2a920 602edfd0 61648800 000000af 00000004  ...`..da........
    ffc2a930 618947e0 618947e0 618947e4 00000000  .G.a.G.a.G.a....
    ffc2a940 629ba200 629ba200 629ba200 00000006  ...b...b...b....
    ffc2a950 00000006 b59dc1af 00000006 b849f8ed  ..............I.

memory near sp ([stack]):
    ffc2a7c0 53a80474 53a80460 ffffffff 53a80468  t..S`..S....h..S
    ffc2a7d0 53a804d8 b6945f17 00c2a88c 00000001  ...S._..........
    ffc2a7e0 53a804d8 b6945e7d ffc2a884 b6930bfd  ...S}^..........
    ffc2a7f0 ffc2a838 ffc2a89c ffc2a88c b6934f11  8............O..
    ffc2a800 b5f5a837 ffc2a838 00000000 b6945bf1  7...8........[..
    ffc2a810 ffc2a8b8 ffc2a88c ffc2a884 b6930bfd  ................
    ffc2a820 ffc2a88c 6306a180 00000000 b68bf727  .......c....'...
    ffc2a830 702457dc 00000000 632d3cc0 ffc2a834  .W$p.....<-c4...
    ffc2a840 61648800 ffc2a88c b6934f11 ffc2a880  ..da.....O......
    ffc2a850 ffc2a89c 61648890 ffc2a88c b849eb79  ......da....y.I.
    ffc2a860 ffc2a888 ffc2a920 b4c30ff8 b4b08e72  .... .......r...
    ffc2a870 602edfd0 61648800 602edfd0 61648800  ...`..da...`..da
    ffc2a880 00000000 00000000 00000000 b4b08e72  ............r...
    ffc2a890 b4c30ffe 000003b8 b849eb71 53a8047c  ........q.I.|..S
    ffc2a8a0 00000001 00000100 ffc2a900 53a15620  ............ V.S
    ffc2a8b0 5e0ccfd0 ffc2a89c b85f9f10 00000000  ...^......_.....

memory near lr (/product/app/TrichromeLibrary/TrichromeLibrary.apk):
    b6945e70 46302101 0778f104 f83df000 f1b82000  .!0F..x...=.. ..
    b6945e80 f8840f00 d002005c 0080f894 f8d4b328  ....\.......(...
    b6945e90 680100a0 f104688a 47900118 f3844630  ...h.h.....G0F..
    b6945ea0 2000fa37 f8842f00 bf18005c 5900e9c7  7.. ./..\......Y
    b6945eb0 e8bdb003 eb1383f0 ea820009 eb420106  ..............B.
    b6945ec0 405a0306 0101ea22 4200f04f 46192900  ..Z@"...O..B.).F
    b6945ed0 ea82bf44 17d871e1 f8d4e7c4 210100a0  D....q.........!
    b6945ee0 1080f884 688a6801 0118f104 20004790  .....h.h.....G. 
    b6945ef0 0080f884 b580e7d2 9101b082 1f04f850  ............P...
    b6945f00 1a896842 0203f10d 2101bf18 1003f88d  Bh.........!....
    b6945f10 f000a901 b002f802 b510bd80 68404604  .............F@h
    b6945f20 429868a3 7812d206 f0006809 3020f89f  .h.B...x.h.... 0
    b6945f30 bd106060 e8bd4620 f0004010 b5f0b800  ``.. F...@......
    b6945f40 4604b085 6800460d 68614616 21011a0a  ...F.F.h.Fah...!
    b6945f50 1162eb01 6f00f1b1 4623d225 f8531152  ..b....o%.#FR.S.
    b6945f60 1a387f08 77e0f64f 77fff6c7 1f20ebb1  ..8.O..w...w.. .

memory near pc (/product/app/TrichromeLibrary/TrichromeLibrary.apk):
    b549e290 69610b00 0000e9c4 616960a0 0b03edd4  ..ai.....`ia....
    b549e2a0 0b03edc5 e9c46160 8b210003 462861e8  ....`a....!..a(F
    b549e2b0 bdb08329 de00be00 b0acb570 460d2001  ).......p.... .F
    b549e2c0 0008f88d 48114611 4478461c 68006800  .....F.H.FxD.h.h
    b549e2d0 ae02902b 0008f106 f9d1f000 46319b30  +...........0.1F
    b549e2e0 46229831 46289000 f814f000 46304604  1."F..(F.....F0F
    b549e2f0 f9d9f000 4906982b 68094479 42816809  ....+..IyD.h.h.B
    b549e300 4620bf02 bd70b02c d3f6f159 03381ce2  .. F,.p.Y.....8.
    b549e310 03381cb4 43f0e92d 4606b0f9 460d4839  ..8.-..C...F9H.F
    b549e320 447821a0 46904699 68006800 af049078  .!xD.F.F.h.hx...
    b549e330 f74d4638 7828ef2e b1409c80 0008f107  8FM...(x..@.....
    b549e340 0108f105 f9baf000 f88d2001 f10d0010  ......... ......
    b549e350 f88d000f f15d400f 9002d1c1 2198af2c  .....@].....,..!
    b549e360 f74d4638 4638ef16 d1baf15d a904ad52  8FM...8F]...R...
    b549e370 4628463a f86af000 d1b4f15d 20d84604  :F(F..j.]....F. 
    b549e380 d3acf159 46224629 f15d4633 9001d1ad  Y...)F"F3F].....

memory map (7154 entries): (fault address prefixed with --->)
    0d5e4000-0d5e5fff r--         0      2000  /system/bin/app_process32 (BuildId: 53b18348c66beb50b0d356b13e9ff772) (load bias 0x1000)
    0d5e6000-0d5e6fff r-x      1000      1000  /system/bin/app_process32 (BuildId: 53b18348c66beb50b0d356b13e9ff772) (load bias 0x1000)
    0d5e7000-0d5e7fff r--      1000      1000  /system/bin/app_process32 (BuildId: 53b18348c66beb50b0d356b13e9ff772) (load bias 0x1000)
    14000000-23ffffff rw-         0  10000000  [anon:dalvik-main space (region space)]
    53a00000-53a00fff ---         0      1000  [anon:partition_alloc]
    53a01000-53a01fff rw-         0      1000  [anon:partition_alloc]
    53a02000-53a03fff ---         0      2000  [anon:partition_alloc]
    53a04000-53a26fff rw-         0     23000  [anon:partition_alloc]
    53a27000-53a27fff ---         0      1000  [anon:partition_alloc]
    53a28000-53a4afff rw-         0     23000  [anon:partition_alloc]
    53a4b000-53a4bfff ---         0      1000  [anon:partition_alloc]
    53a4c000-53a5efff rw-         0     13000  [anon:partition_alloc]
    53a5f000-53a5ffff ---         0      1000  [anon:partition_alloc]
    53a60000-53a86fff rw-         0     27000  [anon:partition_alloc]
    53a87000-53a87fff ---         0      1000  [anon:partition_alloc]
    53a88000-53a9afff rw-         0     13000  [anon:partition_alloc]
    53a9b000-53a9bfff ---         0      1000  [anon:partition_alloc]
    53a9c000-53aaafff rw-         0      f000  [anon:partition_alloc]
    53aab000-53aabfff ---         0      1000  [anon:partition_alloc]
    53aac000-53ab2fff rw-         0      7000  [anon:partition_alloc]
    53ab3000-53ab3fff ---         0      1000  [anon:partition_alloc]
    53ab4000-53ac2fff rw-         0      f000  [anon:partition_alloc]
    53ac3000-53ac3fff ---         0      1000  [anon:partition_alloc]
    53ac4000-53ad2fff rw-         0    