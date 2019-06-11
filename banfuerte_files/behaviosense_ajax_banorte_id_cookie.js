//banorte_v20180212
var Monitor = function () {
    this.init();
};

Monitor.prototype = {

    isOpera: !! window.opera || navigator.userAgent.indexOf(" OPR/")>= 0,
    isFirefox: typeof InstallTrigger !== "undefined", // Firefox 1.0+
    isSafari: Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")> 0,
    isChrome: !! window.chrome /*&& !this.isOpera*/, // Chrome 1+
    isIE9: /(MSIE 9.0)/g.test(navigator.userAgent),
    isIE10: navigator.userAgent.toString().toLowerCase().indexOf("trident/6")> -1,
    isIE11: !(window.ActiveXObject) && "ActiveXObject" in window,
    isIE: /(MSIE)/g.test(navigator.userAgent),
    isIOS: /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
    isAndroid: (/android (\d+)/i.test(window.navigator.userAgent)),
    isFirefox: (/firefox/i.test(window.navigator.userAgent)),
    hasFallbackListeners: false,
    navigating: false,
	submiting: true,
    collectorEndpoint: "https://banorte.behaviosec.com/BehavioSenseAPI/GetAjaxAsync",
    metaNames: {
        journeyid: "bwjourid",
        userid: "bwuuid",
        sessionid: "bwsessid",
        notes: "bwnotes",
        pageId: "bwpageid"
    },
    sendOnLoad: "sendonload_page",
    behavioData: [],
	behavioIntegrity: [],
    anonMap: [],
    syncTimeout: 2000,
    startTimestamp: new Date().getTime(),
    lastViewport: [-1, -1],
    lastTarget: null,
    hasSent: false,
    behavio_hidden: null,
    ignoreFields: [], // [FIELDNAME1, FIELDNAME2, FIELDNAME3 ETC]
    haveMouse: true,
    lastKey: -1,
    textLengths: {},
    behavioweb_config: {
        anonymous: {
            by_name: [],
            by_id: [],
            by_type: ["password"]
        }
    },
    e: {
        ptype: null,
        ptypes: {},
        k229: 0,
        kn: 0
    },
    init: function () {
        var goodToGoInterval = setInterval(function () {
            if (document.readyState === "complete") {
                bw.startMonitor();
                this.initialized = true;
                clearInterval(goodToGoInterval);
            }
        }, 10);
    },
    createCORSRequest: function (method, url, async) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            // XHR for Chrome/Firefox/Opera/Safari modern IE.
            xhr.open(method, url, true);
            xhr.setRequestHeader("Content-Type", "text/plain");
        } else if (typeof XDomainRequest != "undefined") {
            // XDomainRequest for IE.
            xhr = new XDomainRequest();
            xhr.open(method, url, true);
        } else if (typeof ActiveXObject != "undefined") {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            // CORS not supported.
            xhr = null;
        }
        if (xhr !== null && typeof xhr.setRequestHeader !== "undefined") {
            xhr.setRequestHeader("Content-Type", "text/plain");
        }
        return xhr;
    },
    prepHttpStr: function (options) {
        var retStr = "";
        if (!(options.data.journeyid === "" || typeof options.data.journeyid === "undefined")) {
            retStr += "journeyid=" + encodeURIComponent(options.data.journeyid);
        }
        if (!(options.data.sessionid === "" || typeof options.data.sessionid === "undefined")) {
            retStr += "&sessionid=" + encodeURIComponent(options.data.sessionid);
        }
        if (!(options.data.userid === "" || typeof options.data.userid === "undefined")) {
            retStr += "&userid=" + encodeURIComponent(options.data.userid);
        }
        retStr += "&notes=" + encodeURIComponent(options.data.notes);
        if (typeof options.data.behavioData !== "undefined") {
            retStr += "&data=" + encodeURIComponent(JSON.stringify(options.data.behavioData));
        }
        return retStr;
    },
    ajax: function (options) {
        var ok = false;
        if (navigator.sendBeacon) {
            ok = navigator.sendBeacon(bw.collectorEndpoint, bw.prepHttpStr(options));
        }
        if (!ok) {
            var xhr = bw.createCORSRequest("post", bw.collectorEndpoint, true);
            bw.httpStr = bw.prepHttpStr(options);
            if (bw.isIOS || bw.isIE11 || bw.isIE10) {
                xhr.send(bw.httpStr);
            } else {
                setTimeout(function () {
                    xhr.send(bw.httpStr);
                }, 0);
            }
        }
		bw.reset();
		bw.hasSent = false;
    },
    getMeta: function(metaName) {
        var a;
        var b;
        var retVal = "";
        for (b = document.getElementsByTagName("meta"), a = 0; a < b.length; a++) {
            if (metaName == b[a].name || metaName == b[a].getAttribute("property")) { 
                retVal = b[a].content; 
            }
        }
        return retVal;
    },
    getBehavioData: function () {
        if (typeof this.behavioData == "object") {
            this.behavioData.push(["w", bw.getDataIntegrity(), bw.getPath()]);
            return this.behavioData;
        } else {
            return false;
        }
    },
    submitHandler: function (e) {

        if (!bw.hasSent) {
            bw.hasSent = true;
            bw.navigating = false;
            var ajaxData = bw.getAjaxData();

            if (bw.isIE) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
                var otarget = e.target || e.srcElement;
                e.returnValue = false;

                setTimeout(function () {
                    otarget.submit();
                }, 150);

                bw.ajax({
                    data: ajaxData
                });
                return false;
            } else {
                bw.ajax({
                    data: ajaxData
                });
            }
        } else {
            return true;
        }
    },
    navigateHandler: function () {
        if (bw.navigating && !bw.hasSent) {
            bw.hasSent = true;

            var ajaxData = bw.getAjaxData();

			bw.ajax({
				data: ajaxData
			});

        } else {
            return true;
        }
    },
    addKeyEvent: function (target, monitorType, data) {
        var i;
        var l;
        for (i = this.behavioData.length - 1; i>= -1; i--) {
            if (i === -1) {
                if (this.behavioData[0] == null) {
                    this.behavioData[0] = [];
                    if (monitorType === "a") {
                        this.behavioData[0][0] = "fa";
                    } else if (monitorType === "n") {
                        this.behavioData[0][0] = "f";
                    }
                    this.behavioData[0][1] = target;
                    this.behavioData[0][2] = [];
                    this.behavioData[0][2][0] = data;
                } else {
                    l = this.behavioData.length;
                    this.behavioData[l] = [];
                    if (monitorType === "a") {
                        this.behavioData[l][0] = "fa";
                    } else if (monitorType === "n") {
                        this.behavioData[l][0] = "f";
                    }
                    this.behavioData[l][1] = target;
                    this.behavioData[l][2] = [];
                    this.behavioData[l][2][0] = data;
                }
                break;
            } else {
                if (monitorType === "a") {
                    if (this.behavioData[i][0] !== "fa") {
                        continue;
                    }
                } else if (monitorType === "n") {
                    if (this.behavioData[i][0] !== "f") {
                        continue;
                    }
                }
                if (this.behavioData[i][1] === target) {
                    this.behavioData[i][2][this.behavioData[i][2].length] = data;
                    break;
                }
            }
        }
    },
    addEvent: function (data, field) {
        var i;
        var l;
        for (i = this.behavioData.length - 1; i>= -1; i--) {
            if (i === -1) {
                if (this.behavioData[0] == null) {
                    this.behavioData[0] = [];
                    this.behavioData[0][0] = "c";
                    this.behavioData[0][1] = [];
                    this.behavioData[0][1][0] = data;
                    this.behavioData[0][2] = window.location.pathname.split("?")[0];

                } else {
                    l = this.behavioData.length;
                    this.behavioData[l] = [];
                    this.behavioData[l][0] = "c";
                    this.behavioData[l][1] = [];
                    this.behavioData[l][1][0] = data;
                    this.behavioData[l][2] = window.location.pathname.split("?")[0];
                }
                break;
            } else {
                if (this.behavioData[i][0] === "c") {
                    this.behavioData[i][1][this.behavioData[i][1].length] = data;
                    break;
                }
            }
        }
    },
    getTimestamp: function () {
        var dobj = new Date();
        return dobj.getTime() - this.startTimestamp;
    },
    checkTarget: function (event, timestamp) {
        var element = document.elementFromPoint(event.clientX, event.clientY);

        var data = [];
        if (element != null && element !== this.lastTarget && typeof element.parentNode != "undefined") {
            data[0] = "t";
            data[1] = element.nodeName + "#" + element.id + "#" + element.parentNode.nodeName + "#" + element.parentNode.id;
            data[2] = timestamp || bw.getTimestamp();
            this.lastTarget = element;
            bw.addEvent(data);
        }
    },
    checkViewport: function (timestamp) {
        if (this.lastViewport[0] !== document.documentElement.clientWidth || this.lastViewport[1] !== document.documentElement.clientHeight) {
            var data = [];
            data[0] = "v";
            data[1] = document.documentElement.clientWidth;
            data[2] = document.documentElement.clientHeight;
            data[3] = timestamp || bw.getTimestamp();

            this.lastViewport[0] = document.documentElement.clientWidth;
            this.lastViewport[1] = document.documentElement.clientHeight;

            bw.addEvent(data);
        }
    },

    mouseMoveHandler: function (event) {
        var data = [];
        data[0] = "mm";
        data[1] = event.clientX;
        data[2] = event.clientY;
        data[3] = bw.getTimestamp();

        bw.checkTarget(event);
        bw.checkViewport();

        bw.addEvent(data);
    },

    mouseDownHandler: function (event) {
        var data = [];

        data[0] = "md";
        data[1] = event.clientX;
        data[2] = event.clientY;
        data[3] = bw.getTimestamp();
        data[4] = event.button;

        bw.checkTarget(event);
        bw.checkViewport();

        bw.addEvent(data);
    },

    mouseUpHandler: function (event) {
        var data = [];

        data[0] = "mu";
        data[1] = event.clientX;
        data[2] = event.clientY;
        data[3] = bw.getTimestamp();
        data[4] = event.button;

        bw.checkTarget(event);
        bw.checkViewport();

        bw.addEvent(data);
    },

    pointerMoveHandler: function(event) {
        if (event.getCoalescedEvents) {
            var events = event.getCoalescedEvents() || [];
            if (events.length == 0) { events.push(event); }

            var base = bw.getTimestamp(),
                lastTimestamp = event.timeStamp;

            for (var i = 0; i < events.length; i++) 
            {
                var e = events[i];
                var ts = base - Math.round(lastTimestamp - e.timeStamp);
                var data = [];
                data[0] = "mm";
                data[1] = e.clientX;
                data[2] = e.clientY;
                data[3] = ts;

                bw.checkTarget(event, ts);
                bw.checkViewport(ts);
                bw.addEvent(data);

                var pt = e.pointerType || "unknown";
                bw.e.ptypes[pt] = (bw.e.ptypes[pt] || 0) + 1;
            }
            bw.e.ptype = "pc";
        } else {
            var ts = bw.getTimestamp();

            var data = [];
            data[0] = "mm";
            data[1] = event.clientX;
            data[2] = event.clientY;
            data[3] = ts;

            bw.checkTarget(event, ts);
            bw.checkViewport(ts);
            bw.addEvent(data);

            var pt = event.pointerType || "unknown";
            bw.e.ptypes[pt] = (bw.e.ptypes[pt] || 0) + 1;
            bw.e.ptype = "pm";
        }
    },

    pointerDownHandler: function(event) {
        var data = [];

        var ts = bw.getTimestamp();

        data[0] = "md";
        data[1] = event.clientX;
        data[2] = event.clientY;
        data[3] = ts;
        data[4] = event.button;

        bw.checkTarget(event, ts);
        bw.checkViewport(ts);

        bw.addEvent(data);

        var pt = event.pointerType || "unknown";
        bw.e.ptypes[pt] = (bw.e.ptypes[pt] || 0) + 1;
    },

    pointerUpHandler: function (event) {
        var data = [];

        var ts = bw.getTimestamp();

        data[0] = "mu";
        data[1] = event.clientX;
        data[2] = event.clientY;
        data[3] = ts;
        data[4] = event.button;

        bw.checkTarget(event, ts);
        bw.checkViewport(ts);

        bw.addEvent(data);

        var pt = event.pointerType || "unknown";
        bw.e.ptypes[pt] = (bw.e.ptypes[pt] || 0) + 1;
    },

    keyHandler: function (event) {
		if (!(typeof KeyboardEvent == "undefined" || event instanceof KeyboardEvent)) { return; }
		
        var i;
        var data = [];
        var keyCode =  (event.keyCode == 0 ? 229 : event.keyCode);
        var keyId = keyCode;
        var field = null;
            var source = event.target || event.srcElement;
        var monitorType = "n";
        var caretPos = 0;

        if (source.type !== "text" && source.type !== "password"
			&& source.type !== "date" && source.type !== "datetime-local"
			&& source.type !== "email" && source.type !== "month"
			&& source.type !== "number" && source.type !== "search"
			&& source.type !== "tel" && source.type !== "time"
			&& source.type !== "url" && source.type !== "week"
			&& source.type !== "textarea") {
            return;
        }

        if (keyCode == 229 && event.type == "keydown" && !bw.isFirefox && !bw.hasFallbackListeners) {
            bw.fallbackListeners();
            bw.hasFallbackListeners = true;
        }

        field = source.type + "#" + source.id;

        if (keyCode == null) {
            keyCode = -500;
            keyId = -500;
        }

        if (monitorType !== "a") {
            for (i = 0; i <bw.behavioweb_config.anonymous.by_id.length && monitorType !== "a"; i++) {
                if (bw.behavioweb_config.anonymous.by_id[i] === source.id) {
                    monitorType = "a";
                }
            }
            for (i = 0; i <bw.behavioweb_config.anonymous.by_name.length && monitorType !== "a"; i++) {
                if (bw.behavioweb_config.anonymous.by_name[i] === source.name) {
                    monitorType = "a";
                }
            }
            for (i = 0; i <bw.behavioweb_config.anonymous.by_type.length && monitorType !== "a"; i++) {
                if (bw.behavioweb_config.anonymous.by_type[i] === source.type) {
                    monitorType = "a";
                }
            }
        }

        if (monitorType === "a") {
            if (keyCode === 9 || keyCode === 13) {
                return;
            }
            if (document.selection) {
                source.focus();
                var sel = document.selection.createRange();
                var selLength = document.selection.createRange().text.length;
                sel.moveStart("character", -source.value.length);
                caretPos = sel.text.length - selLength;
            } else if (source.selectionStart || source.selectionStart === "0") {
                caretPos = source.selectionStart;
            }
            if (keyCode === 8) {
                if (event.type === "keydown") {
                    if (bw.anonMap[keyCode] == null) {
                        bw.anonMap[keyCode] = caretPos;
                    }
                    data[0] = -1;
                    data[1] = caretPos;
                } else if (event.type === "keyup") {
                    data[0] = -2;
                    data[1] = bw.anonMap[keyCode];
                    bw.anonMap[keyCode] = null;
                }
            } else if (keyCode === 46) {
                if (event.type === "keydown") {
                    if (bw.anonMap[keyCode] == null) {
                        bw.anonMap[keyCode] = caretPos;
                    }
                    data[0] = -3;
                    data[1] = caretPos;
                } else if (event.type === "keyup") {
                    data[0] = -4;
                    data[1] = bw.anonMap[keyCode];
                    bw.anonMap[keyCode] = null;
                }
            } else {
                if (event.type === "keydown") {
                    if (bw.anonMap[keyCode] == null) {
                        bw.anonMap[keyCode] = caretPos;
                    }
                    data[0] = 0;
                    data[1] = caretPos;
                } else if (event.type === "keyup") {
                    data[0] = 1;
                    data[1] = bw.anonMap[keyCode];
                    bw.anonMap[keyCode] = null;
                }
            }
        } else {
            if (keyCode == 229 && event.type == "keydown") {
                bw.setTextLength(field, source.value.length);
            } else if (keyCode == 229 && event.type == "keyup") {
                var s   = bw.textLengths[field] || [];
                var ul  = source.value.length,
                    dl  = s.pop() || 0;

                if (bw.lastKey != -1 || ul < dl) {
                    if (ul - dl <= 1) {
                        keyId = (ul < dl ? 8 : bw.lastKey);
                    }

                    var targetData = bw.getTargetData(field);
                    var prevKey = targetData[targetData.length - 1];
                    if (prevKey[1] == 229) {
                        prevKey[1] = keyId;
                    }
                    bw.lastKey = -1;
                }
            }
            if (event.type === "keyup") {
                bw.lastKey = -1;
                data[0] = 1;
                data[1] = keyId;
            } else if (event.type === "keydown") {
                data[0] = 0;
                data[1] = keyId;
            }
            data[3] = ["km", event.key, event.code];
        }
        data[2] = bw.getTimestamp();
        if (keyCode == 229) { bw.e.k229++ } else { bw.e.kn++ }
        if (data[1] != null) {
            bw.addKeyEvent(field, monitorType, data);
        }
    },
    getTargetData: function(target) {
        for (var i = this.behavioData.length - 1; i >= 0; i--) {
            if (this.behavioData[i][1] == target) {
                return this.behavioData[i][2];
            }
        }
    },
    setLastKey: function(k) {
        bw.lastKey = k;
    },
    setTextLength: function(target, len) {
        (bw.textLengths[target] = (bw.textLengths[target] || [])).push(len);
    },
    keyTransformer: function(e) {
        if (e.data && e.data.length == 1) {
            bw.setLastKey(e.data.toUpperCase().charCodeAt(0));
        }
    },
    keyComposition: function(e) {
        if (e.data) {
            bw.setLastKey(e.data.toUpperCase().charCodeAt(e.data.length-1));
        }
    },
    fallbackListeners: function(field) {
        if (field && field.addEventListener) {
            field.addEventListener("textInput", this.keyTransformer, false);
            field.addEventListener("compositionupdate", this.keyComposition, false);
        } else if (document.addEventListener) {
            document.addEventListener("textInput", this.keyTransformer, false);
            document.addEventListener("compositionupdate", this.keyComposition, false);
        }
    },
    getDataIntegrity: function() {
		//If page has been modified asynchronously and there are input items with no data
		this.addIntegrityInputs("input", this.behavioIntegrity);
		this.addIntegrityInputs("textarea", this.behavioIntegrity);
		
        var fields = [];

		for(var name in bw.behavioIntegrity)
		{ 
			var value  = 0;
			var obj = {};
			obj[name] = bw.behavioIntegrity[name];
			fields.push(obj);
		}
			
        for (var i = 0; i < this.behavioData.length; ++i)
        {
            if (this.behavioData[i][0] == "c") {
                var movementName = "movement";
                var movementVal  = 0;
                var movementObj = {};
                movementObj[movementName] = movementVal;
                fields.push(movementObj);
                break;
            }
        }

        return fields;
    },
    addIntegrityInputs: function(type, fields) {
        var inputs = document.getElementsByTagName(type);
        for (var i = 0; i < inputs.length; i++) {
            var field = inputs[i];
            var ftype = field.type
            if (ftype != 'hidden' && ftype != 'button' && ftype != 'submit' && ftype != 'radio' && ftype != 'checkbox') {
                var name = field.type + "#" + field.id;
                var val  = field.value.length;
                    fields[name] = val;
            }
        }
    },
    getPath: function() {
        var path = window.location.pathname.split('?')[0] || "/";
        if (bw.getMeta(bw.metaNames.pageId) != "") {
            path = bw.getMeta(bw.metaNames.pageId);
        }
        return path;
    },
	onChangeHandler: function(event)
	{
		var source = event.target || event.srcElement;
		var field = source.type + '#' + source.id;

		bw.behavioIntegrity[field] = source.value.length;
	},
	startMonitor: function () {
        if (window.onpagehide || window.onpagehide === null && bw.isIOS) {
            window.addEventListener("pagehide", function (e) {
                bw.navigateHandler(e);
            });
        } else if (typeof window.onbeforeunload !== "undefined") {
            if (window.addEventListener) {
                window.addEventListener("beforeunload", function (e) {
                    bw.navigateHandler(e);
                });
            } else if (window.attachEvent) {
                window.attachEvent("onbeforeunload", function (e) {
                    e = e || window.event;
                    bw.navigateHandler(e);
                });
            }
        } else if (typeof window.onunload !== "undefined") {
            if (window.addEventListener) {
                window.addEventListener("unload", function (e) {
                    bw.navigateHandler(e);
                });
            } else if (window.attachEvent) {
                window.attachEvent("onunload", function (e) {
                    e = e || window.event;
                    bw.navigateHandler(e);
                });
            }
        }
		
		if (bw.submiting)
		{
			if (window.addEventListener) {
				window.addEventListener("submit", bw.submitHandler, false);
			} else if (window.attachEvent) {
				window.attachEvent("onsubmit", bw.submitHandler);
			}
		}

		if (document.addEventListener) {
			document.addEventListener("keydown", this.keyHandler, false);
			document.addEventListener("keyup", this.keyHandler, false);
			document.addEventListener("input", this.onChangeHandler, false);
			if (this.isAndroid && !this.isFirefox) {
				this.fallbackListeners();
			}
		} else if (document.attachEvent) {
			document.attachEvent("onkeydown", this.keyHandler);
			document.attachEvent("onkeyup", this.keyHandler);
			document.attachEvent("input", this.onChangeHandler);
		}

        if (this.haveMouse === true) {
            if (document.addEventListener) {
                if (window.PointerEvent) {
                    document.addEventListener("pointerdown", this.pointerDownHandler, false);
                    document.addEventListener("pointerup", this.pointerUpHandler, false);
                    document.addEventListener("pointermove", this.pointerMoveHandler, false);
                } else {
                    this.e.ptype = "mm";
                    document.addEventListener("mousedown", this.mouseDownHandler, false);
                    document.addEventListener("mouseup", this.mouseUpHandler, false);
                    document.addEventListener("mousemove", this.mouseMoveHandler, false);
                }
            } else if (document.attachEvent) {
                this.e.ptype = "mm";
                document.attachEvent("onmousedown", this.mouseDownHandler);
                document.attachEvent("onmouseup", this.mouseUpHandler);
                document.attachEvent("onmousemove", this.mouseMoveHandler);
            }
        }

        if (this.isAndroid) {
            this.hasFallbackListeners = true;
        }

		this.reset();
		
		this.loadData();
	},
	reset: function() {
        var _navigator = {};
        for (i in navigator) {
            _navigator[i] = navigator[i];
        }
        delete _navigator.plugins;
        delete _navigator.mimeTypes;

        var _screen = {};
        for (i in screen) {
            _screen[i] = screen[i];
        }
        this._navigator = navigator;
        this._screen = screen;
		this.e = { ptype: null, ptypes: {}, k229: 0, kn: 0 };
		this.behavioData    = [];
        this.behavioData[0] = ["m", "n", _navigator];
        this.behavioData[1] = ["m", "s", _screen];
        this.behavioData[2] = ["m", "v", 253];
        this.behavioData[3] = ["m", "e", this.e];
		
		//Init integrity data
		this.behavioIntegrity = [];
		this.addIntegrityInputs("input", this.behavioIntegrity);
		this.addIntegrityInputs("textarea", this.behavioIntegrity);

        if (window.location.pathname.split("?")[0].indexOf(bw.sendOnLoad) !== -1) {
            var ajaxData;
            ajaxData = {
                "journeyid": bw.getMeta(bw.metaNames.sessionid),
                "sessionid": bw.getMeta(bw.metaNames.sessionid),
                "userid": bw.getMeta(bw.metaNames.userid),
                "notes": bw.getMeta(bw.metaNames.notes)
            };
            bw.ajax({
                data: ajaxData
            });

        }
    },
	setMeta: function(metaName, content)
	{
		var metaTag = document.getElementsByTagName('meta');
		for (var i=0; i < metaTag.length; i++) {
			if (metaTag[i].getAttribute("name")==metaName) {
				if (typeof metaTag[i].remove !== 'undefined') {
					metaTag[i].remove();
				} else if (typeof metaTag[i].removeNode !== 'undefined') {
					metaTag[i].removeNode();
				}
			}
		}
		var meta = document.createElement('meta');
		meta.setAttribute('name', metaName);
		meta.setAttribute('content', content);
		document.getElementsByTagName('head')[0].appendChild(meta);
	},
	setSessionData: function(sessionId, userId, page, notes)
	{
		this.setMeta(bw.metaNames.sessionid, sessionId);
		this.setMeta(bw.metaNames.userid, userId);
		if (typeof page !== "undefined")
			this.setMeta(bw.metaNames.pageId, page);
		if (typeof notes !== "undefined")
			this.setMeta(bw.metaNames.notes, notes);
	},
	sendData: function()
	{
		bw.checkData();

		bw.hasSent = true;

		var ajaxData = bw.getAjaxData();

		bw.ajax({
			data: ajaxData
		});
	},
	checkData: function()
	{
		var session_id = bw.getMeta(bw.metaNames.sessionid);
		var user_id = bw.getMeta(bw.metaNames.userid);
		var page_notes = bw.getMeta(bw.metaNames.notes);
		var page_path = bw.getMeta(bw.metaNames.pageId);
		
		if (session_id === "" || typeof session_id === "undefined" || user_id === "" || typeof user_id === "undefined" )
		{
			if (typeof window.sessionId !== "undefined" && window.sessionId !== "" && typeof window.userId !== "undefined" && window.userId !== "")
			{
				session_id = window.sessionId;
				user_id = window.userId;
				if (typeof window.pageInformation !== "undefined" && window.pageInformation !== "")
					page_path = window.pageInformation;
				if (typeof window.pageComment !== "undefined" && window.pageComment !== "")
					page_notes = window.pageComment;
			}
			
			if (session_id === "" || typeof session_id === "undefined" || user_id === "" || typeof user_id === "undefined" )
			{
				if (typeof jQuery !== "undefined")
				{
					var div_html = $("#idFormaVentanaPassword").html();
					if (typeof div_html !== 'undefined' && div_html != null && div_html != '')
					{
						try
						{
							session_id = div_html.substring(div_html.indexOf('sessionId = "') + 13);
							session_id = session_id.substring(0, session_id.indexOf('";'));

							user_id = div_html.substring(div_html.indexOf('userId = "') + 10);
							user_id = user_id.substring(0, user_id.indexOf('";'));

							page_path = div_html.substring(div_html.indexOf('pageInformation = "') + 19);
							page_path = page_path.substring(0, page_path.indexOf('";'));

							page_notes = div_html.substring(div_html.indexOf('pageComment = "') + 15);
							page_notes = page_notes.substring(0, page_notes.indexOf('";'));
						}
						catch(err) { }
					}
				}
			}
			
			bw.setSessionData(session_id, user_id, page_path, page_notes);
		}
	},
	saveData: function()
	{
		if (typeof jQuery === "undefined" || typeof jQuery.cookie === "undefined")
			return;

		var data = null;
		for (var i = 0; i < this.behavioData.length; ++i)
        {
            if (this.behavioData[i][0] == "fa" && this.behavioData[i][1] == "password#userid")
			{
				data = JSON.stringify(this.behavioData[i]);
				break;
			}
		}
		if (data != null)
			$.cookie('behaviosense_id', data, { expires: 1, path: '/', domain: 'banorte.com' });
	},
	loadData: function()
	{
		if (typeof jQuery === "undefined" || typeof jQuery.cookie === "undefined")
			return;

		if ($.cookie('behaviosense_id') != null)
		{
			try
			{
        		var data = JSON.parse($.cookie('behaviosense_id'));
				this.behavioData.push(data);
        	}
        	catch (e) { }
			
			$.cookie('behaviosense_id', null, { expires: 0, path: '/', domain: 'banorte.com' });
		}
	},
	getAjaxData: function() {
		var ajaxData = {
			"journeyid": bw.getMeta(bw.metaNames.sessionid),
			"sessionid": bw.getMeta(bw.metaNames.sessionid),
			"userid": bw.getMeta(bw.metaNames.userid),
			"notes": bw.getMeta(bw.metaNames.notes),
			"behavioData": bw.getBehavioData()
		};
		
		return ajaxData;
	}
}

