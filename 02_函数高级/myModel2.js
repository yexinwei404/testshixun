(function (){
    // 私有数据
    var msg = 'My atguigu'
    // 操作数据的函数 
    function doSomething(){
        console.log('doSomething()' + msg.toLocaleUpperCase())
    }
    function doOtherthing () {
        console.log('doOtherthing()' + msg.toLocaleLowerCase())
    }
    
    //  向外暴露对象(给外部使用的方法)
    window.myModel2 = {
        a:doSomething,
        b:doOtherthing
    }
})()