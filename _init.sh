#!/bin/bash

which flutter

export PATH="$HOME/dev/flutter/bin:$PATH"

flutter precache

flutter doctor

flutter channel master
flutter upgrade
flutter config --enable-web

flutter devices
