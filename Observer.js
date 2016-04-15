
// observer design pattern: This is for update the subscribers for particular event.
// If we modify the data then in that case we are reporting all the observers

function publisher () {
    var observerList=[];
    var data = 1;

    this.addObserver= function(obj) {
       observerList.push(obj);
    };

    this.removeObserver = function(obj) {
        var index =  observerList.indexOf(obj);  // index start from 0
        observerList.splice(index,1); // removed the observer permanently
    };

    this.notify = function() {
        for(var i=0;i < observerList.length; i++){
            observerList[i].processNewData(data);
        }
    };

    this.modifyData= function(newData){
        data = newData;
        this.notify(data);
    };
};

function observer1 () {
    this.processNewData= function (data) {
        console.log("observer:received new data"+ data);
    };
}

function observer2 () {
    this.processNewData= function (data) {
        console.log("Observer2:received new data"+ data);
    };
}

function observer3 () {
    this.processNewData= function (data) {
        console.log("Observer3:received new data:"+ data);
    };
}

/// creating new objects

var publisher = new publisher();
var observer1 = new observer1();
var observer2 = new observer2();
var observer3 = new observer3();

// adding all observer to publisher
publisher.addObserver(observer1);
publisher.addObserver(observer2);
publisher.addObserver(observer3);

// main execution

publisher.modifyData(112);

///Output :
/*
 observer:received new data112
 Observer2:received new data112
 Observer3:received new data:112

 */
