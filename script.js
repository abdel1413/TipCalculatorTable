window.volume = 20;

const greenpack = {
  name: "green pack",
  volume: 20,
  color: "green",
  newVolume: function (volume) {
    console.log("this.volume in the mthd ", this.volume);
    //update volume
    this.volume = volume;
    console.log("after updated volume", this.volume);
    //IIFE using anonymous fcn atomaticall run when the browser encounter it
    (function () {
      console.log("this.volume in nested function:", this.volume);
    })();
    //IIFE using arrow fcn
    (() =>
      console.log("this.volume in arrow fcn sitting in anony:", this.volume))();
  },
  newColor: function (color) {
    console.log("this.color", this.color);
    this.color = color;
    (function () {
      console.log("this.color here is global", this.color);
    })();
    (() =>
      console.log(
        "this.color here refers to color in the objec",
        this.color
      ))();
  },
};
console.log(greenpack.newVolume(5));
console.log(greenpack.newColor("blue"));

//NOTE USE ARROW FUNCTION  INSIDE THE ANONYMOUS FCN THAT'S IN AN OBJECT
//this.volume inside the anonymous fcn is referring to window.volume
//bcz anonymous function is global.
//while this.volume in arrow fcn inside the anonymous fcn is referring
//to the closest scop which is object.
