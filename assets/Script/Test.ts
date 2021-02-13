import Main from "./Main";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Test extends cc.Component {

    @property(cc.Button)
    backBtn: cc.Button = null;

    start(){
        this.backBtn.node.on('click', (e: cc.Event)=>cc.director.loadScene('mainScene'));

        // this.node.addComponent('UnitConsole');

        this.node.addComponent(Main.testCase);

    }

}