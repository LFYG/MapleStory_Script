

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", 100000);
}

function cancelSchedule() {
    setupTask.cancel(false);
}

function start() {
    scheduleNew();
    em.addMaplewing("mapley", 1);
   // em.broadcastServerMsg("[��������] " + Message[Math.floor(Math.random() * Message.length)]);
}