/*
**  slideshow -- Observe and Control Slideshow Applications
**  Copyright (c) 2014 Ralf S. Engelschall <http://engelschall.com>
**
**  This Source Code Form is subject to the terms of the Mozilla Public
**  License (MPL), version 2.0. If a copy of the MPL was not distributed
**  with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
**
**  File:     slideshow.js
**  Purpose:  high-level API
**  Language: Node/JavaScript
*/

var connector = require("./connector");

/*  the slideshow API constructor  */
var slideshow = function (application) {
    this.connector = new connector(application);
};

/*  the slideshow API methods  */
slideshow.prototype = {
    "stat":   function ()   { return this.connector.request({ command: "STAT"       }); },
    "info":   function ()   { return this.connector.request({ command: "INFO"       }); },
    "boot":   function ()   { return this.connector.request({ command: "BOOT"       }); },
    "quit":   function ()   { return this.connector.request({ command: "QUIT"       }); },
    "open":   function (fn) { return this.connector.request({ command: "OPEN " + fn }); },
    "close":  function ()   { return this.connector.request({ command: "CLOSE"      }); },
    "start":  function ()   { return this.connector.request({ command: "START"      }); },
    "stop":   function ()   { return this.connector.request({ command: "STOP"       }); },
    "black":  function ()   { return this.connector.request({ command: "BLACK"      }); },
    "normal": function ()   { return this.connector.request({ command: "NORMAL"     }); },
    "first":  function ()   { return this.connector.request({ command: "FIRST"      }); },
    "last":   function ()   { return this.connector.request({ command: "LAST"       }); },
    "goto":   function (sn) { return this.connector.request({ command: "GOTO " + sn }); },
    "prev":   function ()   { return this.connector.request({ command: "PREV"       }); },
    "next":   function ()   { return this.connector.request({ command: "NEXT"       }); }
};

/*  export the API  */
module.exports = slideshow;

