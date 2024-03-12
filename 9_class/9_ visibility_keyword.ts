/**
 * Visibility Keyword
 * 
 * 1. public (기본값) - 어디서든 접근이 가능하다.
 * 2. protected - 현재 클래스 및 하위 클래스에서 접근이 가능하다.
 * 3. private - 현재 클래스 내부에서만 접근이 가능하다.
 */

class PropertyTestParent{
    public publicProperty = 'public property'
    protected protectedProperty = 'protected property'
    private privateProperty = 'private property'
    #jsPrivateProperty = 'js private property'

    test(){
        this.publicProperty
        this.protectedProperty
        this.privateProperty
    }
}

class PropertyTestChild extends PropertyTestParent{
    test(){
        this.publicProperty
        this.protectedProperty
        // this.privateProperty
    }
}

const testConst1 = new PropertyTestParent();
testConst1.publicProperty;
// testConst1.protectedProperty;
// testConst1.privateProperty;
testConst1.test();

const testConst2 = new PropertyTestChild();
testConst2.publicProperty;
// testConst.protectedProperty;
// testConst.privateProperty;
testConst2.test()
