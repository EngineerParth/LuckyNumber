function isLucky(n){
	var arr = new Array(10);
	for(var i=0;i<arr.length;i++)
		arr[i]=false;
	while(n>0){
		var digit=n%10;
		if(arr[digit])return false;
		arr[digit]=true;
		n=parseInt(n/10);
	}
	return true;
}

var testData = [1232, 345, 678, 987, 5677, 898787, 321, 463, 6456, 587];
for(var i=0;i<testData.length;i++){
	console.log(testData[i]+":"+isLucky(testData[i]));
}