// JavaScript Document
//基因组
function Genome(num_bits){

	this.vecBits = new Array();
	
	this.fitness = 0;
	
	if(num_bits != undefined){
	
		//创造随机二进制位串
		for(var i = 0; i < num_bits; ++i){
		
			this.vecBits.push(Math.round(Math.random()));
			
			}
	}
}