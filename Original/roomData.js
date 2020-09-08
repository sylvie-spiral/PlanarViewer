var roomData = {
	Startup: { roomName: 'Startup', roomDesc: 'This is the startup room.  BORING.', roomPic: null, exits: { S: { dest: 'Second', onEnter: null, onExit: null}}, onEnter: null, onExit: null, actions: [{ title: 'Test 1', topic: 'cmd1' }, { title: 'Test 2', topic: 'cmd2'}]},
	Second: { roomName: 'Second', roomDesc: 'This is the second room.  BORING.', roomPic: null, exits: { N: { dest: 'Startup', onEnter: null, onExit: null}}, onEnter: null, onExit: null, actions: [{ title: 'Test 91', topic: 'cmd91' }, { title: 'Test 12', topic: 'cmd12'}]}
};