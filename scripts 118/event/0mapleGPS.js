
var setupTask;
var times = 1000*60*65;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", times);//900000ʱ��
}

function cancelSchedule() {
    setupTask.cancel(false);
}

function start() {
    scheduleNew();

   // em.getChannelServer().MaplewingGP();//�������

 //  em.getChannelServer().MaplewingGX(65);//�������

   // em.getChannelServer().MaplewingGainMose(1);

}