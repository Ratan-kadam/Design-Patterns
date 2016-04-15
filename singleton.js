/**
 * Created by ratan_000 on 4/14/2016.
 */

// Only One instance should exist across the entire application.
// first check if the object exist ot not .. if not then create and return
// if Exist then return the existing one


function singleton() {
    var a=5;
    var instance = null;
    function getInstance() {
        if(instance){
            return instance;
        }else{
            instance = new singleton();
            return instance;
        }

    }

    //exposing Api
    this.getInstance = getInstance;
}

/// main

var mySingleton = new singleton();
var instance1= mySingleton.getInstance();
instance1.a=10;
var instance2 = mySingleton.getInstance();
// Providing singleTon instance
console.log(instance1.a + ":" + instance2.a );