if (document.all && !document.querySelector) {
    // is IE7 or lower
} else {
    var bw = new Monitor();
        // TODO: temp
        window._bw = bw;
}

// shims polyfills

if (typeof console == "undefined") {
    this.console = {
            log: function() {},
            info: function() {},
            error: function() {},
            warn: function() {}
    };
}

Date.now = Date.now || function() { return +new Date(); };
function readyState(fn) {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        fn();
    }
}

var JSON;
if (!JSON) {
    JSON = {};
}(function () {
    function d(f) {
        return f < 10 ? "0" + f : f;
    }
    if (typeof Date.prototype.toJSON != "function") {
        Date.prototype.toJSON = function (f) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + d(this.getUTCMonth() + 1) + "-" + d(this.getUTCDate()) + "T" + d(this.getUTCHours()) + ":" + d(this.getUTCMinutes()) + ":" + d(this.getUTCSeconds()) + "Z" : null;
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (f) {
            return this.valueOf();
        };
    }
    var i = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    h, a, e = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
    }, c;

    function b(f) {
        i.lastIndex = 0;
        return i.test(f) ? '"' + f.replace(i, function (j) {
            var k = e[j];
            return typeof k == "string" ? k : "\\u" + ("0000" + j.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + f + '"';
    }

    function g(q, n) {
        var l;
        var j;
        var r;
        var f;
        var o = h;
        var m;
        var p = n[q];
        if (p && typeof p == "object" && typeof p.toJSON == "function") {
            p = p.toJSON(q);
        }
        if(typeof c == "function") {
            p = c.call(n, q, p);
        }
        switch (typeof p) {
        case "string":
            return b(p);
        case "number":
            return isFinite(p) ? String(p) : "null";
        case "boolean":
        case "null":
            return String(p);
        case "object":
            if (!p) {
                return "null";
            }
            h += a;
            m = [];
            if (Object.prototype.toString.apply(p) == "[object Array]") {
                f = p.length;
                for (l = 0; l < f; l += 1) {
                    m[l] = g(l, p) || "null";
                }
                r = m.length == 0 ? "[]" : h ? "[\n" + h + m.join(",\n" + h) + "\n" + o + "]" : "[" + m.join(",") + "]";
                h = o;
                return r;
            }
            if (c && typeof c == "object") {
                f = c.length;
                for (l = 0; l < f; l += 1) {
                    if (typeof c[l] == "string") {
                        j = c[l];
                        r = g(j, p);
                        if (r) {
                            m.push(b(j) + (h ? ": " : ":") + r);
                        }
                    }
                }
            } else {
                for (j in p) {
                    if (Object.prototype.hasOwnProperty.call(p, j)) {
                        r = g(j, p);
                        if (r) {
                            m.push(b(j) + (h ? ": " : ":") + r);
                        }
                    }
                }
            }
            r = m.length == 0 ? "{}" : h ? "{\n" + h + m.join(",\n" + h) + "\n" + o + "}" : "{" + m.join(",") + "}";
            h = o;
            return r;
        }
    }
    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function (l, j, k) {
            var f;
            h = "";
            a = "";
            if (typeof k == "number") {
                for (f = 0; f < k; f += 1) {
                    a += " ";
                }
            } else {
                if (typeof k == "string") {
                    a = k;
                }
            }
            c = j;
            if (j && typeof j !== "function" && (typeof j !== "object" || typeof j.length !== "number")) {
                throw new Error("JSON.stringify");
            }
            return g("", {
                "": l
            })
        }
    }
}());

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (obj, start) {
        var i, j;
        for (i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) { return i; }
        }
        return -1;
    };
}