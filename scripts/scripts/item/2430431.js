/* 
 * [2430431] - []����ȯ
 */
var period = 7;
var mountSkillId = 80001006;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}