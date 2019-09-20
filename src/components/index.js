import TestComponent from "./TestComponent/TestComponent";
import Label from "./Label/Label";
 /**
  * TODO: 동적임포트로 스플리팅하려고 했는데 최적화가 자동으로 세팅되며 서드파티 공통번들을 따로빼는데
  * 클라이언트에서 못읽는 문제가 있음, 멀티엔트리포인트로 ..
  */
// var TestComponent = import(/* webpackChunkName: "TestComponent" */"./TestComponent/TestComponent");
// var TestComponent2= import(/* webpackChunkName: "TestComponent2" */"./TestComponent2/TestComponent2");
// var Label= import(/* webpackChunkName: "Label" */"./Label/Label");
 
export { TestComponent, Label };