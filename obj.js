//  var MyInfo ={ YourName : "munas", village :"nangla", phoneNo:0171111111 }
//  console.log(MyInfo.village)
//  var newpro =[MyInfo.YourName];
//  console.log(newpro);

//  function MyInfo(YourName,village,phoneNo){
//   this.YourName= YourName;
//   this.village=village;
//   this.phoneNo=phoneNo;
//  }
// //  var newobj:MyInfo("munas",'nangla','0170110101')
// var newobj =new MyInfo("Munas","nangla",0171411111)
// console.log(newobj);
 function MyInfo(YourName,village,phoneNo){
  this.YourName=YourName;
  this.village=village;
  this.phoneNo=phoneNo;
  this.showMe =function(){
    console.log(this.YourName);
    console.log(this.village);
    console.log(this.phoneNo)
  }
 }
 var newobj = new MyInfo("munas","nangla",017111111)
 var newobj1 = new MyInfo("ashik","tiloy",017222222)
 newobj.showMe();
 console.log("brack")
 newobj1.showMe();