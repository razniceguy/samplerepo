use(function(){
	var propConst = {
		"type":"jcr:primaryType"
	}
	var retObj = {};
	retObj.title = this.page.getTitle();
	retObj.type = properties.get(propConst.type).substr(0,this.typeLimit);
	
	return retObj;
})