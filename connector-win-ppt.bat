@echo off
rem ##
rem ##  slideshow -- Observe and Control Slideshow Applications
rem ##  Copyright (c) 2014 Ralf S. Engelschall <http://engelschall.com>
rem ##
rem ##  This Source Code Form is subject to the terms of the Mozilla Public
rem ##  License (MPL), version 2.0. If a copy of the MPL was not distributed
rem ##  with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
rem ##
rem ##  File:     connector-win-ppt.bat
rem ##  Purpose:  connector wrapper for Microsoft PowerPoint under Windows
rem ##  Language: COMMAND.COM
rem ##

cscript /E:JScript /NoLogo "%~dp0\connector-win-ppt.js" %*

