var maps = 970010000;//�ִ�� ��ͼID
var timea = 1;//����ʱ��
var times = 5;

var setupTask;



function init() {
    scheduleNew();
}


function scheduleNew() {
    setupTask = em.schedule("start", timea*1000);//900000ʱ��

}

function cancelSchedule() {
    setupTask.cancel(false);
}

function start() {
    scheduleNew();

	 //  em.getChannelServer().RemoveDrops();//�����Ʒ

    //       em.getChannelServer().Drops(maps);//������Ʒ


}



