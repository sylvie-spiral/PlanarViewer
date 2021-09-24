// JavaScript Document

var syl = new function() {
    var self = this;
    self.exits = ['NW', 'N', 'NE', 'W', 'E', 'SW', 'S', 'SE', 'IN', 'OUT', 'UP', 'DOWN'];

    self.start = function() {
        var self = this;

        // read a local JSON file
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'data/test.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function() {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
        debuugger;

        self.currentRoom = roomData['Startup'];

        self.log = $('.log');
        self.roomName = $('.roomName');
        self.roomPic = $('.roomPic');

        self.enterRoom('Startup');
    }

    self.enterRoom = function(name) {
        var newRoom = roomData[name];
        console.assert(null != newRoom);

        // check if there is a global onexit
        if (null != self.onexit) {
            if (!self.onexit(newRoom))
                return;
        }

        // check if there is an on exit for the current room
        if (null != self.currentRoom.onexit) {
            // returns false to block.
            if (!self.currentRoom.onexit(newRoom))
                return;
        }

        // check if there is a global onenter
        if (null != self.onenter) {
            if (!self.onenter(self.currentRoom))
                return;
        }

        // check if there is an enter for the new room and run it if so.
        if (null != newRoom.onenter) {
            // new room can say nope.
            if (!newRoom.onenter(self.currentRoom))
                return;
        }

        // construct a new div for the log
        var newDiv = $(document.createElement('div'));
        newDiv.addClass('room');
        newDiv.html(newRoom.roomDesc);

        self.log.append(newDiv);
        $('.roomActions').remove();

        if (null != newRoom.actions) {
            var actionList = $(document.createElement('div'));
            actionList.addClass('roomActions');
            newDiv.append(actionList);

            for (var act in newRoom.actions) {
                var details = newRoom.actions[act];

                var newAct = $(document.createElement('button'));
                newAct.data('action', details.topic);
                newAct.text(details.title);
                actionList.append(newAct);
            }
        }

        newDiv[0].scrollIntoView();

        self.roomName.text(newRoom.roomName);
        self.roomPic.removeAttr('src');
        self.roomPic.attr('src', newRoom.roomPic);

        self.currentRoom = newRoom;

        self.updateTimers();
        self.updateAvailableCommands();

        while (self.log.children().length > 40) {
            self.log.children()[0].remove();
        }
    }

    // placeholder
    self.updateTimers = function() {};

    self.updateAvailableCommands = function() {
        $('.navUpDown button,.navCompass button').prop('disabled', true).css('visibility', 'hidden');
        for (var x in self.currentRoom.exits) {
            var current = self.currentRoom.exits[x];
            var button = $('#' + x);
            button.prop('disabled', false);
            button.css('visibility', 'visible');
            button.data('dest', current.dest);
        }
    }

}();

$('button').click(function(e) {
    var item = $(e.currentTarget);
    var dest = item.data('dest');
    if (null != dest) {
        syl.enterRoom(dest);
    }
});

var containers = [];

function container(name, isOpen) {
    var self = {};

    self.isOpen = isOpen;
    self.contents = ko.observableArray();
    self.name = name;
    self.isContainer = true;

    containers.push(self);

    return self;
}

function basicItem(name) {
    var self = {};

    self.name = name;
    self.isContainer = false;

    return self;
}


syl.start();