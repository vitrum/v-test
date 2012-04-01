// JavaScript Document
//Bob的遗传算法类
	function GABob(cross_rat, mut_rat, pop_size, num_bits, gene_len){
	
		//基因组群体
		this.vecGenomes = new Array();
		
		//群体的大小
		this.popSize = pop_size;
		this.crossoverRate = cross_rat;	//杂交率
		this.mutationRate = mut_rat;	//变异率
		
		//每个染色体含有多少bits
		this.chromoLength = num_bits;	//chromosome染色体
		
		//每个基因有多少个bits(染色体?)
		this.genelLength = gene_len;	//gene基因
		this.fittestGenome = 0;	//适应性最好的基因组(染色体组)
		this.bestFitnessScore = 0; //最佳适应性分数
		this.totalFitnessScore = 0.0; //总适应性分数
		this.generation = 0;	//代
		
		//为Map类创建一个实例
		this.bobsMap = new BobsMap();
		
		//另一个BobsMap对象,用来保存每一代的最佳路径的一个记录
		//这是被访问小格的一个数组，他仅为了显示目的使用
		this.bobsBrain = new BobsMap();
		
		//检测运行是否仍在进行中
		this.busy = false;
		
		//----------------------------Mutate---------------------------------
		//	变异
		//--------------------------------------------------------------------
		this.mutate = function(vecBits){

			for (var curBit=0; curBit < vecBits.length; curBit++){
				//是否要突变？
				if (Math.random() < this.mutationRate){
					//翻转二进制位
					vecBits[curBit] = !vecBits[curBit];
				}
			}//下一个bit
			return vecBits;
		}
		
		//----------------------------杂交(Crossover)--------------------------------
		//	传入两个父代染色体向量，把两个parent染色体在杂交点以后的所有位进行互换
		//  并把新的染色体赋给2个子代
		//---------------------------------------------------------------------
		this.crossover = function(mum, dad){
		
      var baby1 = new Array();
      var baby2 = new Array();
			var ret = new Array();
			//如果两个父代相同，直接返回
			if ( (Math.random() > this.crossoverRate) || (mum == dad)) {
				ret.push(mum);
				ret.push(dad);
				return ret;
			}
			
			//确定杂交点
			var cp = Math.round(Math.random() * this.chromoLength);
		
			//交换二进制位
			for (var i = 0; i < cp; ++i){
				baby1.push(mum[i]);
				baby2.push(dad[i]);
			}
		
			for (i = cp; i < mum.length; ++i){
				baby1.push(dad[i]);
				baby2.push(mum[i]);
			}
			ret.push(baby1);
			ret.push(baby2);
			return ret;
		}
		
		//--------------------------赌轮选择(RouletteWheelSelection)-----------------
		//
		//	赌轮选择
		//
		//------------------------------------------------------------------
		this.rouletteWheelSelection = function(){

			var Slice	= Math.random() * this.totalFitnessScore;
			
			var total	= 0.0;
			
			var selectedGenome = 0;
			
			for (var i=0; i < this.popSize; ++i){
				
				total += this.vecGenomes[i].fitness;
				
				if (total > Slice) {
					selectedGenome = i;
					break;
				}
			}
			
			return this.vecGenomes[selectedGenome];
		}
		
		//------------------------------------------------
		//
		//用新的适应性分数来更新基因组原有的适应性分数
		//并计算群体的最高适应性分数和适应性分数最高的那个成员
		//
		//----------------------------------------------------
		this.updateFitnessScores = function(){
			this.fittestGenome = 0;
			this.bestFitnessScore = 0;
			this.totalFitnessScore = 0;
			
			var tempMemory = new BobsMap();
			//更新适应性分数
			for (var i=0; i < this.popSize; ++i){
				//将每个基因组的染色体解码为方向向量
				var vecDirections = this.decode(this.vecGenomes[i].vecBits);
				//如果基因组的适应性分数跟上次一样，减少适应性分数
				var tmpfitness = this.bobsMap.testRoute(vecDirections, tempMemory);

				//计算它的适应性分数
				this.vecGenomes[i].fitness = tmpfitness;
		
				//更新总适应性分数
				this.totalFitnessScore += this.vecGenomes[i].fitness;
		
				//如果这是目前为止最好的适应性分数,存储结果
				if (this.vecGenomes[i].fitness > this.bestFitnessScore){
					
					if(this.bestFitnessScore == this.vecGenomes[i].fitness && this.vecGenomes[i].fitness != 1){
						this.bestFitnessScore = this.vecGenomes[i].fitness / 2;
					}else{
						this.bestFitnessScore = this.vecGenomes[i].fitness;
					}
					
					this.fittestGenome = i;
					//存储最好的路径
					this.bobsBrain = tempMemory;
		
					//Bob有没有找到出口？
					if (this.vecGenomes[i].fitness == 1){
						//找到出口，就停止运行
						this.busy = false;
						break;
					}
				}
				
			}//下一个基因组
		}
		
		//--------------------------------------
		//
		//把一个位向量译成为一个方向的(整数)向量
		//--------------------------------------
		this.decode = function(bits){

			var	directions = new Array();

			//每次编码一个基因
			for(var gene = 0; gene < bits.length; gene = this.genelLength + gene){
				//获取此位置的基因
				var thisGene = new Array();
				for(var bit = 0; bit < this.genelLength; bit++){
					thisGene.push(bits[gene+bit]);
				}
				//转换为十进制数并添加到向量列表中
				directions.push(this.binToInt(thisGene));
				}
		
			return directions;
		}
		
		
		//-------------------------------BinToInt-------------------------------
		//把一个位向量变换为十进制整数。
		//----------------------------------------------------------------------
		this.binToInt = function(vec){
			var val = 0;
			var multiplier = 1;
			
			for(var cBit = vec.length; cBit > 0; cBit--){
				val += vec[cBit - 1] * multiplier;
				multiplier *= 2;
			}

			return val;
		}
		
		//-----------------------------------Run----------------------------------
		//
		//运行
		//------------------------------------------------------------------------
		this.run = function(){
			//logger.clear();
			//创建一个随机的初始群体
			this.createStartPopulation();
			this.busy = true;
				
		}
		//----------------------CreateStartPopulation---------------------------
		//开始新的一轮
		//-----------------------------------------------------------------------
		this.createStartPopulation = function(){

			//清除存在的基因组
			this.vecGenomes.length = 0;
			
			for (var i = 0; i < this.popSize; i++){
				this.vecGenomes.push(new Genome(this.chromoLength));
			}

			//重置所有变量
			this.generation = 0;
			this.fittestGenome = 0;
			this.bestFitnessScore = 0;
			this.totalFitnessScore = 0;
		}
		
		/**
		 * Epoch (时代)
		 * 
		 */
		this.epoch = function(){

			//计算适应性分数，选出最优基因组
			this.updateFitnessScores();
			//现在创建一个新的群体
			var newBabies = 0;
			//为婴儿基因组创建存储器
			var vecBabyGenomes = new Array();
			
			while (newBabies < this.popSize)
			{
				//用赌轮法选择两个上辈(parents)
				var mum = this.rouletteWheelSelection();
				var dad = this.rouletteWheelSelection();

				//operator - crossover杂交操作
				var baby1 = new Genome();
				var baby2 = new Genome();
				var babys = this.crossover(mum.vecBits, dad.vecBits, baby1.vecBits, baby2.vecBits);
		
				//operator - mutate变异操作
				baby1.vecBits = this.mutate(babys[0]);
				baby2.vecBits = this.mutate(babys[1]);
		
				//把两个新生婴儿加入群体
				vecBabyGenomes.push(baby1);
				vecBabyGenomes.push(baby2);

				newBabies += 2;
			}
			//把婴儿重新复制到初始群体
			this.vecGenomes = vecBabyGenomes;
		
			//代的数量加1
			++this.generation;
		}
		
		//------------------------- Render -------------------------------
		//
    //画图
		//----------------------------------------------------------------
		this.render = function(){

			//画地图
			this.bobsMap.render();
		
			//画出最优路径
			this.bobsBrain.memoryRender();
		
			//显示代数
			document.getElementById('generation').innerHTML = this.generation;
			
			if (!this.busy){
				var start = "开始新的时代";
				document.getElementById('startLabel').innerHTML = start;
			}else{
				var start = "停止";
				document.getElementById('startLabel').innerHTML = start;
			}
			
		}
		this.getGeneration = function(){ return this.generation;}
		this.getFittest = function(){ return this.fittestGenome;}
		this.started = function(){ return this.busy;}
		this.stop = function(){ this.busy = false;}
	}
	
/**
  *遗传算法类的实例被创建时，构造函数初始化所有变量，并调用CreateStartPopulation()。
  *这一短小函数创建了所需数量的基因组群体。每个基因一开始包含的是一个有随即
  *二进制位串组成的染色体，其适应性分数设置为零。
  *
  *
*/