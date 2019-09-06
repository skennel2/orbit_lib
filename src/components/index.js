// import TestComponent from "./TestComponent/TestComponent";
// import TestComponent2 from "./TestComponent2/TestComponent2";
// import Label from "./Label/Label";

var TestComponent = import(/* webpackChunkName: "TestComponent" */"./TestComponent/TestComponent");
var TestComponent2= import(/* webpackChunkName: "TestComponent2" */"./TestComponent2/TestComponent2");
var Label= import(/* webpackChunkName: "Label" */"./Label/Label");
 
export { TestComponent, TestComponent2, Label };