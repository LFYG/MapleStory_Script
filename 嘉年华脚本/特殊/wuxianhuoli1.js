var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		var em = cm.getEventManager("Limitless");
		var Times = em.getProperty("Times");
		var charid = cm.getChar().getId();
		if (Times!=null){
			var conn = cm.getConnection();
			var UpDateData = conn.prepareStatement("update limitlessEvent set times=? where charid = " + charid + "");
			UpDateData.setString(1, parseInt(Times) + 1);
			UpDateData.executeUpdate();//更新;*/
			cm.playerMessage(5,"闯关成功！10秒后将进入下一关，请做好准备！");
		}else{
			cm.sendOk("配置文件出错，请联系管理员解决！");
		}
        cm.dispose();
    }
}