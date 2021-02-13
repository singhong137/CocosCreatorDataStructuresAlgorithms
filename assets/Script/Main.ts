const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(cc.Button)
    button0: cc.Button = null;
    @property(cc.Button)
    button1: cc.Button = null;
    @property(cc.Button)
    button2: cc.Button = null;
    @property(cc.Button)
    button3: cc.Button = null;
    @property(cc.Button)
    button4: cc.Button = null;
    @property(cc.Button)
    button5: cc.Button = null;
    @property(cc.Button)
    button6: cc.Button = null;
    @property(cc.Button)
    button7: cc.Button = null;
    @property(cc.Button)
    button8: cc.Button = null;
    @property(cc.Button)
    button9: cc.Button = null;
    @property(cc.Button)
    button10: cc.Button = null;
    @property(cc.Button)
    button11: cc.Button = null;
    @property(cc.Button)
    button12: cc.Button = null;
    @property(cc.Button)
    button13: cc.Button = null;
    @property(cc.Button)
    button14: cc.Button = null;
    @property(cc.Button)
    button15: cc.Button = null;
    @property(cc.Button)
    button16: cc.Button = null;

    static testCase: string = '';

    start() {
        this.button0.node.on('click', this.onClick);
        this.button1.node.on('click', this.onClick);
        this.button2.node.on('click', this.onClick);
        this.button3.node.on('click', this.onClick);
        this.button4.node.on('click', this.onClick);
        this.button5.node.on('click', this.onClick);
        this.button6.node.on('click', this.onClick);
        this.button7.node.on('click', this.onClick);
        this.button8.node.on('click', this.onClick);
        this.button9.node.on('click', this.onClick);
        this.button10.node.on('click', this.onClick);
        this.button11.node.on('click', this.onClick);
        this.button12.node.on('click', this.onClick);
        this.button13.node.on('click', this.onClick);
        this.button14.node.on('click', this.onClick);
        this.button15.node.on('click', this.onClick);
        this.button16.node.on('click', this.onClick);
    }

    private sceneURL: string = '';
    onClick(e: cc.Event) {
        // console.log(e.target._parent._name);
        // console.log(e.target);
       
        // this.sceneURL = e.target._parent._name + 'Scene';

        // cc.director.loadScene(this.sceneURL);
        // Main.testCase = 'UnitConsole';

        if(e.target._parent._name=='button0')Main.testCase = 'UnitConsole';
        if(e.target._parent._name=='button1')Main.testCase = 'StackTest';
        if(e.target._parent._name=='button2')Main.testCase = 'QueueTest';
        if(e.target._parent._name=='button3')Main.testCase = 'LinkedListTest';
        if(e.target._parent._name=='button4')Main.testCase = 'SetTest';
        if(e.target._parent._name=='button5')Main.testCase = 'DictionaryTest';
        if(e.target._parent._name=='button6')Main.testCase = 'HashTableTest';
        if(e.target._parent._name=='button7')Main.testCase = 'RecursiveTest';
        if(e.target._parent._name=='button8')Main.testCase = 'TreeTest';
        if(e.target._parent._name=='button9')Main.testCase = 'HeapTest';
        if(e.target._parent._name=='button10')Main.testCase = 'GraphTest';
        if(e.target._parent._name=='button11')Main.testCase = 'SortingTest';
        if(e.target._parent._name=='button12')Main.testCase = 'SearchTest';
        if(e.target._parent._name=='button13')Main.testCase = 'DynamicProgramingTest';
        if(e.target._parent._name=='button14')Main.testCase = 'GreedyTest';
        if(e.target._parent._name=='button15')Main.testCase = 'BackTracingTest';
        if(e.target._parent._name=='button16')Main.testCase = 'FunctionalTest';

        cc.director.loadScene('testScene');
    }
}
