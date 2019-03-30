(function (canvasbox, _window) {
	/* 基础 */

	var scene, camera, renderer, particles = [];
	var initCamera;
	var action, action_buzhuan, count_act = 0;
	var taiyang, huo, mu, tu, tian, hai;
	var sprite_sun, sprite_huo, sprite_mu, sprite_tu, sprite_tian, sprite_hai;
	var ctx_sun, ctx_huo, ctx_mu, ctx_tu, ctx_tian, ctx_hai;
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
			var huo_position_x = huo.position.x;
			var huo_position_y = huo.position.y;
			var huo_position_z = huo.position.z;

			var mu_position_x = mu.position.x;
			var mu_position_y = mu.position.y;
			var mu_position_z = mu.position.z;

			var tu_position_x = tu.position.x;
			var tu_position_y = tu.position.y;
			var tu_position_z = tu.position.z;

			var tian_position_x = tian.position.x;
			var tian_position_y = tian.position.y;
			var tian_position_z = tian.position.z;

			var hai_position_x = hai.position.x;
			var hai_position_y = hai.position.y;
			var hai_position_z = hai.position.z;

			count++;
			var model = localStorage.getItem('number');
			localStorage.setItem('number', -1);

			// 火星
			huo_deg = huo_deg + 0.01 >= PI2 ? 0 : huo_deg + 0.01;
			huo.position.set(70 * Math.sin(huo_deg), 0, 70 * Math.cos(huo_deg));
			huo_warn.position.set(70 * Math.sin(huo_deg) + 18, 0, 70 * Math.cos(huo_deg));
			sprite_huo.position.set(70 * Math.sin(huo_deg) + 50, 0, 70 * Math.cos(huo_deg));
			if ((count % 1000) % 2 == 0) {
				greenPoint_huo.intensity = 0;
				greenPoint_huo.position.copy(huo_warn.position);
			}
			else {
				greenPoint_huo.intensity = 4;
				greenPoint_huo.position.copy(huo_warn.position);
			}
			if (model == 0) {
				var material_r1 = new THREE.LineBasicMaterial({ color: 0x00ff00 });
				var geometry_r1 = new THREE.Geometry();
				geometry_r1.vertices.push(new THREE.Vector3(0, 0, 0));
				geometry_r1.vertices.push(new THREE.Vector3(huo_position_x, huo_position_y, huo_position_z));
				var line_r1 = new THREE.Line(geometry_r1, material_r1);
				line_r1.position.y = 0;
				scene.add(line_r1);
				setTimeout(function () {
					scene.remove(line_r1);
				}, 100);
			}
			// 木星
			mu_deg = mu_deg + 0.002 >= PI2 ? 0 : mu_deg + 0.002;
			mu.position.set(100 * Math.sin(mu_deg), 0, 100 * Math.cos(mu_deg));
			mu_warn.position.set(100 * Math.sin(mu_deg) + 18, 0, 100 * Math.cos(mu_deg));
			sprite_mu.position.set(100 * Math.sin(mu_deg) + 50, 0, 100 * Math.cos(mu_deg));
			if (count % 8 == 1 || count % 8 == 2 || count % 8 == 3) {
				greenPoint_huo.intensity = 0;
				greenPoint_huo.position.copy(huo_warn.position);
			}
			else {
				greenPoint_mu.intensity = 4;
				greenPoint_mu.position.copy(mu_warn.position);
			}
			if (model == 1) {
				var material_r1 = new THREE.LineBasicMaterial({ color: 0xff0066 });
				var geometry_r1 = new THREE.Geometry();
				geometry_r1.vertices.push(new THREE.Vector3(0, 0, 0));
				geometry_r1.vertices.push(new THREE.Vector3(mu_position_x, mu_position_y, mu_position_z));
				var line_r1 = new THREE.Line(geometry_r1, material_r1);
				line_r1.position.y = 0;
				scene.add(line_r1);
				setTimeout(function () {
					scene.remove(line_r1);
				}, 100);
			}
			// 土星 人与操作
			tu_deg = tu_deg + 0.0009 >= PI2 ? 0 : tu_deg + 0.0009;
			tu.position.set(140 * Math.sin(tu_deg), 0, 140 * Math.cos(tu_deg));
			tu_warn.position.set(140 * Math.sin(tu_deg) + 18, 0, 140 * Math.cos(tu_deg));
			sprite_tu.position.set(140 * Math.sin(tu_deg) + 50, 0, 140 * Math.cos(tu_deg));
			if (count % 8 == 1 || count % 8 == 2 || count % 8 == 3) {
				greenPoint_huo.intensity = 0;
				greenPoint_huo.position.copy(huo_warn.position);
			}
			else {
				greenPoint_tu.intensity = 4;
				greenPoint_tu.position.copy(tu_warn.position);
			}
			if (model == 2) {
				var material_r1 = new THREE.LineBasicMaterial({ color: 0xffff33 });
				var geometry_r1 = new THREE.Geometry();
				geometry_r1.vertices.push(new THREE.Vector3(0, 0, 0));
				geometry_r1.vertices.push(new THREE.Vector3(tu_position_x, tu_position_y, tu_position_z));
				var line_r1 = new THREE.Line(geometry_r1, material_r1);
				line_r1.position.y = 0;
				scene.add(line_r1);
				setTimeout(function () {
					scene.remove(line_r1);
				}, 100);
			}

			// 天王星 操作与操作
			tian_deg = tian_deg + 0.0005 >= PI2 ? 0 : tian_deg + 0.0005;
			tian.position.set(195 * Math.sin(tian_deg), 0, 195 * Math.cos(tian_deg));
			tian_warn.position.set(195 * Math.sin(tian_deg) + 18, 0, 195 * Math.cos(tian_deg));
			sprite_tian.position.set(195 * Math.sin(tian_deg) + 50, 0, 195 * Math.cos(tian_deg));
			if (count % 8 == 1 || count % 8 == 2 || count % 8 == 3) {
				greenPoint_huo.intensity = 0;
				greenPoint_huo.position.copy(huo_warn.position);
			}
			else {
				greenPoint_tian.intensity = 4;
				greenPoint_tian.position.copy(tian_warn.position);
			}
			if (model == 3) {
				var material_r1 = new THREE.LineBasicMaterial({ color: 0xcc66ff });
				var geometry_r1 = new THREE.Geometry();
				geometry_r1.vertices.push(new THREE.Vector3(0, 0, 0));
				geometry_r1.vertices.push(new THREE.Vector3(tian_position_x, tian_position_y, tian_position_z));
				var line_r1 = new THREE.Line(geometry_r1, material_r1);
				line_r1.position.y = 0;
				scene.add(line_r1);
				setTimeout(function () {
					scene.remove(line_r1);
				}, 100);
			}
			// 海王星 人与人
			hai_deg = hai_deg + 0.0003 >= PI2 ? 0 : hai_deg + 0.0003;
			hai.position.set(250 * Math.sin(hai_deg), 0, 250 * Math.cos(hai_deg));
			hai_warn.position.set(250 * Math.sin(hai_deg) + 18, 0, 250 * Math.cos(hai_deg));
			sprite_hai.position.set(250 * Math.sin(hai_deg) + 50, 0, 250 * Math.cos(hai_deg));
			if (count % 8 == 1 || count % 8 == 2 || count % 8 == 3) {
				greenPoint_huo.intensity = 0;
				greenPoint_huo.position.copy(huo_warn.position);
			}
			else {
				greenPoint_hai.intensity = 4;
				greenPoint_hai.position.copy(hai_warn.position);
			}
			if (model == 4) {
				var material_r1 = new THREE.LineBasicMaterial({ color: 0x3399ff });
				var geometry_r1 = new THREE.Geometry();
				geometry_r1.vertices.push(new THREE.Vector3(0, 0, 0));
				geometry_r1.vertices.push(new THREE.Vector3(hai_position_x, hai_position_y, hai_position_z));
				var line_r1 = new THREE.Line(geometry_r1, material_r1);
				line_r1.position.y = 0;
				scene.add(line_r1);
				setTimeout(function () {
					scene.remove(line_r1);
				}, 100);
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
		var old_timestamp = new Date().getTime();
		var new_timestamp = new Date().getTime();

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

			new_timestamp = new Date().getTime();
			if (new_timestamp - old_timestamp < 500) {
				old_timestamp = new_timestamp;
				if (intersects.length > 0) {
					var currObj = intersects[0].object;
					var datasource = localStorage.getItem('datasource');
                    //datasource = changedatasource(datasource)
					if (true) {
                        if (currObj.name == "huo") {
							var output = localStorage.getItem('planet0_output');
							window.location.href = ('/analyse_lstm_g/?chart=-1&model=' + datasource + '&output=' + output);
						}
						if (currObj.name == "mu") {
							var output = localStorage.getItem('planet1_output');
							window.location.href = ('/analyse_lstm_g/?chart=-1&model=' + datasource + '&output=' + output);
						}
						if (currObj.name == "tu") {
							var output = localStorage.getItem('planet2_output');
							window.location.href = ('/analyse_lstm_g/?chart=-1&model=' + datasource + '&output=' + output);
						}
						if (currObj.name == "tian") {
							var output = localStorage.getItem('planet3_output');
							window.location.href = ('/analyse_lstm_g/?chart=-1&model=' + datasource + '&output=' + output);
						}
						if (currObj.name == "hai") {
							var output = localStorage.getItem('planet4_output');
							window.location.href = ('/analyse_lstm_g/?chart=-1&model=' + datasource + '&output=' + output);
						}
					}
				}
			} else {
				old_timestamp = new_timestamp;
				if (intersects.length > 0) {
					var currObj = intersects[0].object;
					var datasource = localStorage.getItem('datasource');
                    //datasource = changedatasource(datasource)
                    
					if (datasource) {
						if (currObj.name == "huo") {
							var name = localStorage.getItem('planet0_output');
							var time = localStorage.getItem('planet0_time');
							ctx_huo.clearRect(0, 0, 1024, 512);
							if (name) {
								ctx_huo.fillText('class: ' + name, 0, 100);
								ctx_huo.fillText('time：' + time, 0, 200)
							} else {
								ctx_huo.fillText('暂无数据！', 0, 100);
							}
							sprite_huo.material.map.needsUpdate = true;
							showInfo(sprite_huo);
						}
						if (currObj.name == "mu") {
							var name = localStorage.getItem('planet1_output');
							var time = localStorage.getItem('planet1_time');							ctx_mu.clearRect(0, 0, 1024, 512);
							if (name) {
								ctx_mu.fillText('class: ' + name, 0, 100);
								ctx_mu.fillText('time：' + time, 0, 200)
							} else {
								ctx_mu.fillText('暂无数据！', 0, 100);
							}
							sprite_mu.material.map.needsUpdate = true;
							showInfo(sprite_mu);
						}
						if (currObj.name == "tu") {
							var name = localStorage.getItem('planet2_output');
							var time = localStorage.getItem('planet2_time');							ctx_tu.clearRect(0, 0, 1024, 512);
							if (name) {
								ctx_tu.fillText('class: ' + name, 0, 100);
								ctx_tu.fillText('time：' + time, 0, 200)
							} else {
								ctx_tu.fillText('暂无数据！', 0, 100);
							}
							sprite_tu.material.map.needsUpdate = true;
							showInfo(sprite_tu);
						}
						if (currObj.name == "tian") {
							var name = localStorage.getItem('planet3_output');
							var time = localStorage.getItem('planet3_time');							ctx_tian.clearRect(0, 0, 1024, 512);
							if (name) {
								ctx_tian.fillText('class: ' + name, 0, 100);
								ctx_tian.fillText('time：' + time, 0, 200)
							} else {
								ctx_tian.fillText('暂无数据！', 0, 100);
							}
							sprite_tian.material.map.needsUpdate = true;
							showInfo(sprite_tian);
						}
						if (currObj.name == "hai") {
							var name = localStorage.getItem('planet4_output');
							var time = localStorage.getItem('planet4_time');							ctx_hai.clearRect(0, 0, 1024, 512);
							if (name) {
								ctx_hai.fillText('class: ' + name, 0, 100);
								ctx_hai.fillText('time：' + time, 0, 200)
							} else {
								ctx_hai.fillText('暂无数据！', 0, 100);
							}
							sprite_hai.material.map.needsUpdate = true;
							showInfo(sprite_hai);
						}
					}
				}
			}
			renderer.render(scene, camera);
		}
		document.addEventListener("mousedown", onClick, false);
	})();
})(document.getElementById("canvasbox"), window);

    function changedatasource(ds) {
        var datasource = "KDDcup";
        if ((ds.search('kddtrain') != -1) || (ds.search('KDDcup') != -1)) {
            datasource = "KDDcup";
        }
        else {
            datasource = "default";
        }
        return datasource;
    }
