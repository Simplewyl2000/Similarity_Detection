(function (canvasbox, _window) {
	/* 基础 */
	var abnormal_lightcolor1 = 0;
	var abnormal_lightcolor2 = 0;
	var person_to_operation = 0;
	var abnormal_lightcolor4 = 0;
	var abnormal_lightcolor5 = 0;

	var scene, camera, renderer, states, controls, particles = [], bluePoint;
	var initCamera;
	var action, action_buzhuan, count_act = 0;
	var taiyang, huo, mu, tu, tian, hai;
	var sprite_sun, sprite_huo, sprite_mu, sprite_tu, sprite_tian, sprite_hai;
	var ctx_sun, ctx_huo, ctx_mu, ctx_tu, ctx_tian, ctx_hai;
	var time = Date.now() * 0.0005;
	var count = 0;

	(function () {
		// 场景
		scene = new THREE.Scene();
		// 照相机
		initCamera = function () {
			//视野角,纵横比,相机离视体积最近的距离,相机离视体积最远的距离
			camera = new THREE.PerspectiveCamera(60, canvasbox.clientWidth / canvasbox.clientHeight, 1, 1000);
		}
		initCamera();
		camera.position.set(250, 250, 250);
		camera.lookAt({//设置视野的中心坐标
			x: 0,
			y: 0,
			z: 0
		});
		// 渲染器
		renderer = new THREE.WebGLRenderer();
		renderer.setSize(canvasbox.clientWidth, canvasbox.clientHeight);
		renderer.clear(0xffffff);
		canvasbox.appendChild(renderer.domElement);
		// 监视器,stats性能插件添加了以后，会默认在左上角显示性能帧数，每次刷新所用时间，占用内存。鼠标左键点击可进行切换，默认显示每秒的帧数。
		/*states = new Stats();
		document.body.appendChild(states.domElement);
		states.domElement.style.position = "absolute";
		states.domElement.style.left = 0;
		states.domElement.style.top = 0;*/

		controls = new THREE.OrbitControls(camera);//用户交互插件,鼠标控制移动与缩放
	})();
	/* 光照 */
	(function () {
		var huanjing = new THREE.AmbientLight(0x8f8f8f);//环境光
		scene.add(huanjing);
	})();

	/* 绘制文字自动换行 */
	function canvasTextAutoLine(str, canvas, initX, initY, lineHeight) {
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = '#ffff00';
		ctx.lineWidth = 1;
		var lineWidth = 0;
		var canvasWidth = canvas.width;
		var lastSubStrIndex = 0;
		ctx.font = "Bold 80px Arial";
		for (let i = 0; i < str.length; i++) {
			lineWidth += ctx.measureText(str[i]).width;
			if (lineWidth > canvasWidth - initX) {//减去initX,防止边界出现的问题
				ctx.fillText(str.substring(lastSubStrIndex, i), initX, initY);
				initY += lineHeight;
				lineWidth = 0;
				lastSubStrIndex = i;
			}
			if (i == str.length - 1) {
				ctx.fillText(str.substring(lastSubStrIndex, i + 1), initX, initY);
			}
		}
	}

	/* 星球 */
	(function () {
		//闪烁星空背景		
		(function () {
			var i = 0;
			for (var zpos = 0; zpos < 250; zpos += 1) {
				var dian_geometry = new THREE.SphereGeometry(0.5, 10, 10);
				var dian_material = new THREE.MeshLambertMaterial({ color: 0xffffff });
				particles[i] = new THREE.Mesh(dian_geometry, dian_material);
				scene.add(particles[i]);
				particles[i].position.x = Math.random() * 500 - 250;
				particles[i].position.y = Math.random() * 500 - 250;
				particles[i].position.z = zpos;
				i += 1;
			}
		})();

		//点光源
		(function () {
			//红光
			redPoint_huo = new THREE.PointLight("#ff0000");
			redPoint_huo.intensity = 0;
			redPoint_huo.distance = 50;
			scene.add(redPoint_huo);
			scene.add(new THREE.PointLightHelper(redPoint_huo, 1));

			redPoint_mu = new THREE.PointLight("#ff0000");
			redPoint_mu.intensity = 0;
			redPoint_mu.distance = 50;
			scene.add(redPoint_mu);
			scene.add(new THREE.PointLightHelper(redPoint_mu, 1));

			redPoint_tu = new THREE.PointLight("#ff0000");
			redPoint_tu.intensity = 0;
			redPoint_tu.distance = 50;
			scene.add(redPoint_tu);
			scene.add(new THREE.PointLightHelper(redPoint_tu, 1));

			redPoint_tian = new THREE.PointLight("#ff0000");
			redPoint_tian.intensity = 0;
			redPoint_tian.distance = 50;
			scene.add(redPoint_tian);
			scene.add(new THREE.PointLightHelper(redPoint_tian, 1));

			redPoint_hai = new THREE.PointLight("#ff0000");
			redPoint_hai.intensity = 0;
			redPoint_hai.distance = 50;
			scene.add(redPoint_hai);
			scene.add(new THREE.PointLightHelper(redPoint_hai, 1));

			//橙色光
			orangePoint_huo = new THREE.PointLight("#ff6600");
			orangePoint_huo.intensity = 1;
			orangePoint_huo.distance = 50;
			scene.add(orangePoint_huo);
			scene.add(new THREE.PointLightHelper(orangePoint_huo, 2));

			orangePoint_mu = new THREE.PointLight("#ff6600");
			orangePoint_mu.intensity = 1;
			orangePoint_mu.distance = 50;
			scene.add(orangePoint_mu);
			scene.add(new THREE.PointLightHelper(orangePoint_mu, 2));

			orangePoint_tu = new THREE.PointLight("#ff6600");
			orangePoint_tu.intensity = 1;
			orangePoint_tu.distance = 50;
			scene.add(orangePoint_tu);
			scene.add(new THREE.PointLightHelper(orangePoint_tu, 2));

			orangePoint_tian = new THREE.PointLight("#ff6600");
			orangePoint_tian.intensity = 1;
			orangePoint_tian.distance = 50;
			scene.add(orangePoint_tian);
			scene.add(new THREE.PointLightHelper(orangePoint_tian, 2));

			orangePoint_hai = new THREE.PointLight("#ff6600");
			orangePoint_hai.intensity = 1;
			orangePoint_hai.distance = 50;
			scene.add(orangePoint_hai);
			scene.add(new THREE.PointLightHelper(orangePoint_hai, 2));

			//绿光
			greenPoint_huo = new THREE.PointLight("#00ff00");
			greenPoint_huo.intensity = 4;
			greenPoint_huo.distance = 50;
			scene.add(greenPoint_huo);
			scene.add(new THREE.PointLightHelper(greenPoint_huo, 1));

			greenPoint_mu = new THREE.PointLight("#00ff00");
			greenPoint_mu.intensity = 4;
			greenPoint_mu.distance = 50;
			scene.add(greenPoint_mu);
			scene.add(new THREE.PointLightHelper(greenPoint_mu, 1));

			greenPoint_tu = new THREE.PointLight("#00ff00");
			greenPoint_tu.intensity = 4;
			greenPoint_tu.distance = 50;
			scene.add(greenPoint_tu);
			scene.add(new THREE.PointLightHelper(greenPoint_tu, 1));

			greenPoint_tian = new THREE.PointLight("#00ff00");
			greenPoint_tian.intensity = 4;
			greenPoint_tian.distance = 50;
			scene.add(greenPoint_tian);
			scene.add(new THREE.PointLightHelper(greenPoint_tian, 1));

			greenPoint_hai = new THREE.PointLight("#00ff00");
			greenPoint_hai.intensity = 4;
			greenPoint_hai.distance = 50;
			scene.add(greenPoint_hai);
			scene.add(new THREE.PointLightHelper(greenPoint_hai, 1));

			//黑色遮挡
			blackPoint_huo = new THREE.PointLight(0x330000, 1, 1);
			scene.add(blackPoint_huo);
			scene.add(new THREE.PointLightHelper(blackPoint_huo, 1));
			blackPoint_mu = new THREE.PointLight(0x330000, 1, 1);
			scene.add(blackPoint_mu);
			scene.add(new THREE.PointLightHelper(blackPoint_mu, 1));
			blackPoint_tu = new THREE.PointLight(0x330000, 1, 1);
			scene.add(blackPoint_tu);
			scene.add(new THREE.PointLightHelper(blackPoint_tu, 1));
			blackPoint_tian = new THREE.PointLight(0x330000, 1, 1);
			scene.add(blackPoint_tian);
			scene.add(new THREE.PointLightHelper(blackPoint_tian, 1));
			blackPoint_hai = new THREE.PointLight(0x330000, 1, 1);
			scene.add(blackPoint_hai);
			scene.add(new THREE.PointLightHelper(blackPoint_hai, 1));
		})();
		// 太阳
		(function () {
			var loader = new THREE.TextureLoader();
			var taiyang_geometry = new THREE.SphereGeometry(32, 100, 100);
			var taiyang_material = new THREE.MeshLambertMaterial({
				emissive: 0xe65f05,
				map: loader.load("../static/img/taiyang2.jpg"),
				side: THREE.DoubleSide,
				color: 0xffffff
			});
			taiyang = new THREE.Mesh(taiyang_geometry, taiyang_material);
			scene.add(taiyang);
			taiyang.position.set(0, 0, 0);
			var taiyang_light = new THREE.PointLight(0xffffff, 1, 350);
			taiyang_light.position.set(0, 0, 0);
			scene.add(taiyang_light);
			taiyang.name = "taiyang";

			let canvas = document.createElement("canvas");
			canvas.width = '1024';
			canvas.height = '512';
			ctx_sun = canvas.getContext("2d");
			ctx_sun.fillStyle = "#ffff00";
			ctx_sun.font = "Bold 80px Arial";
			ctx_sun.lineWidth = 4;
			let texture = new THREE.Texture(canvas);
			texture.needsUpdate = true;
			var spriteMaterial = new THREE.SpriteMaterial({ map: texture, opacity: 0 });
			sprite_sun = new THREE.Sprite(spriteMaterial);
			sprite_sun.name = "spt_sun";
			sprite_sun.scale.set(72, 36, 1);
			sprite_sun.position.set(50, 64, 0);
			scene.add(sprite_sun);
		})();
		// 火星
		(function () {
			var loader = new THREE.TextureLoader();
			var huo_geometry = new THREE.SphereGeometry(17, 100, 100);
			var huo_material = new THREE.MeshLambertMaterial({
				map: loader.load("../static/img/huo.jpg"),
				side: THREE.DoubleSide,
			});
			huo = new THREE.Mesh(huo_geometry, huo_material);
			scene.add(huo);
			huo.position.set(0, 0, 70);
			var warn2_geometry = new THREE.SphereGeometry(0.1, 10, 10);
			var warn2_material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
			huo_warn = new THREE.Mesh(warn2_geometry, warn2_material);
			scene.add(huo_warn);
			huo_warn.position.set(18, 0, 70);
			huo.name = 'huo';

			let canvas = document.createElement("canvas");
			canvas.width = '1024';
			canvas.height = '512';
			ctx_huo = canvas.getContext("2d");
			ctx_huo.fillStyle = "#ffff00";
			ctx_huo.font = "Bold 80px Arial";
			ctx_huo.lineWidth = 4;
			let texture = new THREE.Texture(canvas);
			texture.needsUpdate = true;
			var spriteMaterial = new THREE.SpriteMaterial({ map: texture, opacity: 0 });
			sprite_huo = new THREE.Sprite(spriteMaterial);
			sprite_huo.name = "spt_huo";
			sprite_huo.scale.set(72, 36, 1);
			sprite_huo.position.set(50, 0, 70);
			scene.add(sprite_huo);
		})();
		// 木星
		(function () {
			var loader = new THREE.TextureLoader();
			var mu_geometry = new THREE.SphereGeometry(17, 100, 100);
			var mu_material = new THREE.MeshLambertMaterial({
				map: loader.load("../static/img/mu.jpg"),
				side: THREE.DoubleSide,
			});
			mu = new THREE.Mesh(mu_geometry, mu_material);
			scene.add(mu);
			mu.position.set(0, 0, 100);
			mu.rotation.set(0, 20, 0);

			var warn3_geometry = new THREE.SphereGeometry(0.1, 10, 10);
			var warn3_material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
			mu_warn = new THREE.Mesh(warn3_geometry, warn3_material);
			scene.add(mu_warn);
			mu_warn.position.set(18, 0, 100);
			mu_warn.rotation.set(0, 20, 0);
			mu.name = "mu";

			let canvas = document.createElement("canvas");
			canvas.width = '1024';
			canvas.height = '512';
			ctx_mu = canvas.getContext("2d");
			ctx_mu.fillStyle = "#ffff00";
			ctx_mu.font = "Bold 80px Arial";
			ctx_mu.lineWidth = 4;
			let texture = new THREE.Texture(canvas);
			texture.needsUpdate = true;
			var spriteMaterial = new THREE.SpriteMaterial({ map: texture, opacity: 0 });
			sprite_mu = new THREE.Sprite(spriteMaterial);
			sprite_mu.name = 'spt_mu';
			sprite_mu.scale.set(72, 36, 1);
			sprite_mu.position.set(50, 0, 100);
			scene.add(sprite_mu);
		})();
		// 土星
		(function () {
			var loader = new THREE.TextureLoader();
			var tu_geometry = new THREE.SphereGeometry(17, 100, 100);
			var tu_material = new THREE.MeshLambertMaterial({
				map: loader.load("../static/img/tu.jpg"),
				side: THREE.DoubleSide,
			});
			tu = new THREE.Mesh(tu_geometry, tu_material);
			scene.add(tu);
			tu.position.set(0, 0, 140);
			tu.rotation.set(0.5, 0, 0);

			var warn4_geometry = new THREE.SphereGeometry(0.1, 10, 10);
			var warn4_material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
			tu_warn = new THREE.Mesh(warn4_geometry, warn4_material);
			scene.add(tu_warn);
			tu_warn.position.set(18, 0, 140);
			tu_warn.rotation.set(0.5, 0, 0);
			tu.name = "tu";

			let canvas = document.createElement("canvas");
			canvas.width = '1024';
			canvas.height = '512';
			ctx_tu = canvas.getContext("2d");
			ctx_tu.fillStyle = "#ffff00";
			ctx_tu.font = "Bold 80px Arial";
			ctx_tu.lineWidth = 4;
			let texture = new THREE.Texture(canvas);
			texture.needsUpdate = true;
			var spriteMaterial = new THREE.SpriteMaterial({ map: texture, opacity: 0 });
			sprite_tu = new THREE.Sprite(spriteMaterial);
			sprite_tu.name = "spt_tu";
			sprite_tu.scale.set(72, 36, 1);
			sprite_tu.position.set(50, 0, 140);
			scene.add(sprite_tu);
		})();
		// 天王星
		(function () {
			var loader = new THREE.TextureLoader();
			var tian_geometry = new THREE.SphereGeometry(17, 100, 100);
			var tian_material = new THREE.MeshLambertMaterial({
				map: loader.load("../static/img/tian.jpg"),
				side: THREE.DoubleSide,
			});
			tian = new THREE.Mesh(tian_geometry, tian_material);
			scene.add(tian);
			tian.position.set(0, 0, 195);
			tian.rotation.set(0, 0, 0.3);
			var warn5_geometry = new THREE.SphereGeometry(0.1, 10, 10);
			var warn5_material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
			tian_warn = new THREE.Mesh(warn5_geometry, warn5_material);
			scene.add(tian_warn);
			tian_warn.position.set(18, 0, 195);
			tian_warn.rotation.set(0, 0, 0.3);
			tian.name = "tian";

			let canvas = document.createElement("canvas");
			canvas.width = '1024';
			canvas.height = '512';
			ctx_tian = canvas.getContext("2d");
			ctx_tian.fillStyle = "#ffff00";
			ctx_tian.font = "Bold 80px Arial";
			ctx_tian.lineWidth = 4;
			let texture = new THREE.Texture(canvas);
			texture.needsUpdate = true;
			var spriteMaterial = new THREE.SpriteMaterial({ map: texture, opacity: 0 });
			sprite_tian = new THREE.Sprite(spriteMaterial);
			sprite_tian.name = "spt_tian";
			sprite_tian.scale.set(72, 36, 1);
			sprite_tian.position.set(50, 0, 195);
			scene.add(sprite_tian);
		})();
		// 海王星
		(function () {
			var loader = new THREE.TextureLoader();
			var hai_geometry = new THREE.SphereGeometry(17, 100, 100);
			var hai_material = new THREE.MeshLambertMaterial({
				map: loader.load("../static/img/huo.jpg"),
				side: THREE.DoubleSide,
			});
			hai = new THREE.Mesh(hai_geometry, hai_material);
			scene.add(hai);
			hai.position.set(0, 0, 250);
			var warn6_geometry = new THREE.SphereGeometry(0.1, 10, 10);
			var warn6_material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
			hai_warn = new THREE.Mesh(warn6_geometry, warn6_material);
			scene.add(hai_warn);
			hai_warn.position.set(18, 0, 250);
			hai.name = "hai";

			let canvas = document.createElement("canvas");
			canvas.width = '1024';
			canvas.height = '512';
			ctx_hai = canvas.getContext("2d");
			ctx_hai.fillStyle = "#ffff00";
			ctx_hai.font = "Bold 80px Arial";
			ctx_hai.lineWidth = 4;
			let texture = new THREE.Texture(canvas);
			texture.needsUpdate = true;
			var spriteMaterial = new THREE.SpriteMaterial({ map: texture, opacity: 0 });
			sprite_hai = new THREE.Sprite(spriteMaterial);
			sprite_hai.name = "spt_hai";
			sprite_hai.scale.set(72, 36, 1);
			sprite_hai.position.set(50, 0, 250);
			scene.add(sprite_hai);
		})();
	})();
	/* 初始化 */
	(function () {
		var PI2 = 2 * Math.PI; // 弧度的最大值
		var zuobiaoxi = [ // 显示坐标系的信息
			document.getElementById("zuobiao-x"), // X
			document.getElementById("zuobiao-y"), // Y
			document.getElementById("zuobiao-z")  // Z
		];
		// 自转，沿着y轴自转
		function zizhuan() {
			taiyang.rotation.y = taiyang.rotation.y + 0.01 >= 2 * PI2 ? 0 : taiyang.rotation.y + 0.01; // 太阳自转			
			huo.rotation.y = huo.rotation.y + 0.03 >= 2 * PI2 ? 0 : huo.rotation.y + 0.03;             // 火星自转
			mu.rotation.y = mu.rotation.y + 0.003 >= 2 * PI2 ? 0 : mu.rotation.y + 0.003;              // 木星自转
			tu.rotation.y = tu.rotation.y + 0.01 >= 2 * PI2 ? 0 : tu.rotation.y + 0.01;                // 土星自转
			tian.rotation.y = tian.rotation.y + 0.005 >= 2 * PI2 ? 0 : tian.rotation.y + 0.005;        // 天王自转
			hai.rotation.y = hai.rotation.y + 0.003 >= 2 * PI2 ? 0 : hai.rotation.y + 0.003;           // 海王星自转       		
		}
		// 定义角度
		var dian1_deg, dian2_deg, dian3_deg, huo_deg, mu_deg, tu_deg, tian_deg, hai_deg;
		dian1_deg = warn1_deg = normal1_deg = dian3_deg = huo_deg = mu_deg = tu_deg = tian_deg = hai_deg = 0;

		// 公转
		function gongzhuan() {
			abnormal_lightcolor1 = localStorage.getItem('single_abnormal_rate');//获取lstm个体模型异常记录比例
			agent_name = localStorage.getItem('agent_id');//获取lstm个体模型user
			abnormal_lightcolor2 = localStorage.getItem('all_abnormal_rate');//获取模型2异常记录比例
			//person_to_operation = localStorage.getItem('person_to_operation');//人与操作关联比例
			//console.log(person_to_operation);
			var abnormal_lightcolor3_Z4YAZWRB = localStorage.getItem('person_to_operation_Z4YAZWRB');//获取模型3异常记录比例
			var abnormal_lightcolor3_537TT03OT = localStorage.getItem('person_to_operation_537TT03OT');
			var abnormal_lightcolor3_5VM42727 = localStorage.getItem('person_to_operation_5VM42727');
		    var abnormal_lightcolor3_5VM452F4 = localStorage.getItem('person_to_operation_5VM452F4');
			var abnormal_lightcolor3_5VMTSDK5 = localStorage.getItem('person_to_operation_5VMTSDK5');
			var abnormal_lightcolor3 = (parseFloat(abnormal_lightcolor3_Z4YAZWRB)+parseFloat(abnormal_lightcolor3_537TT03OT)+parseFloat(abnormal_lightcolor3_5VM42727)+parseFloat(abnormal_lightcolor3_5VM452F4)+parseFloat(abnormal_lightcolor3_5VMTSDK5))/5; 
			var abnormal_lightcolor4_1ratio = localStorage.getItem('operation_to_operation1_ratio');
			var abnormal_lightcolor4_2ratio = localStorage.getItem('operation_to_operation2_ratio');
			var abnormal_lightcolor4_3ratio = localStorage.getItem('operation_to_operation3_ratio');
			var abnormal_lightcolor4_4ratio = localStorage.getItem('operation_to_operation4_ratio');
			var abnormal_lightcolor4_5ratio = localStorage.getItem('operation_to_operation5_ratio');					
			var abnormal_lightcolor4 = (parseFloat(abnormal_lightcolor4_1ratio)+parseFloat(abnormal_lightcolor4_2ratio)+parseFloat(abnormal_lightcolor4_3ratio)+parseFloat(abnormal_lightcolor4_4ratio)+parseFloat(abnormal_lightcolor4_5ratio))/5;
		   // console.log(abnormal_lightcolor4);
			var abnormal_lightcolor5_1day = localStorage.getItem('people_to_people1_day');
			var abnormal_lightcolor5_2day = localStorage.getItem('people_to_people2_day');
			var abnormal_lightcolor5_3day = localStorage.getItem('people_to_people3_day');
			var abnormal_lightcolor5_4day = localStorage.getItem('people_to_people4_day');
			var abnormal_lightcolor5_5day = localStorage.getItem('people_to_people5_day');
			var abnormal_lightcolor5 = (parseFloat(abnormal_lightcolor5_1day)+parseFloat(abnormal_lightcolor5_2day)+parseFloat(abnormal_lightcolor5_3day)+parseFloat(abnormal_lightcolor5_4day)+parseFloat(abnormal_lightcolor5_5day))/5;
			//console.log(abnormal_lightcolor5);
			count++;
			// 火星
			huo_deg = huo_deg + 0.01 >= PI2 ? 0 : huo_deg + 0.01;
			huo.position.set(70 * Math.sin(huo_deg), 0, 70 * Math.cos(huo_deg));
			huo_warn.position.set(70 * Math.sin(huo_deg) + 18, 0, 70 * Math.cos(huo_deg));
			sprite_huo.position.set(70 * Math.sin(huo_deg) + 50, 0, 70 * Math.cos(huo_deg));
			if (count % 8 == 1 || count % 8 == 2 || count % 8 == 3) {
				//blackPoint_huo.position.copy(huo_warn.position);
				redPoint_huo.intensity = 0;
				redPoint_huo.position.copy(huo_warn.position);
				orangePoint_huo.intensity = 0;
				orangePoint_huo.position.copy(huo_warn.position);
				greenPoint_huo.intensity = 0;
				greenPoint_huo.position.copy(huo_warn.position);
			}
			else if (abnormal_lightcolor1 > 0.7)//异常比例大于0.3时视为异常，显示红色
			{
				redPoint_huo.intensity = 4;
				redPoint_huo.position.copy(huo_warn.position);
				orangePoint_huo.intensity = 0;
				orangePoint_huo.position.copy(huo_warn.position);
				greenPoint_huo.intensity = 0;
				greenPoint_huo.position.copy(huo_warn.position);
			}
			else if (abnormal_lightcolor1 > 0.1 && abnormal_lightcolor1 <= 0.8) {
				orangePoint_huo.intensity = 4;
				orangePoint_huo.position.copy(huo_warn.position);
				redPoint_huo.intensity = 0;
				redPoint_huo.position.copy(huo_warn.position);
				greenPoint_huo.intensity = 0;
				greenPoint_huo.position.copy(huo_warn.position);
			}
			else {
				greenPoint_huo.intensity = 4;
				greenPoint_huo.position.copy(huo_warn.position);
				redPoint_huo.intensity = 0;
				redPoint_huo.position.copy(huo_warn.position);
				orangePoint_huo.intensity = 0;
				orangePoint_huo.position.copy(huo_warn.position);
			}
			// 木星
			mu_deg = mu_deg + 0.002 >= PI2 ? 0 : mu_deg + 0.002;
			mu.position.set(100 * Math.sin(mu_deg), 0, 100 * Math.cos(mu_deg));
			mu_warn.position.set(100 * Math.sin(mu_deg) + 18, 0, 100 * Math.cos(mu_deg));
			sprite_mu.position.set(100 * Math.sin(mu_deg) + 50, 0, 100 * Math.cos(mu_deg));
			if (count % 8 == 1 || count % 8 == 2 || count % 8 == 3) {
				//blackPoint_mu.position.copy(mu_warn.position);
				redPoint_huo.intensity = 0;
				redPoint_huo.position.copy(huo_warn.position);
				orangePoint_huo.intensity = 0;
				orangePoint_huo.position.copy(huo_warn.position);
				greenPoint_huo.intensity = 0;
				greenPoint_huo.position.copy(huo_warn.position);
			}
			else if (abnormal_lightcolor2 > 0.7)//异常比例大于0.3时视为异常，显示红色
			{
				redPoint_mu.intensity = 4;
				redPoint_mu.position.copy(mu_warn.position);
				orangePoint_mu.intensity = 0;
				orangePoint_mu.position.copy(mu_warn.position);
				greenPoint_mu.intensity = 0;
				greenPoint_mu.position.copy(mu_warn.position);
			}
			else if (abnormal_lightcolor2 > 0.1 && abnormal_lightcolor2 <= 0.7) {
				orangePoint_mu.intensity = 4;
				orangePoint_mu.position.copy(mu_warn.position);
				redPoint_mu.intensity = 0;
				redPoint_mu.position.copy(mu_warn.position);
				greenPoint_mu.intensity = 0;
				greenPoint_mu.position.copy(mu_warn.position);
			}
			else {
				greenPoint_mu.intensity = 4;
				greenPoint_mu.position.copy(mu_warn.position);
				redPoint_mu.intensity = 0;
				redPoint_mu.position.copy(mu_warn.position);
				orangePoint_mu.intensity = 0;
				orangePoint_mu.position.copy(mu_warn.position);
			}
			// 土星 人与操作
			tu_deg = tu_deg + 0.0009 >= PI2 ? 0 : tu_deg + 0.0009;
			tu.position.set(140 * Math.sin(tu_deg), 0, 140 * Math.cos(tu_deg));
			tu_warn.position.set(140 * Math.sin(tu_deg) + 18, 0, 140 * Math.cos(tu_deg));
			sprite_tu.position.set(140 * Math.sin(tu_deg) + 50, 0, 140 * Math.cos(tu_deg));
			if (count % 8 == 1 || count % 8 == 2 || count % 8 == 3) {
				redPoint_huo.intensity = 0;
				redPoint_huo.position.copy(huo_warn.position);
				orangePoint_huo.intensity = 0;
				orangePoint_huo.position.copy(huo_warn.position);
				greenPoint_huo.intensity = 0;
				greenPoint_huo.position.copy(huo_warn.position);
			}
			else if (abnormal_lightcolor3 <= 0.1)
			{
				redPoint_tu.intensity = 4;
				redPoint_tu.position.copy(tu_warn.position);
				orangePoint_tu.intensity = 0;
				orangePoint_tu.position.copy(tu_warn.position);
				greenPoint_tu.intensity = 0;
				greenPoint_tu.position.copy(tu_warn.position);
			}
			else if (abnormal_lightcolor3 >= 0.1 && abnormal_lightcolor3 < 0.5) {
				orangePoint_tu.intensity = 4;
				orangePoint_tu.position.copy(tu_warn.position);
				redPoint_tu.intensity = 0;
				redPoint_tu.position.copy(tu_warn.position);
				greenPoint_tu.intensity = 0;
				greenPoint_tu.position.copy(tu_warn.position);
			}
			else {
				greenPoint_tu.intensity = 4;
				greenPoint_tu.position.copy(tu_warn.position);
				redPoint_tu.intensity = 0;
				redPoint_tu.position.copy(tu_warn.position);
				orangePoint_tu.intensity = 0;
				orangePoint_tu.position.copy(tu_warn.position);
			}

			// 天王星 操作与操作
			tian_deg = tian_deg + 0.0005 >= PI2 ? 0 : tian_deg + 0.0005;
			tian.position.set(195 * Math.sin(tian_deg), 0, 195 * Math.cos(tian_deg));
			tian_warn.position.set(195 * Math.sin(tian_deg) + 18, 0, 195 * Math.cos(tian_deg));
			sprite_tian.position.set(195 * Math.sin(tian_deg) + 50, 0, 195 * Math.cos(tian_deg));
			if (count % 8 == 1 || count % 8 == 2 || count % 8 == 3){
				//blackPoint_tian.position.copy(tian_warn.position);
				redPoint_huo.intensity = 0;
				redPoint_huo.position.copy(huo_warn.position);
				orangePoint_huo.intensity = 0;
				orangePoint_huo.position.copy(huo_warn.position);
				greenPoint_huo.intensity = 0;
				greenPoint_huo.position.copy(huo_warn.position);
			}
			else if (abnormal_lightcolor4 <= 0.1)//异常比例大于0.3时视为异常，显示红色
			{
				redPoint_tian.intensity = 4;
				redPoint_tian.position.copy(tian_warn.position);
				orangePoint_tian.intensity = 0;
				orangePoint_tian.position.copy(tian_warn.position);
				greenPoint_tian.intensity = 0;
				greenPoint_tian.position.copy(tian_warn.position);
			}
			else if (abnormal_lightcolor4 > 0.1 && abnormal_lightcolor4 <= 0.5) {
				orangePoint_tian.intensity = 4;
				orangePoint_tian.position.copy(tian_warn.position);
				redPoint_tian.intensity = 0;
				redPoint_tian.position.copy(tian_warn.position);
				greenPoint_tian.intensity = 0;
				greenPoint_tian.position.copy(tian_warn.position);
			}
			else {
				greenPoint_tian.intensity = 4;
				greenPoint_tian.position.copy(tian_warn.position);
				redPoint_tian.intensity = 0;
				redPoint_tu.position.copy(tian_warn.position);
				orangePoint_tian.intensity = 0;
				orangePoint_tian.position.copy(tian_warn.position);
			}
			// 海王星 人与人
			hai_deg = hai_deg + 0.0003 >= PI2 ? 0 : hai_deg + 0.0003;
			hai.position.set(250 * Math.sin(hai_deg), 0, 250 * Math.cos(hai_deg));
			hai_warn.position.set(250 * Math.sin(hai_deg) + 18, 0, 250 * Math.cos(hai_deg));
			sprite_hai.position.set(250 * Math.sin(hai_deg) + 50, 0, 250 * Math.cos(hai_deg));
			if (count % 8 == 1 || count % 8 == 2 || count % 8 == 3){
				//blackPoint_hai.position.copy(hai_warn.position);
				redPoint_huo.intensity = 0;
				redPoint_huo.position.copy(huo_warn.position);
				orangePoint_huo.intensity = 0;
				orangePoint_huo.position.copy(huo_warn.position);
				greenPoint_huo.intensity = 0;
				greenPoint_huo.position.copy(huo_warn.position);
			}
			else if (abnormal_lightcolor5 >7)//异常比例大于0.3时视为异常，显示红色
			{
				redPoint_hai.intensity = 4;
				redPoint_hai.position.copy(hai_warn.position);
				orangePoint_hai.intensity = 0;
				orangePoint_hai.position.copy(hai_warn.position);
				greenPoint_hai.intensity = 0;
				greenPoint_hai.position.copy(hai_warn.position);
			}
			else if (abnormal_lightcolor5 > 3 && abnormal_lightcolor5 <= 7) {
				orangePoint_hai.intensity = 4;
				orangePoint_hai.position.copy(hai_warn.position);
				redPoint_hai.intensity = 0;
				redPoint_hai.position.copy(hai_warn.position);
				greenPoint_hai.intensity = 0;
				greenPoint_hai.position.copy(hai_warn.position);
			}

			else {
				greenPoint_hai.intensity = 4;
				greenPoint_hai.position.copy(hai_warn.position);
				redPoint_hai.intensity = 0;
				redPoint_hai.position.copy(hai_warn.position);
				orangePoint_hai.intensity = 0;
				orangePoint_hai.position.copy(hai_warn.position);
			}
			//背景闪烁
			for (var i = 0; i < particles.length; i++) {
				particles[i].position.z += 0.1;
				particles[i].position.x += 0.1;
				particles[i].position.y += 0.1;
				if (particles[i].position.x > 250)
					particles[i].position.x -= 500;
				if (particles[i].position.y > 250)
					particles[i].position.y -= 500;
				if (particles[i].position.z > 250)
					particles[i].position.z -= 500;
			}
		}
		// 显示信息
		/*function displayXYZ() {
			zuobiaoxi[0].innerHTML = parseInt(camera.position.x);  // 摄像机X
			zuobiaoxi[1].innerHTML = parseInt(camera.position.y);  // 摄像机Y
			zuobiaoxi[2].innerHTML = parseInt(camera.position.z);  // 摄像机Z
		}*/
		// 窗口改变事件
		function windowChange() {
			var x = camera.position.x,
				y = camera.position.y,
				z = camera.position.z;
			initCamera();
			controls = new THREE.OrbitControls(camera);
			camera.position.set(x, y, z);
			camera.lookAt({
				x: 0,
				y: 0,
				z: 0
			});
			renderer.setSize(canvasbox.clientWidth, canvasbox.clientHeight);
			//displayXYZ();//照相机位置改变，对应的显示也要立刻更新
		}
		// 动画
		function animate() {
			//states.begin();
			zizhuan();
			gongzhuan();
			renderer.clear();
			renderer.render(scene, camera);
			//states.end();
			action = requestAnimationFrame(animate);//告诉浏览器在合适的时候调用指定函数，通常可能达到60FPS
		}

		// 停止动画
		function animate_stop() {
			//states.begin();
			renderer.clear();
			renderer.render(scene, camera);
			//states.end();
			action_buzhuan = requestAnimationFrame(animate_stop);//告诉浏览器在合适的时候调用指定函数，通常可能达到60FPS	
		}
		// 初始化
		function init() {
			//displayXYZ();
			_window.addEventListener("resize", windowChange, false);//事件名称/要接收事件处理的函数/是否使用捕捉
			//controls.addEventListener("change", displayXYZ, false);
			requestAnimationFrame(animate);
		}
		init();

		function secCancelAction() {
			if (count_act && (action !== null)) {
				cancelAnimationFrame(action);
				action = null;
				requestAnimationFrame(animate_stop);
			}
		}

		function secStartAction() {
			if ((count_act === 0) && (action === null)) {
				cancelAnimationFrame(action_buzhuan);
				action_buzhuan = null;
				requestAnimationFrame(animate);
			}
		}

		var mouse = new THREE.Vector3();
		var raycaster = new THREE.Raycaster();
		function onClick(event) {
			event.preventDefault();
			//将屏幕像素坐标转化成camare坐标
			mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
			mouse.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;
			//设置射线的起点是相机
			raycaster.setFromCamera(mouse, camera);

			//将射线投影到屏幕，如果scene.children里的某个或多个形状相交，则返回这些形状
			//第二个参数是设置是否递归，默认是false，也就是不递归。当scene里面添加了Group对象的实例时，就需要设置这个参数为true
			//第一个参数不传scene.children也可以，传一个group.children或一个形状数组都可以（这样可以实现一些特别的效果如点击内部的效果）
			//另外，因为返回的是一个数组，所以遍历数组就可以获得所有相交的对象，当元素重叠时，特别有用
			var intersects = raycaster.intersectObjects(scene.children);

			function showInfo(sprite_x) {
				if (sprite_x.material.opacity == 0) {
					sprite_x.material.opacity = 0.6;
					count_act += 1;
					secCancelAction();
				} else {
					sprite_x.material.opacity = 0;
					count_act -= 1;
					secStartAction();
				}
			}

			if (intersects.length > 0) {
				var currObj = intersects[0].object;
				// if (currObj.name == "taiyang") {
				// 	ctx_sun.clearRect(0, 0, 500, 320);
				// 	ctx_sun.fillText('暂无数据！', 0, 100);
				// 	sprite_sun.material.map.needsUpdate = true;
				// 	showInfo(sprite_sun);
				// }
				if (currObj.name == "huo") {
					var abnormal_lightcolor1 = localStorage.getItem('single_abnormal_rate');//获取模型1异常记录比例
					var agent_name = localStorage.getItem('agent_id');//获取lstm个体模型user
					ctx_huo.clearRect(0, 0, 1024, 512);
					if(abnormal_lightcolor1){
						ctx_huo.fillText(agent_name, 0, 100);
						ctx_huo.fillText('LSTM异常率：' + parseFloat(abnormal_lightcolor1).toFixed(4).toString(), 0, 200)
					}else{
						ctx_huo.fillText('暂无数据！', 0, 100);
					}
					sprite_huo.material.map.needsUpdate = true;
					showInfo(sprite_huo);
				}
				if (currObj.name == "mu") {
					var abnormal_lightcolor2 = localStorage.getItem('all_abnormal_rate');//获取模型2异常记录比例
					ctx_mu.clearRect(0, 0, 1024, 512);
					if(abnormal_lightcolor2){
						ctx_mu.fillText('LSTM整体异常率:', 0, 100);
						ctx_mu.fillText(parseFloat(abnormal_lightcolor2).toFixed(4).toString(), 0, 200);
					}else{
						ctx_mu.fillText('暂无数据！', 0, 100);
					}
					sprite_mu.material.map.needsUpdate = true;
					showInfo(sprite_mu);
				}
				if (currObj.name == "tu") {
					var abnormal_lightcolor3_Z4YAZWRB = localStorage.getItem('person_to_operation_Z4YAZWRB');//获取模型3异常记录比例
					var abnormal_lightcolor3_537TT03OT = localStorage.getItem('person_to_operation_537TT03OT');
					var abnormal_lightcolor3_5VM42727 = localStorage.getItem('person_to_operation_5VM42727');
					var abnormal_lightcolor3_5VM452F4 = localStorage.getItem('person_to_operation_5VM452F4');
					var abnormal_lightcolor3_5VMTSDK5 = localStorage.getItem('person_to_operation_5VMTSDK5');
					ctx_tu.clearRect(0, 0, 1024, 512);
					if(abnormal_lightcolor3_Z4YAZWRB){
						ctx_tu.fillText('人与操作(关联率)', 0, 100);
						ctx_tu.fillText('Z4YAZWRB：' + parseFloat(abnormal_lightcolor3_Z4YAZWRB).toFixed(5).toString(), 0, 200);
						ctx_tu.fillText('537TT03OT：' + parseFloat(abnormal_lightcolor3_537TT03OT).toFixed(5).toString(), 0, 300);
						ctx_tu.fillText('5VM42727：' + parseFloat(abnormal_lightcolor3_5VM42727).toFixed(5).toString(), 0, 400);
						ctx_tu.fillText('5VM452F4：' + parseFloat(abnormal_lightcolor3_5VM452F4).toFixed(5).toString(), 0, 500);
						ctx_tu.fillText('5VMTSDK5：' + parseFloat(abnormal_lightcolor3_5VMTSDK5).toFixed(5).toString(), 0, 600);
					}else{
						ctx_tu.fillText('暂无数据！', 0, 100);
					}
					sprite_tu.material.map.needsUpdate = true;
					showInfo(sprite_tu);
				}
				if (currObj.name == "tian") {
					var abnormal_lightcolor4_1exe = localStorage.getItem('operation_to_operation1_exe');
					var abnormal_lightcolor4_1ratio = localStorage.getItem('operation_to_operation1_ratio');
					var abnormal_lightcolor4_2exe = localStorage.getItem('operation_to_operation2_exe');
					var abnormal_lightcolor4_2ratio = localStorage.getItem('operation_to_operation2_ratio');
					var abnormal_lightcolor4_3exe = localStorage.getItem('operation_to_operation3_exe');
					var abnormal_lightcolor4_3ratio = localStorage.getItem('operation_to_operation3_ratio');
					var abnormal_lightcolor4_4exe = localStorage.getItem('operation_to_operation4_exe');
					var abnormal_lightcolor4_4ratio = localStorage.getItem('operation_to_operation4_ratio');
					var abnormal_lightcolor4_5exe = localStorage.getItem('operation_to_operation5_exe');
					var abnormal_lightcolor4_5ratio = localStorage.getItem('operation_to_operation5_ratio');
					//console.log(abnormal_lightcolor4_1ratio,abnormal_lightcolor4_2ratio,abnormal_lightcolor4_3ratio,abnormal_lightcolor4_4ratio,abnormal_lightcolor4_5ratio);
					ctx_tian.clearRect(0, 0, 1024, 512);
					if(abnormal_lightcolor4_1exe){
						ctx_tian.fillText('操作与操作（关联率）', 0, 100);
						ctx_tian.fillText(abnormal_lightcolor4_1exe+'：' + parseFloat(abnormal_lightcolor4_1ratio).toFixed(4).toString(), 0, 200);
						ctx_tian.fillText(abnormal_lightcolor4_2exe+'：' + parseFloat(abnormal_lightcolor4_2ratio).toFixed(4).toString(), 0, 300);
						ctx_tian.fillText(abnormal_lightcolor4_3exe+'：' + parseFloat(abnormal_lightcolor4_3ratio).toFixed(4).toString(), 0, 400);
						ctx_tian.fillText(abnormal_lightcolor4_4exe+'：' + parseFloat(abnormal_lightcolor4_4ratio).toFixed(4).toString(), 0, 500);
						ctx_tian.fillText(abnormal_lightcolor4_5exe+'：' + parseFloat(abnormal_lightcolor4_5ratio).toFixed(4).toString(), 0, 600);
					}else{
						ctx_tian.fillText('暂无数据！', 0, 100);
					}
					sprite_tian.material.map.needsUpdate = true;
					showInfo(sprite_tian);
				}
				if (currObj.name == "hai") {
					var abnormal_lightcolor5_1people = localStorage.getItem('people_to_people1_people');
					var abnormal_lightcolor5_1day = localStorage.getItem('people_to_people1_day');
					var abnormal_lightcolor5_2people = localStorage.getItem('people_to_people2_people');
					var abnormal_lightcolor5_2day = localStorage.getItem('people_to_people2_day');
					var abnormal_lightcolor5_3people = localStorage.getItem('people_to_people3_people');
					var abnormal_lightcolor5_3day = localStorage.getItem('people_to_people3_day');
					var abnormal_lightcolor5_4people = localStorage.getItem('people_to_people4_people');
					var abnormal_lightcolor5_4day = localStorage.getItem('people_to_people4_day');
					var abnormal_lightcolor5_5people = localStorage.getItem('people_to_people5_people');
					var abnormal_lightcolor5_5day = localStorage.getItem('people_to_people5_day');

					var pp = localStorage.getItem('pp_max_discrete');
					ctx_hai.clearRect(0, 0, 1024, 512);
					if(abnormal_lightcolor5_1people){
						ctx_hai.fillText('人与人（离散天数）', 0, 100);
						ctx_hai.fillText(abnormal_lightcolor5_1people+'：' + parseFloat(abnormal_lightcolor5_1day).toFixed(1).toString(), 0, 200);
						ctx_hai.fillText(abnormal_lightcolor5_2people+'：' + parseFloat(abnormal_lightcolor5_2day).toFixed(1).toString(), 0, 300);
						ctx_hai.fillText(abnormal_lightcolor5_3people+'：' + parseFloat(abnormal_lightcolor5_3day).toFixed(1).toString(), 0, 400);
						ctx_hai.fillText(abnormal_lightcolor5_4people+'：' + parseFloat(abnormal_lightcolor5_4day).toFixed(1).toString(), 0, 500);
						ctx_hai.fillText(abnormal_lightcolor5_5people+'：' + parseFloat(abnormal_lightcolor5_5day).toFixed(1).toString(), 0, 600);
					}else{
						ctx_hai.fillText('暂无数据！', 0, 100);
					}
					sprite_hai.material.map.needsUpdate = true;
					showInfo(sprite_hai);
				}
			}
			renderer.render(scene, camera);
		}
		document.addEventListener("mousedown", onClick, false);
	})();
})(document.getElementById("canvasbox"), window);
