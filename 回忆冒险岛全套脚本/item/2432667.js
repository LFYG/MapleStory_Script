function start() {
	if (havePower()) 
	{
		im.dispose();
		im.openNpc(9010017, 4);
	} else {
		im.dispose();
	}
}

function havePower() {
	var names = Array(
		"����ԱС��",
		"����Ա����",
		"����ð�յ�"
	);
	for (var key in names) {
		if (names[key]==im.getPlayer().getName()) {
			return true;
		}
	}
	return false;
}
