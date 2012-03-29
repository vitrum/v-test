// JavaScript Document

//设置单元格的背景颜色
function setSellColor(x, y, color){
	document.getElementById(x.toString() + y.toString()).style.background = color;
	}
/**
 *地图类
 */
 function BobsMap(){
	 
		 //地图数据
		 //0 表示开放的空间; 1 代表墙壁或障碍物; 5 起始点; 8 出口
		 this.map = [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,1,0,0,0,0,0,1,1,1,0,0,0,1],
				[8,0,0,0,0,0,0,0,1,1,1,0,0,0,1],
				[1,0,0,0,1,1,1,0,0,1,0,0,0,0,1],
				[1,0,0,0,1,1,1,0,0,0,0,0,1,0,1],
				[1,0,0,0,1,1,1,0,0,0,0,0,1,0,1],
				[1,0,0,0,0,1,0,0,0,0,1,1,1,0,1],
				[1,0,1,1,0,0,0,1,0,0,0,0,0,0,5],
				[1,0,1,1,0,0,0,1,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			];
		 
		 //地图长宽
		 this.mapWidth = MAP_WIDTH;
		 this.mapHeight = MAP_HEIGHT;
		 
		 //起始点坐标
		 this.startX = 14;
		 this.startY = 7;
		 
		 //终点坐标
		 this.endX = 0;
		 this.endY = 2;
		 
		 //Bob走过的路程的存储器
		 this.memory = [];
		 
		 //-------------------------TestRoute------------------------
		 //
		 //利用一个字符串来记录Bob行进的方向，其中每个字符代表Bob所走的一步
		 //检查Bob离开出口还有多远，返回一个与到达出口距离成正比的适应性分数
		 //---------------------------------------------------
		 this.testRoute = function(vecPath, bobs){
			 bobs.resetMemory();
			 //返回一个记忆路径的地图
			var posX = this.startX;
			var posY = this.startY;

			for(var dir = 0; dir < vecPath.length; dir++){
          var nextDir = vecPath[dir];
					switch(vecPath[dir]){
						
					case 0: //北
						//检查是否到达边界以确定是否移动
						if ( ((posY-1) < 0 ) || (this.map[posY-1][posX] == 1) ){
							break;
						}else{
							posY -= 1;
						}
						break;
						
					case 1: //南
						if ( ((posY+1) >= this.mapHeight) || (this.map[posY+1][posX] == 1) ){
							break;
						}else{
							posY += 1;
						}			
						break;
						
					case 2: //东
						if ( ((posX+1) >= this.mapWidth ) || (this.map[posY][posX+1] == 1) ){
							break;
						}else{
							posX += 1;
						}			
						break;
			
					case 3: //西;
						if ( ((posX-1) < 0 ) || (this.map[posY][posX-1] == 1) ){
							break;
						}else{
							posX -= 1;
						}
						break;
					}
					//mark the route in the memory array
					bobs.memory[posY][posX] = 1;

			
				}//下一个方向
			
				//现在我们知道了Bobs这次旅行的结束点,让我们指定
				//一个与距入口路程成比例的适应性分数
				var	diffX = Math.abs(posX - this.endX);
				var diffY = Math.abs(posY - this.endY);
				//我们加上1确保被除数不会是零。所以当返回1的时候，就得到了一个解。
				return 1/(diffX + diffY + 1);
			};
      
     
     //-------------------------Render------------------------
     //
		 //Render函数用于显示地图
		 //-------------------------------
		 this.render = function(){
			 //循环画出地图
			 for (var y = 0; y < this.mapHeight; ++y){
				 for(var x = 0; x < this.mapWidth; ++x){
					 //开放空间为白色
					 if(this.map[y][x] == 0){
						 setSellColor(y, x, 'white');
						 }
						 
					 //如果是墙将单元格背景设置为黑色
					 if(this.map[y][x] == 1){
						 setSellColor(y, x, 'black');
						 }
						 
					 //入口和出口为红色
					 if(this.map[y][x] == 5 || this.map[y][x] == 8){
						 setSellColor(y, x, 'red');
						 }
				 }
			 }
		 };
		 
		 //----------------MemoryRender----------------
		 //
		 //画出存放于存储器中的任意路径
		 //---------------------------------
		 
		 this.memoryRender = function(){

			for (var y = 0; y < this.mapHeight; ++y){
					for (var x = 0; x < this.mapWidth; ++x){
						if (this.memory[y][x] == 1){
							setSellColor(y, x, 'lightgrey');
						}
					}
				}
			 };
		
		//-------------------------ResetMemory------------------------
		//清空地图数据
		//-------------------------------
		this.resetMemory = function(){
			for (var y=0; y < this.mapHeight; ++y){
					this.memory[y] = [];
					for (var x=0; x < this.mapWidth; ++x){
						this.memory[y][x] = 0;
					}
				}
			}
			
		//设置地图墙壁和道路
		this.changeBlock = function(x, y){
			//判断是否是边界
			if(x == 0 || x == 9 || y == 0 || y == 14){
				//更改出口和入口
				return;
			}else{//更改道路
				if(this.map[x][y] == 0){
					this.map[x][y] = 1;
				}else{
					this.map[x][y] = 0;
				}
				this.render();
			}
		}
		this.resetMemory();
	 }