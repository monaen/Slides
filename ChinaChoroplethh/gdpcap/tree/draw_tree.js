function drawTree(provinceName, parentElement) {
	var csvFileName = 'tree/data/binded/gdpcap_' + provinceName + '.csv';
	csv2jsonForGdp(csvFileName, function(treeData) {
		makeTree(treeData[0], parentElement, false /* has no percentage sign*/);
	});
}